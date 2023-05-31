from django.db import models


class Job(models.Model):
    type_contract = models.BooleanField()
    type_