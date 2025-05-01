import data
from flask import Flask, render_template, redirect, url_for, g
import os
app = Flask(__name__, template_folder="src/views", static_folder='src/assets')



@app.before_request
def before_request_func():
    g.app = data.data


@app.route('/')
def home():
    return redirect(url_for('index'))


@app.route('/index.html')
def index():
    return render_template("/index.html")


@app.route('/college-add.html')
def collegeadd():
    return render_template("/college-add.html")


@app.route('/colleges.html')
def colleges():
    return render_template("/colleges.html")


@app.route('/dashboard.html')
def dashboard():
    return render_template("/dashboard.html")

 


if __name__ == '__main__':
    app.run(debug=True, port=5001)
