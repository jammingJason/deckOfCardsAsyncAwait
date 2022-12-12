function getRndNum() {
  rndNum = Math.round(Math.random() * 100);
  return rndNum;
}

factsDiv = document.querySelector('#numberFacts');

async function getFactsAboutOneNumber() {
  rndNum = getRndNum();
  getFacts = await axios.get(`http://numbersapi.com/${rndNum}?json`);
  newHeader = document.createElement('h3');
  newHeader.innerText = 'Facts about ' + rndNum;
  factsDiv.append(newHeader);
  let factsAbout = await Promise.all([
    axios.get(`http://numbersapi.com/${rndNum}?json`),
    axios.get(`http://numbersapi.com/${rndNum}?json`),
    axios.get(`http://numbersapi.com/${rndNum}?json`),
  ]);
  newUL = document.createElement('ul');
  factsDiv.append(newUL);
  factsAbout.forEach((element) => {
    newLI = document.createElement('li');
    newLI.innerText = element.data.text;
    newUL.append(newLI);
  });
}

mainDiv = document.querySelector('#numberDiv');

async function getFacts() {
  facts = await axios.get(
    `http://numbersapi.com/${getRndNum()},${getRndNum()},${getRndNum()}?json`
  );
  newUL = document.createElement('ul');
  mainDiv.append(newUL);
  for (const key in facts.data) {
    if (Object.hasOwnProperty.call(facts.data, key)) {
      const element = facts.data[key];
      newLI = document.createElement('li');
      newLI.innerText = element;
      newUL.append(newLI);
    }
  }
}

getFacts();
getFactsAboutOneNumber();
