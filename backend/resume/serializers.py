from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers

from .models import Resume


class ResumeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(),
        read_only=True
    )

    class Meta:
        model = Resume
        fields = (
            'id',
            'user',
            'FullName',
            'PhoneNumber',
            'data',
            'city',
            'address',
            'education',
            'AddEducation',
            'placeWork',
            'postWork',
            'busyness',
            'DataStart',
            'DataEnd',
            'experience',
            'About',
            'skills',
            'startSalary',
            'endSalary',
            'foto',
            'recommendation',
            'certificate'
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
