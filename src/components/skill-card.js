import logo from '../imgs/LaLiga_Santander_(2).svg'


function SkillCard(props) {
  return (
    
    
    <div className="skill-box">
      { props.skills.map(skill => 
      <div className="skill-card" key={skill.skillName}>
        <div className="skill-imgbox" >
        
          <img src={skill.photo} alt="imm" className="skill-img"></img>
        </div>
              <div className="skill-unq" >
                <h2>{skill.skillName}</h2>
                <div className="skill-descrip">
                  <p>{skill.description}</p>
                </div>
              </div>
          
        </div>
        )}  
          
          
    </div>
  )
}

export default SkillCard