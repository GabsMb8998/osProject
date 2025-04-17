from django.db import models
from rest_framework.fields import DateTimeField


class Gestores(models.Model):
    sn = models.CharField(max_length=20, unique=True)
    nome = models.CharField(max_length=50)
    Cargo = models.CharField(max_length=20)

class Patrimonios(models.Model):
    ni = models.CharField(max_length=30, unique=True)
    descricao = models.CharField(max_length=200)
    localizacao = models.CharField(max_length=50)

class Ambientes(models.Model):
    sig = models.IntegerField(unique=True) #identificacao do ambiente
    sn = models.CharField(max_length=20, unique=True) #identificacao do funcionario
    reponsavel = models.CharField(max_length=40)
    descricao = models.CharField(max_length=200)

class Area(models.Model):
    nome = models.CharField(max_length=30)

class Manutentores(models.Model):
    sn = models.CharField(max_length=30, unique=True)
    nome = models.CharField(max_length=50)
    email = models.CharField(max_length=30)
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    destor = models.ForeignKey(Gestores, on_delete=models.CASCADE)

class OrdemDeServico(models.Model):
    sn = models.CharField(max_length=20, unique=True)
    descricao = models.CharField(max_length=200)
    abertura = DateTimeField()
    fechamento = DateTimeField()
    status = models.CharField(max_length=40)
    patrimonio = models.ForeignKey(Patrimonios, on_delete=models.CASCADE, null=True, blank=True)
    ambiente = models.ForeignKey(Ambientes, on_delete=models.CASCADE)
    manutentor = models.ForeignKey(Manutentores, on_delete=models.CASCADE) 
    prioridade = models.CharField(max_length=20)
    funcionario = models.CharField(max_length=40)








