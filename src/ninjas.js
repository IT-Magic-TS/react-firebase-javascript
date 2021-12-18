const ninjas = ["Baddy", "Misho", "Pero"];

const formatNinjas = () => {
  let val = "";
  ninjas.forEach(ninja => (val += ninja + ", "));
};

const greet = () => {
  console.log(ninjas[0] + " says hello");
};

export { ninjas, formatNinjas, greet };
