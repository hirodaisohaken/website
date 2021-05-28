

// Read in the membership data though and xml request, should be formatted as .csv file
$.get('/scripts/members.csv', (data)=>{
    var memberData = $.csv.toArrays(data);
    generateHTML(memberData.flat(1));
});

// Generate the html div data to be appended to <div class="px-12 py-16 w-full">
function generateHTML(memberData){
    let n = 0;
    const titles = document.querySelector('#membershipinfo'); // pull in the different html locations

    while (n < memberData.length) {
        let divName = document.createElement('div');  // what html to make
        //divName.className = 'col-auto';
        divName.className = 'col-auto justify-center'; //justify-center appears to be broken
        divName.innerHTML = memberData[n];
        titles.appendChild(divName);
        n++;
    };
//<div id="names" class="grid grid-cols-10 gap-2 h-12 py-2 align-center justify-center">
//        <div class="col-span-3 align-center justify-center">
//            <span class="rounded-full h-10 w-10 flex items-center justify-center bg-blue-900 inline-flex">C</span>
//            <span class="ml-3">松尾　大和</span>
//        </div>
//        <div class="col-span-1 align-center justify-center">D2</div>
//        <div class="col-span-3 align-center justify-center">格子QCD、素粒子物理学</div>
//        <div class="col-span-2 align-center justify-center">y-matsuo@hiroshima-u.ac.jp</div>
//        <div class="col-span-1 align-center justify-center">B201</div>
};
