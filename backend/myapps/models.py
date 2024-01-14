from django.db import models
from django.utils import timezone

timezone.now()


#Docter Model
class Doctor(models.Model):
    doctor_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    specialization = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    image = models.ImageField(upload_to='doctors/', blank=True, null=True)  # Add this line for the image field
    rate = models.DecimalField(max_digits=5, decimal_places=2)


    def __str__(self):
        return self.doctor_name

    
#Patient Model

class Patient(models.Model):
    patient_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    disease = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    attending_doctor = models.ForeignKey(Doctor, on_delete=models.SET_NULL, null=True, blank=True, related_name='patients')


    def __str__(self):
        return self.patient_name


#Appointment Model

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Accepted', 'Accepted'),
        ('Rejected', 'Rejected'),
    ]

    patientName = models.CharField(max_length=255)
    phoneNumber = models.CharField(max_length=15)
    email = models.EmailField()
    date = models.DateField()
    time = models.TimeField()
    address = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')


    def __str__(self):
        return self.patientName
    
