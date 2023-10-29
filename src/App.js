import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
import Welcome from './Components/Welcome';
// import Oquee from './Components/Oquee';
import Apresentação from './Components/Apresentacao';
import Soft from './Components/Soft';
import Slideshow from './Components/Slideshow';
import Galeria from './Components/Galeria';


function App() {
  return (
    <div className="component-spacing">
      <Welcome />
      <Apresentação />
      <Soft />
      <Slideshow />
      <Galeria />
    </div>
  );
}
 

export default App;
