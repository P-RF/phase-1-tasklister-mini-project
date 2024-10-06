document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();
    handleToDo(e.target.elements['new-task-description'].value);
    e.target.reset();
  });
});

function handleToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')

  btn.textContent = 'x';
  btn.addEventListener('click', () => {
    p.remove();
});

p.textContent = `${todo} `
p.appendChild(btn);

document.querySelector('#tasks').appendChild(p);
}