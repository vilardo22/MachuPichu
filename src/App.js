import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
import Welcome from './Components/Welcome';
// import Oquee from './Components/Oquee';
import Apresentação from './Components/Apresentacao';
import Soft from './Components/Soft';
import Slideshow from './Components/Slideshow';
import Galeria from './Components/Galeria';
import Porquenos from './Components/Porquenos';
import Time from './Components/Time';
import FAQ from './Components/FAQ';
import Contato from './Components/Contato';



function App() {
  return (
    <div className="component-spacing">
      <Welcome />
      <Apresentação />
      <Soft />
      <Slideshow />
      {/* <Galeria />
      <Porquenos/>
      <Time/>
     <FAQ/>
     <Contato/> */}
    </div>
  );
}
 

export default App;
