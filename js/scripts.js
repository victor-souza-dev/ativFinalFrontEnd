function formulario() {
  var v1 = document.getElementById('v1');
  var v2 = document.getElementById('v2');
  var v3 = document.getElementById('v3');
  var v4 = document.getElementById('v4');

  if (v1.value == "") {
    v1.style.borderColor = "red";
  } else {
    v1.style.borderColor = "black";
  }
  if (v2.value == "") {
    v2.style.borderColor = "red";
  } else {
    v2.style.borderColor = "black";
  }
  if (v3.value == "") {
    v3.style.borderColor = "red";
  } else {
    v3.style.borderColor = "black";
  }
  if (v4.value == "") {
    v4.style.borderColor = "red";
  } else {
    v4.style.borderColor = "black";
  }

  document.getElementById('resultado').style.visibility = "visible";

  if (v1.value != "" && v2.value != "" && v3.value != "" && v4.value != "") {
    v1.value = "";
    v2.value = "";
    v3.value = "";
    v4.value = "";
    document.getElementById('resultado').innerHTML = "Enviado com sucesso!";    
    document.getElementById('resultado').style.color = "green";
  }
}

function abrirModal() {
  document.getElementById('cortina').style.transition = "3s";
  document.getElementById('cortina').style.display = "block";
  document.getElementById('modal').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal1() {
  document.getElementById('cortinaf1').style.transition = "3s";
  document.getElementById('cortinaf1').style.display = "block";
  document.getElementById('modalf1').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal2() {
  document.getElementById('cortinaf2').style.transition = "3s";
  document.getElementById('cortinaf2').style.display = "block";
  document.getElementById('modalf2').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal3() {
  document.getElementById('cortinaf3').style.transition = "3s";
  document.getElementById('cortinaf3').style.display = "block";
  document.getElementById('modalf3').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal4() {
  document.getElementById('cortinaf4').style.transition = "3s";
  document.getElementById('cortinaf4').style.display = "block";
  document.getElementById('modalf4').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

// Experiências

function abrirModal5() {
  document.getElementById('cortinaex1').style.transition = "3s";
  document.getElementById('cortinaex1').style.display = "block";
  document.getElementById('modalex1').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal6() {
  document.getElementById('cortinaex2').style.transition = "3s";
  document.getElementById('cortinaex2').style.display = "block";
  document.getElementById('modalex2').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal7() {
  document.getElementById('cortinaex3').style.transition = "3s";
  document.getElementById('cortinaex3').style.display = "block";
  document.getElementById('modalex3').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal8() {
  document.getElementById('cortinaex4').style.transition = "3s";
  document.getElementById('cortinaex4').style.display = "block";
  document.getElementById('modalex4').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal9() {
  document.getElementById('cortinaev1').style.transition = "3s";
  document.getElementById('cortinaev1').style.display = "block";
  document.getElementById('modalev1').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal10() {
  document.getElementById('cortinaev2').style.transition = "3s";
  document.getElementById('cortinaev2').style.display = "block";
  document.getElementById('modalev2').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal11() {
  document.getElementById('cortinaev3').style.transition = "3s";
  document.getElementById('cortinaev3').style.display = "block";
  document.getElementById('modalev3').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function abrirModal12() {
  document.getElementById('cortinaev4').style.transition = "3s";
  document.getElementById('cortinaev4').style.display = "block";
  document.getElementById('modalev4').animate([
    { transform: 'scale(0)' },
    { transform: 'scale(1)' }
  ], {
    duration: 300,
  });
  document.body.style.overflowY = "hidden";
}

function fecharModal() {
  document.body.style.overflowY = "scroll";

  document.getElementById('resultado').style.visibility = "hidden";

  document.getElementById('cortina').style.display = "none";

  document.getElementById('cortinaf1').style.display = "none";
  document.getElementById('cortinaf2').style.display = "none";
  document.getElementById('cortinaf3').style.display = "none";
  document.getElementById('cortinaf4').style.display = "none";

  document.getElementById('cortinaex1').style.display = "none";
  document.getElementById('cortinaex2').style.display = "none";
  document.getElementById('cortinaex3').style.display = "none";
  document.getElementById('cortinaex4').style.display = "none";
  
  document.getElementById('cortinaev1').style.display = "none";
  document.getElementById('cortinaev2').style.display = "none";
  document.getElementById('cortinaev3').style.display = "none";
  document.getElementById('cortinaev4').style.display = "none";
}