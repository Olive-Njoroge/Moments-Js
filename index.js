function countryTime(event){
    let date;
    let tz;
    if(event.target.value === "paris"){
        date = moment().tz("Europe/Paris").format("dddd, MMMM Do,  Y hh:mm");
        tz = "Europe/Paris";
        alert(`It is ${date} in ${tz}`);
    }else if(event.target.value === "tokyo"){
        date = moment().tz("Asia/Tokyo").format("dddd, MMMM Do,  Y hh:mm");
        tz = "Asia/Tokyo";
        alert(`It is ${date} in ${tz}`);
    }else{
        date = moment().tz("Australia/Sydney").format("dddd, MMMM Do,  Y hh:mm");
        tz = "Australia/Sydney";
        alert(`It is ${date} in ${tz} `);
    }

}

let countriesSelected = document.querySelector("#city");
countriesSelected.addEventListener("change", countryTime);