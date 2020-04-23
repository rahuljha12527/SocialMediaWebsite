const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user');
// authentication using passport
passport.use(new LocalStrategy({
       usernameField:'email'
},
    function(email,password,done){
          User.findOne({email:email}, function(err,user){
              if(err){
                  console.log('Error in finding user-->Passport');
                  return done(err);
              }

              if(!user||user.password!=password){
                  console.log('Invalid Username/Password');
                  return done(null,false);
              }

              return done(null,user);
          });
    }

));



// serializing the user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
     done(null,user.id);
})


// desirializing the user from the cookies
passport.deserializeUser(function(err,user){
      User.findById(id,function(err,user){
          if(err){
              console.log('Error in finding user--> Passport');
              return done(err);
          }
           return done(null,user);
      });    
});


module.exports=passport;