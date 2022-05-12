  import ligapp from '../imgs/ezgif.com-gif-maker (2).gif'
  import house4ya from '../imgs/ezgif.com-gif-maker (1).gif'
  
  function Projects() {

    return(
      <div className="projects">
        <div className="project-box" >
          <div className="proj-img-box">
            <img src={ligapp} alt="img-proj"></img>
          </div>
          <div className="proj-descrip">
            <p>App fully responsive created using react in the front and using a third API that allows the user to check data of the teams composing the Spanish league as well as keep track of their results nationally and internationally.</p>
            <a href="https://laligapp.herokuapp.com/">visit site</a>
          </div>
          <div>

          </div>
        </div>
        <div className="project-box" >
          <div className="proj-img-box">
            <img src={house4ya} alt="img-proj"></img>
          </div>
          <div className="proj-descrip">
            <p>Fully responsive web where the user can create house adds or check them out from the data base (Atlasdb). The house search can be filtered
              by many parameters including area. Front end designed in React and own API created to power the back-end, as well as 
              Google strets and Google maps API's are being used.
                
            </p>
            <a href="https://house4ya.herokuapp.com/">visit site</a>
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }

  export default Projects