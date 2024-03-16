"use strict";

async function parseJSON() {
  //fetch data from server
  const response = await fetch("https://soliton.glitch.me/all-timezone-cities");
  let cityDetails = await response.json();

  //modify the fetched data while parsing
  let cityInfo = cityDetails.map((cityDetail) => {
    cityDetail = JSON.stringify(cityDetail);

    return JSON.parse(cityDetail, function (key, value) {
      if (
        key === "humidity" ||
        key === "precipitation" ||
        key === "temperature"
      ) {
        return parseInt(value);
      } else if (key === "dateAndTime") {
        delete cityDetail.key;
      } else {
        return value;
      }
    });
  });

  //store data in local storage
  cityInfo = JSON.stringify(cityInfo);
  localStorage.setItem("cityJSON", cityInfo);

  //retrive data from local storage
  cityInfo = localStorage.getItem("cityJSON");
  cityInfo = JSON.parse(cityInfo);
  // console.log(cityInfo);
}

export { parseJSON };
