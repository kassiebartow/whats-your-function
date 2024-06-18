var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie());
console.log(favoriteCookie("chocolate chip"));

var introduce = function (name, occupation) {
  return `Hello, my name is ${name} and I am a ${occupation}`;
};
console.log(introduce("Kassie", "developer"));
console.log(introduce("Grant", "pilot"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations!");
  } else if (numGlasses < 8) {
    console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
  }
};
hydrationFeedback();
