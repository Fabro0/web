function abrirNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("mySidenav").style.zIndex = "1";
    //document.getElementById("main").style.marginLeft = "320px";
    
    links = document.getElementsByClassName('uno-link');
    

  }
  
  function cerrarNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "#8FCB9B";
  }
function lafuncion(){
  var fecha = new Date();
  var dia= fecha.getDate();
  var mes = fecha.getMonth();
  var year = fecha.getFullYear();
  today = dia + ' / ' + mes + ' / ' + year  ;
  document.getElementById('demo').innerHTML = today;
}
window.onload = lafuncion;

 
  function openNavDER() {
    document.getElementById("mySidenav1").style.width = "320px";
  }
  
  function closeNavDER() {
    document.getElementById("mySidenav1").style.width = "0";
    
  }