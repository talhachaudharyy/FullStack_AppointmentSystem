from django.urls import path
from myapps import views


urlpatterns = [
    # Doctor API Endpoints
    path('doctors/', views.DoctorListCreateView.as_view(), name='doctor-list'),
    path('doctors/<int:pk>/', views.DoctorDetailView.as_view(), name='doctor-detail'),

    # Patient API Endpoints
    path('patients/', views.PatientListCreateView.as_view(), name='patient-list'),
    path('patients/<int:pk>/', views.PatientDetailView.as_view(), name='patient-detail'),
    
    # Appointment Fetching URl
    
    # Appointment Endpoints URl
    path('appointments/', views.AppointmentListCreateView.as_view(), name='appointment-list'),
    path('appointments/<int:pk>/', views.AppointmentDetailView.as_view(), name='appointment-detail'),
    
    
]
