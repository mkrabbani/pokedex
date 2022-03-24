import {useState} from "react";
import PokemonDetails from "./PokemonDetails";
import capital from "./Capital";

export default function Card(props) {
  
    const pokemons = props.card.pokemons

    const [detail, setDetail] = useState([]);

    const handleDetail = (e) => {
    async function getDetail(pokemonName = e.target.value) {
      const reqPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const pokedetail = await reqPokemon.json();
      const getAbility = await fetch (`${pokedetail.abilities[0].ability.url}`);
      const ability = await getAbility.json()
      const arr = ability.effect_entries;    
      const filterLanguages = ['en'];
      const filterByLanguage = (arr = [], languages = []) => {
        let res = [];
        res = arr.filter(obj => {
            const { language } = obj;
            return !!languages.find(el => language.name.includes(el));
        });
        return res;
      };
      const result = (filterByLanguage(arr, filterLanguages));

      setDetail({
        nama : pokedetail.name,
        tipe : pokedetail.types[0].type.name,
        gambar : pokedetail.sprites.other.dream_world.front_default,
        desc : result[0].effect,
        hp : pokedetail.stats[0].base_stat,
        attack: pokedetail.stats[1].base_stat,
        defense: pokedetail.stats[2].base_stat,
        specialAttack : pokedetail.stats[3].base_stat,
        specialDefense : pokedetail.stats[4].base_stat,
        speed : pokedetail.stats[5].base_stat
      });
    }
    getDetail();
  }

    return (
        <>
            {pokemons.map((p, id) => (
                <div className="p-2 w-card position-relative text-white" key={id}>
                    <div className={`border border-1 border-gray-200 p-1 ` + p.types[0].type.name} style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',height: "350px", padding: "0 5rem 0 5rem", borderRadius: "10px"}}>
                        <button onClick={handleDetail} value={p.name} data-bs-toggle="modal" data-bs-target="#exampleModal" className="fs-18 position-absolute border-0 rounded-circle" style={{zIndex: "99", top: "5%", right: "7%", cursor: "pointer", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white"}}>
                            ➜
                        </button>
                        <img src="/img/pokeball-bg.png" alt="gotosingle" className="arrow-right position-absolute top-50 start-50 translate-middle" style={{zIndex: "0"}} />
                        <img src={p.sprites.other.dream_world.front_default} alt="Pokemon" className="position-absolute top-50 start-50 translate-middle" width={'160px'} style={{zIndex: "1"}} />
                        <div className="position-absolute me-2 px-2" style={{zIndex: "99", bottom: "10%", cursor: "pointer"}}>
                            <p className="px-4 py-1 m-0 fs-14 fw-500" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", width: "max-content",borderRadius: "5px"}}>{capital(p.types[0].type.name)}</p>
                            <h5 className="my-2 fs-24 fw-700">{capital(p.name)}</h5>
                        </div>
                    </div>
                </div>  
            ))}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Pokemon Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <PokemonDetails detail={detail} />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )

}