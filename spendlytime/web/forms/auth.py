from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import password_validation


class LoginForm(forms.Form):
    email = forms.CharField(
        max_length=128,
        widget=forms.TextInput(attrs={"placeholder": (
            "email"), "tabindex": 1, "class": "auth_form__input"})
    )

    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"placeholder": (
            "hasło"), "tabindex": 2, "class": "auth_form__input"})
    )

    def clean_email(self):
        email = self.cleaned_data["email"]
        user = User.objects.filter(email=email).first()
        if user:
            if user.is_active is False:
                self.add_error(None, "Za nim się zalogujesz musisz zweryfikować swoje konto")

        return email


class RegisterForm(forms.Form):
    email = forms.CharField(
        max_length=128,
        widget=forms.TextInput(attrs={"placeholder": (
            "email"), "tabindex": 1, "class": "auth_form__input"})
    )

    password1 = forms.CharField(
        widget=forms.PasswordInput(attrs={"placeholder": (
            "hasło"), "tabindex": 2, "class": "auth_form__input"})
    )

    password2 = forms.CharField(
        widget=forms.PasswordInput(attrs={"placeholder": (
            "hasło"), "tabindex": 2, "class": "auth_form__input"})
    )

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            self.add_error(None, "Hasła nie są takie same.")
        return self.cleaned_data

    def clean_email(self):
        email = self.cleaned_data["email"]
        user = User.objects.filter(email=email).first()
        if user:
            self.add_error(None, "Podany email jest już zajęty")

        return email

    def save(self):
        """
        Save user to db
        """
        user = User()
        user.email = self.cleaned_data["email"]
        user.set_password(self.cleaned_data["password2"])
        user.is_active = False
        user.save()

        return user