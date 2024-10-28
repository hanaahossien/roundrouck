import './App.css';
import Aboutus from './component/Aboutus/Aboutus';
import Contact from './component/Contact/Contact';
import Services from './component/Services/Services';
import Start from './component/Start/Start';
import Testymonials from './component/Testymonials/Testymonials';

function App() {
  return (
    <div className="App">
<Start></Start>

<Aboutus></Aboutus>
<Services></Services>
<Testymonials></Testymonials>
<Contact></Contact>
    </div>
  );
}

export default App;
