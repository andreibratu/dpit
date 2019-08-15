from typing import List
from flask.json import JSONEncoder

class Task:
    """Representation of a ToDo item."""

    def __init__(self, title: str, description: str, tags: List[str]):
        self.title = title
        self.desc = description
        self.tags = tags

class TaskJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Task):
            return {
                'title': obj.title,
                'desc': obj.desc,
                'tags': obj.tags
            }
        return super(TaskJSONEncoder, self).default(obj)
