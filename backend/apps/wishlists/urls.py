from django.urls import path
from . import views

urlpatterns = [
    path('', views.WishList.as_view(), name='wishlist'),
    path('add/', views.WishlistAdd.as_view(), name='wishlist_add'),
    path('delete/<int:pk>/', views.WishlistDelete.as_view(), name='wishlist_delete'),
]
