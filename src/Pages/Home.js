import "./Home.css"
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className='Home'><h1>Welcome to Captain's Log</h1>
    <div className="image">   
    <Link to={'/logs'}>{/* <img src="https://i.makeagif.com/media/2-11-2016/EXlhA0.gif" alt="gif" srcset="" /> */}
      {/* <img src="https://cdn.quotesgram.com/img/16/53/1664023620-Kirk-Inspirational-Posters-james-t-kirk-7685921-750-600.jpg" alt="" srcset="" /> */}
      <img src="https://external-preview.redd.it/oGRvDd0K9oZWO-rcBQRaDNLilZu3G_t9o5jQ4CE4ZyI.jpg?auto=webp&s=73710ce0b5d28bd9825d03f3c4186b84dac1ed38" alt="" srcset="" /></Link>
    </div>
       </div>
  )
}

export default Home