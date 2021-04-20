<?php 
require_once 'medoo.php';
require_once '_db.php';

function allObjetivos($tabla, $suf){
  global $db;
  $respuesta = $db->select($tabla, "*",["status".$suf => 1]);
  $datos = array();
    foreach($respuesta as $rows){
      $datos[] = array(
          'nombre' => $rows['nombre'.$suf],
          'color' => $rows['color'.$suf],
          'status' => $rows['status'.$suf],
          'id' => $rows['id'.$suf],
      );
    }
    echo json_encode($datos);
}
function getObjetivos($tabla, $suf, $id){
  
  global $db;
  $rows = $db->get($tabla, "*",["AND" => ["status".$suf => 1, "id".$suf => $id]]);
  $datos[] = array(
      'nombre' => $rows['nombre'.$suf],
      'status' => $rows['status'.$suf],
      'registro' => $rows['registro'.$suf],
      'actualizacion' => $rows['actualizacion'.$suf],
      'id' => $rows['id'.$suf],
  );
  echo json_encode($datos);
}
function updateObjetivos($tabla, $suf, $json){
  global $db;
  extract($json);
  $db->update($tabla,[
    "nombre".$suf => $nombre,
    "color".$suf => $color,
    "usuario".$suf => $usuario,
  ],["id".$suf => $json['id']]);
  $error = $db->error();
    if (!empty($error[2])) {
        $respuesta = [
          "status" => "error",
          "titulo" => "Ha ocurrido un error, intente más tarde",
          "texto" => $error[2]
        ];
    }else{
          $respuesta = [
          "status" => "success",
          "titulo" => "Operación completada correctamente",
          "texto" => "Se ha cambiado el color correctamente"
        ];
    }
    echo json_encode($respuesta);
}
function deleteObjetivos($tabla, $suf, $id){
  global $db;
  $resp = $db->delete($tabla, ["id".$suf => $id ]);
  $respuesta = [
    "status" => 0,
    "titulo" => "Algo salió mal",
    "texto" => "No se pudo eliminar el registro,  intente más tarde",
    "tipo" => "error",
  ];
  if($resp->rowCount() > 0){
    $respuesta = [
      "status" => 0,
      "titulo" => "Registro eliminado",
      "texto" => "Se eliminó el registro correctamente",
      "tipo" => "success",
    ];
  }
  echo json_encode($respuesta, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
}
function setObjetivos($tabla, $suf, $arreglo){
  global $db;
  extract($arreglo);
  $entrada = [
    "nombre".$suf => $nombre,
    "color".$suf => $color,
    "usuario".$suf => $usuario,
  ];
  $datos = $db->insert($tabla, $entrada);
  $error = $db->error();
  $respuesta =  ["status" => "error", "code" => 400, "titulo" => "Ha ocurrido un error", "message" => $error[2]];
  if($datos->rowCount() > 0){
    $respuesta =  ["status" => "success", "code" => 200, "titulo" => "Acción realizada correctamente", "message" => "Se ha insertado correctamente el registro"];
  }
  echo json_encode($respuesta);
}
?>