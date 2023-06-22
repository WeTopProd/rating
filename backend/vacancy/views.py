from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, views, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.validators import ValidationError

from resume.models import Resume

from .filters import VacancyFilter
from .models import Favorite, JobPosting, Vacancy
from .permissions import IsOwnerOrReadOnly
from .serializers import (FavoriteSerializer, JobPostingSerializer,
                          VacancySerializer)


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = (IsOwnerOrReadOnly, )
    filter_backends = (DjangoFilterBackend,)
    filterset_class = VacancyFilter

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['get'], permission_classes=[IsAuthenticated])
    def get_job_posting(self, request, pk):
        job_postings = JobPosting.objects.filter(vacancy=pk)
        serializer = JobPostingSerializer(job_postings, many=True)
        return Response(serializer.data)

    @action(
        detail=True,
        methods=['post'],
        permission_classes=[IsAuthenticated]
    )
    def add_job_posting(self, request, pk):
        vacancy = self.get_object()
        resume_id = request.data.get('resume_id')
        if resume_id is None:
            raise ValidationError('Поле "resume_id" не найдено!')
        resume = get_object_or_404(Resume, pk=resume_id)
        serializer = JobPostingSerializer(data=request.data)
        if JobPosting.objects.filter(
                resume=resume, vacancy=vacancy
        ).exists():
            raise ValidationError({'status': False})
        if serializer.is_valid():
            serializer.save(user=request.user, vacancy=vacancy, resume=resume)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def activate(self, request, pk=None):
        vacancy = self.get_object()
        vacancy.is_active = True
        vacancy.save()
        return Response({'status': 'activated'})

    @action(detail=True, methods=['post'])
    def deactivate(self, request, pk=None):
        vacancy = self.get_object()
        vacancy.is_active = False
        vacancy.save()
        return Response({'status': 'deactivated'})


class FavoriteView(views.APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, favorite_id):
        user = request.user
        data = {
            'vacancy': favorite_id,
            'user': user.id
        }
        serializer = FavoriteSerializer(
            data=data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, favorite_id):
        user = request.user
        vacancy = get_object_or_404(Vacancy, id=favorite_id)
        Favorite.objects.filter(user=user, vacancy=vacancy).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
