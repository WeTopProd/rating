from django.urls import path


from .views import ResumeViewSet

urlpatterns = [
    path('resume/', ResumeViewSet, name='resume'),
]
