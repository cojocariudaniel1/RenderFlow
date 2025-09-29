from django.urls import path
from . import api_views

urlpatterns = [
    path("api/register/", api_views.register_api, name="register_api"),
    path("api/login/", api_views.login_api, name="login_api"),
]
