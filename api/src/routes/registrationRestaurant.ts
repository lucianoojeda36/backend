import { response, Router } from 'express';
const server = Router()
import Bookings from "../models/Bookings";



// CREA UN RESTAURANTE

server.post('/bookings', async (req, res) => {
    const body = req.body
    
    try {
        const data = await Bookings.create(body)
        res.status(200).json(data)
    }
    catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

// CREA UNA RESERVACION

server.post('/bookings-reserve', async (req, res) => {
    // let  id = req.params['id ']
    // let body = req.body;
    // console.log("estoy en el back",body)
 await Bookings.updateOne({_id:`${req.body._id}`}, {
    $set: { reserve: { "table":`${req.body.table}`, "client":`${req.body.client}` ,"date":`${req.body.date}`, "cancellation":`${req.body.cancellation}`}}
    }, {
        new: true,
        upsert: true,
        rawResult: true 
      })
        .then(( data: any) =>{

            // const result:any =data.save()
            return res.send(data)
        })
        .catch((err: any) => res.json({
            resultado: false,
            msg: `No se pudo modificar el cliente ${err}`,
        }))
});



// BUSCA TODOS LOS RESTAURANTES

server.get('/bookings-data', async (req, res) => {
    await Bookings.find()

        .then((data: any) => res.send(data))
        .catch((err: any) => console.log(err))
})


// FILTRA POR NOMBRE O INICIAL DE RESTAURANT

server.get('/bookings-data-name/:name', async (req, res) => {

    let expresion : any = new RegExp(`${req.params.name}.*`, "i");

    await Bookings.find({name: expresion})

        .then((data: any) => res.send(data))
        .catch((err: any) => console.log(err))
})

// FILTRA POR CIUDAD

server.get('/bookings-data-city/:city', async (req, res) => {

    let expresion : any = new RegExp(`${req.params.city}.*`, "i");



    await Bookings.find({city: expresion})

        .then((data: any) => res.send(data))
        .catch((err: any) => console.log(err))
})


// EDITA UN RESTAURANTE

server.put('/bookings-data-edit', async (req, res) => {
    let body = req.body;
    console.log("estoy en el back",body)
  await Bookings.updateOne({ _id: body._id }, {
        $set: {
            name: body.name,
            image: body.image,
            description: body.description,
            city: body.city,
            address: body.address,
            // reserve: { table: body.reserve.table, client: body.reserve.client, date: body.reserve.date, cancellation: body.reserve.cancellation }
        }
    })
        .then((data: any) => res.json({
            resultado: true,
            // info: data
        }))
        .catch((err: any) => res.json({
            resultado: false,
            msg: `No se pudo modificar el cliente ${err}`,
        }))
});

// ELIMINA UN RTESTAURANTE

server.delete('/bookings-data-delete', async (req, res) => {
    let id = req.body.data
    console.log("=======>",id)
    

    await Bookings.findByIdAndRemove({ _id: id })
        .then((data: any) => res.json({
            resultado: true,
            info: `deleted element ${data}`
        }))
        .catch((err: any) => res.json({
            resultado: false,
            msg: `No se pudo eliminar el cliente ${err}`,
        }))
});



export default server