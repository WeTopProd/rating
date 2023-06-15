# Generated by Django 3.2 on 2023-06-15 15:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(max_length=255, verbose_name='Город')),
                ('job_title', models.CharField(max_length=300, verbose_name='Название вакансии')),
                ('company_name', models.CharField(max_length=300, verbose_name='Название компании')),
                ('about_company', models.TextField(max_length=5000, verbose_name='О компании')),
                ('requirements', models.TextField(max_length=5000, verbose_name='Требования')),
                ('conditions', models.TextField(max_length=5000, verbose_name='Условия')),
                ('start_salary', models.IntegerField(verbose_name='Зарплата от')),
                ('final_salary', models.IntegerField(verbose_name='Зарплата до')),
                ('start_experience', models.IntegerField(verbose_name='Опыт от')),
                ('final_experience', models.IntegerField(verbose_name='Опыт до')),
                ('application_type', models.CharField(max_length=100, verbose_name='Тип оформления')),
                ('employment_type', models.CharField(max_length=100, verbose_name='Тип занятости')),
                ('schedule', models.CharField(max_length=200, verbose_name='График работы')),
                ('logo', models.ImageField(upload_to='backend_media/logo_company/', verbose_name='Логотип компании')),
                ('is_active', models.BooleanField(default=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='job_user', to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Вакансия',
                'verbose_name_plural': 'Вакансии',
                'ordering': ('company_name',),
            },
        ),
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorites', to=settings.AUTH_USER_MODEL)),
                ('vacancy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users_favorites', to='vacancy.vacancy')),
            ],
            options={
                'verbose_name': 'Избранное',
                'verbose_name_plural': 'Избранные',
            },
        ),
        migrations.AddConstraint(
            model_name='favorite',
            constraint=models.UniqueConstraint(fields=('vacancy', 'user'), name='favorite_unique'),
        ),
    ]
