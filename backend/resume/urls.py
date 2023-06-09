from django.urls import include, path

from rest_framework import routers

from .views import ResumeViewSet, FavoriteView

router = routers.DefaultRouter()
router.register('resume', ResumeViewSet, basename='resume')

urlpatterns = [
    path('', include(router.urls)),
    path('resume/<int:favorite_id>/favorite/', FavoriteView.as_view()),
]
