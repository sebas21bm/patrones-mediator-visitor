# Patrones: Mediator y Visitor
Implementacion de los patrones Mediator y Visitor
## Patrones implementados
1. Mediator
2. Visitor

## Problema que resuelven
El sistema necesita
* Calcular metricas
* Actualizar los componentes de la UI

Un negocio de ropa tiene una pagina web en la que la gente puede registrarse y comprar ropa. Los dueños del negocio quieren una forma de ver el crecimiento y estadísticas de la clientes que compra por medio de su sitio web, para esto, acceden a un dashboard que tiene la información que necesitan. Además, el cliente desea que en un futuro se puedan añadir nuevas funcionalidades que le permita tener mas información acerca de su negocio. Este dashboard tendrá tres vistas distintas: 
* **Inicio**: Muestra las ultimas estadisticas que mas le interesan sobre ambas vistas, además de alertas en caso de no cumplir alguna de las metas de negocio que tienen.
* **Usuarios**: Muestra las métricas sobre los usuarios que se encuentren registrados en el sistema.
* **Ventas**: Muestras las métricas sobre las ventas realizadas.

El sistema necesita
* Calcular metricas
* Actualizar los componentes de la UI
* Mostrar alertas

Uno de los problemas actuales que tiene el dashboard y las distintas vistas es que los distintos componentes se comunican directamente. Al calcular las metricas y querer actualizar la información en la vista de inicio, los componentes conocen y llaman directamente a los componentes a actualizar. Esto es un problema porque, de acuerdo a los deseos del cliente, si se quisiera añadir más componentes que actualizar, se debe de cambiar la implementación, haciendo que sea tedioso extender la funcionalidad debido a que los componentes se conocen entre si. 

Otro gran problema es que al querer agregar funcionalidades nuevas dentro de las clases existentes puede afectar al funcionamiento ya probado de estas. Además, los comportamientos de forma repetida para cada una de las clases, lo que dificulta el mantenimiento, pues la lógica no está centralizada. También, las clases no son del mismo tipo, por lo que no comparten un padre al que se le pueda agregar comportamiento y lo hereden.

## ¿Cómo ejecutar el proyecto?
>[!WARNING]
>Antes de ejecutar el proyecto, es necesario ejecutar los comandos descritos en la seccion **¿Cómo ejectuar el ejemplo?**


En el editor VisualStudioCode, instalar la extension **Live Server**, y dar clic derecho sobre uno de los archivos HTML, que se encuentran en la carpeta proyecto/src/html/, y dar seleccionar la opcion **Open With Live Server**. Esto va abrir la vista en el navegador por defecto.

## Herramientas utilizadas
Version de TypeScript: 6.0.3

## ¿Cómo instalar las dependencias necesarias?
* En caso de no tener TypeScript instalado, en la terminal se ejecuta el comando *npm i -g typescript*
* Link para descargar [Node.js](https://nodejs.org/en/download)

## ¿Cómo ejecutar el ejemplo?
En la terminal, posicionado en la carpeta donde se encuentra el proyecto, se ejecuta el comando *npx tsc*
