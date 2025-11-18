// CSRF --> Cross-Site Request Forgery
// It is an attack that tricks the victim into submitting a malicious request.

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3002;

const session = require("express-session");
const csrf = require("csurf");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);

const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

app.get("/", (req, res) => {
  res.send(`
        <form action="/process" method="post">
            <input type="hidden" name="_csrf" value="${req.csrfToken()}"/>
            <input type="text" name="amount" placeholder="Enter amount"/>
            <button>Transfer</button>
        </form>
    `);
});

app.post("/process", (req, res) => {
  const amount = req.body.amount;
  res.send(`Transferred amount: ${amount}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Note: This code demonstrates CSRF protection using csurf middleware.
// Always include CSRF tokens in forms to protect against CSRF attacks.

// ---------------------------------------------------------------------------

// In a production environment, ensure proper session management and security practices.
app.use((err, req, res, next) => {
  if (err.code === "EBADCSRFTOKEN") {
    res.status(403).send("Form tampered with");
  } else {
    next(err);
  }
});
app.get("/no-csrf", (req, res) => {
  res.send(`
        <form action="/no-csrf-process" method="post">
            <input type="text" name="amount" placeholder="Enter amount"/> 
            <button>Transfer</button>
        </form>
    `);
});

app.post("/no-csrf-process", (req, res) => {
  const amount = req.body.amount;
  res.send(`Transferred amount without CSRF protection: ${amount}`);
});

// The above /no-csrf and /no-csrf-process routes are intentionally left without CSRF protection
// to demonstrate the vulnerability. In a real application, avoid such practices.
