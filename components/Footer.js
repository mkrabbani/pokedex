import Link from "next/link";

export default function Footer() {

    return (
        <section className="footer-section bg-gray-50 position-relative" style={{zIndex: "0"}}>
            <img src="/img/sideLinesSec.svg" alt="Footer Sidelines Bottom" className="position-absolute start-0" style={{bottom: "10%", transform: "scaleX(-1)", zIndex: "-1"}} />
            <img src="/img/footerCircles.svg" alt="Footer Circles" className="position-absolute start-0 ms-3" style={{top: "10%", zIndex: "-1"}} />
            <img src="/img/sideLinesSec.svg" alt="Footer Sidelines Top" className="position-absolute end-0" style={{top: "35%", zIndex: "-1"}} />
            <div className="container-fluid">
                <div className="row justify-content-center p-0 g-0">
                    <div className="col-12 col-xl-2">
                        <h5 className="text-gray-700 fw-600">Pokedex !</h5>
                        <p className="text-gray-500 fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet consectetur. </p>
                    </div>
                    <div className="offset-xl-1 col-12 col-xl-1 mt-3 mt-lg-0">
                        <h5 className="text-gray-700 fw-600">Sitemap</h5>
                        <ul>
                            <li>
                                <Link href="/"><a>Home</a></Link>
                            </li>
                            <li>
                                <Link href="#about"><a>About</a></Link>
                            </li>
                            <li>
                                <Link href="#explore"><a>Explore</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="offset-xl-1 col-12 col-xl-1 mt-3 mt-lg-0">
                        <h5 className="text-gray-700 fw-600">Other Sites</h5>
                        <ul>
                            <li>
                                <Link href="#"><a>NASA APIs </a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>SpaceX APIs </a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>MMA APIs </a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="offset-xl-1 col-12 col-xl-1 mt-3 mt-lg-0">
                        <h5 className="text-gray-700 fw-600">Social</h5>
                        <ul>
                            <li>
                                <Link href="https://mkrabbani.xyz"><a target="_blank">Personal</a></Link>
                            </li>
                            <li>
                                <Link href="https://github.com/mkrabbani"><a target="_blank">Github</a></Link>
                            </li>
                            <li>
                                <Link href="https://dribbble.com/mkhashaishr"><a target="_blank">Dribble</a></Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/muhammad-khashaish-rabbani-a5619a162/"><a target="_blank">LinkedIn</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}