/* ------------------------------------------------------------------------------------- */
/*                                       VARIABLES                                       */
/* ------------------------------------------------------------------------------------- */
const form = document.forms[0];
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const ID = document.getElementById("ID");
const NID = document.getElementById("NID");
const departamento = document.getElementById("Departamento");
const municipio = document.getElementById("municipio");
const direccion = document.getElementById("direccion");
const c_requerimiento = document.getElementById("categoria_requerimiento");
const equipos = document.getElementById("Equipos");
const serial = document.getElementById("serial");
const detalle_requerimiento = document.getElementById("detalle_requerimiento");
const tipo_cliente = document.getElementById("t_cliente");
const fecha_compra = document.getElementById("fecha_compra");
const telefono = document.getElementById("telefono");
const file = document.getElementById("customFile");
const politica = document.getElementById("politica");
const division_comercial = document.getElementById("division_comercial");
const buttonSubmit = document.getElementById("boton");
let archivo = [];
let archivoFactura = [];

/* ------------------------------------------------------------------------------------- */
/*                                       VALIDACIONES                                    */
/* ------------------------------------------------------------------------------------- */

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}


function validaciones() {
  /* Tipo de Cliente */
  if (tipo_cliente.value == "Selecciona una opción" || tipo_cliente.value == "") {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Seleccione el tipo de Cliente';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Nombre del Usuario */

  if (nombre.value == null || nombre.value == "") {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'No se lleno el campo nombre';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Correo del Usuario */
  console.log(validar_email(correo.value));
  if (correo.value == null || correo.value == "" || validar_email(correo.value) == false) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'El correo es incorrecto. Se necesita la siguiente estructura: example@example.com';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Tipo de Identificación */

  if (ID.value == "Selecciona una opción" || ID.value == "") {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Seleccione un tipo de identificacion';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Numero de Identificación */

  if (NID.value == null || NID.value == "" || isNaN(parseInt(NID.value))) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'No ingreso un numero de Identificación (Solo se aceptan numeros)';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Telefono usuario */

  if (telefono.value == null || telefono.value == "" || isNaN(parseInt(telefono.value))) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'No ingreso un numero de telefono (Solo se aceptan numeros)';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Departamento */

  if (departamento.value == "Selecciona una opción") {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Seleccione un departamento';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Municipio */

  if (municipio.value == "" || municipio.value == null) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Escriba un municipio';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Dirección */

  if (direccion.value == "" || direccion.value == null) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Escriba una dirección';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Division Comercial */
  if (division_comercial.value == "Selecciona una opción" || division_comercial.value == null) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Seleccione una división comercial';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /* Clase de requerimiento */

  if (c_requerimiento.value == "Selecciona una opción" || c_requerimiento.value == null) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Seleccione un tipo de requerimiento';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }
  else {
    if (c_requerimiento.value == "Reclamo / Producto No Conforme") {
      if (file.value == null || file.value == "") {
        document.getElementById("headermensaje").style.background = '#ff3c37';
        document.getElementById('titulomensaje').innerHTML = 'ERROR';
        document.getElementById('mensaje').innerHTML = 'Por favor Seleccione un archivo de evidencia';
        $(".custom-file-label").addClass("selected").html("Choose File");
        return false;
      }
    }
  }

  /*Detalle del requerimiento */

  if (detalle_requerimiento.value == "" || detalle_requerimiento.value == null) {
    document.getElementById("headermensaje").style.background = '#ff3c37';
    document.getElementById('titulomensaje').innerHTML = 'ERROR';
    document.getElementById('mensaje').innerHTML = 'Escriba el detalle de su requerimiento';
    $(".custom-file-label").addClass("selected").html("Choose File");
    return false;
  }

  /*Politica de tratamiento de Datos */
  return true;
}

/* ------------------------------------------------------------------------------------- */
/*                                 FUNCIONES ONCHANGE                                    */
/* ------------------------------------------------------------------------------------- */

function ticketOnchange(sel) {
  divGarantia = document.getElementById("seccion_garantia");
  let info = "<span>" + sel.value + ": </span>"
  descripcionCategoria = {
    Petición:
      "La petición es una solicitud para que se realicen algún tipo de acción o simplemente solicitar cierta información.",
    Queja:
      "Es la inconformidad sobre algún proceso administrativo o comercial, área de la organización o persona.",
    Reclamo:
      "Inconformidad ocasionado por fallas en el Producto o la mala prestación de un servicio.",
    Solicitud:
      "Propuesta o recomendación del cliente para mejorar el servicio o producto.",
    Felicitación:
      "Comunicación positiva frente a los productos y/o servicios ofrecidos, también por la atención brindada por un colaborador.",
  };
  if (sel.value == "Reclamo / Producto No Conforme" || sel.value == "Queja") {
    divGarantia.style.display = "";
    info += descripcionCategoria['Reclamo'];
    document.getElementById("helpCategoria").innerHTML = info
    
  } else {
    divGarantia.style.display = "none";
    info += descripcionCategoria[sel.value];
    document.getElementById("helpCategoria").innerHTML = info;
  }
  document.getElementsByClassName("helpCategoria")[0].style.display = "";
}

function equipoOnchange(seleccion) {
  divSerial = document.getElementById("serialEquipo");
  if (seleccion.value == "Accesorios" || seleccion.value == "Repuestos") {
    divSerial.style.display = "none"
  }
  else {
    divSerial.style.display = ""
  }
}

function cargando() {
  document.getElementById("headermensaje").style.background = '#4040ff';
  document.getElementById('titulomensaje').innerHTML = 'Cargando';
  document.getElementById('mensaje').innerHTML = '<img src="https://acegif.com/wp-content/uploads/loading-25.gif" alt="Cargando" width="50px" height="50px"><span style="padding-left: 10px">Cargando...</span>';
}