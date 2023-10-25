const main = document.querySelector("main");
const fetchData = async () => {
  const response = await fetch("https://www.dnd5eapi.co/api/races"); //2 Promises here,
  const data = await response.json(); //Turn JSON into javascript
  // Use the data
  console.log(data.url);
  main.innerHTML += `<img src="${data.url}" alt = "Random Dog here">`; //UNFINISHED

  let content = "";
  for (const race of data.resutls) {
    console.log(race);
    content += `<li><a href="https://www.dnd5eapi.co/api/races"</li>${race.name}</li>`;
  }
  main.innerHTML = `<ul>${content}</ul>`;
};

// Invoke our function
fetchData();
