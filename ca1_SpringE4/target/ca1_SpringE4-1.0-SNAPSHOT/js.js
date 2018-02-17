

function myFunction(user) {
    
     var URL ="https://jsonplaceholder.typicode.com/users/"
     URL += user;
     
     console.log(URL)

        fetch(URL)
            .then(res => res.json())
            .then(function(data){
//               var answer = JSON.stringify(data);
//                console.log(answer);
//               document.getElementById("demo").innerHTML = answer;

                var str = "Name: " + data.name + "<br>Phone: " + data.phone + "<br><br><h3>Address:</h3>" +
                        data.address.street + "<br>" + data.address.city + "<br>" + data.address.zipcode +
                        "<br>location: " + data.address.geo.lat + " " + data.address.geo.lng;

        document.getElementById("demo").innerHTML = str;
        
    }).catch(err=>console.log("UPPS: "+err))
    
}

function getAll(){
    var URL = "https://jsonplaceholder.typicode.com/users"
    
    fetch(URL)
            .then(res => res.json())
            .then(function(data) {
  
            var URLStr = "<table><tr><th>Name</th><th>Phone</th></tr>";
            URLStr += data.map(nameAndPhone).join("");
            URLStr += "</table>"
  
               document.getElementById("demo").innerHTML = URLStr;
                
    }).catch(err=>console.log("UPPS: "+err))
}

function nameAndPhone(data, index){
    var np = "<tr><td>" + data.name + "</td><td>" + data.phone+ "</td></tr>"
    return np;
}


//function getAll(){
//    var URL = "https://jsonplaceholder.typicode.com/users"
//    
//    var str = "<table><tr><th>Name</th><th>Phone</th></tr>"
//    
//    
//    fetch(URL)
//            .then(res => res.json())
//            .then(function(data){
//                    
//                    for (var i = 0; i < 10; i++) {
//                    str += "<tr>";    
//                        
//                    var name = JSON.stringify(data[i].name);
//                    str += "<td>" + name + "</td>"
//                    
//                    var phone = JSON.stringify(data[i].phone);
//                    str += "<td>" + phone + "</td>"
//                               
//                    str += "</tr>"
//                }
//               document.getElementById("demo").innerHTML = str;
//        
//    }).catch(err=>console.log("UPPS: "+err))
//    
//    
//}