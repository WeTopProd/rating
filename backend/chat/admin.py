from django.contrib import admin

from .models import Message


class ChatAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'chat',
        'sender',
        'content',
        'timestamp'
    )
    ordering = ('pk', )
    search_fields = ('chat', 'sender', 'content')
    list_filter = ('timestamp', 'chat', 'sender')


admin.site.register(Message, ChatAdmin)
