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

    UploadExcelView


    )

urlpatterns = [
    
    path('api/gestores/get', GetFuncionarios.as_view()),    
    path('api/gestores/post', PostFuncionario.as_view()),    
    path('api/gestores/patch', PatchFuncionario.as_view()),    
    path('api/gestores/delete', DeleteFuncionario.as_view()),   

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


    path('api/upload/areas', UploadExcelView.as_view()),  
   
]