// create variables //
const body  = document.querySelector('body');
const title = document.createElement('div');
const rowCalcu = document.createElement('div');
const footer = document.createElement('div');

// assign classes 
title.classList.add('title');
rowCalcu.classList.add('rowCalculator');
footer.classList.add('footer');

// append div's to ...(body,e.g)
body.append(title,rowCalcu,footer);

// add textContents
title.textContent = "CALCULATOR";
footer.textContent = "Copyright © 2022 pachaB";


// for loop to create items in rowCalcu
const items = document.querySelector(".rowCalculator");
for (c = 0; c < 19; c++) {
    let cell = document.createElement("div");
    items.appendChild(cell).className = `item${c}`;
}

