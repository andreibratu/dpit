from typing import List, Dict
from task import Task
from repository import Repository

class Service:

    def __init__(self, repo: Repository):
        self.__repository = repo

    def __build_by_tags(self, tasks: List[Task]) -> Dict[str, List[int]]:
        """
        Build a dictionary that associated tags with tagges Tasks.
        Method assumes tasks are received as they were inserted in repository.
        """
        by_tag = {}
        for id, task in enumerate(tasks):
            for tag in task.tags:
                if tag not in by_tag:
                    by_tag[tag] = [id]
                    continue
                if id not in by_tag[tag]:
                    by_tag[tag].append(id)
        return by_tag

    def create(self, title: str, desc: str, tags: List[str]) -> int:
        return self.__repository.create(Task(title, desc, tags))

    def get(self, id: int) -> Task:
        return self.__repository.get(id)

    def get_all(self) -> List[Task]:
        return self.__repository.get_all()

    def delete(self, id: int) -> bool:
        return self.__repository.delete(id)

    def update(self, id: int, title: str, desc: str, tags: List[str]) -> bool:
        return self.__repository.update(id, Task(title, desc, tags))

    def get_by_tags(self, tags: List[str]) -> List[Task]:
        """
        Return tasks that are tagged with at least one of the given tags.
        If `tags` param is empty list, will return all tasks.
        """
        # Business case example
        # Building `by_tag` for each query is horrible - Theta(n^2)
        # Ideally, you would cache the data structure in Repository -
        # Theta(1) on task creation and Theta(tags) for remove or update.
        tasks = self.__repository.get_all()
        if not tags:
            # Return all tasks if no query is specified
            return tasks
        by_tag = self.__build_by_tags(tasks)
        ids = set()
        for tag in tags:
            try:
                for id in by_tag[tag]:
                    ids.add(id)
            except KeyError:
                continue
        return [tasks[id] for id in ids]
