import { useState } from 'react';
import "./index.css"
export default function LoginPage() {
    var [username,setUsername] = useState("")
    var [password,setPassword] = useState("")

    var loginAction = ()=>{
        alert(username+" "+password)
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
                marginTop:50
            }}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="input-custom"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="input-custom"/>
                <button className="btn-custom" onClick={loginAction}>Login</button>
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

