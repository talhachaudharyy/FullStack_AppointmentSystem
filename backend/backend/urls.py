
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render

from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.views.generic import TemplateView




urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('account.urls')),
    path('user/', include('myapps.urls')),
   
  

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)