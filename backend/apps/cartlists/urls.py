from django.urls import path
from . import views

urlpatterns = [
    path('', views.CartList.as_view(), name='cartlist'),
    path('add/', views.CartListAdd.as_view(), name='cartlist_add'),
    path('delete/<int:pk>/', views.CartListDelete.as_view(), name='cartlist_delete'),
]
