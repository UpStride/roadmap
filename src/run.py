from flask import Flask
from flask_restful import Api
from resources import Home
import pandas as pd

app = Flask(__name__)
api = Api(app)

api.add_resource(Home, '/')

if __name__ == '__main__':
   
    app.run(debug=True,
            host='0.0.0.0',
            port='8081')
    
