from django.db import models
from users.models import CustomUser

User = CustomUser


class Chat(models.Model):
    participants = models.ManyToManyField(
        User,
        related_name='chat_participants',
        db_table='chat_participants',
        verbose_name='Участники чата'
    )


class Message(models.Model):
    chat = models.ForeignKey(
        Chat,
        related_name='messages',
        on_delete=models.CASCADE,
        verbose_name='Название чата'
    )
    sender = models.ForeignKey(
        User,
        related_name='sent_messages',
        on_delete=models.CASCADE,
        verbose_name='Отправитель'
    )
    content = models.TextField(verbose_name='Сообщение')
    timestamp = models.DateTimeField(
        verbose_name='Время отправки сообщения',
        auto_now_add=True
    )

    class Meta:
        verbose_name = 'Чат'
        verbose_name_plural = 'Чаты'

    def __str__(self):
        return self.chat
