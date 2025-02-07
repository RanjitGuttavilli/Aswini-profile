import img3 from "./assets/Snapchat-2125620533.jpg"
import img4 from "./assets/Snapchat-420286033.jpg"
import img5 from "./assets/Snapchat-1923641670.jpg"
import img6 from "./assets/Snapchat-416632435.jpg"


function Photos(){
    return(
        <>
         <div className="container container2">
                <div className="col box1 box2">
                    <div className="row"><p>Always Be Happy :)</p></div>
                    <div className="row"><h1>Live the Life to the Fullest.</h1></div>

                </div>
                <div className="box1">
                    <img className="model2" src={img3} alt="" />
                    <img className="model2" src={img4} alt="" />
                    <img className="model2" src={img5} alt="" />
                    <img className="model2" src={img6} alt="" />

                </div>
            </div>

        <div className="back-line back-line2"></div>

        </>
    );
}

export default Photos