from django.shortcuts import render
from django.http import HttpResponse

# import logging

# # Create a logger for this file
# logger = logging.getLogger(__file__)


def index(request):
    return render(request, "index.html")

    # try:
    #     logger.debug("This logs a debug message.")
    #     return render(request, "index.html")
    # except Exception:
    #     logger.exception("This logs an exception.")
