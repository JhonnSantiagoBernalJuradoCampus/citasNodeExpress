# Diagrama MER




# Consultas SQL



1. Obtener todos los pacientes alfabéticamente|
2. Obtener todas las citas alfabéticamente
3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):
4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):
5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)
6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)
7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)
8. Obtener los médicos y sus consultorios
9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)
10. Obtener los consultorio donde se aplicó las citas de un paciente
11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
12. Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.

# DB

Primeramente se crea la base de datos: en el archivo db_farmacia.sql, despues inserto los datos atra ves de el archivo datos.sql

CONFIG

para la configuracion basica de el proyecto inicio con el comando:

- npm init -y
- npm i -E -D express
- npm i -E -D mysql2
- npm i -E -D dotenv
- npm i -E -D class-transformer
- npm i -E -D reflect-metadata
- npm i -E -D typescript
- npm i -E -D nodemon

creo el archivo .env con su config:

y creo el .env.example,

creo el archivo .gitignore e ignoro el /node_modules, package-lock,json, .env

## Servidor

Cree el servidor en el archivo app.js donde hago el listen donde por consola muestro el servidor:
http://127.23.12.50:5010

# 1 Obtener todos los pacientes alfabeticamente

Se crea la ruta de pacientes y se crea el get con su query
http://127.23.12.50:5010/pacientes

# 2 Obtener todos las citas por la fecha

Se crea la ruta citas en el router y se crea el get con su query
http://127.23.12.50:5010/citas