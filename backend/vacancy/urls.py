from django.urls import include, path

from rest_framework import routers

from .views import VacancyViewSet

router = routers.DefaultRouter()
router.register('vacancy', VacancyViewSet, basename='vacancy')

urlpatterns = [
    path('', include(router.urls)),
]
