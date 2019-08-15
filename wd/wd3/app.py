from typing import Dict, TypeVar
from flask import Flask, jsonify, abort, request
from task import TaskJSONEncoder
from repository import Repository
from service import Service
from constants import BAD_REQUEST, NOT_FOUND

T = TypeVar('T')

app = Flask(__name__)
app.json_encoder = TaskJSONEncoder
repository = Repository()
service = Service(repository)

def request_is_valid(json: Dict[str, T]) -> bool:
    """Validate received JSON to represent a Task object."""
    print(json)
    body_missing = json is None
    if body_missing:
        return false
    print(sorted(json.keys()))
    print(sorted(['title', 'description', 'tags']))
    has_keys = sorted(json.keys()) == sorted(['title', 'desc', 'tags'])
    return has_keys

@app.route('/todo', methods=['GET'])
def get_all():
    return jsonify(service.get_all())

@app.route('/todo', methods=['POST'])
def post_task():
    json = request.json
    if not request_is_valid(json):
        abort(BAD_REQUEST)
    id = service.create(**json)
    json['id'] = id
    return jsonify(json)

@app.route('/todo/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = service.get(task_id)
    if task is None:
        abort(404)
    return jsonify(task)

@app.route('/todo/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    result = service.delete(task_id)
    if not result:
        abort(NOT_FOUND)
    else:
        return jsonify(True)

@app.route('/todo/<int:task_id>', methods=['PUT'])
def put_task(task_id):
    json = request.json
    if not request_is_valid(json):
        abort(BAD_REQUEST)
    ok = service.update(id=task_id, **json)
    if not ok:
        abort(NOT_FOUND)
    json['id'] = task_id
    return jsonify(json)

@app.route('/todo/tags', methods=['GET'])
def get_by_tags():
    tags = request.args.get('q', None)
    if tags is None:
        abort(BAD_REQUEST)
    try:
        if tags == '':
            tags = []
        else:
            tags = tags.split(',')
    except:
        abort(BAD_REQUEST)
    tasks = service.get_by_tags(tags)
    return jsonify(tasks)

if __name__ == '__main__':
    # Set host to public IP, maybe avoid CORS
    app.run(debug=True)
