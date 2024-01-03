const addMoreButton = document.querySelector('.addMore');
const numberOfTasksToBeDone = document.querySelector('strong');
const orderedLists = document.querySelector('ol');

function updateTasks() {
    numberOfTasksToBeDone.textContent = document.getElementsByClassName('done').length;
}

addMoreButton.onclick = () => {
    let task = prompt('Enter the task to be added');
    let list = document.createElement('li');
    list.textContent = task;
    let doneButton = document.createElement('button');
    doneButton.classList.add('done');
    doneButton.textContent = 'Done';
    doneButton.onclick = () => {
        const itemToBeDeleted = doneButton.closest('li');
        document.querySelector('ol').removeChild(itemToBeDeleted);
        updateTasks();
    }
    list.appendChild(doneButton);
    document.querySelector('ol').appendChild(list);
    updateTasks();
}
