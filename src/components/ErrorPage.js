import astronaut from '../imgs/Astronaut-sitting-on-the-crescent-moon-on-transparent-background-PNG.png'

function ErrorPage() {

  return(
    <div className="error">
      <div className="err-img">
        <img src={astronaut}  alt="astronaut"/>
      </div>
      <h1>Oops, seems like that page doesn't exist!  </h1>
    </div>
    
  )
}

export default ErrorPage