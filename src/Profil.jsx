import Header from './components/header';


const Czesc = () => {
    return (<div className="body">
    {/*<header className="head head1">
        <img className="orion orion1" src="img/2.svg" alt="orion"/>
    </header>*/}
    <Header></Header>
          <div className="userProfil">
              <img src="img/man.png" alt="minds" class="minds"></img>
              <div className="czescBartosz">

                  <h1>Cześć Bartosz!</h1>

              </div>
          </div>
              <div class="progress">
              </div>
              <div class="greeting">

              </div>
</div>)
};


export default Czesc
