#import constants as constants
from flask_restful import Resource
from flask import render_template
from flask import make_response
#from utils import restful_parser, format_client_name
#from flask_httpauth import HTTPBasicAuth

#from analysis import call_analysis

#auth = HTTPBasicAuth()

#@auth.verify_password
#def verify(username, password):
#    if not (username and password):
#        return False
#    return constants.USER_DATA.get(username) == password


class Home(Resource):
    def __init__(self, **kwargs):
        self._variables = {'relpath': '/static/'}
        self._variables.update(kwargs)

    #@auth.login_required
    def get(self):
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('index.html', **self._variables), 200, headers)



