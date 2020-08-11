import pandas as pd
from .spreadsheet import Spreadsheet

def get_spreadsheet(filename):

    ss = Spreadsheet()

    df = ss.load(filename)

    return df


def process_dataframe(df):
    """ 
    Process dataframe 

    Input
      df: pandas dataframe

    Returns
      payload to be sent to resource

    """
    
    df = df[['section', 'task', 'description', 'start_date', 'end_date', 'duration_weeks', 'fte', 'challenges_and_opportunities', 'work_package', 'verrou_technologique']]
    
    df['start_date'] = pd.to_datetime(df['start_date'], format="%Y-%m-%d")
    df['end_date'] = pd.to_datetime(df['end_date'], format="%Y-%m-%d")

    df['year_start'] = df['start_date'].dt.year
    df['month_start'] = df['start_date'].dt.month
    df['day_start'] = df['start_date'].dt.day

    df['year_end'] = df['end_date'].dt.year
    df['month_end'] = df['end_date'].dt.month
    df['day_end'] = df['end_date'].dt.day

    # Save dataframe as CSV
    df.to_csv('/tmp/data.csv')

    return df.to_dict('records')







