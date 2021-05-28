

// Read in the membership data though and xml request, should be formatted as .csv file
$.get('/scripts/members.csv', (data)=>{
    var memberData = $.csv.toArrays(data);
    generateHTML(memberData);
});

// Generate the html div data to be appended to <div class="px-12 py-16 w-full">
function generateHTML(memberData){
    const titles = document.querySelector('#titles');

    let divName = document.createElement('div');
    divName.className = 'col-span-3';
    divName.innerHTML = memberData[0][0];
    titles.appendChild(divName);

    let divTitle = document.createElement('div');
    divTitle.className = 'col-span-1';
    divTitle.innerHTML = memberData[0][1];
    titles.appendChild(divTitle);

    let divField = document.createElement('div');
    divField.className = 'col-span-3';
    divField.innerHTML = memberData[0][2];
    titles.appendChild(divField);

    let divEmail = document.createElement('div');
    divEmail.className = 'col-span-2';
    divEmail.innerHTML = memberData[0][3];
    titles.appendChild(divEmail);

    let divRoom = document.createElement('div');
    divRoom.className = 'col-span-1';
    divRoom.innerHTML = memberData[0][4];
    titles.appendChild(divRoom);
};

