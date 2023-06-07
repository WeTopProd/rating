from django.urls import include, path

from rest_framework import routers

from .views import ResumeViewSet

router = routers.DefaultRouter()
router.register('resume', ResumeViewSet, basename='resume')

urlpatterns = [
    path('', include(router.urls)),
]
