from django.contrib.auth import authenticate
from django.core.mail import send_mail, EmailMessage
from django.utils.decorators import method_decorator
from django.utils.translation import gettext_lazy as _
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .backends import PhoneBackend


@method_decorator(csrf_exempt, name='dispatch')
class TokenCreateByPhoneView(APIView):
    def post(self, request):
        phone = request.data.get('phone')
        password = request.data.get('password')

        if phone is None or password is None:
            return Response(
                {'message': _('Телефон и пароль являются '
                              'обязательными полями')},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(
            request,
            phone=phone,
            password=password,
            backend=PhoneBackend()
        )

        if not user:
            return Response({'message': _('Неверный телефон или пароль.')},
                            status=status.HTTP_401_UNAUTHORIZED)

        token, created = Token.objects.get_or_create(user=user)

        return Response({'auth_token': token.key})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_email(request):
    user = request.user
    description = request.data.get('description', '')
    first_name = user.first_name
    last_name = user.last_name
    phone = user.phone
    email_user = user.email
    if not description:
        return Response({'error': 'Отсутствует "description" в запросе'},
                        status=status.HTTP_400_BAD_REQUEST)

    if 'file' in request.FILES:
        file = request.FILES['file']
        message = (f"Заявка на возврат от {last_name} {first_name}\n"
                   f"Номер телефона: {phone}\nПочта: {email_user}\n\n"
                   f"Сообщение от пользователя:\n{description}\nФайлы: {file}")
        email = EmailMessage(
            f"Заявка на возврат от {last_name} {first_name}",
            message,
            'rating@frantsuz.ru',
            ['rating@frantsuz.ru'],
            reply_to=[email_user],
        )
        email.attach(file.name, file.read(), file.content_type)
        email.send()
    else:
        message = (f"Заявка на возврат от {last_name} {first_name}\n"
                   f"Номер телефона: {phone}\nПочта: {email_user}\n\n"
                   f"Сообщение от пользователя:\n{description}")
        send_mail(
            f"Заявка на возврат от {last_name} {first_name}",
            message,
            'rating@frantsuz.ru',
            ['rating@frantsuz.ru'],
            fail_silently=False,
        )

    return Response({'success': 'Сообщение успешно отправлено'})
