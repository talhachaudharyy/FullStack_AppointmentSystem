from rest_framework import generics
from .models import Doctor, Patient, Appointment
from .serializers import DoctorSerializer, PatientSerializer, AppointmentSerializer
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response


#Doctors View
class DoctorListCreateView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

#Patient View
class PatientListCreateView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PatientDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

#Appointment View
class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


#Appointment Post View
@api_view(['POST'])
def create_appointment(request, appointment_id):
    
    try:
        appointment = Appointment.objects.get(id=appointment_id)
    except Appointment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    new_status = request.data.get('status')

    if new_status in dict(Appointment.STATUS_CHOICES):
        appointment.status = new_status
        appointment.save()
        return Response({'message': f'Appointment status updated to {new_status}'})
    else:
        return Response({'error': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)


