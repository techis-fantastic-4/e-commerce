from rest_framework import generics
from .serializers import PostSerializer
from django.http import JsonResponse
from ..users.mixins import CustomLoginRequiredMixin
from .models import Post


class PostList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Post.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = PostSerializer


class PostAdd(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDelete(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
