import django_filters
from ..models import Funcionarios



class FiltroFuncionarioPorNomeESn(django_filters.FilterSet):
    nome = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Funcionarios
        fields = ['nome', 'sn']

# class FiltroDisciplinas(django_filters.FilterSet):
#     codigo = django_filters.CharFilter(lookup_expr="icontains")

#     class Meta:
#         model = Disciplinas
#         fields = ['codigo']