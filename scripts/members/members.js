// Read in the members data though an xml request from the .json file based on the language.
const language = $("html").attr("lang");
//let data;
//if (language === "en") {data = } else{data = "/scripts/members/members.json"}
$.getJSON("/scripts/members/members_"+language+".json", function(memberData){
    const studinfo = document.querySelector('#studentinfo'); // pull in the different html locations
    const staffinfo = document.querySelector('#staffinfo');
    const researcherinfo = document.querySelector('#researcherinfo');

    var staff = memberData["staff jp"]; // create array of staff data
    var vistors = memberData["vistors jp"];
    var students = memberData["students jp"];

    for (var n = 0; n<staff.length; n++) {
        let divName = document.createElement('div');
        divName.innerHTML = staff[n].name;
        staffinfo.appendChild(divName);

        let imgPic = document.createElement('img');
        imgPic.src = staff[n].picture;
        divName.appendChild(document.createElement('br'));
        divName.appendChild(imgPic);

        let divTitle = document.createElement('div');
        divTitle.innerHTML = staff[n].title;
        staffinfo.appendChild(divTitle);

        let divResearch = document.createElement('div');
        divResearch.innerHTML = staff[n].researchInterests;
        staffinfo.appendChild(divResearch);

        let addWebpage = document.createElement('a');
        addWebpage.href = staff[n].personalWebpage;
        addWebpage.innerHTML = "Research page"
        divResearch.appendChild(document.createElement('br'));
        divResearch.appendChild(addWebpage);

        let divEmail = document.createElement('div');
        divEmail.innerHTML = staff[n].emailAddress;
        staffinfo.appendChild(divEmail);

        let divRoom = document.createElement('div');
        divRoom.innerHTML = staff[n].roomNumber;
        staffinfo.appendChild(divRoom);

        let addWorks = document.createElement('a');
        addWorks.href = staff[n].researchWorks;
        addWorks.innerHTML = "Research Works"
        divResearch.appendChild(document.createElement('br'));
        divResearch.appendChild(addWorks);
    };
    for (var n = 0; n<vistors.length; n++) {
        let divName = document.createElement('div');
        divName.innerHTML = vistors[n].name;
        researcherinfo.appendChild(divName);

        let divTitle = document.createElement('div');
        divTitle.innerHTML = vistors[n].title;
        researcherinfo.appendChild(divTitle);

        let divResearch = document.createElement('div');
        divResearch.innerHTML = vistors[n].researchInterests;
        researcherinfo.appendChild(divResearch);

        let divEmail = document.createElement('div');
        divEmail.innerHTML = vistors[n].emailAddress;
        researcherinfo.appendChild(divEmail);

        let divRoom = document.createElement('div');
        divRoom.innerHTML = vistors[n].roomNumber;
        researcherinfo.appendChild(divRoom);

        let addWorks = document.createElement('a');
        addWorks.href = vistors[n].researchWorks;
        addWorks.innerHTML = "Research Works"
        divResearch.appendChild(document.createElement('br'));
        divResearch.appendChild(addWorks);
    };
    for (var n = 0; n<students.length; n++) {
        let divName = document.createElement('div');
        divName.innerHTML = students[n].name;
        studinfo.appendChild(divName);

        let divYear = document.createElement('div');
        divYear.innerHTML = students[n].year;
        studinfo.appendChild(divYear);

        let divResearch = document.createElement('div');
        divResearch.innerHTML = students[n].researchInterests;
        studinfo.appendChild(divResearch);

        let divEmail = document.createElement('div');
        divEmail.innerHTML = students[n].emailAddress;
        studinfo.appendChild(divEmail);

        let divRoom = document.createElement('div');
        divRoom.innerHTML = students[n].roomNumber;
        studinfo.appendChild(divRoom);

        let addWorks = document.createElement('a');
        addWorks.href = students[n].researchWorks;
        addWorks.innerHTML = "Research Works"
        divResearch.appendChild(document.createElement('br'));
        divResearch.appendChild(addWorks);
    };
});
