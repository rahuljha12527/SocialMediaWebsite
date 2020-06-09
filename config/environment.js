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
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIALSESSION_COOKIE_KEY,
    
    db:process.env.CODIEAL_DB,
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',//dekho file yehi hai niche terminal me process.env.codeial_asset_event per nahi aa raha
        port:587,
        secure:'false',
        auth:{
            user:process.env.CODEIAL_GMAIL_USERNAME,
            pass:process.env.CODEIAL_GMAIL_PASSWORD
        }
    },
    google_client_id:process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret:process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url:process.env.CODEIAL_GOOGLE_CALLBACK_URL,
    jwt_secret: process.env.CODEIAL_JWT_SECRET,
}

module.exports=eval(process.env.CODEIAL_ENVIRONMENT)==undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);
