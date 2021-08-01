# Generated by Django 3.2.5 on 2021-07-31 10:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Junction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Name of the Junction Exchange', max_length=20)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Light',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='The light on the road', max_length=20)),
                ('state', models.CharField(choices=[('A', 'ON'), ('B', 'OFF')], max_length=2)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Road',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, help_text='The road name', max_length=20, null=True)),
                ('distance', models.FloatField(blank=True, help_text='The distance of the road', null=True)),
                ('direction', models.CharField(choices=[('R', 'Right to left'), ('L', 'Left to right'), ('U', 'Up to down'), ('D', 'down to up')], help_text='The direction of the road', max_length=2)),
                ('traffic_queue', models.IntegerField(blank=True, null=True)),
                ('status', models.CharField(blank=True, default='A', help_text='Road status availability', max_length=2, null=True)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('junction', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='traffic.junction')),
            ],
        ),
        migrations.CreateModel(
            name='Traffic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(auto_now_add=True, null=True)),
                ('count', models.IntegerField(help_text='The total number of cars on the road')),
                ('status', models.CharField(default='mp', max_length=2)),
                ('image', models.ImageField(blank=True, null=True, upload_to='traffic')),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('road', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='traffic.road')),
            ],
        ),
        migrations.CreateModel(
            name='People',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='The Name of the person', max_length=20)),
                ('age', models.IntegerField(blank=True, null=True)),
                ('date_joined', models.DateTimeField(auto_now_add=True, null=True)),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
