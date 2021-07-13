from django.conf import settings
from config.constants import *


def constants(request):
    """
    Constants
    """

    return {
        'STATUS_DICT': STATUS_DICT,
        'CATEGORIES_DICT': CATEGORIES_DICT,
    }
