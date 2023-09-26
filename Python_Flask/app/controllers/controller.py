from app import app
from flask import render_template




# ============
# Index Route
# ============
@app.route("/")
def index():
    return render_template("index.html")

# ============
# Home Route
# ============
@app.route("/home")
def home():
    return render_template("home.html")