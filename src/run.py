from flask import Flask
from flask_restful import Api
from resources import Home, DownloadData, WorkPackage
import pandas as pd

app = Flask(__name__)
api = Api(app)

api.add_resource(Home, '/')
api.add_resource(DownloadData, '/download')
api.add_resource(WorkPackage, '/workpackage')

if __name__ == '__main__':
   
    app.run(debug=True,
            host='0.0.0.0',
            port='8081')
    
