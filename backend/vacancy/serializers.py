from rest_framework import serializers

from .models import Vacancy


class VacancySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(),
        read_only=True
    )

    class Meta:
        model = Vacancy
        fields = (
            'id',
            'user',
            'job_title',
            'company_name',
            'about_company',
            'requirements',
            'conditions',
            'start_salary',
            'final_salary',
            'start_experience',
            'final_experience',
            'application_type',
            'employment_type',
            'schedule',
            'logo',
        )
