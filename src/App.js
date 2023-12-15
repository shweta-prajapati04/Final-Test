import './App.css';
import { Nav } from './Component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  return (
    <div className="col-md-12 mx-auto">
    <Nav/>
    <div className="col-md-10 mx-auto">
    <AllRoutes/>
    </div>
    </div>
  );
}

export default App;
