module.exports.profile=function(req,res){
   return res.render('users_profile',{
       title:'users'
   })
}
// render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:'Social | Sign Up'
    })
}
// render the sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:'Social | Sign In'
    })
}

module.exports.create=function(req,res){
    // TODO later 
}
// sign inand create a session for a user
module.exports.createSession=function(req,res){
    // Todo later
}