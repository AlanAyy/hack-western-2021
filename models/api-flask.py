from flask import Flask, request
from PIL import Image
from enum import Enum
import json

import pandas as pd
import numpy as np
import pickle

app = Flask(__name__)

class Loans(Enum):
    con = 0
    cred = 1
    stud = 2


@app.route('/conloan', methods=['POST'])
def con_loan():
    return call_model(Loans.con)


@app.route('/credloan', methods=['POST'])
def cred_loan():
    return call_model(Loans.cred)


@app.route('/studloan', methods=['POST'])
def stud_loan():
    return call_model(Loans.stud)


def call_model(loan_type):
    jsonData = request.json
    messages = json.loads(jsonData)
    print(messages)

    X = pd.json_normalize([text for text in messages])
    if loan_type == Loans.con:
        path = './data/PipeRF_ConLoan.pkl'
    elif loan_type == Loans.cred:
        path = './data/PipeRF_CredLoan.pkl'
    elif loan_type == Loans.stud:
        path = './data/PipeRF_StudLoan.pkl'

    with open(path, 'rb') as f:
        model = pickle.load(f)
    
    y_pred = model.predict(X)

    return y_pred

