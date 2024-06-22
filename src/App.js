import './App.css';
import Bgmi from './classes/Bgmi';
import Pubg from './classes/Pubg';

function App() {

  let battleground = new Pubg();

  battleground.gunType();
  battleground.requiredAmmo();
  battleground.attachableScopes();
  battleground.forRecoil();
  battleground.playingBehavior();

  let mobilebgmi = new Bgmi();

  mobilebgmi.gunType();
  mobilebgmi.requiredAmmo();
  
  return (
  <div className='App'>
    <h1>PLAYERUNKNOWN'S BATTLEGROUNDS <br></br>MOBILE GAME |PUBG|</h1>
  </div>
  );
}

export default App;
