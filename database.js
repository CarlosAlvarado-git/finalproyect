const {Client} = require('pg')

const client = new Client({
    host: "ec2-35-170-202-150.compute-1.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "AdminCM21",
    database: "tuticketbase"

})

client.connect();
/*Información de usuario luego de crear cuenta. SELECT // incio de sesion
var correo = 'cmalvarado@ufm.edu' // el correo debe ser único en la base de datos. limpiar espacios y todo minúscula. 
var clave = 'tutickertPas234'
const SELECTQ = {
    text: 'SELECT id, nombre, apellido, correo, region, path_foto FROM public.data_user_crt WHERE correo = ($1) AND contrasena = ($2)',
    values: [correo, clave]
  }
client.query(SELECTQ, (err, res)=>{
    if(!err){
        //console.log(typeof(res))
        //console.log(res)
        info = res.rows
        //console.log(res.rows);
        for (const index in info) {  
            user = info[index]
            for (const key in user) {  
                console.log(`${key}: ${user[key]}`)
              }
        }
        
    }
    else{
        console.log(err.message)
    }
    client.end;
});



*/
/*Información de usuario luego de crear cuenta. INSERT // crear cuenta
var nombre = 'Mario'
var apellido = 'Pisquiy'
var correo = 'mariopisquiy@ufm.edu'
var pass = 'tuPas234'
var region = 'CentroAmerica'
foto = 'IMG_3973.PNG'
var foto_path = 'fotos_usuarios/' + foto
// opcion 2
// var foto_path = 'https://github.com/Daniel07816/TuTicket/blob/60b5ee85dccd7a5467ccf03940ed952bcb27a1b5/fotos_usuarios/IMG_3973.PNG'
const INSERT_infousuario = {
    text: 'INSERT INTO public.data_user_crt(nombre, apellido, correo, contrasena, region, path_foto)VALUES ($1, $2, $3, $4, $5, $6)',
    values: [nombre, apellido, correo, pass, region, foto_path]
  }
client.query(INSERT_infousuario, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});
var id_usuario;
// aqui query para traer el id, del usuario creado. 
const SELECT_ID_EVENTO_creado = {
    text: 'SELECT id FROM public.data_user_crt ORDER BY id DESC LIMIT 1',
    values: []
  }
client.query(SELECT_ID_EVENTO_creado, (err, res)=>{
    if(!err){
        info = res.rows
        //console.log(res.rows);
        for (const index in info) {  
            user = info[index]
            for (const key in user) {  
                id_usuario = user[key]
              }
        }
    }
    else{
        console.log(err.message)
    }
    client.end;
});
*/
/*Información de evendo luego de crear un evento INSERT // crear un evento, guardar info y registrar
var nombre = 'Mana Concierto'
var descripcion = 'Concierto de Mana por la gira del mundo en Guatemala'
var fecha = '12/09/2023'
var hora = '18:30'
var fecha_limite = '5/09/2023'
var path_foto = 'carpeta/lafoto_evento.jpg'
const INSERT_infoevento = {
    text: 'INSERT INTO public.data_evento(nombre, descripcion, fecha, hora, fecha_limite,path_foto)VALUES ($1, $2, $3, $4, $5, $6)',
    values: [nombre, descripcion, fecha, hora, fecha_limite, path_foto]
  }
client.query(INSERT_infoevento, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
});

var id_evento;
// aqui query para traer el id, del evento creado.  
const SELECT_ID_EVENTO_creado = {
    text: 'SELECT id FROM public.data_evento ORDER BY id DESC LIMIT 1',
    values: []
  }
client.query(SELECT_ID_EVENTO_creado, (err, res)=>{
    if(!err){
        info = res.rows 
        // [{},{}]
        //console.log(res.rows);
        for (const index in info) {  
            user = info[index]
            for (const key in user) {  
                id_evento = user[key]
            }
        }
        const INSERT_eventoscreados = {
            text: 'INSERT INTO public.eventos_creados(id_user_crt, id_evento)VALUES ($1, $2)',
            values: [id_usuario, id_evento]
          }
        client.query(INSERT_eventoscreados, (err, res)=>{
            if(!err){
                console.log(res.rows);
            }
            else{
                console.log(err.message)
            }
            client.end;
        });
        var categorias = [1];
        for (const index in categorias){
            const INSERT_categoria_evento = {
                text: 'INSERT INTO public.categoria_evento(id_evento, id_categoria)VALUES ($1, $2)',
                values: [id_evento, categorias[index]]
            }   
            client.query(INSERT_categoria_evento, (err, res)=>{
                if(!err){
                    console.log(res.rows);
                }
                else{
                    console.log(err.message)
                }
                client.end;
            });
        }
    }
    else{
        console.log(err.message)
    }
    client.end;
});
*/
// guardo con sus id's
 //iria la query de las fotos
