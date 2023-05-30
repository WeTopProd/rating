from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers

from .models import Resume


class ResumeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resume
        fields = '__all__'


class PhoneNumberSerializerField(PhoneNumberField):
    def to_representation(self, value):
        return super().to_representation(str(value))

    def to_internal_value(self, data):
        try:
            parsed_data = super().to_internal_value(data)
        except serializers.ValidationError as e:
            raise serializers.ValidationError({'phone': e.detail[0]})

        return parsed_data
