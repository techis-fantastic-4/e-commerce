from rest_framework import generics, filters
from .serializers import WishlistSerializer
from ..users.mixins import CustomLoginRequiredMixin
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Wishlist


class WishList(CustomLoginRequiredMixin, generics.ListAPIView):
    serializer_class = WishlistSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_id']

    def get(self, request, *args, **kwargs):
        # Filter by login user
        self.queryset = Wishlist.objects.order_by('-created_at').filter(user=request.login_user)
        return self.list(request, *args, **kwargs)


# class WishAdd(CustomLoginRequiredMixin, generics.CreateAPIView):

#     def post(self, request, *args, **kwargs):
#         request.data.post['user_id'] = request.login_user.id
#         return self.create(request, *args, **kwargs)
