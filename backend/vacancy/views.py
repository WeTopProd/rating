from rest_framework import viewsets

from .models import Vacancy
from .serializers import VacancySerializer
from .permissions import IsOwnerOrReadOnly


class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = (IsOwnerOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
