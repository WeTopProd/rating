from django_filters import rest_framework as filters

from .models import Vacancy


class VacancyFilter(filters.FilterSet):
    job_title = filters.CharFilter(
        lookup_expr='icontains',
        field_name='job_title'
    )
    company_name = filters.CharFilter(
        lookup_expr='icontains',
        field_name='company_name'
    )
    start_salary = filters.NumberFilter(
        field_name='start_salary',
        lookup_expr='gte',
    )
    final_salary = filters.NumberFilter(
        field_name='final_salary',
        lookup_expr='lte'
    )
    start_experience = filters.NumberFilter(
        field_name='start_experience',
        lookup_expr='gte'
    )
    final_experience = filters.NumberFilter(
        field_name='final_experience',
        lookup_expr='lte'
    )
    is_favorited = filters.BooleanFilter(method='get_is_favorited')

    class Meta:
        model = Vacancy
        fields = (
            'job_title',
            'company_name',
            'start_salary',
            'final_salary',
            'start_experience',
            'final_experience',
            'is_favorited',
        )

    def get_is_favorited(self, queryset, name, value):
        if self.request.user.is_authenticated and value is True:
            return queryset.filter(users_favorites__user=self.request.user)
        return queryset
