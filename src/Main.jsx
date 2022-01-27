import {  useNavigate } from 'react-router-dom';
import './css/main.css';
import HeaderMain from './components/headerMain';

const Main = () => {
    const navigate = useNavigate();

    const handleLoginClick=() => {
        navigate('/login')
    };
    const handleCzescClick=() => {
        navigate('/czesc')
    };
    const handleKrokClick=() => {
        navigate('/krok')
    };


    return (
<div className="body">
    {/*<header className="head head1" >
        <div></div>
          <img className="orion headerAllocation" overflow="visible" height="100px" width="500px" src="./img/1.svg" alt="orion" onClick={handleCzescClick}/>
        <button className="login_button" onClick={handleLoginClick}>Zaloguj</button>
    </header>*/}
    <HeaderMain></HeaderMain>
    <div className="designer">
        <div className="zera">
            <p className="desc1">
                Od zera do <br/> UX Designera
            </p>
            <p className="desc2">
                Rozpocznij kurs UX już dziś
            </p>
            <button className="enter" onClick={handleLoginClick}>
                Wchodzę
            </button>
        </div>
        <img className="designers" src="./img/6165260.jpg" alt=""/>
    </div>
    <div className="useful">
        <div className="withus">Z nami poznasz wszystko co przydatne</div>
    </div>
    <div className="courses">
        <div className="course" onClick={handleLoginClick}>
            <img className="pages" src="./img/Devices.jpg" alt="HTML"/>
            <p className="pagesdesc">HTML</p>
        </div>
        <div className="course" onClick={handleLoginClick}>
            <img className="pages" src="./img/5243318.jpg" alt="CSS"/>
            <p className="pagesdesc">CSS</p>
        </div>
        <div className="course" onClick={handleLoginClick}>
            <img className="pages" src="./img/5933524.jpg" alt="UX"/>
            <p className="pagesdesc">UX</p>
        </div>
        <div className="course" onClick={handleLoginClick}>
            <img className="pages" src="img/5107035.jpg" alt="UI"/>
            <p className="pagesdesc">UI</p>
        </div>
    </div>
    <div className="coursedesc">
        <img className="plan" src="img/Wavy_Bus-43_Single-02.jpg" alt="stonks"/>
        <div className="dlakogo">
            <p className="forwho1">Dla kogo jest ten kurs?</p>
            <p className="forwho2">Jeśli chciałbyś:</p>
                <ul className="forwho3">
                    <li>Poznać świat UX / Zostać UX Designerem? </li>
                    <li>Dowiedzieć się jak stworzyć stronę<br/>
                         internetową, aplikacje?</li>
                    <li>Dowiedzieć się z jakich komponentów <br/>
                         składają się strony internetowe i aplikacje, których <br/>
                          używasz na codzień? </li>
                    <li>Przygotować pierwsze mock-upy, prototypy? </li>
                    <li>Poszerzyć wiedzę z zakresu UX, UI?</li>
                </ul>
            <p className="forwho2">Jeśli chociaż na jedno pytanie odpowiedzieć<br/>
                brzmi "tak" to ten kurs jest właśnie dla Ciebie.</p>
        </div>
    </div>
    <div className="aboutus">
        <div className="aboutus1">
            <p className="onas">O nas</p>
            <p>Nasz zespół składa się z osób z różnym <br/>
                 doświadczeniem w branży IT. <br/>
                  Dlatego wiemy jak stresujące i ciężkie może się <br/>
                   wydawać rozpoczęcie kariery w UX.</p>
            <ul>
                <li>Od czego zacząć?</li>
                <li>Które narzędzie wybrać?</li>
                <li>Portfolio prac? – przecież nie mam doświadczenia… </li>
            </ul>
            <p>Nasz kurs pomoże rozwiązać Ci te problemy.</p> <br/>
                 Z nami nauczysz się zagadnień potrzebnych do <br/>
                  zaczęcia kariery w UX. A co najważniejsze <br/>
                   wykorzyst
        </div>
        <img className="aboutus2" src="img/woman.png" alt=""/>
        <img className="aboutus3" src="img/man.png" alt=""/>
    </div>
    <div className="useful useful1">
        <div className="withus">A więc … Do dzieła! Zaczynamy!</div>
    </div>
</div>
)}

export default Main;
