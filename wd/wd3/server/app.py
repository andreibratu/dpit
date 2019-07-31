#!flask/bin/python
from flask import Flask, jsonify, abort, request
from flask.json import JSONEncoder


""""""""""""""""""
OBJECTS
""""""""""""""""""
class Task:
    """Representation of a ToDo item."""

    def __init__(self, title, description, done):
        pass

    def serialize(self):
        pass

class MyJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Task):
            pass
        return super(MyJSONEncoder, self).default(obj)


""""""""""""""""""
INIT
""""""""""""""""""
app = Flask(__name__)
app.json_encoder = MyJSONEncoder
tasks = []


""""""""""""""""""
ENDPOINTS
""""""""""""""""""
@app.route('/todo/api/', methods=['GET'])
def index():
    pass

@app.route('/todo/api/tasks', methods=['GET'])
def get_tasks():
    pass

@app.route('/todo/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    pass

@app.route('/todo/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    pass

@app.route('/todo/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    pass


if __name__ == '__main__':
    # Set host to public IP, maybe avoid CORS
    app.run(debug=True, host='0.0.0.0')
