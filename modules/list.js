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

  saveBooks=() => {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  showList = () => {
    const listContainer = document.querySelector('.todo-list');
    listContainer.innerHTML = '';
    this.todoList.forEach((item, indexs) => {
      const li = document.createElement('li');
      li.classList.add('list-item');
      const x = document.createElement('input');
      x.setAttribute('type', 'checkbox');
      li.appendChild(x);
      const text = document.createElement('input');
      text.type = 'text';
      text.setAttribute('readonly', 'readonly');
      text.classList.add('description');
      li.appendChild(text);
      text.value = `${item.description}`;
      const button1 = document.createElement('button');
      li.appendChild(button1);
      button1.innerHTML = 'edit';
      const button = document.createElement('button');
      li.appendChild(button);
      button.innerHTML = '<i class="fa-solid fa-trash"></i>';
      listContainer.appendChild(li);
      item.index = indexs + 1;
      text.setAttribute('id', `${item.index}`);
      button1.addEventListener('click', () => {
        if (button1.innerText.toLocaleLowerCase() === 'edit') {
          text.removeAttribute('readonly');
          text.focus();
          button1.innerHTML = 'save';
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
}
export default GenerateList;
