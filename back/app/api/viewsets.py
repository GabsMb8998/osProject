from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

from ..models import Gestores, Patrimonios, Ambientes, Manutentores, Area, OrdemDeServico
from .serializer import GestoresSerializer, PatrimoniosSerializer, AmbientesSerializer, ManutentoresSerializer, AreaSerializer, OrdemServicoSerializer

# CRUD GESTORES ============================================================================
class GetGestores(APIView):

    def get(self, request):
        gestores = Gestores.objects.all()
        serializer = GestoresSerializer(gestores, many=True)
        return Response(serializer.data)
    
class PostGestores(APIView):

    def post(self, request):

        serializer = GestoresSerializer(data=request.data)

        if serializer.is_valid():
            gestor_new = serializer.save()
            return Response(status = status.HTTP_201_CREATED)

        return Response(status = status.HTTP_400_BAD_REQUEST) 

class PatchGestores(APIView):
    def patch(self,request, pk):

        gestor = Gestores.objects.get(pk=pk)
        serializer = GestoresSerializer(gestor, data=request.data, partial=True)

        if serializer.is_valid():
            gestor_update = serializer.save()
            return Response(status= status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DeleteGestores(APIView):
    def delete(self,request, pk):

        gestor = Gestores.objects.get(pk=pk)

        if gestor:
            gestor.delete()
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
    
    
# CRUD MANUTENTORES ==========================================================================

class GetManutentores(APIView):

    def get(self, request):
        manutentores = Manutentores.objects.all()
        serializer = ManutentoresSerializer(manutentores, many=True)
        return Response(serializer.data)
    
class PostManutentor(APIView):

    def post(self, request):
        serializer = ManutentoresSerializer(data=request.data)

        if serializer.is_valid():
            manutentor_new = serializer.save()
            return Response(status = status.HTTP_201_CREATED)

        return Response(status = status.HTTP_400_BAD_REQUEST) 

class PatchManutentor(APIView):
    def patch(self,request, pk):

        manutentor = Manutentores.objects.get(pk=pk)
        serializer = ManutentoresSerializer(manutentor, data=request.data, partial=True)

        if serializer.is_valid():
            manutentor_update = serializer.save()
            return Response(status= status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class DeleteManutentor(APIView):
    def delete(self,request, pk):

        manutentor = Manutentores.objects.get(pk=pk)

        if manutentor:
            manutentor.delete()
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

    