import './style.css';

const todo = [
  {
    description: 'going to the movie',
    completed: true,
    index: 0,
  },
  {
    description: 'going to the museum',
    completed: true,
    index: 1,
  },
  {
    description: 'going to the stadium',
    completed: true,
    index: 2,
  },
  {
    description: 'going to the summit',
    completed: true,
    index: 3,
  },
];
function populateList() {
  const uList = document.querySelector('.list-items');
  todo.forEach((speaker) => {
    const lists = document.createElement('li');
    lists.classList.add('speaker-card');
    uList.appendChild(lists);
    lists.innerText = `${speaker.description}`;
  });
}
window.addEventListener('DOMContentLoaded', populateList);