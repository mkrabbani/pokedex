
export default function Hero() {

    return (
        <section className="hero-section position-relative">
            <div className="conainer-fluid">
                <div className="row justify-content-center px-2 px-md-0">
                    <div className="col-12 col-xl-10">
                        <img src="/img/heroImg.png" alt="Hero" className="img-fluid" />
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="vstack">
                            <h1 className="text-center fw-600 text-gray-700 my-3">Welcome to  <span className="fw-700 text-primary p-3">Pokedex</span>  <i>!</i></h1>
                            <p className="text-center text-gray-500 fs-18">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/img/circleHero.svg" alt="Circle Hero" className="position-absolute top-0 start-0 mt-3 d-none d-lg-block" />
            <img src="/img/verticalDot.svg" alt="Vertical Dot Hero" className="position-absolute top-0 end-0 me-3 mt-5 d-none d-lg-block" />
            <img src="/img/horizontalDot.svg" alt="Horizontal Dot Hero" className="position-absolute d-none d-lg-block" style={{bottom: "10%", left: "10%"}} />
        </section>
    )

}