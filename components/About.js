
export default function About() {

    return (
        <section className="about-section bg-gray-50 position-relative" id="about">
            <div className="row justify-content-center align-items-center px-2 px-md-0">
                <div className="col-12 col-md-6 col-xl-3">
                    <img src="/img/about.png" className="img-fluid p-5 p-lg-0" alt="About" />
                </div>
                <div className="offset-xl-1 col-12 col-md-6 col-xl-3">
                    <h2 className="text-gray-700 fs-36 fw-600">About Pokedex <i>!</i></h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat reiciendis voluptatum quod deserunt exercitationem amet, adipisci sequi repellendus minus.</p>
                </div>
            </div>
            <img src="/img/verticalDot.svg" alt="Circle Hero" className="position-absolute top-0 start-0 d-none d-md-block"  style={{marginTop: "4%", marginLeft: "2%"}} />
        </section>
    )

}