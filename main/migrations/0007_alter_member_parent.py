# Generated by Django 4.2.11 on 2024-06-13 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_member_parent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='parent',
            field=models.CharField(default='', max_length=20),
            preserve_default=False,
        ),
    ]
