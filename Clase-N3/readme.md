<h1> Vamos a empezar estes documento para tener un paso a paso:  </h1>

1- Generar la estructura de HTML 
2-Estructura semantica de html 
  header, nav, main, section, footer
3-Completar datos mi paginas - Title del documento 
4- Empezamos con la etiqueta <img>
<img >  
<img src="url" alt="" >

<picture>
  <source media="(min-width:650px)" srcset="URL">
  <source media="(min-width:465px)" srcset="URL">
  <img src="URL" alt="Flowers" style="width:auto;">
</picture>

<figure>
  <img src="url" alt="Trulli" style="width:100%">
  <figcaption>Copyright</figcaption>
</figure>


- Video 

<video controls autoplay>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    El navegador no soporta el video
</video>

- Audio 
<audio controls>
    <source src="horse.ogg" type="audio/ogg">
    <source src="horse.mp3" type="audio/mpeg">
    El navegador no soporta el archivo.
</audio>


Iframe

Es una porción o  parte de una pagina dentro de otro pagina en creación. 


Formularios 

<form action="index.js" method="GET">
    <label for="user">Usuario:</label>
    <input type="text" name="user" id="user">

    <label for="password"> Contraseña: </label>
    <input type="password" name="password" id="password">

    <input type="submit" value="Ingresar a mi cuenta">
</form>


