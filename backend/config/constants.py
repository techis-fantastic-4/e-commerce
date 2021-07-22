import os
import pytz

##############################
# Products
##############################
STATUS = (
    ('draft', 'Draft'),
    ('open','Open'),
    ('deleted','Deleted'),
)
STATUS_DICT = dict(STATUS)

CATEGORIES = (
    ('phone', 'Phone'),
    ('camera','Camera'),
    ('laptop','Laptop'),
    ('pods', 'Pods'),
    ('watch','Watch'),
    ('play_station','Play Station'),
    ('others','Others'),
)
CATEGORIES_DICT = dict(CATEGORIES)
