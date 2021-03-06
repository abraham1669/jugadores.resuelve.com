# Interfaz Resuelve Jugadores

Este proyecto est谩 enfocado en dar una interfaz de prueba para la API generada en el siguiente repositorio: [API Resuelve Jugadores](http://api.internet-rv.com.mx/)

Si quieres ver un demo funcionando de una interfaz para la API, puedes ir al siguiente enlace: [Resuelve Jugadores](http://jugadores.internet-rv.com.mx/), Si descargar el repositorio, lo puedes hacer en la siguiente liga: [Repositorio Resuelve Jugadores](https://github.com/abraham1669/jugadores.resuelve.com)

## Comenzando 馃殌

Para iniciar, solo necesitamos clonar el repositorio:

1. Sobre la lista de archivos, da clic en C贸digo.
2. Copia la URL que aparece dentro de la secci贸n HTTPS
3. Abre la Terminal.
4. Cambia el directorio de trabajo actual a la ubicaci贸n en donde quieres clonar el directorio.
5. Escribe git clone, y luego pega la URL que copiaste antes.

> $ git clone https://github.com/abraham1669/jugadores.resuelve.com.git

6.Presiona Enter para crear tu clon local.

NOTAS:

- Si tienes instalado Github Desktop, Repite el paso 1 pero selecciona la opci贸n Open With Github Desktop y Sigue las indicaciones en GitHub Desktop para completar la clonaci贸n.
- Si lo prefieres, puedes descargar el archivo comprimido del proyecto.

Mira **Instalaci贸n** para conocer como desplegar el proyecto.

### Pre-requisitos 馃搵

- HTML
- CSS
- Bootstrap
- Javascript
- AXIOS
- Javascript Modules

### 驴C贸mo funciona?

1. Del lado izquierdo tenemos un formulario para ir agregando informaci贸n a la tabla de la derecha
2. Al pulsar el bot贸n Agregar, se agregar谩 una fila a la tabla de la derecha, si la tabla contiene al menos una fila, se activa el bot贸n Enviar Datos.
3. Al pulsar el bot贸n de Cancelar, se limpia el formulario.
4. Una vez agregados todos los datos que queremos consultar, pulsaremos el bot贸n Enviar Datos, que har谩 una consulta a la API y retornar谩 la respuesta.
5. Si la respuesta es correcta, se pintan Cards en la secci贸n debajo del formulario y tabla, con la leyenda Informaci贸n de jugadores.

#### BONUS:

1. En la Barra de navegaci贸n tenemos los enlaces para ir a Niveles y equipos
2. Al entrar a Niveles, se deber谩 introducir el nombre del nuevo nivel y los goles m铆nimos
   2.1. Al pulsar agregar, se enviar谩 una petici贸n a la API y si la respuesta es satisfactoria, nos retornar谩 al Home
3. Al entrar a Equipos, se deber谩 introducir el nombre del nuevo equipo
   2.1. Al pulsar agregar, se enviar谩 una petici贸n a la API y si la respuesta es satisfactoria, nos retornar谩 al Home

Con esto, podemos agregar nuevos Niveles y Equipos para poder consultar otros Datos.

### Instalaci贸n 馃敡

1. El despliegue de este proyecto es muy sencillo, simplemente necesitamos subir al servidor los siguientes archivos y directorios:

- index.php
- niveles.php
- equipos.php
- js/\*

## Construido con 馃洜锔?

- [Axios](https://github.com/axios/axios) - Peticiones a la API
- [Bootstrap](https://getbootstrap.com/) - Estilos b谩sicos

## Versionado 馃搶

Usamos [SemVer](http://semver.org/) para el versionado.

## Autores 鉁掞笍

- **Abraham Pech** - _Proyecto_ - [abraham1669](https://github.com/abraham1669)

---

鈱笍 con 鉂わ笍 por [abraham1669](https://github.com/abraham1669) 馃槉
