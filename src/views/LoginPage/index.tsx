import { useState } from 'react';
import "./index.css"
import { useNavigate } from "react-router-dom";
export default function LoginPage() {

    let navigate = useNavigate();

    var [username, setUsername] = useState("")
    var [password, setPassword] = useState("")

    var loginAction = () => {
        alert(username + " " + password)
    }

    var goSignUp = ()=> {
        navigate(`/signup`);
    }

    return (
        <div id="root-box">
            <div id="logo">
                Sign in
            </div>
            <div id="title">
                singin and enjoy together
            </div>

            {/* input box */}
            <div style={{
                marginTop: 50,
                width:400
            }}>
                <input type="text" placeholder='email or username' value={username} onChange={e => setUsername(e.target.value)} className="input-custom" />
                <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} className="input-custom" />
                
                <div id='box-create-account'>
                    <div id='remember'>
                        <input className='checkbox-custom' type={'checkbox'} />
                        <div style={{color:'#ffffff'}}>Remember me</div>
                    </div>
                    <div style={{color:'#68D886',cursor:'pointer'}} onClick={goSignUp}>Create new Account</div>
                </div>

                <button className="btn-custom" style={{marginLeft:4}} onClick={loginAction}>Login</button>
            </div>

            {/* input box */}



            {/* footer box */}
            <div className="footer" style={{
                clipPath: 'ellipse(135% 100% at -16.3% 100%)',
                backgroundColor: "#6adb8852",
                height: 100
            }}></div>

            <div className="footer" style={{
                clipPath: 'ellipse(135% 100% at 132.45% 100%)',
                backgroundColor: "#ffffff20",
                height: 100
            }}></div>
            {/* footer box */}
        </div>
    )
}

