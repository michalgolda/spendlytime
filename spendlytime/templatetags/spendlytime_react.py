import json
from django.utils import safestring
from django import template
from spendlytime.web.helpers import get_client_config

register = template.Library()


@register.simple_tag(takes_context=True)
def get_react_config(context):
    context = get_client_config(context.get("request", None))

    return safestring.mark_safe(json.dumps(context))