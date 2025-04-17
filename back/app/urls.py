from django.urls import path, include
from . import views
from app.api.viewsets import (
    GetGestores,
    PostGestores,
    PatchGestores,
    DeleteGestores,

    GetPatrimonios,
    PostPatrimonios,
    PatchPatrimonios,
    DeletePatrimonio,

    GetAmbientes,
    PostAmbientes,
    PatchAmbiente,
    DeleteAmbiente,

    GetManutentores,
    PostManutentor,
    PatchManutentor,
    DeleteManutentor,

    GetAreas,
    PostArea,
    PatchArea,
    DeleteArea,

    GetOrdensDeServico,
    PostOrdensDeServico,
    PatchOrdemDeServico,
    DeleteOrdemDeServico
    )

urlpatterns = [
    
    path('api/gestores/get', GetGestores.as_view()),    
    path('api/gestores/post', PostGestores.as_view()),    
    path('api/gestores/patch', PatchGestores.as_view()),    
    path('api/gestores/delete', DeleteGestores.as_view()),   

    path('api/patrimonios/get', GetPatrimonios.as_view()),    
    path('api/patrimonios/post', PostPatrimonios.as_view()),    
    path('api/patrimonios/patch', PatchPatrimonios.as_view()),    
    path('api/patrimonios/delete', DeletePatrimonio.as_view()),   

    path('api/ambientes/get', GetAmbientes.as_view()),    
    path('api/ambientes/post', PostAmbientes.as_view()),    
    path('api/ambientes/patch', PatchAmbiente.as_view()),    
    path('api/ambientes/delete', DeleteAmbiente.as_view()),   

    path('api/manutentores/get', GetManutentores.as_view()),    
    path('api/manutentores/post', PostManutentor.as_view()),    
    path('api/manutentores/patch', PatchManutentor.as_view()),    
    path('api/manutentores/delete', DeleteManutentor.as_view()),   

    path('api/area/get', GetAreas.as_view()),    
    path('api/area/post', PostArea.as_view()),    
    path('api/area/patch', PatchArea.as_view()),    
    path('api/area/delete', DeleteArea.as_view()),   

    path('api/ordemServico/get', GetOrdensDeServico.as_view()),    
    path('api/ordemServico/post', PostOrdensDeServico.as_view()),    
    path('api/ordemServico/patch', PatchOrdemDeServico.as_view()),    
    path('api/ordemServico/delete', DeleteOrdemDeServico.as_view()),   
   
]