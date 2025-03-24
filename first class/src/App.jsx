



import Navbar from './components/Navbar'
import "./App.css"
import { Content } from './components/Content'

function App() {
 

  return (
    <>
   <Navbar />

   <header>
        <div className="book">
          <h6>"Your Journey, Our Priority – Anytime, Anywhere!"</h6>
          <button>BOOK NOW</button>
        </div>
        <div className="book1">
          <button>Daily</button>
          <button>Rental</button>
          <button>Outstaion</button>
        </div>
        <div className="form">
                        <input type="text" placeholder="Current Location" id='current' />
                        <input type="text" placeholder='Destination Location' id='destination'/>
                        <input type="search" placeholder='Search A Cab' id='search'/>
        </div>
   </header>
   <Content/>
    </>
  
  )
}

export default App
