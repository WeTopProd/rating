from django.contrib import admin

from .models import Vacancy


class UserAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'user',
        'job_title',
        'company_name',
        'logo'
    )
    ordering = ('-job_title', )
    search_fields = ('job_title', 'company_name', 'user')
    list_filter = ('job_title', 'company_name')


admin.site.register(Vacancy, UserAdmin)
