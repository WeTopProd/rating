from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.core.validators import validate_email
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from .managers import UserManager
from .validators import validate_phone_number
from resume.models import Resume
from vacancy.models import Vacancy


class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = (
        ('employer', 'Работодатель'),
        ('job_seeker', 'Соискатель'),
    )

    email = models.EmailField(
        db_index=True,
        max_length=254,
        unique=True,
        verbose_name='Почта',
        error_messages={
            'unique': 'Пользователь с таким почтовым ящиком уже существует.',
        },
        validators=[validate_email],
    )
    phone = PhoneNumberField(
        verbose_name='Телефон',
        unique=True,
        error_messages={
            'unique': 'Пользователь с таким номером телефона уже существует.',
        },
        validators=[validate_phone_number]
    )
    first_name = models.CharField(
        max_length=50,
        verbose_name='Имя'
    )
    last_name = models.CharField(
        max_length=50,
        verbose_name='Фамилия'
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    user_type = models.CharField(
        verbose_name='Тип пользователя',
        max_length=15,
        choices=USER_TYPES
    )

    resume = models.ForeignKey(
        Resume,
        verbose_name='Резюме',
        related_name='user_resumes',
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    vacancy = models.ForeignKey(
        Vacancy,
        verbose_name='Вакансия',
        related_name='user_vacancy',
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    chats = models.ManyToManyField(
        'chat.Chat',
        related_name='chat_participants',
        db_table='user_chats_user',
        blank=True
    )

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_type', 'first_name', 'last_name', 'phone']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ('email',)

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        if self.user_type == 'job_seeker':
            self.vacancy = None

        super().save(*args, **kwargs)


CustomUser = User
