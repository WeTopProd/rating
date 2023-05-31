from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from users.validators import validate_phone_number


class Resume(models.Model):
    user = models.OneToOneField(
        'users.User',
        verbose_name='Пользователь',
        related_name='resume_user',
        on_delete=models.CASCADE
    )
    FullName = models.CharField('Ф.И.О.', max_length=255)
    PhoneNumber = PhoneNumberField(
        'Телефон',
        validators=[validate_phone_number]
    )
    data = models.IntegerField(
        'Возраст',
    )
    city = models.CharField('Город', max_length=255)
    address = models.CharField('Адрес', max_length=500)
    education = models.CharField(
        'Образование',
        max_length=50,
        default='Среднее'
    )
    AddEducation = models.CharField(
        'Доп. образование',
        max_length=50,
        default='Среднее',
        blank=True,
        null=True
    )
    placeWork = models.CharField(
        'Прошлое место работы',
        max_length=500
    )
    postWork = models.CharField(
        'Должность',
        max_length=500
    )
    DataStart = models.DateField('Дата начала')
    DataEnd = models.DateField('Дата окончания')
    About = models.CharField('О себе', max_length=500)
    skills = models.CharField('Ключевые навыки', max_length=500)
    startSalary = models.IntegerField('Зарплата от')
    endSalary = models.IntegerField('Зарплата до')
    foto = models.ImageField(
        'Изображение',
        upload_to='backend_media/photo/',
        default='Applicant.jpg',
        blank=True,
        null=True
    )
    recommendation = models.FileField(
        'Файл рекомендации',
        upload_to='backend_media/recommendation/',
        blank=True,
        null=True
    )
    certificate = models.FileField(
        'Файл сертификата',
        upload_to='backend_media/certificate/',
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = 'Резюме'
        ordering = ('PhoneNumber',)

    def __str__(self):
        return self.FullName
