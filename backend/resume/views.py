from rest_framework import viewsets

from .models import Resume
from .serializers import ResumeSerializer
from users.permissions import IsOwnerOrReadOnly


class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    permission_classes = (IsOwnerOrReadOnly, )
