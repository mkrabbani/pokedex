import Link from "next/link"

export default function Contact() {

    return (
        <section className="contact-section d-none d-xl-block mt-5" id="contact">
            <div className="position-relative">
                <img src="/img/contactBg.svg" alt="Side Lines Bottom" className="position-absolute bottom-0" style={{left: "10%", marginBottom: "75px"}} />
                <img src="/img/SideLinesPrimary.svg" alt="Side Lines Bottom" className="position-absolute start-0 bottom-0 mb-4" style={{transform: "scaleX(-1)"}} />
            </div>
            <div className="row justify-content-center">
                <div className="col-8" style={{ position: "absolute", bottom: "7.5%", zIndex: "99"}}>
                    <div className="row align-items-center justify-content-between bg-white" style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',height: "350px", padding: "0 5rem 0 5rem", borderRadius: "10px"}}>
                        <div className="col-4 p-0 g-0">
                            <h4>Contact</h4>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit imperdiet consectetur. Suspendisse potenti. Phasellus venenatis, purus quis sodales lacinia.</p>
                            <Link href="mailto:mkhashaishr@gmail.com"><a className="btn btn-primary px-4 text-white">Let&apos;s Talk</a></Link>
                        </div>
                        <div className="col-auto p-0 g-0">
                            <img src="/img/contact.png" alt="Contact" className="mx-auto" style={{marginTop : "-1rem"}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}