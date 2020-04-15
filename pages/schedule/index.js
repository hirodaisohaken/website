const toml = require('toml');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const tmpl_path = path.join(process.cwd(), '/src/templates/')
const tmpl = require(tmpl_path + 'template.js');


// define variables
const tmplEjs = path.join(tmpl_path, '_template.ejs');
const viewPath = path.join(__dirname, '/view.ejs');
const schedule = toml.parse(
    fs.readFileSync(__dirname + '/schedule.toml', 'utf-8')
);

const viewElem = {
    css: {
        cls: {
            container: 'px-12 py-16 w-full lg:px-1/2 lg:w-auto',
            button: 'bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
        }
    },
    schedule: schedule
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


