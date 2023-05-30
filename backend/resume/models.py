from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from users.validators import validate_phone_number


class Resume(models.Model):
    EDUCATIONS = (
        ('secondary_edu', 'Среднее'),
        ('secondary_special_edu', 'Среднее специальное'),
        ('incomplete_higher_edu', 'Неоконченное высшее'),
        ('higher_edu', 'Высшее'),
        ('bachelor_edu', 'Бакалавр'),
        ('master_edu', 'Магистр'),
        ('candidate_science_edu', 'Кандидат наук'),
        ('doctor_science_edu', 'Доктор наук')
    )
    full_name = models.CharField(max_length=255)
    PhoneNumber = PhoneNumberField(
        verbose_name='Телефон',
        unique=True,
        error_messages={
            'unique': 'Пользователь с таким номером телефона уже существует.',
        },
        validators=[validate_phone_number]
    )
    data = models.IntegerField(
        verbose_name='Возраст',
    )
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    education = models.CharField(
        max_length=50,
        choices=EDUCATIONS,
        default='secondary_edu'
    )
    AddEducation = models.CharField(
        max_length=50,
        choices=EDUCATIONS,
        default='secondary_edu'
    )
    placeWork = models.CharField(
        max_length=500
    )
    postWork = models.CharField(
        verbose_name='Должность',
        max_length=500
    )
    DataStart = models.DateTimeField(verbose_name='Дата начала')
    DataEnd = models.DateTimeField(verbose_name='Дата окончания')
    About = models.CharField(verbose_name='О себе', max_length=500)
    skills = models.CharField(verbose_name='Ключевые навыки', max_length=500)
    startSalary = models.IntegerField(verbose_name='Зарплата от')
    endSalary = models.IntegerField(verbose_name='Зарплата до')
    foto = models.ImageField(
        upload_to='backend_media/photo',
        verbose_name='Изображение'
    )
    recommendation = models.FileField(
        'Файл рекомендации',
        upload_to='backend_media/recommendation/',
        blank=True
    )
    certificate = models.FileField(
        'Файл сертификата',
        upload_to='backend_media/certificate/',
        blank=True
    )
