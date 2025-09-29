from django.urls import path
from . import views
from . import api_views

urlpatterns = [
    path("api/login/", api_views.login_api, name="api-login"),
]
