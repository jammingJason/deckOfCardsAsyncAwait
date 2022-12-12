function getRndNum(topNum) {
  rndNum = Math.round(Math.random() * topNum);
  return rndNum;
}

mainDiv = document.querySelector('#cardDeck');

async function shuffleDeck() {
  let res = await axios.get(
    `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
  );
  let deckID = res.data.deck_id;
  console.log(res.data);
  newBtn = document.createElement('button');
  newBtn.innerText = 'Get a Card!';
  newBtn.id = 'btnGetCard';
  newBtn.addEventListener('click', goGetEm);
  newBtn.type = 'button';
  newBtn.className += ' btn btn-primary';
  newBtn.value = deckID;
  mainDiv.append(newBtn);
  newDiv = document.createElement('Div');
  newH3 = document.createElement('h3');
  newH3.id = 'leftInDeck';
  newH3.innerText = 'Cards left in Deck : ' + res.data.remaining;
  newDiv.append(newH3);
  mainDiv.append(newDiv);
}
async function goGetEm(deckID) {
  // deckID = 'gkx6e5p1hfyh';
  deckID = document.querySelector('#btnGetCard').value;
  newH3 = document.querySelector('#leftInDeck');
  newShuffledDeck = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
  );

  newH3.innerText = 'Cards left in Deck : ' + newShuffledDeck.data.remaining;
  newImg = document.createElement('img');
  newImg.src = newShuffledDeck.data.cards[0].image;
  newImg.style.rotate = getRndNum(360) + 'deg';
  console.log(newShuffledDeck.data.cards[0]);
  mainDiv.append(newImg);
}

shuffleDeck();
