// BUTTONS
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

// COUNTER GROUPS
const foundGroup = document.getElementById('foundGroup');
const notFoundGroup = document.getElementById('notFoundGroup');
const archiveGroup = document.getElementById('archiveGroup');

//USER INPUTS
let foundAmount = document.getElementById('foundAmount');
let notFoundAmount = document.getElementById('notFoundAmount');
let archiveAmount = document.getElementById('archiveAmount');

// SAVE DATE
let currentDate = moment().format("MMMM Do, YYYY");

// LOAD LOCAL STORAGE VALUES IF AVAILABLE
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
        foundAmount.value = Number(localStorage.foundTotal);
        notFoundAmount.value = Number(localStorage.notFoundTotal);
        archiveAmount.value = Number(localStorage.archiveTotal);
        totalCompleted.innerHTML = Number(localStorage.tCompleted);
    }
}


// DELETE LAST ENTRY
deleteBtn.addEventListener('click', (e) => {
    ul.removeChild(ul.lastElementChild);
});

// SVAE BUTTON
saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.saveDate = currentDate;
    let saveInfo = document.createElement('li');
    saveInfo.innerHTML = ` ${localStorage.saveDate} Found Total: ${Number(localStorage.foundTotal)} | Not Found Total: ${Number(localStorage.notFoundTotal)} | Archive Total: ${Number(localStorage.archiveTotal)} | Total Completed: ${Number(localStorage.tCompleted)} ` ;
    saveInfo.classList.add('list-group-item');
    ul.appendChild(saveInfo);
    return saveInfo;
})


// CLEAR BUTTON 
clearBtn.addEventListener('click', () => {
    localStorage.foundTotal = 0;
    localStorage.notFoundTotal = 0;
    localStorage.archiveTotal = 0;
    localStorage.tCompleted = 0;

    foundAmount.value = Number(localStorage.foundTotal);
    notFoundAmount.value = Number(localStorage.notFoundTotal);
    archiveAmount.value = Number(localStorage.archiveTotal);
    totalCompleted.innerHTML = Number(localStorage.tCompleted);
});


// EVENTS FOR USER INPUT FUNCTIONALITY
archiveAmount.addEventListener('change', () => {
    if (archiveAmount.value < Number(localStorage.archiveTotal)) {
        let placehold = Number(localStorage.archiveTotal) - archiveAmount.value;
        localStorage.tCompleted = Number(localStorage.tCompleted) - placehold;
        localStorage.archiveTotal = Number(archiveAmount.value);
        totalCompleted.innerHTML = localStorage.tCompleted;
    } else {
        localStorage.tCompleted = (Number(localStorage.tCompleted) - Number(localStorage.archiveTotal)) + Number(archiveAmount.value);
        localStorage.archiveTotal = Number(archiveAmount.value);
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});

notFoundAmount.addEventListener('change', () => {
    if (notFoundAmount.value < Number(localStorage.notFoundTotal)) {
        let placehold = Number(localStorage.notFoundTotal) - notFoundAmount.value;
        localStorage.tCompleted = Number(localStorage.tCompleted) - placehold;
        localStorage.notFoundTotal = Number(notFoundAmount.value);
        totalCompleted.innerHTML = localStorage.tCompleted;
    } else {
        localStorage.tCompleted = (Number(localStorage.tCompleted) - Number(localStorage.notFoundTotal)) + Number(notFoundAmount.value);
        localStorage.notFoundTotal = Number(notFoundAmount.value);
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});

foundAmount.addEventListener('change', () => {
    if (foundAmount.value < Number(localStorage.foundTotal)) {
        let placehold = Number(localStorage.foundTotal) - foundAmount.value;
        localStorage.tCompleted = Number(localStorage.tCompleted) - placehold;
        localStorage.foundTotal = Number(foundAmount.value);
        totalCompleted.innerHTML = localStorage.tCompleted;
    } else {
        localStorage.tCompleted = (Number(localStorage.tCompleted) - Number(localStorage.foundTotal)) + Number(foundAmount.value);
        localStorage.foundTotal = Number(foundAmount.value);
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});

// EVENTS FOR CLICK FUNCTIONALITY
foundGroup.addEventListener('click', (e) => {
    if (e.target === foundPlusBtn){
        localStorage.foundTotal = Number(localStorage.foundTotal) + 1;
        localStorage.tCompleted = Number(localStorage.tCompleted) + 1;
        foundAmount.value = localStorage.foundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    } else if (e.target === foundMinusBtn) {
        localStorage.foundTotal = Number(localStorage.foundTotal) - 1;
        localStorage.tCompleted = Number(localStorage.tCompleted) - 1;
        foundAmount.value = localStorage.foundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});

notFoundGroup.addEventListener('click', (e) => {
    if (e.target === notFoundPlusBtn){
        localStorage.notFoundTotal = Number(localStorage.notFoundTotal) + 1;
        localStorage.tCompleted = Number(localStorage.tCompleted) + 1;
        notFoundAmount.value = localStorage.notFoundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    } else if (e.target === notFoundMinusBtn) {
        localStorage.notFoundTotal = Number(localStorage.notFoundTotal) - 1;
        localStorage.tCompleted = Number(localStorage.tCompleted) - 1;
        notFoundAmount.value = localStorage.notFoundTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});

archiveGroup.addEventListener('click', (e) => {
    if (e.target === archivePlusBtn){
        localStorage.archiveTotal = Number(localStorage.archiveTotal) + 1;
        localStorage.tCompleted = Number(localStorage.tCompleted) + 1;
        archiveAmount.value = localStorage.archiveTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    } else if (e.target === archiveMinusBtn) {
        localStorage.archiveTotal = Number(localStorage.archiveTotal) - 1;
        localStorage.tCompleted = Number(localStorage.tCompleted) - 1;
        archiveAmount.value = localStorage.archiveTotal;
        totalCompleted.innerHTML = localStorage.tCompleted;
    }
});

// ATTEMPT TO CREATE FUNCTION TO ELIMINATE REDUNDANCY
// const userInputCalc = (user, storageTotal, categoryTotal, uiTotal) => {
//     if (user < Number(categoryTotal)) {
//         let placehold = Number(categoryTotal) - user;
//         storageTotal = Number(storageTotal) - placehold;
//         categoryTotal = Number(user);
//         uiT.innerHTML = storageTotal;
//     } else {
//         storageTotal = (Number(storageTotal) - Number(categoryTotal)) + Number(user);
//         categoryTotal = Number(user);
//         uiTotal.innerHTML = storageTotal;
//     }
// };