const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const port = 3000;
const ip = 'localhost';

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

const conexion = mysql.createConnection({
    host: "localhost",
    database: "instituto_valle_grande",
    user: "root",
    password: "admin", // contraseña de ustedes
});


conexion.connect(function (err) {
    if (err) {
        throw err; // eanuda la ejecución de un generador al lanzar un error en éste y regresar un objeto con las dos propiedades done y value
    } else {
        console.log("Conexión exitosa")
    }  
});

app.use(express.json()); // analiza el cuerpo de las solicitudes HTTP q contirnr datos de formato JSON en una solicitud POST : analiza los dattosq y lo convierten en objeto 
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Este middleware se utiliza para analizar el cuerpo de las solicitudes HTTP que contienen datos codificados en formato x-www-form-urlencoded. Esto es utilizado cuando los datos se envían desde formularios HTML. Similar al middleware express.json(), este middleware analiza los datos y los convierte en un objeto JavaScript accesible a través de req.body. La opción `{ extendida

app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "./index.html");
    res.sendFile(filePath);
});


app.post("/validar", function (req, res) {
    const datos = req.body;
    let carrera = datos.carrera;
    let nombres = datos.nombres;
    let dni = datos.dni;
    let fechaNacimiento = datos.fechaNacimiento;
    let correo = datos.correo;
    let contrasena = datos.contrasena;
    let aceptarCondiciones = datos.aceptarCondiciones;

    let registrar = "INSERT INTO estudiantes (carrera, nombres, dni, fecha_nacimiento, correo, contrasena) VALUES ('" + carrera + "','" + nombres + "','" + dni + "','" + fechaNacimiento + "','" + correo + "', '" + contrasena + "')";

    if (aceptarCondiciones && carrera && nombres && dni && fechaNacimiento && correo && contrasena) {
        conexion.query(registrar, function (error) {
            if (error) {
                throw error
            } else {
                console.log("Datos normales");
                res.redirect('/');
            }
        });
    }
});

app.listen(port, function () {
    console.log("El servidor está funcionando en http://localhost:3000");
});










