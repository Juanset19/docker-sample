# Proceso realizado

**Se debe instalar [Docker] (https://www.docker.com/)**

*Se crea una carpeta donde estará alojada la aplicación.

*En **/{application_root}** se ejecuta **npm init**.

*Se instalan el framework *express* y las librerías *mocha* y *supertest* para realizar pruebas con el comando

>**npm install express mocha supertest --save**. (La opción *--save* añade al *package.json* las dependencias instaladas)

*Se crea las carpetas *test* y *public*: **mkdir test**, **mkdir public**

>Se crean los archivos *app.js, server.js, .dockerignore, Dockerfile, public/index.html, test/app.test.js*
**touch app.js server.js .dockerignore Dockerfile public/index.html test/app.test.js**

*Para verificar que el servidor esté corriendo se ejecuta el comando **node server.js**

*Para ejecutar las pruebas de *app.test.js* se ejecuta el comando **mocha** o **npm test**

*Se debe crear un contenedor de **Docker**

>*La idea detrás de Docker es crear contenedores ligeros y portables para las aplicaciones software que puedan ejecutarse en cualquier máquina con Docker instalado, independientemente del sistema operativo que la máquina tenga por debajo, facilitando así también los despliegues.*

>*En .dockerignore se establecen los archivos que se ignoran al generar el artefacto.
>*Se escribe el **Dockerfile** (Este es el archivo más importante de Docker) Manifiesto de comandos para recrear y reproducir el contenedor [Documentación de Docker](https://docs.docker.com/engine/reference/builder/)
>*Se construye el contenedor con el comando **docker build -t platzi .**