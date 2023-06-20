# Generated by Django 3.2 on 2023-06-20 11:24

from django.db import migrations, models
import phonenumber_field.modelfields
import users.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Избранное',
                'verbose_name_plural': 'Избранные',
            },
        ),
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FullName', models.CharField(max_length=255, verbose_name='Ф.И.О.')),
                ('PhoneNumber', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, validators=[users.validators.validate_phone_number], verbose_name='Телефон')),
                ('data', models.IntegerField(verbose_name='Возраст')),
                ('city', models.CharField(max_length=255, verbose_name='Город')),
                ('address', models.CharField(max_length=500, verbose_name='Адрес')),
                ('education', models.CharField(default='Среднее', max_length=50, verbose_name='Образование')),
                ('AddEducation', models.CharField(blank=True, default='Среднее', max_length=50, null=True, verbose_name='Доп. образование')),
                ('placeWork', models.CharField(max_length=500, verbose_name='Прошлое место работы')),
                ('postWork', models.CharField(max_length=500, verbose_name='Должность')),
                ('busyness', models.CharField(max_length=300)),
                ('DataStart', models.DateField(verbose_name='Дата начала')),
                ('DataEnd', models.DateField(verbose_name='Дата окончания')),
                ('experience', models.FloatField(verbose_name='Опыт работы')),
                ('About', models.CharField(max_length=2000, verbose_name='О себе')),
                ('skills', models.CharField(max_length=500, verbose_name='Ключевые навыки')),
                ('startSalary', models.IntegerField(verbose_name='Зарплата от')),
                ('endSalary', models.IntegerField(verbose_name='Зарплата до')),
                ('foto', models.ImageField(blank=True, default='Applicant.jpg', null=True, upload_to='backend_media/photo/', verbose_name='Изображение')),
                ('recommendation', models.FileField(blank=True, null=True, upload_to='backend_media/recommendation/', verbose_name='Файл рекомендации')),
                ('certificate', models.FileField(blank=True, null=True, upload_to='backend_media/certificate/', verbose_name='Файл сертификата')),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Резюме',
                'verbose_name_plural': 'Резюме',
                'ordering': ('PhoneNumber',),
            },
        ),
    ]
