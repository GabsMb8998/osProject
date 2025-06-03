from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.parsers import MultiPartParser, FormParser


import io
import pandas as pd

from ..models import Patrimonios, Ambientes, Area, OrdemDeServico, Funcionarios
from .serializer import FuncionariosSerializer, PatrimoniosSerializer, AmbientesSerializer, AreaSerializer, OrdemServicoSerializer, CsvSerializer

from .filters import FiltroFuncionarioPorNomeESn

# CRUD GESTORES ============================================================================
class GetFuncionarios(APIView):

    def get(self, request):
        funcionarios = Funcionarios.objects.all()
        serializer = FuncionariosSerializer(funcionarios, many=True)
        return Response(serializer.data)
    
class PostFuncionario(APIView):

    def post(self, request):

        serializer = FuncionariosSerializer(data=request.data)

        if serializer.is_valid():
            funcionario_new = serializer.save()
            return Response(status = status.HTTP_201_CREATED)
        return Response(status = status.HTTP_400_BAD_REQUEST) 

class PatchFuncionario(APIView):
    def patch(self,request, pk):

        funcionario = Funcionarios.objects.get(pk=pk)
        serializer = FuncionariosSerializer(funcionario, data=request.data, partial=True)

        if serializer.is_valid():
            funcionario_update = serializer.save()
            return Response(status= status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DeleteFuncionario(APIView):
    def delete(self,request, pk):

        funcionario = Funcionarios.objects.get(pk=pk)

        if funcionario:
            funcionario.delete()
            return Response(status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

# CRUD PATRIMONIOS ===============================================================================
class GetPatrimonios(APIView):

    def get(self, request):
        patrimonios = Patrimonios.objects.all()
        serializer = PatrimoniosSerializer(patrimonios, many=True)
        return Response(serializer.data)
    
class PostPatrimonios(APIView):

    def post(self, request):
        serializer = PatrimoniosSerializer(data=request.data)

        if serializer.is_valid():
            patrimonio_new = serializer.save()
            return Response(status = status.HTTP_201_CREATED)

        return Response(status = status.HTTP_400_BAD_REQUEST) 

class PatchPatrimonios(APIView):
    def patch(self,request, pk):

        patrimonio = Patrimonios.objects.get(pk=pk)
        serializer = PatrimoniosSerializer(patrimonio, data=request.data, partial=True)

        if serializer.is_valid():
            patrimonio_update = serializer.save()
            return Response(status= status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DeletePatrimonio(APIView):
    def delete(self,request, pk):

        patrimonio = Patrimonios.objects.get(pk=pk)

        if patrimonio:
            patrimonio.delete()
            return Response(status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    

    
# CRUD AMBIENTES ==========================================================================

class GetAmbientes(APIView):

    def get(self, request):
        ambientes = Ambientes.objects.all()
        serializer = AmbientesSerializer(ambientes, many=True)
        return Response(serializer.data)
    
class PostAmbientes(APIView):

    def post(self, request):

        serializer = AmbientesSerializer(data=request.data)

        if serializer.is_valid():
            ambiente_new = serializer.save()
            return Response(status = status.HTTP_201_CREATED)

        return Response(status = status.HTTP_400_BAD_REQUEST) 

class PatchAmbiente(APIView):
    def patch(self,request, pk):

        ambiente = Ambientes.objects.get(pk=pk)
        serializer = AmbientesSerializer(ambiente, data=request.data, partial=True)

        if serializer.is_valid():
            ambiente_update = serializer.save()
            return Response(status= status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DeleteAmbiente(APIView):
    def delete(self,request, pk):

        ambiente = Ambientes.objects.get(pk=pk)

        if ambiente:
            ambiente.delete()
            return Response(status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
# CRUD AREA ==========================================================================

class GetAreas(APIView):

    def get(self, request):
        areas = Area.objects.all()
        serializer = AreaSerializer(areas, many=True)
        return Response(serializer.data)
    
class PostArea(APIView):

    def post(self, request):
        serializer = AreaSerializer(data=request.data)

        if serializer.is_valid():
            area_new = serializer.save()
            return Response(status = status.HTTP_201_CREATED)

        return Response(status = status.HTTP_400_BAD_REQUEST) 

class PatchArea(APIView):
    def patch(self,request, pk):

        area = Area.objects.get(pk=pk)
        serializer = AreaSerializer(area, data=request.data, partial=True)

        if serializer.is_valid():
            area_update = serializer.save()
            return Response(status= status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DeleteArea(APIView):
    def delete(self,request, pk):

        area = Area.objects.get(pk=pk)

        if area:
            area.delete()
            return Response(status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    


# CRUD ORDEN DE SERVIÇO ==========================================================================

class GetOrdensDeServico(APIView):

    def get(self, request):
        ordens_de_servico = OrdemDeServico.objects.all()
        serializer = OrdemServicoSerializer(ordens_de_servico, many=True)
        return Response(serializer.data)
    
class PostOrdensDeServico(APIView):

    def post(self, request):
        serializer = OrdemServicoSerializer(data=request.data)

        if serializer.is_valid():
            ordem_de_servico_new = serializer.save()
            return Response(status = status.HTTP_201_CREATED)

        return Response(status = status.HTTP_400_BAD_REQUEST) 

class PatchOrdemDeServico(APIView):
    def patch(self,request, pk):

        ordem_de_servico = OrdemDeServico.objects.get(pk=pk)
        serializer = OrdemServicoSerializer(ordem_de_servico, data=request.data, partial=True)

        if serializer.is_valid():
            ordem_de_servico_update = serializer.save()
            return Response(status= status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DeleteOrdemDeServico(APIView):
    def delete(self,request, pk):

        ordem_de_servico = OrdemDeServico.objects.get(pk=pk)

        if ordem_de_servico:
            ordem_de_servico.delete()
            return Response(status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
# LEITURA ARQUIVO CSV
class UploadExcelView(APIView):

    queryset =  OrdemDeServico.objects.all()
    # serializer_class = CsvSerializer
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        
        print(request)

        # print(serializer)

        # if serializer.is_valid():
        file = request.FILES['file']
        table = request.data.get('table')
        # print(table, 'table')
        
        df = pd.read_excel(file)
        

        for index, row in df.iterrows():
            print(row) 

        #     if table == 'area':
        #         area = {
        #             'nome' : row.get('area'),
        #         }

        #         serializer = AreaSerializer(data=area)
        #         if serializer.is_valid():
        #             serializer.save()

        # return Response(status=status.HTTP_201_CREATED)
                    
            # if table == 'patrimonio':

        #     area_nome = row.get('area')
        #     area_obj = Area.objects.filter(nome=area_nome).first()

        #     funcionarios = {
        #         'sn' : row.get('sn'),
        #         'nome' : row.get('nome'),
        #         'email' : row.get('email'),
        #         'cargo' : row.get('cargo'),
        #         'area' : area_obj.id
        #         }

        #     serializer = FuncionariosSerializer(data=funcionarios)
        #     if serializer.is_valid():
        #         serializer.save()

        # return Response(status=status.HTTP_201_CREATED)
                
            # if table == 'patrimonio':

            responsavel_id = row.get('responsavel')

            func_obj = Funcionarios.objects.filter(id=responsavel_id)


        #     # print(f"ID do responsável recebido: {responsavel_id}")
            func_obj = Funcionarios.objects.get(id=responsavel_id)

            ambiente = {
                'sig' : row.get('sig'),
                'descricao' : row.get('descricao'),
                'responsavel' : func_obj.id,
                }

            # print("Dados do ambiente:", ambiente)

            serializer = AmbientesSerializer(data=ambiente)
            if serializer.is_valid():
                print(func_obj, 'testee')
                serializer.save()
                # print("Ambiente SALVO com ID:", amb_obj.id)
            else:
                print("Erro de validação:", serializer.errors)

        return Response(status=status.HTTP_201_CREATED)

            # if table == 'patrimonio':

        #     localizacao = row.get('localizacao')
        # #     # print(f"ID do responsável recebido: {responsavel_id}")
        #     func_obj = Ambientes.objects.get(sig=localizacao)

        #     patrimonio = {
        #         'ni' : row.get('ni'),
        #         'descricao' : row.get('descricao'),
        #         'localizacao' : func_obj.id,
        #         }

        #     serializer = PatrimoniosSerializer(data=patrimonio)
        #     if serializer.is_valid():
        #         serializer.save()

        # return Response(status=status.HTTP_201_CREATED)
                

#FILTROS

class FuncionarioByNameAndSn(APIView):

    def get(self,request):

        filter = FiltroFuncionarioPorNomeESn(request.GET, queryset=Funcionarios.objects.all())
        serializer = FuncionariosSerializer(filter.qs, many=True)
        return Response(serializer.data)