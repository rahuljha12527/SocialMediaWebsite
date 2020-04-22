const User=require('../models/user');

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
  
    if(req.body.password!=req.body.confirm_password){
           return res.redirect('back');       
    }

    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in sigining up');
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while sigining up');
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    })


}
// sign inand create a session for a user
module.exports.createSession=function(req,res){
    
    

}