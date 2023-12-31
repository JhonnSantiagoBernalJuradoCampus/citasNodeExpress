import dotenv from "dotenv";
import mysql from "mysql2";
import { Router } from "express";
import proxyPaciente from "../middleware/proxyPaciente.js";

dotenv.config();

const storagePaciente = Router();
let con = undefined;

storagePaciente.use((req,res,next)=>{
    let myConfig = JSON.parse(process.env.DB_CONFIG);
    con = mysql.createPool(myConfig);
    next();
})

storagePaciente.get('/', (req,res)=>{
    con.query(
        /*sql*/`SELECT * FROM usuario ORDER BY usu_nombre ASC`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(JSON.stringify(data));
        }
    ) 
})



storagePaciente.get('/:id_paciente', (req,res)=>{
    con.query(
        /*sql */`SELECT * FROM usuario WHERE usu_id = ${req.params.id_paciente}`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(JSON.stringify(data))
        }
    )
})

storagePaciente.get('/grupo/:id_medico', (req,res)=>{
    con.query(
        /*sql */`SELECT usuario.*, cita.cit_fecha, medico.med_nroMatriculaProfesional, medico.med_nombrecompleto FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProfesional WHERE medico.med_nroMatriculaProfesional = ${req.params.id_medico};`,
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al traer los datos")
            }
            res.send(JSON.stringify(data));
        }
    )
})

storagePaciente.post('/', proxyPaciente, (req,res)=>{
    // datos de entrada
    //  {
        //     "cc": 1098621901,
        //     "primer_nombre": "jhon",
        //     "segundo_nombre": "santiago",
        //     "primer_apellido": "bernal",
        //     "segundo_apellido": "jurado",
        //     "telefono": "+57319567",
        //     "direccion": "calle#14-16",
        //     "email": "santiago@gmail.com",
        //     "tipo_documento": 1,
        //     "genero": 1,
        //     "acudiente": 1
        // }
    con.query(
        /*sql */`INSERT INTO usuario SET ?`,
        [req.body],
        (err,data,fill)=>{
            if(err){
                res.status(500).send("Error al enviar datos")
            }
            res.send("Agregado exitosamente")
        }
    )
})

export default storagePaciente;