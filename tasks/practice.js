// practice promise

// //
// const whereAmI = function (lat, lng) {
//   return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     });
// };

// whereAmI(37.8267, -122.4233);
// whereAmI(37.8267, -122.4233);
// whereAmI(37.8267, -122.4233);

//event loop in practice for async code
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log("Test end");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();

  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );
  const data = await res.json();
  renderCountry(data[0]);
  return `You are in ${dataGeo.city}, ${dataGeo.country}`;
};
whereAmI();
console.log("FIRST");
