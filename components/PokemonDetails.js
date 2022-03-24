import capital from "./Capital";

export default function PokemonDetails(props) {

    const p = props.detail

    return (
        <div className="container">
            <div className="row p-3">
                <div className={`col-12 col-lg-6 d-flex justify-content-center ${p.tipe}`}>
                    <img src={p.gambar} alt="Pokemon" className="py-5" width={'160px'} style={{zIndex: "1"}} />
                </div>
                <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="stats-tab" data-bs-toggle="tab" data-bs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="false">Stats</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="gallery-tab" data-bs-toggle="tab" data-bs-target="#gallery" type="button" role="tab" aria-controls="gallery" aria-selected="false">Gallery</button>
                    </li>
                    </ul>
                    <div className="tab-content ff-cabin text-gray-600" id="myTabContent">
                        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="container">
                                <p className="mt-4 fs-14">Pokemon Name : {capital(p.nama)}</p>
                                <p className="fs-14">Pokemon Type : {capital(p.tipe)}</p>
                                <p className="fs-14">{p.desc}</p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                            <div className="container">
                                <div className="row align-items-center g-0 mt-4">
                                    <div className="col-5">
                                        <p className="fs-14 ff-cabin text-gray-600 m-0 g-0 text-start">HP : <span className="text-primary fw-700">{p.hp}</span></p>
                                    </div>
                                    <div className="col-7">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={p.attack} aria-valuemin="0" aria-valuemax="100" style={{width: `${p.attack}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center g-0 mt-2">
                                    <div className="col-5">
                                        <p className="fs-14 ff-cabin text-gray-600 m-0 g-0 text-start">Att : <span className="text-primary fw-700">{p.attack}</span></p>
                                    </div>
                                    <div className="col-7">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={p.attack} aria-valuemin="0" aria-valuemax="100" style={{width: `${p.attack}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center g-0 mt-2">
                                    <div className="col-5">
                                        <p className="fs-14 ff-cabin text-gray-600 m-0 g-0 text-start">Def : <span className="text-primary fw-700">{p.defense}</span></p>
                                    </div>
                                    <div className="col-7">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={p.defense} aria-valuemin="0" aria-valuemax="100" style={{width: `${p.defense}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center g-0 mt-2">
                                    <div className="col-5">
                                        <p className="fs-14 ff-cabin text-gray-600 m-0 g-0 text-start">S.Att : <span className="text-primary fw-700">{p.specialAttack}</span></p>
                                    </div>
                                    <div className="col-7">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={p.specialAttack} aria-valuemin="0" aria-valuemax="100" style={{width: `${p.specialAttack}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center g-0 mt-2">
                                    <div className="col-5">
                                        <p className="fs-14 ff-cabin text-gray-600 m-0 g-0 text-start">S.Def : <span className="text-primary fw-700">{p.specialDefense}</span></p>
                                    </div>
                                    <div className="col-7">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={p.specialDefense} aria-valuemin="0" aria-valuemax="100" style={{width: `${p.specialDefense}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center g-0 mt-2">
                                    <div className="col-5">
                                        <p className="fs-14 ff-cabin text-gray-600 m-0 g-0 text-start">Speed : <span className="text-primary fw-700">{p.speed}</span></p>
                                    </div>
                                    <div className="col-7">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={p.speed} aria-valuemin="0" aria-valuemax="100" style={{width: `${p.speed}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                            <div className="container">
                                <p className="fs-14">Coming Soon ..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}