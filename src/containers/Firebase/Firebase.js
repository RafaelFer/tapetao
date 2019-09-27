import app from "firebase/app";
import "firebase/auth";
import 'firebase/database';



import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyCjlbKCtGX-DXkpwdpg67Xmmb-eTXeE0h0",
    authDomain: "tapetao-699a1.firebaseapp.com",
    databaseURL: "https://tapetao-699a1.firebaseio.com",
    projectId: "tapetao-699a1",
    storageBucket: "tapetao-699a1.appspot.com",
    messagingSenderId: "907943320445",
    appId: "1:907943320445:web:1924e44822bda650bf4a14",
    measurementId: "G-9DCPSB1GFX"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }


    getAllAtletas(){
        return new Promise((resolve, reject)=>{
            let ref = this.db.ref('atletas');
            resolve(ref).catch(reject("erro"))
        }) 
    }

}
export default Firebase;
