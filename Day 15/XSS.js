// Cross Site Scripting (XSS) Example

const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: true}));
app.get('/', (req, res)=>{
    res.send(`
        <form action="/script" method="post">
            <input type="text" name="message" placeholder="Enter message"/>
            <button>POST</button>
        </form>
    `);
});

app.post('/script', (req, res)=>{
    res.send(`Message: ${req.body.message}`);
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});

// Note: This code is intentionally vulnerable to XSS attacks for educational purposes.
// In a production environment, always sanitize user inputs to prevent XSS vulnerabilities.


// to prevent XSS, use escape-html package

const escapeHtml = require('escape-html');

app.get('/safe', (req, res)=>{
    res.send(`
        <form action="/safe-script" method="post">
            <input type="text" name="message" placeholder="Enter message"/>
            <button>POST</button>
        </form>
    `);
});


app.post('/safe-script', (req, res)=>{
    const safeMessage = escapeHtml(req.body.message);
    res.send(`Message: ${safeMessage}`);
});


// another way is sanitize-html package
// it allows some HTML tags and attributes while removing potentially harmful ones

const sanitize = require('sanitize-html');

app.get('/sanitized', (req, res)=>{
    res.send(`
        <form action="/sanitized-script" method="post">
            <input type="text" name="message" placeholder="Enter message"/>
            <button>POST</button>
        </form>
    `);
}
);

app.post('/sanitized-script', (req, res)=>{
    const rawInput = req.body.message;
    const cleanMessage = sanitize(rawInput, {
        allowedTags: ['b', 'i', 'em', 'strong', 'a'],
        allowedAttributes: {}
    });
    res.send(`
        <h2>Sanitized Output</h2>
        <div>${cleanMessage}</div>
        `);
});

