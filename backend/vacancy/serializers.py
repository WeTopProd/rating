from django.shortcuts import get_object_or_404
from rest_framework import serializers, validators

from resume.models import Resume
from resume.serializers import ShortResumeSerializer

from .models import Favorite, JobPosting, Vacancy

<<<<<<< HEAD
from resume.serializers import ResumeSerializer
from resume.models import Resume

=======
>>>>>>> 00c7a398ac24ac2b41c3305d263c718cc2886185

class VacancySerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(),
        read_only=True
    )
    is_favorited = serializers.SerializerMethodField()

    class Meta:
        model = Vacancy
        fields = (
            'id',
            'user',
            'job_title',
            'city',
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
            'is_favorited',
            'is_active'
        )

    def in_list(self, obj, model):
        request = self.context.get('request')
        if request is None or request.user.is_anonymous:
            return False
        return model.objects.filter(user=request.user, vacancy=obj).exists()

    def get_is_favorited(self, obj):
        return self.in_list(obj, Favorite)


class ShortVacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = Vacancy
        fields = (
            'id',
            'job_title',
            'city',
            'company_name',
            'requirements',
            'conditions',
            'start_salary',
            'final_salary',
            'start_experience',
            'final_experience',
            'employment_type',
            'schedule',
            'logo',
            'is_active'
        )


class JobPostingSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    vacancy = serializers.StringRelatedField()
    resume = ResumeSerializer(required=False)
    resume_id = serializers.IntegerField()

    class Meta:
        model = JobPosting
        fields = (
            'id',
            'user',
            'vacancy',
            'cover_letter',
            'resume',
            'resume_id',
            'applied_at'
        )

    def to_representation(self, instance):
        data = super().to_representation(instance)
        resume_data = ResumeSerializer(instance.resume).data
        data['resume'] = resume_data
        return data

    def create(self, validated_data):
        resume_id = validated_data.pop('resume_id', None)
        instance = super().create(validated_data)
        if resume_id:
            resume = get_object_or_404(Resume, pk=resume_id)
            instance.resume = resume
            instance.save()
        return instance


class FavoriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Favorite
        fields = (
            'user',
            'vacancy'
        )
        validators = [
            validators.UniqueTogetherValidator(
                queryset=Favorite.objects.all(),
                fields=('user', 'vacancy'),
                message='Вакансия уже добавлена в избранное'
            )
        ]

    def to_representation(self, instance):
        request = self.context['request']
        return ShortVacancySerializer(
            instance.vacancy,
            context={'request': request}
        ).data
