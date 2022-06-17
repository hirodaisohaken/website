var fs = require('fs');

const OldContent = [
    {
        year: 2018,
        content: require("./data/schedule_2018.json")
    },
    {
        year: 2019,
        content: require("./data/schedule_2019.json")
    },
    {
        year: 2020,
        content: require("./data/schedule_2020.json")
    },
    {
        year: 2021,
        content: require("./data/schedule_2021.json")
    },
]

OldContent.forEach(e => {
    if (!fs.existsSync("./content/events/" + e.year.toString())){
        fs.mkdirSync("./content/events/" + e.year.toString());
    }
    if (!fs.existsSync("./content/seminars/" + e.year.toString())){
        fs.mkdirSync("./content/seminars/" + e.year.toString());
    }
    if (!fs.existsSync("./content/other/" + e.year.toString())){
        fs.mkdirSync("./content/other/" + e.year.toString());
    }
    
    e.content.seminars.forEach(d => {
        var date = new Date(Date.parse(d.date));

        var fileouten = 
            `---
            title: "${d.subcategory}: ${d.speaker_en} ${d.affiliation_en == "" ? "(Hiroshima Univ.)" : "(" + d.affiliation_en + ")"}"
            date: ${d.date}
            description: "${date.toString().split(' ')[0]}. ${date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth().toString()}/${date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()} ${date.toString().split(' ')[4].slice(0,5)}- (JST) ${ ["Teams", "Zoom"].includes(d.place) ? "@online (" + d.place + ")" : d.place}"
            draft: false
            ---
            
            - Speaker:
            ${d.speaker_en} ${d.affiliation_en == "" ? "(Hiroshima Univ.)" : "(" + d.affiliation_en + ")"}
            - Date:
            ${date.toString().split(' ')[0]}. ${date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth().toString()}/${date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()} ${date.toString().split(' ')[4].slice(0,5)}- (JST) ${ ["Teams", "Zoom"].includes(d.place) ? "@online (" + d.place + ")" : d.place}
            - Title:
            ${d.title}
            
            <!--more-->
            
            - Abstract:
            ${d.abstract}
            `.replace(/\n( *)/g, "\n");
        fs.writeFile("./content/seminars/" + e.year.toString() + "/" + (date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth().toString()) + (date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()) + "_" + d.speaker_en.split(' ').slice(-1) + ".en.md", fileouten, 'utf8', () => {
          console.log("DONE! EN " + d.date);
        });

        var fileoutjp = 
            `---
            title: "${d.subcategory}: ${d.speaker_ja} ${d.affiliation_ja == "" ? "(広大)" : "(" + d.affiliation_ja + ")"}"
            date: ${d.date}
            description: "${date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth().toString()}/${date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()} (${JaDay(date.getDay())}) ${date.toString().split(' ')[4].slice(0,5)}- (JST) ${ ["Teams", "Zoom"].includes(d.place) ? "@オンライン (" + d.place + ")" : d.place}"
            draft: false
            ---
            
            - 発表者:
            ${d.speaker_ja} ${d.affiliation_ja == "" ? "(広大)" : "(" + d.affiliation_ja + ")"}
            - 日時:
            ${date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth().toString()}/${date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()} (${JaDay(date.getDay())}) ${date.toString().split(' ')[4].slice(0,5)}- (JST) ${ ["Teams", "Zoom"].includes(d.place) ? "@オンライン (" + d.place + ")" : d.place}
            - 題目:
            ${d.title}
            
            <!--more-->
            
            - 概要:
            ${d.abstract}
            `.replace(/\n( *)/g, "\n");
        fs.writeFile("./content/seminars/" + e.year.toString() + "/" + (date.getMonth() < 10 ? "0" + date.getMonth().toString() : date.getMonth().toString()) + (date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString()) + "_" + d.speaker_en.split(' ').slice(-1) + ".ja.md", fileoutjp, 'utf8', () => {
          console.log("DONE! JP " + d.date);
        });      
    });
    e.content.other.forEach(d => {

    });
    e.content.events.forEach(d => {

    });
})

function JaDay(i) {
    switch (i) {
        case 0: return("日");
        case 1: return("月");
        case 2: return("火");
        case 3: return("水");
        case 4: return("木");
        case 5: return("金");
        case 6: return("土");
    }
}