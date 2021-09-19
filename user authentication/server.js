if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methoOverride = require('method-override');

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(methoOverride('_method'));


//home page
app.get('/', checkAuthenticated, (request, response) => {
    response.render('index.ejs', {name: request.user.name});
})

//login page
app.get('/login', checkNotAuthenticated, (request, response) => {
    response.render('login.ejs');
})

//login page for POST
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))


//register page
app.get('/register', checkNotAuthenticated, (request, response) => {
    response.render('register.ejs');
})

//register for POST
app.post('/register', checkNotAuthenticated, async (request, response) => {
    try{
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        //the req.body property contains key-value pairs of data submitted in the request body.
        users.push({
            id: Date.now().toString(),
            name: request.body.name,
            email: request.body.email,
            password: hashedPassword
        })
        response.redirect('/login');
    } catch {
        response.redirect('/register');
    }
})

app.delete('/logout',(request, response) => {
    request.logOut();
    response.redirect('/login');
})

function checkAuthenticated(request, response, next){
    if ( request.isAuthenticated() ){
        return next();
    }
    response.redirect('/login')
}

function checkNotAuthenticated(request, response, next){
    if (request.isAuthenticated()) {
        return response.redirect('/');
    }
    next();
}


app.listen(3000);