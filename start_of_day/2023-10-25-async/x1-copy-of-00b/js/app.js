// An array of objects that now replace the array of numbers from last session
const animals = [
  {
    id: 40,
    title: "Kitten",
  },
  {
    id: 237,
    title: "Puppy",
  },
  {
    id: 433,
    title: "Bear",
  },
  {
    id: 577,
    title: "Moose",
  },
  {
    id: 582,
    title: "Coyote",
  },
  {
    id: 593,
    title: "Tiger",
  },
  {
    id: 659,
    title: "Husky",
  },
  {
    id: 718,
    title: "Wolf",
  },
  {
    id: 783,
    title: "Monkey",
  },
  {
    id: 790,
    title: "Elk",
  },
  {
    id: 837,
    title: "Bulldog",
  },
  {
    id: 1024,
    title: "Bird",
  },
  {
    id: 1025,
    title: "Pug",
  },
  {
    id: 1074,
    title: "Big Cat",
  },
  {
    id: 1084,
    title: "Walrus",
  },
];

let content = "";

/* This loop is broken!
1. Refactor the following code so that it works with an array of objects.
2. Add custom `alt` attributes that use the title property.
*/
for (const item of animals) {
  content += `<img src="https://picsum.photos/id/${item.id}/300/300" alt="A Cute ${item.title}">`;
}

const gallery = document.querySelector(".gallery");

gallery.innerHTML = content;