/*for (const index in localidades){
    const INSERT_categoria_evento = {
        text: 'INSERT INTO public.info_ubi_local_eventos(id_evento, id_localidad, id_ubicacion, total, precio) VALUES ($1, $2, $3, $4, $5, $6);',
        values: [id_evento, localidades[index], ubicaciones[index], total, precio]
    }   
    client.query(INSERT_categoria_evento, (err, res)=>{
        if(!err){
            console.log(res.rows);
        }
        else{
            console.log(err.message)
        }
        client.end;
    });
}*/
//Información de evento luego de crear un evento. SELECT // cuando me meto a ver todos mis eventos del usuario
//#TRAER IDS DE TODOS MIS EVENTOS CREADOS

//#TRAER INFO DE TODOS LOS EVENTOS DEL USUARIO
/*primero info principal.
var id_user = 44
var idseventos = [];
const SELECTQ_evento_info = {
    text: 'SELECT id_evento FROM eventos_creados WHERE id_user_crt = ($1)',
    values: [id_user]
  }
client.query(SELECTQ_evento_info, (err, res)=>{
    if(!err){
        idseventos = res.rows
        console.log(idseventos)
        for (const index in idseventos) {  
            eventid = idseventos[index]
            for (const key in eventid) {  
                console.log(`${eventid[key]}`)
                const SELECT_INFO_EVENTOS_CREADOS = {
                    text: 'SELECT data_evento.id, data_evento.nombre, data_evento.descripcion, data_evento.fecha, data_evento.hora, data_evento.fecha_limite, data_evento.publicado, data_evento.path_foto, categorias.nombre_categoria  FROM ((data_evento INNER JOIN categoria_evento ON data_evento.id = categoria_evento.id_evento) INNER JOIN categorias ON categoria_evento.id_categoria = categorias.id) WHERE data_evento.id = ($1)',
                    values: [eventid[key]]
                  }
                client.query(SELECT_INFO_EVENTOS_CREADOS, (err, res)=>{
                    if(!err){
                        info = res.rows
                        console.log(info)
                        //for (const index in info) {  
                        //    user = info[index]
                        //    for (const key in user) {  
                        //        console.log(`${key}: ${user[key]}`)
                        //    }
                        //}
                    }
                    else{
                        console.log(err.message)
                    }
                    client.end;
                });
                //segudno info de localidad y de ubicación
                const SELECT_INFO_EVENTOS_CREADOS_p2 = {
                    text: 'SELECT data_evento.id,  localidades.nombre_localidad, ubicaciones.nombre_ubicacion, info_ubi_local_eventos.total, info_ubi_local_eventos.precio FROM ((data_evento INNER JOIN info_ubi_local_eventos ON data_evento.id = info_ubi_local_eventos.id_evento) INNER JOIN localidades ON info_ubi_local_eventos.id_localidad = localidades.id  INNER JOIN ubicaciones ON info_ubi_local_eventos.id_ubicacion = ubicaciones.id) WHERE info_ubi_local_eventos.id_evento = ($1)',
                    values: [eventid[key]]
                  }
                client.query(SELECT_INFO_EVENTOS_CREADOS_p2, (err, res)=>{
                    if(!err){
                        info = res.rows
                        console.log(info)
                        //for (const index in info) {  
                        //    user = info[index]
                        //    for (const key in user) {  
                        //        console.log(`${key}: ${user[key]}`)
                        //    }
                        //}
                    }
                    else{
                        console.log(err.message)
                    }
                    client.end;
                });
            }
        }
    }
    else{
        console.log(err.message)
    }
    client.end;
}); // para poder editar el evento, se debe tener la variable de publicado en 0. Si es 1, solo se puede eliminar o ver 
*/
/*QUERIES UTILES para el select de todo el evento. check
    //Para traer la info principal y su categoría:
    SELECT data_evento.id, data_evento.nombre, data_evento.descripcion, data_evento.fecha, data_evento.hora,
    data_evento.fecha_limite, data_evento.publicado, data_evento.path_foto, categorias.nombre 
    FROM ((data_evento INNER JOIN categoria_evento ON data_evento.id = categoria_evento.id_evento) 
        INNER JOIN categorias ON categoria_evento.id_categoria = categorias.id)

    //Para traer todos los id’s de eventos creados por un usuario. 

    SELECT id_evento FROM eventos_creados WHERE id_user_crt = ($1) 

    # toda la info y categoría en base a los id’s que obtuve de la querie anterior

    SELECT data_evento.id, data_evento.nombre, data_evento.descripcion, data_evento.fecha, data_evento.hora,
    data_evento.fecha_limite, data_evento.publicado, data_evento.path_foto, categorias.nombre 
    FROM ((data_evento INNER JOIN categoria_evento ON data_evento.id = categoria_evento.id_evento) 
        INNER JOIN categorias ON categoria_evento.id_categoria = categorias.id) WHERE data_evento.id IN ($1)

    # la localidad, ubicación, precio y total del evento 

    SELECT data_evento.id,  localidades.nombre, ubicaciones.nombre, info_ubi_local_eventos.total, info_ubi_local_eventos.precio
    FROM ((data_evento INNER JOIN info_ubi_local_eventos ON data_evento.id = info_ubi_local_eventos.id_evento) 
        INNER JOIN localidades ON info_ubi_local_eventos.id_localidad = localidades.id  
        INNER JOIN ubicaciones ON info_ubi_local_eventos.id_ubicacion = ubicaciones.id) WHERE info_ubi_local_eventos.id_evento = ($1)
*/
/* ELIMINAR EVENTO
    // parte de categorias
    const DELETE_CATEGORIAS = {
        text: 'DELETE FROM public.categoria_evento WHERE id_evento = ($1),
        value: [id_evento]
    }
    client.query(DELETE_CATEGORIAS, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
    });
    // parte de info_ubi_local_eventos
    const DELETE_Info_ubi_evento = {
        text: 'DELETE FROM public.info_ubi_local_eventos WHERE id_evento = ($1),
        value: [id_evento]
    }
    client.query(DELETE_Info_ubi_evento, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
    });
    // parte de eventos_creados
    const DELETE_Eventos_creados = {
        text: 'DELETE FROM public.eventos_creados WHERE id_evento = ($1),
        value: [id_evento]
    }
    client.query(DELETE_Eventos_creados, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
    });
    // parte de data_evento
    const DELETE_data_evento = {
        text: 'DELETE FROM public.data_evento WHERE id_evento = ($1),
        value: [id_evento]
    }
    client.query(DELETE_data_evento, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message)
    }
    client.end;
    });
*/
// INFO DE CATEGORIAS, LOCALIDADES Y UBICACIONES
/*const SELECT_CATEGORIAS = {
    text: 'SELECT * FROM public.categorias',
    values: []
  }
client.query(SELECT_CATEGORIAS, (err, res)=>{
    if(!err){
        //console.log(typeof(res))
        //console.log(res)
        info = res.rows
        //console.log(res.rows);
        for (const index in info) {  
            user = info[index]
            for (const key in user) {  
                console.log(`${key}: ${user[key]}`)
              }
        }
        
    }
    else{
        console.log(err.message)
    }
    client.end;
});
const SELECT_LOCALIDADES = {
    text: 'SELECT * FROM public.localidades',
    values: []
  }
client.query(SELECT_LOCALIDADES, (err, res)=>{
    if(!err){
        //console.log(typeof(res))
        //console.log(res)
        info = res.rows
        //console.log(res.rows);
        for (const index in info) {  
            user = info[index]
            for (const key in user) {  
                console.log(`${key}: ${user[key]}`)
              }
        }
        
    }
    else{
        console.log(err.message)
    }
    client.end;
});
const SELECT_UBICACIONES = {
    text: 'SELECT * FROM public.ubicaciones',
    values: []
  }
client.query(SELECT_UBICACIONES, (err, res)=>{
    if(!err){
        //console.log(typeof(res))
        //console.log(res)
        info = res.rows
        //console.log(res.rows);
        for (const index in info) {  
            user = info[index]
            for (const key in user) {  
                console.log(`${key}: ${user[key]}`)
              }
        }
        
    }
    else{
        console.log(err.message)
    }
    client.end;
});*/

/*
SELECT data_evento.id, data_evento.nombre, data_evento.descripcion, data_evento.fecha, data_evento.hora,
data_evento.fecha_limite, data_evento.publicado, data_evento.path_foto, data_evento.ubicacion, data_evento.precio, data_evento.categoria
FROM (data_evento INNER JOIN eventos_asistencia ON data_evento.id = eventos_asistencia.id_evento) WHERE eventos_asistencia.id_usuario = 62
*/