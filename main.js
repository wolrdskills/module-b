function full_style(id) {
  if (id == 'c_1') {
    document.getElementById('c_1').style = " height: 240px";

    document.getElementById('c_2').style = " height: 95px";
    document.getElementById('c_3').style = " height: 95px";
    document.getElementById('c_4').style = " height: 95px";
    document.getElementById('c_5').style = " height: 95px";
    document.getElementById('c_6').style = " height: 95px";
    document.getElementById('c_7').style = " height: 95px";
  }
  else if (id == 'c_2') {
    document.getElementById('c_2').style = " height: 240px";


    document.getElementById('c_1').style = " height: 95px";
    document.getElementById('c_3').style = " height: 95px";
    document.getElementById('c_4').style = " height: 95px";
    document.getElementById('c_5').style = " height: 95px";
    document.getElementById('c_6').style = " height: 95px";
    document.getElementById('c_7').style = " height: 95px";
  }
  else if (id == 'c_3') {
    document.getElementById('c_3').style = " height: 240px";


    document.getElementById('c_1').style = " height: 95px";
    document.getElementById('c_2').style = " height: 95px";
    document.getElementById('c_4').style = " height: 95px";
    document.getElementById('c_5').style = " height: 95px";
    document.getElementById('c_6').style = " height: 95px";
    document.getElementById('c_7').style = " height: 95px";
  }
  else if (id == 'c_4') {
    document.getElementById('c_4').style = " height: 240px";

    document.getElementById('c_1').style = " height: 95px";
    document.getElementById('c_2').style = " height: 95px";
    document.getElementById('c_3').style = " height: 95px";
    document.getElementById('c_5').style = " height: 95px";
    document.getElementById('c_6').style = " height: 95px";
    document.getElementById('c_7').style = " height: 95px";

  }
  else if (id == 'c_5') {
    document.getElementById('c_5').style = " height: 240px";


    document.getElementById('c_1').style = " height: 95px";
    document.getElementById('c_2').style = " height: 95px";
    document.getElementById('c_3').style = " height: 95px";
    document.getElementById('c_4').style = " height: 95px";
    document.getElementById('c_6').style = " height: 95px";
    document.getElementById('c_7').style = " height: 95px";
  }
  else if (id == 'c_6') {
    document.getElementById('c_6').style = " height: 240px";

    document.getElementById('c_1').style = " height: 95px";
    document.getElementById('c_2').style = " height: 95px";
    document.getElementById('c_3').style = " height: 95px";
    document.getElementById('c_4').style = " height: 95px";
    document.getElementById('c_5').style = " height: 95px";
    document.getElementById('c_7').style = " height: 95px";
  }
  else if (id == 'c_7') {
    document.getElementById('c_7').style = " height: 240px";


    document.getElementById('c_1').style = " height: 95px";
    document.getElementById('c_2').style = " height: 95px";
    document.getElementById('c_3').style = " height: 95px";
    document.getElementById('c_4').style = " height: 95px";
    document.getElementById('c_5').style = " height: 95px";
    document.getElementById('c_6').style = " height: 95px";
  }
}





function ddo() {
  document.getElementById('menau').style = "display: none;"
  document.getElementById('body').style = "overflow-y: auto;"
}

function dda() {
  document.getElementById('menau').style = "display: flex;"
  document.getElementById('body').style = "overflow-y: hidden;"
}