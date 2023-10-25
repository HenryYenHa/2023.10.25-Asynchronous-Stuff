const main = document.querySelector("main");
console.log(main);
const fetchData = async (url) => {
  const response = await fetch(url); //2 Promises here,
  const data = await response.json(); //Turn JSON into javascript
  // Use the data
  console.log(data.url);
  main.innerHTML += `<img src="${data.url}" alt = "Random Dog here">`; //UNFINISHED
};

// Invoke our function
fetchData("https://random.dog/woof.json");
fetchData("https://random.dog/woof.json");
fetchData("https://random.dog/woof.json");
fetchData("https://random.dog/woof.json");
