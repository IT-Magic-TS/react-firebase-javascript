// imports & exports
// 1
import { ninjas, formatNinjas, greet } from "./ninjas";

// Destructuring
// 1
const person = {
  firstName: "Baddy",
  age: 3,
  favColor: "green"
};

// 2
const nums = [1, 2, 3, 4];

// 3
const getCalculations = (a, b) => {
  return {
    sum: a + b,
    diff: Math.abs(a - b),
    product: a * b
  };
};

// 4
const doSomething = ({ name, age }) => {
  console.log(name + " is " + age + " years old.");
};

// filter and map methods
// 1
const heros = [
  { name: "Shaun", belt: "black" },
  { name: "Mario", belt: "orange" },
  { name: "Yoshi", belt: "black" },
  { name: "Luigi", belt: "green" }
];

// spread operator
// 1
const blog = { title: "New Blog", author: "bowser" };

// template strings
// 1
const name = "Pero";
const job = "3D Designer";
const str = `My name is ${name} and I am ${job}`;

// fetch api and promise - json placeholder web page
// 1
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(json => console.log(json));

function App() {
  // Destructuring
  // 1
  const { firstName, age, favColor } = person;
  console.log("First Name: ", firstName);

  // 2
  const [a, b] = nums;
  console.log(a, b);

  // 3
  const { sum, diff, product } = getCalculations(12.4, 17.7);
  console.log(sum + ", " + diff + ", " + product);

  // 4
  doSomething({ name: "Baddy", age: 3 });

  // imports & exports
  // 1
  console.log(ninjas);
  greet();
  formatNinjas();

  // filter and map methods
  // 1 filter
  const blackHeroes = heros.filter(h => h.belt === "black");
  console.log("Black Heros: ", blackHeroes);

  // 2 map
  const herosNames = heros.map(hero => hero.name);
  console.log("Heros: ", herosNames);

  // spread operator
  // 1
  const idBlog = { ...blog, id: 23 };
  console.log("ID Blog: ", idBlog);

  // fetch api and promise - json placeholder web page
  // 1
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json));

  // async & await
  // 1
  const getTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const resJson = await res.json();
    console.log("Response Json: ", resJson);
  };

  getTodo();

  return (
    <div className="App">
      <h1>Train JS</h1>
    </div>
  );
}

export default App;
