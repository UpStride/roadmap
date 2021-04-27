# Define simple user authentication 
USER_DATA = {
    "admin": "&H0B0t#p52om19np%7AMBiHN"
}
# Define port
PORT="80"
# Spreadsheet file name -- exact name as in Google Docs
# SPREADSHEETNAME = "Roadmap_for_rest_api"
SPREADSHEETNAME = "Roadmap_for_rest_api"
# Path to Google Docs API key -- instructions to generate it cab be found here: https://developers.google.com/sheets/api/guides/authorizing
APIKEYPATH = "./roadmap-spreadsheet-d95e6315dd9a.json"
# The spreadsheet columns that should be parsed by the application. Note that
# you should modify your HTML source (templates/roadmap.html) accordingly in order to display the content of these columns
COLUMNS = ['section', 'task', 'description', 'start_date', 'end_date', 'duration_weeks', 'fte', 
           'challenges_and_opportunities', 'work_package', 'verrou_technologique', 'team_members', 'private']

