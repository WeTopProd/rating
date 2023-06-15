from django.contrib import admin

from .models import Resume


class ResumeAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'user',
        'FullName',
        'PhoneNumber',
        'data',
        'city',
        'education',
        'startSalary',
        'endSalary',
        'is_active'
    )
    ordering = ('FullName', )
    search_fields = ('PhoneNumber', 'city', 'education')
    list_filter = ('startSalary', 'city')


admin.site.register(Resume, ResumeAdmin)
