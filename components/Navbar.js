import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar() {
    
    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px"}}>
            <div className="container-fluid" data-aos="fade-in">
                <Link href="/">
                    <a className="navbar-brand text-decoration-none hstack gap-2">
                        <img src="/img/pokeball.png" alt="Pokeball" />
                        <div className="vstack gap-0">
                            <p className="p-0 m-0 ff-asap fw-600 text-gray-700 pt-1" style={{fontSize : "16px"}}>Pokedex</p>
                            <span className="p-0 m-0 ff-asap fw-500 text-gray-500" style={{fontSize : "13px"}}>v1.0</span>
                        </div>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ff-asap">
                    <li className="nav-item">
                        <Link href="/" aria-current="page"><a className="nav-link active d-flex gap-1"> <img src="/img/navbarStrip.svg" alt="Navbar Strip" /> Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#about"><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#explore"><a className="nav-link">Explore</a></Link>
                    </li>                    
                    <li className="nav-item">
                        <Link href="#contact"><a className="nav-link">Contact</a></Link>
                    </li>
                </ul>
                <Link href="https://github.com/mkrabbani">
                    <a target="__blank" className="btn btn-primary px-3 py-2 text-14 text-white br-7 text-decoration-none">
                     <img src="/img/github.png" className="me-1" width={'20px'} alt="Github" />   Github
                    </a>
                </Link>
                </div>
            </div>
        </nav>
    );

}