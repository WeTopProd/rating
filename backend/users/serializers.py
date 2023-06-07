from djoser.serializers import UserCreateSerializer, UserSerializer
from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers


class UserCreateSerializer(UserCreateSerializer):
    phone = PhoneNumberField()

    class Meta(UserCreateSerializer.Meta):
        fields = (
            'user_type',
            'email',
            'first_name',
            'last_name',
            'phone',
            'password',
            're_password',
            'resume',
            'vacancy'
        )


class UserSerializer(UserSerializer):
    phone = PhoneNumberField()

    class Meta(UserSerializer.Meta):
        ref_name = 'CustomUserSerializer'
        fields = (
            'id',
            'email',
            'first_name',
            'last_name',
            'phone'
        )


class PhoneNumberSerializerField(PhoneNumberField):
    def to_representation(self, value):
        return super().to_representation(str(value))

    def to_internal_value(self, data):
        try:
            parsed_data = super().to_internal_value(data)
        except serializers.ValidationError as e:
            raise serializers.ValidationError({'phone': e.detail[0]})

        return parsed_data
