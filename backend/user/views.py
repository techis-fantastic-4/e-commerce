from rest_framework import generics
from .serializers import UserSerializer
from .models import User


class UserSignUp(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserSignIn(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserLoginStatus(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    