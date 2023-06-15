from django.db import models


class Vacancy(models.Model):
    user = models.ForeignKey(
        'users.User',
        verbose_name='Пользователь',
        related_name='job_user',
        on_delete=models.CASCADE
    )
    city = models.CharField('Город', max_length=255)
    job_title = models.CharField(
        'Название вакансии',
        max_length=300
    )
    company_name = models.CharField(
        'Название компании',
        max_length=300
    )
    about_company = models.TextField(
        'О компании',
        max_length=5000
    )
    requirements = models.TextField(
        'Требования',
        max_length=5000
    )
    conditions = models.TextField(
        'Условия',
        max_length=5000
    )
    start_salary = models.IntegerField('Зарплата от')
    final_salary = models.IntegerField('Зарплата до')
    start_experience = models.IntegerField('Опыт от')
    final_experience = models.IntegerField('Опыт до')
    application_type = models.CharField(
        'Тип оформления',
        max_length=100
    )

    employment_type = models.CharField(
        'Тип занятости',
        max_length=100
    )
    schedule = models.CharField(
        'График работы',
        max_length=200
    )
    logo = models.ImageField(
        'Логотип компании',
        upload_to='backend_media/logo_company/',
    )
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'
        ordering = ('company_name',)

    def __str__(self):
        return self.job_title


class Favorite(models.Model):
    user = models.ForeignKey(
        'users.User',
        related_name='favorites',
        on_delete=models.CASCADE
    )
    vacancy = models.ForeignKey(
        Vacancy,
        related_name='users_favorites',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Избранное'
        verbose_name_plural = 'Избранные'
        constraints = [
            models.UniqueConstraint(
                fields=['vacancy', 'user'],
                name='favorite_unique'
            )
        ]

    def __str__(self):
        return f'{self.user} added {self.vacancy} to favorite'
