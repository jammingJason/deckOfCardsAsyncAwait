async function getPokemon() {
  pokeCount = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${getRndNum(97)}&limit=100`
  );
  pokeInfo1 = await axios.get(pokeCount.data.results[getRndNum(99)].url);
  pokeSpecies1 = await axios.get(pokeInfo1.data.species.url);
  pokeSpecies1.data.flavor_text_entries.forEach((element) => {
    if (element.language.name === 'en') {
      pokeName = pokeInfo1.data.name;
      pokeFlavor = element.flavor_text;
    }
  });
  cardImage1 = document.querySelector('#cardImage1');
  cardImage1.src = pokeInfo1.data.sprites.front_default;
  cardName1 = document.querySelector('#cardName1');
  cardName1.innerText = pokeName;
  cardInfo1 = document.querySelector('#cardInfo1');
  cardInfo1.innerText = pokeFlavor;
  // console.log(pokeName + ' : ' + pokeFlavor);

  pokeInfo2 = await axios.get(pokeCount.data.results[getRndNum(99)].url);
  pokeSpecies2 = await axios.get(pokeInfo2.data.species.url);
  pokeSpecies2.data.flavor_text_entries.forEach((element) => {
    if (element.language.name === 'en') {
      pokeName = pokeInfo2.data.name;
      pokeFlavor = element.flavor_text;
    }
  });
  cardImage2 = document.querySelector('#cardImage2');
  cardImage2.src = pokeInfo2.data.sprites.front_default;
  cardName2 = document.querySelector('#cardName2');
  cardName2.innerText = pokeName;
  cardInfo2 = document.querySelector('#cardInfo2');
  cardInfo2.innerText = pokeFlavor;
  // console.log(pokeName + ' : ' + pokeFlavor);

  pokeInfo3 = await axios.get(pokeCount.data.results[getRndNum(99)].url);
  pokeSpecies3 = await axios.get(pokeInfo3.data.species.url);
  pokeSpecies3.data.flavor_text_entries.forEach((element) => {
    if (element.language.name === 'en') {
      pokeName = pokeInfo3.data.name;
      pokeFlavor = element.flavor_text;
    }
  });
  cardImage3 = document.querySelector('#cardImage3');
  cardImage3.src = pokeInfo3.data.sprites.front_default;
  cardName3 = document.querySelector('#cardName3');
  cardName3.innerText = pokeName;
  cardInfo3 = document.querySelector('#cardInfo3');
  cardInfo3.innerText = pokeFlavor;
  // console.log(pokeName + ' : ' + pokeFlavor);

  // console.log(pokeSpecies1.data.flavor_text_entries[0]);
}
function getRndNum(topNumber) {
  return Math.round(Math.random() * topNumber);
}

getPokemon();
