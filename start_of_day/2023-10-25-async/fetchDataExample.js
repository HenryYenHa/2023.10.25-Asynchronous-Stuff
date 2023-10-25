const fetchData = async function () {
  const response = await fetch("https://example.com/path-to-json"); //Can only use await in an async function
  const data = await response.json(); //IF READING A JSON, USE AN AWAIT
  //Anything in an await scope has no connections to the rest of the document; all variables can not be retrieved from them
  console.log(data);
};

fetchData();
