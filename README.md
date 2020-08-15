# Roadmap App

This is a simple flask app to automatically read the roadmap spreadsheet from UpStride Google Docs and render a javascript-based timeline.

## How it works

It reads the content of a specific Google Spreadsheet using [gspread](https://gspread.readthedocs.io/en/latest/oauth2.html) and uses [pandas](https://pandas.pydata.org/) to process the data and generate the payload that is sent to the service for rendering.

**Important:** The user is supposed to create a json file that is going to act as the credentials for the service to access the Google SPreadsheet API. Follow the steps [here](https://gspread.readthedocs.io/en/latest/oauth2.html) to understand how to generate this file and share your spreadsheet with the Google service account corresponding to the json file.

## Deploy 

It can be deployed via either of the following ways:

- Run Python flask app
```bash
$ cd src/ && python run.py
```
- Build the docker container and start the service
```bash
$ cd src/ && . docker.sh
```

Both ways listen for requests on localhost:8082 by default. 

## Customization

You can modify the listening PORT among other variables in the constants.py file.

User authentication is controlled by simple user:passwd hardcoded in the constants.py file. This approach has a **very low level of security**, and thus it is strongly advised to implement a better authentication method before deploying in production.

  
