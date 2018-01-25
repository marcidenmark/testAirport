const character = {
  name: "Luke Skywalker",
  type: "Jedi"
};

Object.keys(character).forEach((key) => {
  const value = character[key];
  console.log(`The character ${key} is ${value}`);
});
