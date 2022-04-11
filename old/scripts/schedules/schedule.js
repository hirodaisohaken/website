// Read in the schedule data though an xml request from the .json file based on the year.
const year = $("article").attr("id");

$.getJSON("/scripts/schedules/schedule_"+year+".json", function(scheduleData){
    const eventsInfo = document.querySelector('#eventsinfo'); // pull in the different html locations
    const otherInfo = document.querySelector('#otherinfo');
    const seminarInfo = document.querySelector('#seminarinfo');

    var events = scheduleData["events"]; // create array of the event data
    var other = scheduleData["other"];
    var seminars = scheduleData["seminars"];

    for (var n = 0; n<seminars.length; n++) {
        let h2SubCat = document.createElement('h2');
        h2SubCat.innerHTML = seminars[n].subcategory;
        seminarInfo.appendChild(h2SubCat);

        let paraSpeaker = document.createElement('p');
        paraSpeaker.innerText = seminars[n].speaker_ja + seminars[n].speaker_en;
        h2SubCat.appendChild(paraSpeaker);

        let paraAffiliation = document.createElement('p');
        paraAffiliation.innerText = seminars[n].affiliation_ja + seminars[n].affiliation_en;
        h2SubCat.appendChild(paraAffiliation);

        let paraTitle = document.createElement('p');
        paraTitle.innerText = seminars[n].title;
        h2SubCat.appendChild(paraTitle);

        let paraAuthor = document.createElement('p');
        paraAuthor.innerText = seminars[n].author;
        h2SubCat.appendChild(paraAuthor);

        let addReference = document.createElement('a');
        addReference.href = seminars[n].doi;
        addReference.innerText = seminars[n].reference;
        h2SubCat.appendChild(addReference);

        let paraPlace = document.createElement('p');
        paraPlace.innerText = seminars[n].place;
        h2SubCat.appendChild(paraPlace);

        let timeDate = document.createElement('time');
        timeDate.datetime = seminars[n].date;
        timeDate.innerText = "human readable";
        h2SubCat.appendChild(timeDate);
    };
    for (var n = 0; n<events.length; n++) {
        let h2SubCat = document.createElement('h2');
        h2SubCat.innerHTML = events[n].subcategory;
        eventsInfo.appendChild(h2SubCat);

        let paraPlace = document.createElement('p');
        paraPlace.innerText = events[n].place;
        h2SubCat.appendChild(paraPlace);

        let timeDate = document.createElement('time');
        timeDate.datetime = events[n].date;
        timeDate.innerText = "human readable";
        h2SubCat.appendChild(timeDate);
    };
    for (var n = 0; n<other.length; n++) {
        let h2SubCat = document.createElement('h2');
        h2SubCat.innerHTML = other[n].subcategory;
        otherInfo.appendChild(h2SubCat);

        let paraSpeaker = document.createElement('p');
        paraSpeaker.innerText = other[n].speaker_ja + other[n].speaker_en;
        h2SubCat.appendChild(paraSpeaker);

        let paraAffiliation = document.createElement('p');
        paraAffiliation.innerText = other[n].affiliation_ja + other[n].affiliation_en;
        h2SubCat.appendChild(paraAffiliation);

        let paraTitle = document.createElement('p');
        paraTitle.innerText = other[n].title;
        h2SubCat.appendChild(paraTitle);

        let paraPlace = document.createElement('p');
        paraPlace.innerText = other[n].place;
        h2SubCat.appendChild(paraPlace);

        let timeDate = document.createElement('time');
        timeDate.datetime = other[n].date;
        timeDate.innerText = "human readable";
        h2SubCat.appendChild(timeDate);
    };
});
