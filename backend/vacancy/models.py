from django.db import models


class Vacancy(models.Model):
    user = models.ForeignKey(
        'users.User',
        verbose_name='Пользователь',
        related_name='job_user',
        on_delete=models.CASCADE
    )
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
    start_experience = models.FloatField('Опыт от')
    final_experience = models.FloatField('Опыт до')
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

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'
        ordering = ('company_name',)

    def __str__(self):
        return self.job_title
