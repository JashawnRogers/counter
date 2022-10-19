
let foundPlusBtn = document.getElementById('foundPlusBtn');
let foundMinusBtn = document.getElementById('foundMinusBtn');
let notFoundMinusBtn = document.getElementById('notFoundMinusBtn');
let notFoundPlusBtn = document.getElementById('notFoundPlusBtn');
let archivePlusBtn = document.getElementById('archivePlusBtn');
let archiveMinusBtn = document.getElementById('archiveMinusBtn');
let clearBtn = document.getElementById('clearBtn');
let totalCompleted = document.getElementById('totalCompleted');
let ul = document.getElementById('ul');
let deleteBtn = document.getElementById('clearAllBtn');

let foundAmount = document.getElementById('foundAmount');
let notFoundAmount = document.getElementById('notFoundAmount');
let archiveAmount = document.getElementById('archiveAmount');

let foundNumber = 0;
let notFoundNumber = 0;
let archiveNumber = 0;
let noticesCompleted = 0;

let currentDate = moment().format("MMMM Do, YYYY");
console.log(currentDate);

window.onload = () => {
    if (isNaN(foundAmount)){
        foundAmount.innerHTML = 0;
        localStorage.foundTotal = 0;

    } if (isNaN(notFoundAmount)) {
        notFoundAmount.innerHTML = 0;
        localStorage.notFoundTotal = 0;

    } if (isNaN(archiveAmount)) {
        archiveAmount.innerHTML = 0;
        localStorage.archiveTotal = 0;

    } if (isNaN(totalCompleted)) {
        totalCompleted.innerHTML = 0;
        localStorage.tCompleted = 0;
    } else {
        foundAmount.innerHTML = Number(localStorage.foundTotal);
        notFoundAmount.innerHTML = Number(localStorage.notFoundTotal);
        archiveAmount.innerHTML = Number(localStorage.archiveTotal);
        totalCompleted.innerHTML = Number(localStorage.tCompleted);
    }

}

// const add = (total, complete, totalText, completeText) => {
//     if (total == localStorage.foundtotal) {
//         if (typeof(Storage) !== "undefined"){
//             if (total){
//                 total = Number(total) + 1;
//                 complete = Number(complete) + 1;
//             }
//             totalText.innerHTML = total;
//             completeText.innerHTML = complete;
//         }
//     }
// }

// const subtract = (total, complete, totalText, completeText) => {
//     if (total == localStorage.foundtotal) {
//         if (typeof(Storage) !== "undefined"){
//             if (total){
//                 total = Number(total) - 1;
//                 complete = Number(complete) - 1;
//             }
//             totalText.innerHTML = total;
//             completeText.innerHTML = complete;
//         }
//     }
// }


deleteBtn.addEventListener('click', (e) => {
    ul.removeChild(ul.lastElementChild);
});

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var saveInfo = document.createElement('li');
    saveInfo.innerHTML = ` ${currentDate} Found Total: ${Number(localStorage.foundTotal)} | Not Found Total: ${Number(localStorage.notFoundTotal)} | Archive Total: ${Number(localStorage.archiveTotal)} | Total Completed: ${Number(localStorage.tCompleted)} ` ;
    saveInfo.classList.add('list-group-item');
    ul.appendChild(saveInfo);
    

})

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    foundAmount.innerHTML = 0;
    notFoundAmount.innerHTML = 0;
    archiveAmount.innerHTML = 0;
    totalCompleted.innerHTML = 0;
})
foundPlusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof(Storage) !== "undefined"){
        if (localStorage.foundTotal){
            localStorage.foundTotal = Number(localStorage.foundTotal) + 1;
            localStorage.tCompleted = Number(localStorage.tCompleted) + 1;
        }
        foundAmount.innerHTML = localStorage.foundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    } 
});

foundMinusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof(Storage) !== "undefined"){
        if (localStorage.foundTotal){
            localStorage.foundTotal = Number(localStorage.foundTotal) - 1;
            localStorage.tCompleted = Number(localStorage.tCompleted) - 1;
        }
        foundAmount.innerHTML = localStorage.foundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    } 
});

notFoundPlusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof(Storage) !== "undefined"){
        if (localStorage.notFoundTotal){
            localStorage.notFoundTotal = Number(localStorage.notFoundTotal) + 1;
            localStorage.tCompleted = Number(localStorage.tCompleted) + 1;
        }
        notFoundAmount.innerHTML = localStorage.notFoundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    } 
});
notFoundMinusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof(Storage) !== "undefined"){
        if (localStorage.notFoundTotal){
            localStorage.notFoundTotal = Number(localStorage.notFoundTotal) - 1;
            localStorage.tCompleted = Number(localStorage.tCompleted) - 1;
        }
        notFoundAmount.innerHTML = localStorage.notFoundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});

archivePlusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof(Storage) !== "undefined"){
        if (localStorage.archiveTotal){
            localStorage.archiveTotal = Number(localStorage.archiveTotal) + 1;
            localStorage.tCompleted = Number(localStorage.tCompleted) + 1;
        }
        archiveAmount.innerHTML = localStorage.archiveTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});
archiveMinusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof(Storage) !== "undefined"){
        if (localStorage.archiveTotal){
            localStorage.archiveTotal = Number(localStorage.archiveTotal) - 1;
            localStorage.tCompleted = Number(localStorage.tCompleted) - 1;
        }
        archiveAmount.innerHTML = localStorage.archiveTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});