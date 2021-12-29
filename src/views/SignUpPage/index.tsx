import { useState } from "react"
import { useNavigate } from "react-router-dom";
function SignUpPage() {
    var navigate = useNavigate()
    var [firstName, setFirstName] = useState("")
    var [lastName, setLastName] = useState("")
    var [username, setUsername] = useState("")
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")

    var signUpAction = () => {
        alert(username + " " + password)
    }

    var goLogin = ()=>{
        navigate("/login")
    }
    return (
        <div id="root-box">
            <div id="logo">
                Sign up
            </div>
            <div id="title">
                Create you account and enjoy you conversion
            </div>

            {/* input box */}
            <div style={{
                marginTop: 50,
                width: 400
            }}>
                <div style={{ display: 'flex' }}>
                    <input style={{
                        marginRight: 10
                    }} type="text" placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)} className="input-custom" />
                    <input type="text" placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)} className="input-custom" />
                </div>
                <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} className="input-custom" />
                <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} className="input-custom" />
                <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} className="input-custom" />

                <button className="btn-custom" style={{ marginLeft: 4 }} onClick={signUpAction}>Sign up</button>
                <div onClick={goLogin} style={{textAlign:'center',marginTop:20,cursor:'pointer',color:'#6ADB88'}}>Login</div>
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
export default SignUpPage