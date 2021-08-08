
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
    const researcherinfo = document.querySelector('#researcherinfo');

    while (memberData[n] !== 'Researchers') {
        let divName = document.createElement('div');
        divName.innerHTML = memberData[n];
        staffinfo.appendChild(divName);
        n++;
    };
    n++;
    while (memberData[n] !== 'Students') {
        let divName = document.createElement('div');  // what html to make
        divName.innerHTML = memberData[n];
        researcherinfo.appendChild(divName);
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
