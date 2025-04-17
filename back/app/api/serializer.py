from rest_framework import serializers
from django.contrib.auth.models import User
from ..models import Gestores, Patrimonios, Ambientes, Manutentores, Area, OrdemDeServico

class GestoresSerializer (serializers.ModelSerializer):
    class Meta:
        model = Gestores
        fields = '__all__'

class PatrimoniosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patrimonios
        fields = '__all__'

class AmbientesSerializer (serializers.ModelSerializer):
    class Meta:
        model = Ambientes
        fields = '__all__'

class ManutentoresSerializer (serializers.ModelSerializer):
    class Meta:
        model = Manutentores
        fields = '__all__'

class AreaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = '__all__'

class OrdemServicoSerializer (serializers.ModelSerializer):
    class Meta:
        model = OrdemDeServico
        fields = '__all__'