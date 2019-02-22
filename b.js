function tambah(){
 var x=parseInt(document.getElementById("bil1").value);
 var y=parseInt(document.getElementById("bil2").value);
  var z= x + y;
 document.getElementById("hasil").innerHTML=z;  
    }
    function kurang(){
      var x=parseInt(document.getElementById("bil1").value);
      var y=parseInt(document.getElementById("bil2").value);
       var z= x - y;
      document.getElementById("hasil").innerHTML=z;  
         }
         function kali(){
            var x=parseInt(document.getElementById("bil1").value);
            var y=parseInt(document.getElementById("bil2").value);
             var z= x * y;
            document.getElementById("hasil").innerHTML=z;  
               }
               function bagi(){
                  var x=parseInt(document.getElementById("bil1").value);
                  var y=parseInt(document.getElementById("bil2").value);
                   var z= x / y;
                  document.getElementById("hasil").innerHTML=z;  
                     }


    
                 
    