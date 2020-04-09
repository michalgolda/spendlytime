from django import forms


class AuthtenticationForm(forms.Form):
    username = forms.CharField(
        max_length=128,
        widget=forms.TextInput(attrs={"placeholder": ("email"), "tabindex": 1, "class": "auth_form__input"})
    )

    password = forms.CharField(
        widget=forms.PasswordInput(attrs={"placeholder": ("hasło"), "tabindex": 2, "class": "auth_form__input"})
    )