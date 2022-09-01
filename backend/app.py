import os

from flask import Flask
from flask import request

from .service.entity import createEntity, deleteEntity, getAllEntities, getEntityById, updateEntity
from flask_cors import CORS

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)
    CORS(app)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/entities',methods=["GET","POST"])
    def entities():
        if request.method == "GET":
            return getAllEntities()
        elif request.method == 'POST':
            createEntity(request.json)
            return "",200
        else:
            raise ValueError("Unknown method")


    @app.route('/entities/<id>',methods=["GET","POST","DELETE"])
    def entity(id):
        if request.method == "GET":
            getEntityById(id)
            return "",200
        if request.method == 'POST':
            updateEntity(request.json)
            return "",200
        if request.method =="DELETE":
            deleteEntity(id=id)
            return "",200
        return 405
    

    return app