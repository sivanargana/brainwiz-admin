import data
from flask import Flask, render_template, redirect, url_for, g
import os
app = Flask(__name__, template_folder="src/views", static_folder='src/assets')



@app.before_request
def before_request_func():
    g.app = data.data


@app.route('/')
def home():
    return redirect(url_for('dashboard'))


@app.route('/login.html')
def login():
    return render_template("/login.html")


@app.route('/register.html')
def register():
    return render_template("/register.html")


@app.route('/forgot-password.html')
def forgotpassword():
    return render_template("/forgot-password.html")


@app.route('/dashboard.html')
def dashboard():
    return render_template("/dashboard.html")


if __name__ == '__main__':
    app.run(debug=True, port=5001)
