import style from "./css/login.module.css"
import { Link } from "react-router-dom"

const Login=()=>{
    return(
<div>
    
        <div id={style.maindiv3}>
            
            <div id={style.m1}>
            <Link to="/home"><i class="fa-sharp fa-solid fa-circle-xmark" id={style.x}></i></Link>
            <div id={style.d1}>
                <div>
                {/* <label htmlFor="" id={style.l1}>EMAIL</label> */}
                <br /><i class="fa-solid fa-envelope" id={style.ii1}></i><input type="text" placeholder="Email"/>
                <br /><br />
                {/* <label htmlFor="" id={style.l2}>PASSWORD</label> */}
                <br /><i class="fa-solid fa-key" id={style.ii2}></i><input type="text" placeholder="Password"/><br /><br />
                <br /><button>Login</button>
                <br /><br />
                <p>---------- or Sign up with ----------</p>
                <br />
                <a href="https://myaccount.google.com/"><i class="fa-brands fa-google" id={style.i1}></i></a>
                <a href="https://www.facebook.com/login/"><i class="fa-brands fa-square-facebook" id={style.i2}></i></a>
                </div>
            </div>
            <div id={style.d2}>
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
        </div>
        </div>
        
</div>
    )
}
export default Login
