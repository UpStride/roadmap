from flask import Flask
from flask_restful import Api
from resources import Home
#import constants as constants
import pandas as pd

app = Flask(__name__)
api = Api(app)

df = pd.read_csv('Roadmap.csv')
df = df[['section', 'task', 'start_date', 'end_date']]
df2 = df
df2['start_date'] = pd.to_datetime(df2['start_date'])
df2['end_date'] = pd.to_datetime(df2['end_date'])

df2['year_start'] = df2['start_date'].dt.year
df2['month_start'] = df2['start_date'].dt.month
df2['day_start'] = df2['start_date'].dt.day

df2['year_end'] = df2['end_date'].dt.year
df2['month_end'] = df2['end_date'].dt.month
df2['day_end'] = df2['end_date'].dt.day

data = df2.to_dict('records')

api.add_resource(Home, '/', resource_class_kwargs={'data': data})

if __name__ == '__main__':
    
    app.run(debug=True)
