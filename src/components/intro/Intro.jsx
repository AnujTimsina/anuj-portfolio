import "./intro.css"
import anuj from "../../img/anuj_blankBg.png"

const Intro = () => {
    return (
        <div className="i" id="home">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi! It's me,</h2>
                    <h1 className="i-name">Anuj Timsina</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web developer</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Python Developer</div>
                            <div className="i-title-item">Front end Developer</div>
                            <div className="i-title-item">Back end Developer</div>
                        </div>
                    </div>
                    <div className="i-desc" >
                    Passionate and dedicated Software Engineer with high enthusiasm and self-learning ability. 
                    Proficient in variety of platforms and programming principles, with an innate ability to learn and master new technologies. 

                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={anuj} alt="" className="i-img" />

            </div>
            
        </div>
    )
}
export default Intro;