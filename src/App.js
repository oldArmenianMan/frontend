import Header from "./Header";
import Footer from "./Footer";
import Home from "./allPages";
import Heroes from "./allPages/Heroes";
import Command from "./allPages/Command";
import Partners from "./allPages/Partners";
import UAFamily from "./allPages/UAFamily";
import MillApp from "./allPages/MillApp";
import History from "./allPages/HistoryToDay";
import SVOMaps from "./allPages/SVOMaps";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './styles.css'

function App() {
  return(
    <div>
      <Router>
                <div>
                  <Header></Header>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/command" element={<Command/>}/>
                    <Route path="/heroes" element={<Heroes/>} />
                    <Route path="/partners" element={<Partners/>} />
                    <Route path="/uafamily" element={<UAFamily/>} />
                    <Route path="/mill-applied" element={<MillApp/>} />
                    <Route path="/history" element={<History/>} />
                    <Route path="/map" element={<SVOMaps/>} />
                  </Routes>
                </div>
      </Router>
      <Footer></Footer>
    </div>
  )
}

export default App;
