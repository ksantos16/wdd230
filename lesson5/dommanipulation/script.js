const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener("click", () => {
    let myItem = input.value;
    if (myItem.length == 0) {
        list.innerHTML = "No input given";
    } else {
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

    }
});
