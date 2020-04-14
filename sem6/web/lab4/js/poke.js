
export default async function pokeInfo(){

  let pokeId = prompt("Pokemon ID", 1);
  if(pokeId == null) {
    return;
  }

  cont.innerHTML = '<h1>Pokemon info</h1>';

  let pokeObj = {
    name: "",
    ab1: "-",
    ab2: "-",
    ab3: "-"
  }

  let urlPoke = 'https://pokeapi.co/api/v2/pokemon/' + pokeId + '/';
  let responsePoke = await fetch(urlPoke);
  let poke = await responsePoke.json();

  pokeObj.name = poke.forms[0].name

  let abs = poke.abilities;
  for(let i = 0; i < abs.length; i++){
    let urlAb = abs[i].ability.url;
    let responseAb = await fetch(urlAb);
    let pokeAb = await responseAb.json();

    let abName = 'ab' + (i + 1);
    pokeObj[abName] = pokeAb.effect_entries[0].effect;
  }

  cont.insertAdjacentHTML('beforeend', `<strong>${pokeObj.name}</strong>
                                        <ol>
                                          <li>${pokeObj.ab1}</li>
                                          <li>${pokeObj.ab2}</li>
                                          <li>${pokeObj.ab3}</li>
                                        </ol>`);


}
