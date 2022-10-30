/*unificamos criterios de cada html para el header y el footer */
let cad=`
<h1 id="titulo">ENTRENAMIENTO CON KETTLEBELLS</h1>
            <nav>
                <br>
                <a class="nav" href="index.html">Home</a>
                <a class="nav" href="about.html">Acerca de</a>
                <a class="nav" href="form.html">Regístrese</a>
                <a class="nav" href="location.html">Sucursales</a>
            
            </nav>

`
document.getElementById("idheader").innerHTML=cad;


cad=`
<a class="contacto" href="mailto:jpserra@live.com.ar">Contacto</a>
            <a class="arriba" href="#titulo">Arriba</a>
            <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a class="redsoc" href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a class="redsoc" href="https://www.pinterest.com" target="_blank"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
            <br>
            <p class="derechos">Todos los derechos reservados.</p>

        `
        document.getElementById("idfooter").innerHTML=cad;
