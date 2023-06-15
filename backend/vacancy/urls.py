from django.urls import include, path

from rest_framework import routers

from .views import VacancyViewSet, FavoriteView

router = routers.DefaultRouter()
router.register('vacancy', VacancyViewSet, basename='vacancy')

urlpatterns = [
    path('', include(router.urls)),
    path(
        'vacancy/<int:pk>/activate/',
        VacancyViewSet.as_view({'post': 'activate'}),
        name='vacancy-activate'
    ),
    path(
        'vacancy/<int:pk>/deactivate/',
        VacancyViewSet.as_view({'post': 'deactivate'}),
        name='vacancy-deactivate'
    ),
    path('vacancy/<int:favorite_id>/favorite/', FavoriteView.as_view()),
]
