const toml = require('toml');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const tmpl_path = path.join(process.cwd(), '/src/templates/')
const tmpl = require(tmpl_path + 'template.js');


// define variables
const tmplEjs = path.join(tmpl_path, '_template.ejs');
const viewPath = path.join(__dirname, '/view.ejs');
const members = toml.parse(
    fs.readFileSync(__dirname + '/members.toml', 'utf-8')
);

// const staff = Object.values(members.member).filter(function(el) {
//     return el.position == 'staff';
// });
// console.log(staff);

// const pickPos = (obj, position) => {
//     Object.values(obj).filter((el) => {
//         return el.position == position;
//     })
// };
function pickPos(obj, position) {
    return Object.values(obj).filter((el) => {
        return el.position == position
    })
}

const staff = pickPos(members.member, 'staff');
const student = pickPos(members.member, 'student');
// const student = Object.values(members.member).filter(function(el) {
//     return el.position == 'student';
// })
// console.log(student);

const viewElem = {
    css: {
        cls: {
            container: 'px-12 py-16 w-full'
        }
    },
    staff: staff,
    student: student,
    // member: [members]
};



exports.render_toHtml = () => {
    ejs.renderFile(tmplEjs, {
        headerElem: tmpl.headerElem,
        footerElem: tmpl.footerElem,
        view: {
            path: viewPath,
            elem: viewElem
        }
    },
    (err, html) => {
        if (err) throw err;
        const pattern = '/src';
        const replace = '/public';
        let filename = __filename;

        filename = filename.replace(pattern, replace).replace(/js/g, 'html');
        fs.writeFile(filename, html, 'utf-8', (err) => {
            if (err) throw err;
        });
    })
};


