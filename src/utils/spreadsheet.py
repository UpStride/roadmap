import gspread
import pandas as pd
from google.oauth2.service_account import Credentials
from utils import constants as constants


#logger = logging.getLogger(constants.LOGGER_NAME)

# Client to interact with the Google Drive API
scopes = ['https://www.googleapis.com/auth/spreadsheets',
         'https://www.googleapis.com/auth/drive']

credentials = Credentials.from_service_account_file(constants.APIKEYPATH, scopes=scopes)

gc = gspread.authorize(credentials)

class Spreadsheet():
    def __init__(self):
        pass

    # Find a spreadsheet name and open the first sheet
    def load(self, filename, tab=0):
        #logger.info('loading {}'.format(filename))
        
        print('>>> Loading spreadsheet {}'.format(filename))

        # Open spreadsheet
        try:
            sheet = gc.open(filename).get_worksheet(tab)
        except:
            print(">>> Requested tab doesn't exist. Reverting to spreadsheet's Sheet1")

        # Extract and stores values in a Pandas dataframe
        list_of_hashes = sheet.get_all_records()

        df = pd.DataFrame(list_of_hashes)

        # TODO: Save df in case connection with Google Sheets is not available         
        # df.to_csv('/tmp/df.csv')
        return df
