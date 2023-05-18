import MakeList from './listclass.js';

class GenerateList {
  constructor() {
    this.todoList = [];
  }

  add = (value) => {
    if (value === '') return;
    const todo = new MakeList(value);
    this.todoList.push(todo);
  };

  removeTaskById = (id) => {
    const tasksLeft = this.todoList.filter((task) => task.id !== id);
    tasksLeft.forEach((task, index) => {
      task.id = index + 1;
    });
    return tasksLeft;
  }
}
export default GenerateList;