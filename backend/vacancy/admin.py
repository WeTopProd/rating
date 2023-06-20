from django.contrib import admin

from .models import Vacancy, JobPosting


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


class JobPostingAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'user',
        'vacancy',
        'cover_letter',
        'resume',
        'applied_at'
    )
    ordering = ('-user', )
    search_fields = ('cover_letter', 'vacancy', 'resume')
    list_filter = ('resume', 'applied_at')


admin.site.register(Vacancy, UserAdmin)
admin.site.register(JobPosting, JobPostingAdmin)