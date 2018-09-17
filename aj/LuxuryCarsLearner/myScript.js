/* ----------------------------------------------------------------------------------------
	THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */
//storing our value for the manufacturer
var manufacturerValue = document.getElementById("manufacturer");

//test whats is being stored
console.log(manufacturerValue);
manufacturerValue.addEventListener("change", carChange);

function carChange(){
    
    //test the function runs
    console.log("function active");
    
    
    var manufacturerNumber = manufacturerValue.options[manufacturerValue.selectedIndex].value;
    //test the above variable
    console.log(manufacturerNumber);
    
    
    
    
    var httpRequestObject = new XMLHttpRequest();
    httpRequestObject.open("Get","https://raw.githubusercontent.com/hadrule07/Ajax/master/expensiveLuxuryCars.json", true);
    
    
    //when the broser has gotten response from the server, t5hat will trigger the annonymous function
    httpRequestObject.onload = function(){
        
      //if the codition of the readystate and status is meet  and pok  and the data had been  loaded and available  
     if(httpRequestObject.readyState == 4 && httpRequestObject.status == 200){
         
         
         //store our json file as javascript
         var myData = JSON.parse(httpRequestObject.responseText);
         
         
         
         
        
         if(manufacturerNumber === ""){
             var hideValues = document.getElementsByClassName("data");
             for(var i = 0; i < 12; i++){
                 hideValues[i].innerHTML = "";
             }
         }
         else{
         
         document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerNumber].manufacturer;
         document.getElementById("modelC").innerHTML = myData.data[manufacturerNumber].model;
         document.getElementById("priceC").innerHTML = "£" + myData.data[manufacturerNumber].price;
         document.getElementById("descriptionC").innerHTML = myData.data[manufacturerNumber].description;
         document.getElementById("videoC").innerHTML = myData.data[manufacturerNumber].video;
         document.getElementById("overallC").innerHTML = myData.data[manufacturerNumber].quality[0].rating;
         document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerNumber].quality[1].rating;
         document.getElementById("powertrainC").innerHTML = myData.data[manufacturerNumber].quality[2].rating;
         document.getElementById("bodyC").innerHTML = myData.data[manufacturerNumber].quality[3].rating;
         document.getElementById("interiorC").innerHTML = myData.data[manufacturerNumber].quality[4].rating;
         document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerNumber].quality[5].rating;
         document.getElementById("imgC").innerHTML = '<img src = "' +myData.data[manufacturerNumber].img +'" width = "auto" height = "auto" alt = "car image" />';
         
       
         
         document.getElementById("videoC").innerHTML = '<iframe src = "' +myData.data[manufacturerNumber].video +'" width = "auto" height = "auto" allowfullscreen alt = "car driving video"> </iframe>';
         
         
         
        
         }
     }
        else{
            document.getElementById("messageAlert").innerHTML ="the server could not be reached";
        }
        
        
    };
    //uses  the send methood this send th prepare request to the server
    httpRequestObject.send();
}










