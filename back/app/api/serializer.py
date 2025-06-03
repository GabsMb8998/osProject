from rest_framework import serializers
from django.contrib.auth.models import User
from ..models import Patrimonios, Ambientes, Area, OrdemDeServico, Funcionarios

class PatrimoniosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patrimonios
        fields = '__all__'

class AmbientesSerializer (serializers.ModelSerializer):
    responsavel_nome = serializers.CharField(source='responsavel.nome', read_only=True)

    class Meta:
        model = Ambientes
        fields = '__all__'

class FuncionariosSerializer (serializers.ModelSerializer):
    area_nome = serializers.CharField(source='area.nome', read_only=True)
    
    class Meta:
        model = Funcionarios
        fields = '__all__'

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = '__all__'

class OrdemServicoSerializer (serializers.ModelSerializer):
    class Meta:
        model = OrdemDeServico
        fields = '__all__'

class CsvSerializer (serializers.Serializer):
    file = serializers.FileField()