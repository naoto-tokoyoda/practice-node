const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// passing data from passport, email, and id
function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email);

        //if email is not correct
        if (user == null){
            return done(null, false, { message:"The email you entered is not found." })
        }

        try {
            // if password and bcrypted password are matched
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, {message: "The password you entered is not matched."})
            }
        } catch (e){
            return done(e);
        }

    }
    
    passport.use(new LocalStrategy({ usernameField: 'email' }, 
    authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => { 
        return done(null, getUserById(id))
     });

}

module.exports = initialize;