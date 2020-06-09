const development={
    name:'development',
    asset_path:'/assets',
    session_cookie_key:'blahsomething',
    db:'social_development',
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port:587,
        secure:'false',
        auth:{
            user:'rahuljha12527@gmail.com',
            pass:'40706399'
        }
    },
    google_client_id:"996167842315-ktk0pms76gknj2jgnni1t0iaeva44666.apps.googleusercontent.com",
    google_client_secret:"QKIjszH5ET2T5ZyT0g_N7-o1",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",
    jwt_secret:  'social'
}

const production={
    name:'production'
}

module.exports=development;
