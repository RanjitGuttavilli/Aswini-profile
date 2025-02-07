import img2 from "./assets/Snapchat-2085394068.jpg"

function Card() {
    return (
        <>
            <div className="container2">
                <div className="col box1">
                    <div className="row"><p>Enjoying Every Moment.</p></div>
                    <div className="row"><h1>I Love to Help People and That Feels Great.</h1></div>

                </div>

            </div>
            <div className="background box1">
                <img className="model" src={img2} alt="" />

                <h2 className="text">Discovering My Personal Style and the Confidence That Comes with It.</h2>
                <p className="info">For me, every journey is a chance to see the world in a new way and share my perspective with others.</p>

                <button className="btn2-class"><a href="https://www.instagram.com/_aswini_vysyaraju_/" target="_blank">Follow me</a></button>
            </div>

           
        </>
    );
}

export default Card