import MakeList from './listclass.js';

class GenerateList {
  constructor() {
    this.todoList = [];
  }

  add = (value) => {
    if (value === '') return;
    const todo = new MakeList(value);
    this.todoList.push(todo);
    this.showList();
  };

  // save lists on local storage
  saveBooks=() => {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  // show todos
  showList = () => {
    const listContainer = document.querySelector('.todo-list');
    // remove all existing todos
    listContainer.innerHTML = '';
    this.todoList.forEach((item, indexs) => {
      const li = document.createElement('li');
      li.classList.add('list-item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('checked', false);
      li.appendChild(checkbox);
      const text = document.createElement('input');
      text.type = 'text';
      text.setAttribute('readonly', 'readonly');
      text.classList.add('description');
      li.appendChild(text);
      if (item.completed === true) {
        checkbox.checked = true;
        text.classList.add('decorated');
      } else {
        checkbox.checked = false;
        text.classList.remove('decorated');
      }
      text.value = `${item.description}`;
      const button1 = document.createElement('button');
      button1.classList.add('edit');
      li.appendChild(button1);
      button1.innerHTML = 'Edit';
      const button = document.createElement('button');
      li.appendChild(button);
      button.innerHTML = '<i class="fa-solid fa-trash trash"></i>';
      listContainer.appendChild(li);
      item.index = indexs + 1;
      text.setAttribute('id', `${item.index}`);
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          item.completed = true;
          text.classList.toggle('decorated');
          this.saveBooks();
        } else {
          item.completed = false;
          text.classList.toggle('decorated');
          this.saveBooks();
        }
      });
      button1.addEventListener('click', () => {
        if (button1.innerText === 'Edit') {
          text.removeAttribute('readonly');
          text.focus();
          button1.innerHTML = 'Save';
          item.description = text.value;
        } else {
          text.setAttribute('readonly', 'readonly');
          item.description = text.value;
          this.showList();
          this.saveBooks();
        }
      });
      button.addEventListener('click', () => {
        this.todoList.splice(indexs, 1);
        this.showList();
        this.saveBooks();
      });
    });
  };

  reloadWindow =() => {
    window.addEventListener('DOMContentLoaded', () => {
      if (localStorage.getItem('todos')) {
        this.todoList = JSON.parse(localStorage.getItem('todos'));
        this.showList();
      }
    });
  }

  displayList = () => {
    const input = document.querySelector('#inputs');
    const submit = document.querySelector('#create');
    submit.addEventListener('click', () => {
      if (input.value === '') {
        return null;
      }
      this.add(input.value);
      this.saveBooks();
      input.value = '';
      return input;
    });
  };

  deleteAll=() => {
    const clearAll = document.querySelector('.clear-btn');
    clearAll.addEventListener('click', () => {
      const filteredArray = this.todoList.filter((item) => !item.completed);
      this.todoList = filteredArray;
      this.showList();
      this.saveBooks();
    });
  }
}
export default GenerateList;
