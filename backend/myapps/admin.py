from django.contrib import admin
from .models import Doctor, Patient
from .models import Appointment


# Register your models here

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('doctor_name', 'phone_number', 'specialization', 'email')
    list_filter = ('specialization',)
    search_fields = ('doctor_name', 'email')

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('patient_name', 'phone_number', 'disease', 'email', 'attending_doctor')
    list_filter = ('disease', 'attending_doctor')
    search_fields = ('patient_name', 'email')
    autocomplete_fields = ('attending_doctor',)

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['patientName', 'phoneNumber', 'email', 'date', 'time', 'address']
    search_fields = ['patientName', 'phoneNumber', 'email']
    list_filter = ['date', 'time']


