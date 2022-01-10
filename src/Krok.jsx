import {UserImage} from './components/userimage';
import Header from './components/header'
const Krok = () => {
    return (

      <div className="body">
  {/*  <header className="head head1">
        <div></div>
        <img className="orion orion1" src="img/2.svg" alt="orion"/>
        <div className="userimage">
          <UserImage></UserImage>
        </div>


    </header>*/}
    <Header></Header>
    {/*<p class="sci">{sessionStorage.getItem('user')}</p>*/}

    <div className="container">
      <div class="steps">
          <div class="step">
              <div class="krok" id="krok1">
                  Krok 1
              </div>
              <p class="sci">HTML</p>
              <p class="time">Pozostało 90 minut</p>
              <div class="plug2">
              </div>
          </div>
          <div class="step">
              <div class="krok" id="krok2">
                  Krok 2
              </div>
              <p class="sci">CSS</p>
              <p class="time">Pozostało 90 minut</p>
              <div class="plug2">
              </div>
          </div>
          <div class="step">
              <div class="krok" id="krok3">
                  Krok 3
              </div>
              <p class="sci">UX</p>
              <p class="time">Pozostało 90 minut</p>
              <div class="plug2">
              </div>
          </div>
          <div class="step">
              <div class="krok" id="krok4">
                  Krok 4
              </div>
              <p class="sci">UI</p>
              <p class="time">Pozostało 90 minut</p>
              <div class="plug2">
              </div>
          </div>
      </div>
    </div>
</div>)
};


export default Krok
