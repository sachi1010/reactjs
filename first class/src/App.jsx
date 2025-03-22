



import Navbar from './components/Navbar'
import "./App.css"

function App() {
 

  return (
    <>
   <Navbar/>
   
   {/* <video src="v1.mp4" autoPlay loop muted width="100%" height="100%"></video> */}
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
    </>
  
  )
}

export default App
