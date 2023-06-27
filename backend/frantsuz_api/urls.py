from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('api/', include('users.urls')),
    path('api/', include('resume.urls')),
    path('api/', include('vacancy.urls')),
    path('admin/', admin.site.urls),
]


urlpatterns = (
    urlpatterns
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
)
