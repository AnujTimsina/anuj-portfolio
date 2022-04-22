import "./about.css"
import Adventure from "../../img/adventure.avif" 
import Guitar from "../../img/guitar.jpg" 
import Netflix from "../../img/netflix.jpg"
import Gaming from "../../img/gaming.jpg"





const About= () => {
    return (
        <div className="a" id="about">
            <div className="a-left">
                <ul className="hobbies-image">
                <li className="hobbies-image-list"><img 
                    src={Guitar} 
                    alt="Hobbies" 
                    className="a-img" /></li>
                <li className="hobbies-image-list"><img 
                    src={Adventure} 
                    alt="Hobbies" 
                    className="a-img" /></li>
                    <li className="hobbies-image-list"><img 
                    src={Netflix} 
                    alt="Hobbies" 
                    className="a-img" /></li>
                   <li className="hobbies-image-list"> <img 
                    src={Gaming} 
                    alt="Hobbies" 
                    className="a-img" /></li>
                   
                    
                    </ul>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Hello! It's me ANUJ TIMSINA.I live in Itahari, a city to the east of Nepal. 
                I pursued my Bachelor's degree as a Computer Engineer and following same field as my profession. 
                I enjoy being challenged and engaged with activities that require me to work outside my comfort and knowledge set.
                </p>
                
                    <div className="a-desc-left">   
                        <div className="skills-desc">
                        <h2 className="skills-title">My Skills</h2>
                        <ul className="skills-item">
                            <li>Python</li>
                            <li>C/ C++</li>
                            <li>MySQL</li>
                            <li>React</li>
                            <li>HTML, CSS</li>
                            <li>Javascript</li>
                        </ul>
                        </div>
                        <div className="hobbies-desc">
                        <h2 className="hobbies-title">My Hobbies</h2>
                        <ul className="skills-item">
                            <li className="hobbies-list">Guitar</li>
                            <li className="hobbies-list">Adventure</li>
                            <li className="hobbies-list">Netflix</li>
                            <li className="hobbies-list">Gaming</li>
                            <li className="hobbies-list">Reading</li>
                            <li className="hobbies-list">Riding</li>
                        </ul>
                        </div>
                    </div>
                   
               
                
            </div>
        </div>
    )
}

export default About;