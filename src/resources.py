from flask_restful import Resource
from flask import render_template, send_from_directory
from flask import make_response
from flask_httpauth import HTTPBasicAuth
from utils import constants as constants
from utils.data import get_spreadsheet, process_dataframe 


auth = HTTPBasicAuth()

@auth.verify_password
def verify(username, password):
    if not (username and password):
        return False
    return constants.USER_DATA.get(username) == password


class Home(Resource):
    def __init__(self, **kwargs):
        self._variables = {'relpath': '/static/'}
        self._variables.update(kwargs)

    @auth.login_required
    def get(self):
        headers = {'Content-Type': 'text/html'}
        
        # Get spreadsheet from Google Drive
        df = get_spreadsheet(constants.SPREADSHEETNAME)
        # Generate payload
        payload = process_dataframe(df)

        self._variables.update({'data': payload})

        return make_response(render_template('index.html', **self._variables), 200, headers)


class DownloadData(Resource):
    def __init__(self, **kwargs):
        self._variables = {'relpath': '/static/'}
        self._variables.update(kwargs)

    @auth.login_required
    def get(self):
        headers = {'Content-Type': 'text/html'}
        return send_from_directory('/tmp', filename='data.csv', as_attachment=True)



