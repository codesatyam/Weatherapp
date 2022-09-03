const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");

const datahide = document.querySelector(".middle_layer");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp_real");
const getinfo = async (event) => {
  event.preventDefault();
  //    alert("Hello");
  let cityV = cityname.value;
  if (cityV === "") {
    city_name.innerText = "Plz   write   something";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityV}&appid=063b5ccb2fceb0185edb0f70b45db510`;
      const responce = await fetch(url);

      //    console.log(responce);
      const data = await responce.json();
      const arrdata = [data];
      //   console.log(arrdata[0].weather[0].main);
      city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country} `;
      const tem=((arrdata[0].main.temp-273)).toFixed(2);
      temp.innerText =tem;
      const temp_s = arrdata[0].weather[0].main;
      //    temp_status.innerText=arrdata[0].weather[0].main;
      //    condtion cloud check
      if (temp_s === "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud ' style='color: #f1f2f6;'></i>";
      } else if (temp_s === "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else if (temp_s === "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun ' style='color: #e6d700e9;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud ' style='color: #f1f2f6;'></i>";
      }
      datahide.classList.add('data_hide');
    } catch {
      city_name.innerText = "Plz  write  correct";
      datahide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getinfo);
