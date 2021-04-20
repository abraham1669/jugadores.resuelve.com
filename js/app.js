import { validaDatos, renderTemplate, hayRegistros, getNiveles, getEquipos } from "./functions.js"
// Se utilizará para agregar jugadores a la tabla
$("#btnAgregar").click(function () {
  let row = validaDatos()
  if (!row.status) {
    Swal.fire(
      "Datos son incorrectos",
      "Verifica los siguientes campos: " + row.errors.join(", "),
      "error",
    )
  } else {
    delete row.status
    let template = renderTemplate(row)
    let fila = $(this).data("editing")
    console.log(fila)
    if ($(this).hasClass("editing")) {
      $("#" + fila).replaceWith(template)
      $(this).removeClass("editing").text("Agregar").removeData("editing")
    } else {
      $("#tablePlayers").find("tbody").append(template)
    }
    $("#formSueldos")[0].reset()
    hayRegistros()
  }
})
// Se utilizará para eliminar los datos del formulario actual y resetear la acción en caso de estar editando
$("#btnCancelar").click(function () {
  $("#formSueldos")[0].reset()
  $("#btnAgregar").removeClass("btnEditar")
})
// Se utilizará para eliminar las filas de la tabla
$("#tablePlayers").on("click", ".eliminar", function (e) {
  e.preventDefault()
  let id = $(this).data("id")
  $("#row-" + id).remove()
  hayRegistros()
})
// Se utilizará para traer los datos de la tabla al formulario
$("#tablePlayers").on("click", ".editar", function (e) {
  e.preventDefault()
  const json = $(this).data("json")
  const row = $(this).data("row")
  console.log(row)
  $("#equipo").val(json.equipo)
  $("#goles").val(json.goles)
  $("#nivel").val(json.nivel)
  $("#nombre").val(json.nombre)
  $("#sueldo").val(json.sueldo)
  $("#btnAgregar").addClass("editing").text("Editar").data("editing", row)
})
// Se utilizará para enviar los datos de la tabla al Backend
$("#btnEnviar").click(async function () {
  let obj = {},
    registros = []
  $("#tablePlayers")
    .find(".editar")
    .map(function () {
      registros.push($(this).data("json"))
    })
  obj["jugadores"] = registros
  console.log(obj)
  const headers = {
    "Content-Type": "application/json",
  }
  const response = await axios.post("http://api.internet-rv.com.mx/jugadores", obj, {
    headers: headers,
  })
  if (response.status == 200) {
    const respuesta = response.data.jugadores
    let template = `
      <div class="col-sm-12 py-5">
      <h2>Información de Jugadores</h2>
      </div>
    `
    respuesta.map(function (i, e) {
      template += `
      <div class="col-sm-4 text-center mb-5">
        <div class="card">
          <img src="https://resuelvetudeuda.com/wp-content/uploads/2020/10/Logo_Resuelve_tu_Deuda_NV_trans.png" alt="" class="img-resuelve card-img-top">
          <div class="card-body">
            <h5 class="card-title">${i.nombre}</h5>
            <p class="card-text"><strong>Goles:</strong> <span>${i.goles}</span></p>
            <p class="card-text"><strong>Goles mínimos:</strong> <span>${i.goles_minimos}</span></p>
            <p class="card-text"><strong>Sueldo:</strong> <span>${i.sueldo}</span></p>
            <p class="card-text"><strong>Bono:</strong> <span>${i.bono}</span></p>
            <p class="card-text"><strong>Sueldo Completo:</strong> <span>${i.sueldo_completo}</span></p>
          </div>
        </div>
      </div>
      `
    })
    $("#getResponseData").html(template)
  }
})
$("#btnAgregarNiveles").click(async function () {
  let row = validaDatos()
  delete row.sueldo_completo
  if (!row.status) {
    Swal.fire(
      "Datos son incorrectos",
      "Verifica los siguientes campos: " + row.errors.join(", "),
      "error",
    )
  } else {
    delete row.status
    const headers = {
      "Content-Type": "application/json",
    }
    const response = await axios.post("http://api.internet-rv.com.mx/niveles", row, {
      headers: headers,
    })
    if (response.status == 200) {
      location.href = "/"
    }
    console.log(response)
  }
})
$("#btnAgregarEquipos").click(async function () {
  let row = validaDatos()
  delete row.sueldo_completo
  if (!row.status) {
    Swal.fire(
      "Datos son incorrectos",
      "Verifica los siguientes campos: " + row.errors.join(", "),
      "error",
    )
  } else {
    delete row.status
    const headers = {
      "Content-Type": "application/json",
    }
    const response = await axios.post("http://api.internet-rv.com.mx/equipos", row, {
      headers: headers,
    })
    if (response.status == 200) {
      location.href = "/"
    }
    console.log(response)
  }
})
$(document).ready(function () {
  getNiveles()
  getEquipos()
})
