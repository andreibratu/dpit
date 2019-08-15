from typing import List
from collections import OrderedDict
from task import Task

class Repository:

    def __init__(self):
        self.__tasks = OrderedDict([
            (0, Task('Bath the dog', 'Bork bork', ['pet'])),
            (1, Task('Dog food', 'Buy new brand', ['pet', 'groceries'])),
            (2, Task('Milk', 'Buy extra for cereals', ['groceries'])),
            (3, Task('Meet with Katie', 'Find the bowtie', ['emergency']))
        ])
        self.__id = len(self.__tasks)

    def create(self, task: Task) -> int:
        self.__tasks[self.__id]= task;
        self.__id += 1
        return self.__id

    def get(self, id: int) -> Task:
        try:
            return self.__tasks[id]
        except KeyError:
            return None

    def get_all(self) -> List[Task]:
        return list(self.__tasks.values())

    def delete(self, id: int) -> bool:
        try:
            del self.__tasks[id]
            return True
        except KeyError:
            return False

    def update(self, id: int, task: Task) -> bool:
        try:
            self.__tasks[id] = task
            return True
        except KeyError:
            return False
