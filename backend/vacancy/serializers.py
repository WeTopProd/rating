from rest_framework import serializers, validators

from .models import Vacancy, Favorite


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
            'company_name',
            'requirements',
            'conditions',
            'start_salary',
            'final_salary',
            'start_experience',
            'final_experience',
            'employment_type',
            'schedule',
            'logo'
        )


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
