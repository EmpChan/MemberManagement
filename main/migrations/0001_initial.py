# Generated by Django 4.2.11 on 2024-06-09 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('parent', models.CharField(max_length=20)),
                ('createrd_at', models.CharField(max_length=20)),
            ],
        ),
    ]