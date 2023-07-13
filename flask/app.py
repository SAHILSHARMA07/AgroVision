from flask import Flask,jsonify
import pickle


app = Flask(__name__)

@app.route("/crop")
def hello():
    with open('RandomForest.pkl', 'rb') as f:
        RF_Model = pickle.load(f)
    predictions = RF_Model.predict([[90,42,43,20.879744,82.002744,6.502985,2002.935536]])   
    print(predictions) 
    ans=predictions[0]

     

    return ans

@app.route("/fertiliser")
def hii():
    with open('classifier.pkl', 'rb') as f:
        Cl_Model = pickle.load(f)
    predictions = Cl_Model.predict([[26,52,38,4,3,37,0,0]])   
    print(predictions) 
    ans=predictions[0]

     

    return ans