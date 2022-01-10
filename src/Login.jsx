import {  useNavigate } from 'react-router-dom';
import UserImage from './components/userimage';


const Login = () => {
    const navigate = useNavigate();

    const handleRejestracjaClick=() => {
        navigate('/rejestracja')
    };

    const validateUser = () => {
      sessionStorage.setItem('user', "USER_IDx25dk346svbs");
      navigate('/krok')
    };

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
                    <input type="text" placeholder="E-mail" className="data"/>
                    <input type="text" placeholder="Hasło" className="data"/>
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
                    <button className="data data1">
                        <img src="img/logo1.png" alt="" className="small"/>Zaloguj przez Google</button>
                    <button className="data data1">
                        <img src="img/logo2.png" alt="" className="small"/>Zaloguj przez Facebook</button>
                    <button className="data data1">
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
