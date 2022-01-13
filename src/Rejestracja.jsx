import {  useNavigate } from 'react-router-dom';

const Rejestracja = () => {
  const navigate = useNavigate();

  const handleLoginClick=() => {
      navigate('/login')
  };
  const handleKrokClick=() => {
      navigate('/krok')
  };
    return (<div className="body">
    <header className="head head1">
        <img className="orion orion1" src="img/2.svg" alt="orion"/>
    </header>
    <div className="container">
        <div className="logowanie">
            <div className="top">
               <p>Rejestracja</p>
            </div>
            <div className="mid">
                <div className="left">
                    <input type="text" placeholder="Login" className="data"/>
                    <input type="text" placeholder="E-mail" className="data"/>
                    <input type="text" placeholder="Hasło" className="data"/>

                </div>
                <div className="center">

                </div>
                <div className="right">
                        <button className="login_button login_button_in_registration" onClick={handleKrokClick}>
                            Dalej
                        </button>
                </div>
            </div>
            <div className="bot">
                <p className="acc">Masz już konto?</p>
                <button className="reg" onClick={handleLoginClick}>Zaloguj się</button>
            </div>
        </div>
    </div>
</div>)
};


export default Rejestracja
