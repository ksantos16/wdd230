const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener("click", () => {
    let myItem = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');

    list.appendChild(listItem);
    listItem.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);
    listBtn.addEventListener("click", function (e) {
        list.removeChild(listItem);
    })

    input.focus();

});
