import os
from flask import render_template, url_for, send_from_directory
from website import app

import json

@app.route('/favicon.ico')
def favicon():
	return send_from_directory(os.path.join(app.root_path, 'static'),
		'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/')
@app.route('/home')
def index():
	return render_template("index/index.html")

@app.route('/projects')
def projects_page():

	projects_json = open('static/content/projects/projects.json',)
	projects = json.load(projects_json)

	return render_template("projects/projects.html", projects=projects)

@app.route('/projects/<proj_id>')
def project_showcase(proj_id):
	proj_id = int(proj_id)
	return render_template("base.html")

@app.route('/contact')
def contact():
	return render_template("contact/contact.html")

@app.route('/about')
def about():
	return render_template("about/about.html")

@app.route('/skills')
def skills():
	return render_template("skills/skills.html")