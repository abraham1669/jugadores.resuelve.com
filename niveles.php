<?php 
  require_once 'libs/medoo.php';
  require_once 'libs/_db.php';
?>
<!DOCTYPE html>
<html lang="es-MX">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
  <title>Jugadores Resuelve</title>
  <style>
  .img-resuelve {
    height: 150px;
    width: 150px;
    object-fit: contain;
    margin: 10px auto;
    display: block;
    border-radius: 50%;
  }
  </style>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img
          src="https://resuelvetudeuda.com/wp-content/uploads/2020/10/Logo_Resuelve_tu_Deuda_NV_trans.png" alt=""
          class="img-fluid" style="max-width: 120px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="./">Home</a>
          <a class="nav-link" href="./niveles">Niveles</a>
          <a class="nav-link" href="./equipos">Equipos</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-sm-4 offset-sm-4">
        <form action="#" method="POST" id="formSueldos">
          <div class="form-group mb-3">
            <label for="nombre">Nivel: </label>
            <input type="text" id="nombre" name="nombre" class="form-control" />
          </div>
          <div class="form-group mb-3">
            <label for="goles_minimos">Goles mínimos: </label>
            <input type="number" id="goles_minimos" name="goles_minimos" class="form-control" />
          </div>
          <button class="btn btn-primary" id="btnAgregarNiveles" type="button">Agregar</button>
        </form>
      </div>
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script type="module" src="js/app.js"></script>
</body>

</html>