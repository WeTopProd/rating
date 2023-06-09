from django.shortcuts import get_object_or_404
from rest_framework import status, views, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

from .models import Vacancy, Favorite
from .serializers import VacancySerializer, FavoriteSerializer
from .permissions import IsOwnerOrReadOnly
from .filters import VacancyFilter


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = (IsOwnerOrReadOnly, )
    filter_backends = (DjangoFilterBackend,)
    filterset_class = VacancyFilter

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


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
