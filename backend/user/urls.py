from django.urls import path
from . import views
urlpatterns = [
    path('user_signup/', views.UserSignUp.as_view(), name='user_singup'),
    path('user_signin/', views.UserSignIn.as_view(), name='user_signin'),
    path('user_login_status/', views.UserLoginStatus.as_view(), name='user_login_status'),
    
]