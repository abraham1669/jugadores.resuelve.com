# Interfaz Resuelve Jugadores

Este proyecto está enfocado en dar una interfaz de prueba para la API generada en el siguiente repositorio: [API Resuelve Jugadores](http://api.internet-rv.com.mx/)

Si quieres ver un demo funcionando de una interfaz para la API, puedes ir al siguiente enlace: [Resuelve Jugadores](http://jugadores.internet-rv.com.mx/), Si descargar el repositorio, lo puedes hacer en la siguiente liga: [Repositorio Resuelve Jugadores](https://github.com/abraham1669/jugadores.resuelve.com)

## Comenzando 🚀

Para iniciar, solo necesitamos clonar el repositorio:

1. Sobre la lista de archivos, da clic en Código.
2. Copia la URL que aparece dentro de la sección HTTPS
3. Abre la Terminal.
4. Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.
5. Escribe git clone, y luego pega la URL que copiaste antes.

> $ git clone https://github.com/abraham1669/jugadores.resuelve.com.git

6.Presiona Enter para crear tu clon local.

NOTAS:

- Si tienes instalado Github Desktop, Repite el paso 1 pero selecciona la opción Open With Github Desktop y Sigue las indicaciones en GitHub Desktop para completar la clonación.
- Si lo prefieres, puedes descargar el archivo comprimido del proyecto.

Mira **Instalación** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

- HTML
- CSS
- Bootstrap
- Javascript
- AXIOS
- Javascript Modules

### ¿Cómo funciona?

1. Del lado izquierdo tenemos un formulario para ir agregando información a la tabla de la derecha
2. Al pulsar el botón Agregar, se agregará una fila a la tabla de la derecha, si la tabla contiene al menos una fila, se activa el botón Enviar Datos.
3. Al pulsar el botón de Cancelar, se limpia el formulario.
4. Una vez agregados todos los datos que queremos consultar, pulsaremos el botón Enviar Datos, que hará una consulta a la API y retornará la respuesta.
5. Si la respuesta es correcta, se pintan Cards en la sección debajo del formulario y tabla, con la leyenda Información de jugadores.

#### BONUS:

1. En la Barra de navegación tenemos los enlaces para ir a Niveles y equipos
2. Al entrar a Niveles, se deberá introducir el nombre del nuevo nivel y los goles mínimos
   2.1. Al pulsar agregar, se enviará una petición a la API y si la respuesta es satisfactoria, nos retornará al Home
3. Al entrar a Equipos, se deberá introducir el nombre del nuevo equipo
   2.1. Al pulsar agregar, se enviará una petición a la API y si la respuesta es satisfactoria, nos retornará al Home

Con esto, podemos agregar nuevos Niveles y Equipos para poder consultar otros Datos.

### Instalación 🔧

1. El despliegue de este proyecto es muy sencillo, simplemente necesitamos subir al servidor los siguientes archivos y directorios:

- index.php
- niveles.php
- equipos.php
- js/\*

## Construido con 🛠️

- [Axios](https://github.com/axios/axios) - Peticiones a la API
- [Bootstrap](https://getbootstrap.com/) - Estilos básicos

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado.

## Autores ✒️

- **Abraham Pech** - _Proyecto_ - [abraham1669](https://github.com/abraham1669)

---

⌨️ con ❤️ por [abraham1669](https://github.com/abraham1669) 😊
