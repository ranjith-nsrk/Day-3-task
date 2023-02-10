let json = {
  "name": "John Doe",
  "age": 35,
  "city": "New York"
};

// For loop
for (let i = 0; i < Object.keys(json).length; i++) {
  console.log(Object.keys(json)[i] + ": " + json[Object.keys(json)[i]]);
}

// For in loop
for (let key in json) {
  console.log(key + ": " + json[key]);
}

// For of loop
for (let value of Object.values(json)) {
  console.log(value);
}

// ForEach loop
Object.values(json).forEach(function(value) {
  console.log(value);
});
