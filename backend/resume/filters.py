from django_filters import rest_framework as filters

from .models import Resume


class ResumeFilter(filters.FilterSet):
    city = filters.CharFilter(
        lookup_expr='icontains',
        field_name='city'
    )
    education = filters.CharFilter(
        lookup_expr='exact',
        field_name='education'
    )
    start_salary = filters.NumberFilter(
        field_name='startSalary',
        lookup_expr='gte',
    )
    final_salary = filters.NumberFilter(
        field_name='endSalary',
        lookup_expr='gte'
    )
    is_favorited = filters.BooleanFilter(method='get_is_favorited')

    class Meta:
        model = Resume
        fields = (
            'city',
            'education',
            'start_salary',
            'final_salary',
            'is_favorited',
        )

    def get_is_favorited(self, queryset, name, value):
        if self.request.user.is_authenticated and value is True:
            return queryset.filter(users_favorites_resume__user=self.request.user)
        return queryset
