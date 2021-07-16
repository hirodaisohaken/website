
// Read in the membership data though and xml request, should be formatted as .csv file
$.get('/scripts/members.csv', (data)=>{
    var memberData = $.csv.toArrays(data);
    generateHTML(memberData.flat(1));
});

// Generate the html div data
function generateHTML(memberData){
    let n = 0;
    const studinfo = document.querySelector('#studentinfo'); // pull in the different html locations
    const staffinfo = document.querySelector('#staffinfo');

    while (memberData[n] !== 'Students') {
        if ( (n%5 == 0) && n!==0 ) {
            let imgTag = document.createElement('img');
            imgTag.src = memberData[n];
            imgTag.className ='staffImgs';
            staffinfo.appendChild(imgTag);
        } else { 
            let divName = document.createElement('div');
            divName.innerHTML = memberData[n];
            staffinfo.appendChild(divName);
        };
        n++;
    };
    n++;
    while (n < memberData.length) {
        let divName = document.createElement('div');  // what html to make
        divName.innerHTML = memberData[n];
        studinfo.appendChild(divName);
        n++;
    };
};
