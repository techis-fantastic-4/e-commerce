from django.urls import path
from . import views
urlpatterns = [
    path('product/', views.ProductList.as_view(), name='product_list'),
    path('product/<int:pk>/', views.ProductDetail.as_view(), name='product_detail'),
    path('product_category/', views.ProductCategoryList.as_view(), name='product_category'),
    
]