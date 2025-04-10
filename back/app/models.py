from django.db import models
from rest_framework.fields import DateTimeField

class OrdemDeServico (models.Model):
    descricao = models.CharField(max_length=200)
    abertura = DateTimeField()
    fechamento = DateTimeField()