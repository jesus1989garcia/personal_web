import portrait from '../imgs/portrait.png'

function Home() {

  return(
    <div className="home">
      <div className="text-home">
        <p>Hi my name is Jesús García<br/>
        I'm a web developer from Spain living in Dublin <br/>for the last few months, <br/>
        a city that I love.<br/>
        Welcome to my personal website
        </p>
      </div>
      <div className="img-container">
        <img src={portrait} alt="jesus-portrait" className="portrait-img"></img>
      </div>
    </div>
    
  )
}

export default Home