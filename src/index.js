import './style.css';
import GenerateList from '../modules/list.js';

const refreashBtn = document.querySelector('#refresh');

const list = new GenerateList();
list.displayList();

list.reloadWindow();
list.deleteAll();
refreashBtn.addEventListener('click', () => {
  window.location.reload();
});
