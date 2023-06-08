from django.urls import include, path

from rest_framework import routers

from .views import VacancyViewSet, FavoriteView

router = routers.DefaultRouter()
router.register('vacancy', VacancyViewSet, basename='vacancy')

urlpatterns = [
    path('', include(router.urls)),
    path('vacancy/<int:favorite_id>/favorite/', FavoriteView.as_view()),
]
