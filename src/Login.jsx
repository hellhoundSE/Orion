import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserImage from './components/userimage';
import { getFromSessionStorage, setToSessionStorage } from './sessionStorage/sessionStorage';
import { validateCridentials } from './sessionStorage/usedCridentials';


const Login = () => {

    const userUid = getFromSessionStorage("userUid");
    const navigate = useNavigate();
    const [cridentials, setCridentials] = useState({login:'bartosz',password:'bartosz'});

    useEffect(() => {
        if(userUid)
        navigate('/krok')
    },[])

    const handleRejestracjaClick=() => {
        navigate('/rejestracja')
    };
    const handleCzescClick=() => {
        navigate('/czesc')
    };

    const validateUser = () => {
      const userUid = validateCridentials(cridentials);
      
      if(!userUid)
        return;

      setToSessionStorage('userUid', userUid);
      navigate('/krok')
    };

    const handleCridentialsChange = (key, value) => {
        setCridentials((prevState)=> ({...prevState,[key]:value}))
    }
    



    return (<div className="body">
    <header className="head centerLogo">
      <img className="orion headerAllocation" overflow="visible" height="50%" width="50%" src="./img/1.svg" alt="orion"/>
    </header>
    <div className="container">
        <div className="logowanie">
            <div className="top">
               <p>Logowanie</p>
            </div>
            <div className="mid">
                <div className="left">
                    <input type="text" placeholder="E-mail" className="data" value={cridentials.login} onChange={(e) => handleCridentialsChange("login",e.target.value )}/>
                    <input type="password" placeholder="Hasło" className="data" value={cridentials.password} onChange={(e) => handleCridentialsChange("password",e.target.value)}/>
                    <button className="login_button login_button1" onClick={validateUser}>
                        Dalej
                    </button>
                </div>
                <div className="center">
                    <div className="divider">
                    </div>
                    <p className="lub">LUB</p>
                    <div className="divider">
                    </div>
                </div>
                <div className="right">
                    <button className="data data1" onClick={handleCzescClick}>
                        <img src="img/logo1.png" alt="" className="small"/>Zaloguj przez Google</button>
                    <button className="data data1" onClick={handleCzescClick}>
                        <img src="img/logo2.png" alt="" className="small"/>Zaloguj przez Facebook</button>
                    <button className="data data1" onClick={handleCzescClick}>
                        <img src="img/logo3.png" alt="" className="small"/>Zaloguj przez Twitter</button>
                </div>
            </div>
            <div className="bot">
                <p className="acc">Nie masz konta?</p>
                <button className="reg" onClick={handleRejestracjaClick}>Zarejestruj się</button>
            </div>
        </div>
    </div>
</div>)
};


export default Login
