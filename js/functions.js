export function validaDatos() {
  let row = {},
    bandera = true,
    errors = []
  $("#formSueldos")
    .find("input, select")
    .map(function (i, el) {
      let $this = $(this)
      if (
        $this.val() != "" &&
        $this.val() != undefined &&
        $this.val() != 0 &&
        $this.val() != null
      ) {
        if ($this.prop("name") == "goles") {
          row[$this.prop("name")] = parseInt($this.val())
        } else if ($this.prop("name") == "sueldo") {
          row[$this.prop("name")] = parseFloat($this.val())
        } else if ($this.prop("name") == "bono") {
          row[$this.prop("name")] = parseFloat($this.val())
        } else {
          row[$this.prop("name")] = $this.val()
        }
      } else {
        bandera = false
        errors.push(capitalizeFirstLetter($this.prop("name")))
      }
    })
  if (bandera) {
    row["status"] = true
    row["sueldo_completo"] = "null"
  } else {
    row = {
      status: false,
      errors,
    }
  }
  return row
}
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export function renderTemplate(row) {
  let id = Date.now()
  let template = `
    <tr id="row-${id}">
      <td>${row.nombre}</td>
      <td>${row.nivel}</td>
      <td>${row.goles}</td>
      <td>${row.sueldo}</td>
      <td>${row.equipo}</td>
      <td>
      <a href="javascript" class="editar" data-row="row-${id}" data-json='${JSON.stringify(
    row,
  )}'>Editar</a>
      <a href="javascript" class="eliminar" data-id='${id}'>Eliminar</a>
      </td>
    </tr>
  `
  return template
}
export function hayRegistros() {
  $("#btnEnviar").prop("disabled", true)
  if ($("#tablePlayers").find("tbody tr").length > 0) {
    $("#btnEnviar").prop("disabled", false)
  }
}
export async function getNiveles() {
  const response = await axios.get("http://api.internet-rv.com.mx/niveles")
  if (response.status == 200) {
    const niveles = renderNiveles(response.data)
    $("#nivel").html(niveles)
  }
}
function renderNiveles(obj) {
  let template = ``
  if (obj.length > 0) {
    obj.map(function (i, e) {
      template += `
      <option value="${i.nombre}">${i.nombre}</option>
      `
    })
  } else {
    template = `<option value="">No hay datos disponibles</option>`
  }
  return template
}
export async function getEquipos() {
  const response = await axios.get("http://api.internet-rv.com.mx/equipos")
  if (response.status == 200) {
    const equipos = renderEquipos(response.data)
    $("#equipo").html(equipos)
  }
}
function renderEquipos(obj) {
  let template = ``
  if (obj.length > 0) {
    obj.map(function (i, e) {
      template += `
      <option value="${i.nombre}">${i.nombre}</option>
      `
    })
  } else {
    template = `<option value="">No hay datos disponibles</option>`
  }
  return template
}
