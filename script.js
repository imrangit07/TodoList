let allListItems = [
    {
        item: "Wake up early",
        date: '2025-03-09',
        time: '06/00',
    },
    {
        item: "Exercise for 30 minutes",
        date: '2025-03-09',
        time: '06/30',
    },
];



printLists();
document.querySelector("#add-btn")
.addEventListener("click", () => {
    let date = document.querySelector("#input-date").value;
    let time = document.querySelector("#input-time").value;
    let inputDisplay = document.querySelector("#input-display");
    let inputList = inputDisplay.value;

    if (inputList == '') {
        alert("Please Enter Todo List");
        inputDisplay.focus();
        return;
    } else if (date == "") {
        alert("please Select Date For Your List");
        return;
    } else if (time == "") {
        alert("please Select Time For Your List");
        return;
    }

    console.log(inputList);

    allListItems.push({ item: inputList, date: date, time: time });
    inputDisplay.value = ``;
    inputDisplay.focus();

    printLists();

})

function printLists() {
    let allLists = document.querySelector(".all-Lists");
    let printList = ``;
    for (let i = 0; i < allListItems.length; i++) {
        printList += `
    <div>
    <span class="list-item">${allListItems[i].item}</span>
    <span>${allListItems[i].date}</span>
    <span>${allListItems[i].time}</span>
    <button class="delete-btn" onclick="allListItems.splice(${i},1); printLists();">Delete</button>
    </div>`;
    };

    allLists.innerHTML = printList;
}