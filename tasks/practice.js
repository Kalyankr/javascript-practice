// practice promise

//
const whereAmI = function (lat, lng) {
  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    });
};

whereAmI(37.8267, -122.4233);
whereAmI(37.8267, -122.4233);
whereAmI(37.8267, -122.4233);

//event loop in practice for async code
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log("Test end");
