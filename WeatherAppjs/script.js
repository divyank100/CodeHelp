// 5748623910095f4b42d3d5a5502a8414

const loc=document.querySelector('.location');
const condition=document.querySelector('.condition');
const temp=document.querySelector('.temp');
const input=document.querySelector('.input');
const searchButton=document.querySelector('.search-weather');
const yourButton=document.querySelector('.your-weather');
const container2=document.querySelector('.container-2');
const searchCity=document.querySelector('.search');
const inputTag=document.querySelector('.input-tag');
const wind=document.getElementById('wind-speed');
const humidity=document.getElementById('humidity');
const clouds=document.getElementById('clouds');

searchButton.addEventListener('click',function(){
  input.classList.add("active");
  container2.classList.add("inactive");
});

yourButton.addEventListener('click',function(){
  input.classList.remove("active");
  container2.classList.remove("inactive");
});

// searchCity.addEventListener('click',function(){
//   container2.classList.remove("inactive");
// })
// input.classList.add("active");

loc.classList.add("loader");
async function getCurrentLocation(){
    // var prevCity="Empty";
    // var prevCondi="Empty";
    // var prevWind="Empty";
    // var prevHumidity="EMpty";
    // var prevClouds="Empty";
    // var prevTemp="Empty";



    var city="";
    var condi="";
    var temperature=276;
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        }
        else { 
          loc.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      getLocation();    
      var lati;
      var longi;
      function showPosition(position) {
        // loc.classList.add("loader");
        // loc.innerHTML = "Latitude: " + position.coords.latitude.toFixed(2) + 
        // "<br>Longitude: " + position.coords.longitude.toFixed(2);
        lati=position.coords.latitude.toFixed(2);
        longi=position.coords.longitude.toFixed(2);
        console.log(lati);
        console.log(longi);
      }
      
    const resposnse= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=30.50&lon=76.60&appid=5748623910095f4b42d3d5a5502a8414`);
    const data=await resposnse.json();
    loc.classList.remove("loader");
    console.log(data);
    prevCity=city;
    city=data.name;
    
        wind.innerText=data.wind.speed+"m/s";

        humidity.innerText=data.main.humidity+"%";
        
        clouds.innerText=data.clouds.all+"%";
        

    yourButton.addEventListener('click',async function(){
      const resposnse3= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=30.50&lon=76.60&appid=5748623910095f4b42d3d5a5502a8414`);
      const data3=await resposnse3.json();
      loc.classList.remove("loader");
      console.log(data);
      
          city=data3.name;
      
          wind.innerText=data3.wind.speed+"m/s";
          
          humidity.innerText=data3.main.humidity+"%";
          
          clouds.innerText=data3.clouds.all+"%";
          

          // Pending
          loc.innerText=city; 
          condi=data3.weather[0].description;
          condition.innerText=condi;

          // console.log(data3.main.temp);
          temperature=data3.main.temp-273;
        
          temp.innerText=`${temperature.toFixed(2)} °C`;  
          // console.log(temperature);

    });

    searchCity.addEventListener('click',async function(){
      loc.classList.add("loader");
      city=inputTag.value;
      loc.innerText="";
      wind.innerText="";
      humidity.innerText="";
      clouds.innerText="";
      
      const response2= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5748623910095f4b42d3d5a5502a8414`);
      const data2=await response2.json();
      loc.classList.remove("loader");

      if(data2.message==undefined){
        console.log(data2);
        console.log(data2.name);
        loc.innerText=data2.name;
        condi=data2.weather[0].description;
        condition.innerText=condi;

        console.log(data2.main.temp);
        temperature=data2.main.temp-273;
      
        temp.innerText=`${temperature.toFixed(2)} °C`;  
        console.log(temperature);
        container2.classList.remove("inactive");  

        wind.innerText=data2.wind.speed+"m/s";
        humidity.innerText=data2.main.humidity+"%";
        clouds.innerText=data2.clouds.all+"%";
      }
      else{
        loc.innerText="INVALID CITY! ENTER CORRECT CITY NAME";
        container2.classList.remove("inactive");
        condition.innerText="Invalid!";
        temp.innerText="Invalid!";
      }
      
    })
    
  
    loc.innerText=city; 
    condi=data.weather[0].description;
    condition.innerText=condi;

    console.log(data.main.temp);
    temperature=data.main.temp-273;
  
    temp.innerText=`${temperature.toFixed(2)} °C`;  
    console.log(temperature);
}

getCurrentLocation();
