from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers, validators

from .models import Favorite, Resume


class ResumeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(),
        read_only=True
    )
    is_favorited = serializers.SerializerMethodField()

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
            'certificate',
            'is_active',
            'is_favorited'
        )

    def in_list(self, obj, model):
        request = self.context.get('request')
        if request is None or request.user.is_anonymous:
            return False
        return model.objects.filter(user=request.user, resume=obj).exists()

    def get_is_favorited(self, obj):
        return self.in_list(obj, Favorite)


class ShortResumeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resume
        fields = (
            'id',
            'FullName',
            'PhoneNumber',
            'data',
            'city',
            'address',
            'education',
            'experience',
            'startSalary',
            'endSalary',
            'foto',
            'is_active'
        )


class FavoriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Favorite
        fields = (
            'user',
            'resume'
        )
        validators = [
            validators.UniqueTogetherValidator(
                queryset=Favorite.objects.all(),
                fields=('user', 'resume'),
                message='Резюме уже добавлено в избранное'
            )
        ]

    def to_representation(self, instance):
        request = self.context['request']
        return ShortResumeSerializer(
            instance.resume,
            context={'request': request}
        ).data


class PhoneNumberSerializerField(PhoneNumberField):
    def to_representation(self, value):
        return super().to_representation(str(value))

    def to_internal_value(self, data):
        try:
            parsed_data = super().to_internal_value(data)
        except serializers.ValidationError as e:
            raise serializers.ValidationError({'phone': e.detail[0]})

        return parsed_data
