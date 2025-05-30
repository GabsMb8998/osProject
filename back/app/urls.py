from django.urls import path, include
from . import views
# from .views import Teste
from app.api.viewsets import (
    GetFuncionarios,
    PostFuncionario,
    PatchFuncionario,
    DeleteFuncionario,

    GetPatrimonios,
    PostPatrimonios,
    PatchPatrimonios,
    DeletePatrimonio,

    GetAmbientes,
    PostAmbientes,
    PatchAmbiente,
    DeleteAmbiente,

    GetAreas,
    PostArea,
    PatchArea,
    DeleteArea,

    GetOrdensDeServico,
    PostOrdensDeServico,
    PatchOrdemDeServico,
    DeleteOrdemDeServico,

    UploadExcelView,

    FuncionarioByNameAndSn

    )

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    
    path('api/funcionario/get', GetFuncionarios.as_view()),    
    path('api/funcionario/post', PostFuncionario.as_view()),    
    path('api/funcionario/patch/<int:pk>', PatchFuncionario.as_view()),    
    path('api/funcionario/delete/<int:pk>', DeleteFuncionario.as_view()),   

    path('api/patrimonios/get', GetPatrimonios.as_view()),    
    path('api/patrimonios/post', PostPatrimonios.as_view()),    
    path('api/patrimonios/patch', PatchPatrimonios.as_view()),    
    path('api/patrimonios/delete', DeletePatrimonio.as_view()),   

    path('api/ambientes/get', GetAmbientes.as_view()),    
    path('api/ambientes/post', PostAmbientes.as_view()),    
    path('api/ambientes/patch', PatchAmbiente.as_view()),    
    path('api/ambientes/delete', DeleteAmbiente.as_view()),   

    path('api/area/get', GetAreas.as_view()),    
    path('api/area/post', PostArea.as_view()),    
    path('api/area/patch/<int:pk>', PatchArea.as_view()),    
    path('api/area/delete/<int:pk>', DeleteArea.as_view()),   

    path('api/ordemServico/get', GetOrdensDeServico.as_view()),    
    path('api/ordemServico/post', PostOrdensDeServico.as_view()),    
    path('api/ordemServico/patch', PatchOrdemDeServico.as_view()),    
    path('api/ordemServico/delete', DeleteOrdemDeServico.as_view()),  


    path('api/upload', UploadExcelView.as_view()),  

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('api/filtros/funcionario/', FuncionarioByNameAndSn.as_view()),
   
]