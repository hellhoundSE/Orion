import Header from './components/header';


const Czesc = () => {
    return (<div className="body">
    {/*<header className="head head1">
        <img className="orion orion1" src="img/2.svg" alt="orion"/>
    </header>*/}
    <Header></Header>
    <div className="container">
      <div class="bigbox">
          <div class="des">
              <div class="progress">
              </div>
              <div class="greeting">
                  <p class="hello">
                      Cześć Bartosz!
                  </p>
                  <p class="road">
                      Dopiero zaczynasz ścieżkę UX, ale już wkrótce ..
                  </p>
              </div>
          </div>
          <div class="ux">
              <img src="img/3704081.jpg" alt="minds" class="minds"></img>
          </div>
      </div>
    </div>
</div>)
};


export default Czesc
