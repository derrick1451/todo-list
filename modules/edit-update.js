import MakeList from './listclass.js';

class GenerateList {
  constructor() {
    this.todoList = [];
  }

  add = (value) => {
    const todo = new MakeList(value);
    this.todoList.push(todo);
    return this.todoList;
  };

  edittask(value){
    this.todoList.map((list)=>{
        list.description = value
    })
    return this.todoList

  }
  updateCompleteStatus(value){
    this.todoList.map((list)=>{
        list.completed = value
    })
    return this.todoList

  }
  removeAllCompleted(){
    const filteredArray = this.todoList.filter((item) => !item.completed);
    //   this.todoList = filteredArray;
    return filteredArray
  }
}
export default GenerateList;