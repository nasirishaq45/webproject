const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name =document.getElementById("city_name");
const temp_relVal = document.getElementById("temp_relVal");
const temp_status = document.getElementById("temp_status");


const getInfo = async(event)=>{
    event.preventDefault();
    // alert("jjjj");
    let cityValu = cityName.value;
    if(cityValu === ""){
        city_name.innerText =`please enter City`;

    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValu}&appid=520bd936fcd78d9b5aefc57e46aa5f5a`;
            const response = await fetch(url);
            const data =  await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            
            temp_relVal.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;
            if(tempMood =="Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #F28C38;'></i>";
            }else if(tempMood =="Clouds"){
                temp_status.innerHTML = "<i class ='fas fa-cloud'  style='color: #f1f2f6;'></i>";
            }else if(tempMood =="Rain"){
                temp_status.innerHTML = "<i class ='fas fa-rain'  style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class ='fas fa-sun style='color: #eccc68;'></i>";
            }


        }
        catch{
            city_name.innerText =`please enter City name Prorerluy`;
        }
        
    }
    
}
submitBtn.addEventListener('click', getInfo)