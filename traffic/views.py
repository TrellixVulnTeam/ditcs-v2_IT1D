from django.shortcuts import render
from django.http import HttpResponse
import matplotlib.pyplot as plt
from rest_framework import viewsets
import io, base64
from rest_framework import viewsets
from .models import  Traffic, Road, Light,Junction
from .serializers import TrafficSerializer, RoadSerializer, LightSerializer
from .forms import CreatePersonForm
import requests
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages
from django.shortcuts import redirect
import datetime
import csv
import tempfile
import serial
#from weasyprint import HTML


ser = serial.Serial()

# Create your views here.
@login_required(login_url="login")
def index(request):

    # Draw a figure for tests
    fig, ax = plt.subplots()
    ax.plot([1,2,3,4], [4,2,1,4])
    # ax.set_title("Test plots from dummy data")
    
    flike = io.BytesIO()
    fig.savefig(flike)
    b64 = base64.b64encode(flike.getvalue()).decode()

    flike = io.BytesIO()
    ch, jf = plt.subplots()
    students = [22,33,12]
    langs = ["C++", "Java", "Python"]
    jf.pie(students, labels=langs)
    ch.savefig(flike)
    pie = base64.b64encode(flike.getvalue()).decode()

    context = {'chart': b64, 'pie': pie}

    return render(request, 'index.html', context=context)

@login_required(login_url="login")
def camera(request):

    context = {}
    return render(request, 'camera.html',context)


@login_required(login_url="login")
def roads(request):
    result = []
    my_road = []
    if request.method == 'POST':    
        state= request.POST
        if 'road_a' in state:
            result.append(request.POST['road_a'])
            # print(f'{result} ')

        else:
             result.append('off')
        rId=int(request.POST['road_id'])
        rd = Road.objects.get(pk=rId)

        road_rd = Road.objects.filter(junction_id = rd.junction.id)
        road_id = [r.id for r in road_rd if r.state == 'on']
        road_state = [r.state for r in road_rd if r.state == 'on']
        print(f'{type(road_id)} {road_state}')

        for my_r in road_id:
            ser.write(str(my_r).encode())
        # print(my_road[0])
        # ser.write(str(my_road[0]).encode())
        rd.state = result[0]
        rd.save()
    junctions = Junction.objects.all()
    # x = {'name': rd.name, 'state': rd.state}
    # requests.post('http://127.0.0.1:8000/api', data=x)
    # print(x)
    context = {'data':junctions}
    return render(request, 'roads.html',context)

@login_required(login_url="login")
def road_export_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename=ditcs' +\
        str(datetime.datetime.now())+'.csv'

    writer = csv.writer(response)
    writer.writerow(['Name','state','Date'])

    roads = Road.objects.all()

    for road in roads:
        writer.writerow([road.name,road.state, road.date])
    
    return response

@login_required(login_url="login")
def road_export_excel(request):
    response = HttpResponse(content_type='application/ms-excel')
    response['Content-Disposition'] = 'attachment; filename=ditcss' +\
        str(datetime.datetime.now())+'.xls'
    
    wb = xlwt.Workbook(encoding='utf-8')
    ws = wb.add_sheet('Roads')
    row_num = 0
    font_style = xlwt.XFStyle()
    font_style.font.bold = True

    colums = ['Name','state','Date']

    for col_num in range(len(colums)):
        ws.write(row_num, col_num, colums[col_num], font_style)
    
    font_style = xlwt.XFStyle()

    rows = Road.objects.all().values_list('name', 'state', 'date')

    for row in rows:
        row_num += 1

        for col_num in range(len(row)):
            ws.write(row_num, col_num, str(row[col_num]), font_style)
        wb.save(response)

        return response

@login_required(login_url="login")
def profile(request):

    context = {}
    return render(request, 'profile.html',context)

class ChartView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['data'] = Road.objects.all()
        return context


class TrafficViewSet(viewsets.ModelViewSet):
    queryset = Traffic.objects.all()
    serializer_class = TrafficSerializer

class RoadViewSet(viewsets.ModelViewSet):
    queryset = Road.objects.all()
    serializer_class = RoadSerializer

class LightViewSet(viewsets.ModelViewSet):
    queryset = Light.objects.all()
    serializer_class = LightSerializer

@login_required(login_url="login")
def maps(request):
    
    context = {}
    return render(request, 'maps.html', context)

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password,)

        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.info(request,'Invalid username or password')
    context = {}
    return render(request, 'accounts/login.html', context)

def logoutPage(request):
    logout(request)
    return redirect('login')

def forgot_password(request):
    
    context = {}
    return render(request, 'forgot-password.html', context)

def register(request):
    form = CreatePersonForm()
    if request.method == 'POST':
        form = CreatePersonForm(request.POST)
        if form.is_valid():
            form.save()
    context = {'form': form}
    return render(request, 'accounts/register.html', context)
