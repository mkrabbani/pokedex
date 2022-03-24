import Link from "next/link"
import Card from "./Card";

export default function Explore(props) {

    return (
        <>  
            <section className="explore-section position-relative" id="explore">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-6 col-xl-3">
                        <div className="vstack">
                            <img src="/img/exploreHead.png" alt="Explore" />
                            <h4 className="text-center mt-4 mb-3 fs-24 fw-600 text-primary p-1">Explore Pokemon World</h4>
                            <p className="text-center text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officve sequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center p-0 g-0">
                    <div className="col-12 col-xl-11 col-xxl-8">
                        <div className="d-flex align-content-stretch flex-wrap justify-content-center">
                            <Card card={props} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <Link href="#">
                            <a className="text-gray-700 fw-600 ff-asap">See More</a>
                        </Link>
                    </div>
                </div>
                {/* Images Section */}
                <img src="/img/horizontalDot.svg" alt="Horizontal Dot" className="position-absolute" style={{top: "3%", left: "10%"}} />
                <img src="/img/SideLinesPrimary.svg" alt="Side Lines Top" className="position-absolute end-0 top-0 mt-5" />
                <img src="/img/exploreBg.svg" alt="Explore Bg" className="position-absolute start-0 d-none d-lg-block" style={{top: "20%", transform: "scaleX(-1)", zIndex: "-1"}} />
                <img src="/img/exploreBg.svg" alt="Explore Bg" className="position-absolute end-0 d-none d-lg-block" style={{top: "20%", zIndex: "-1"}} />
            </section>
        </>
    )
}