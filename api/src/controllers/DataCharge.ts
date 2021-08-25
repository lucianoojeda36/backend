// import Imagenes from "../models/Bookings";
// import axios from 'axios'

// async function request() {
//     const result = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=2020-09-16&end_date=2021-08-19&api_key=sB7w3Szn3NuLer8hrj8mKhELAx9BYVj7T58XV53x`)

//     var tmp2: any = []

//     result.data.map((e: any) => {

//         var tmp1 = {
//             title: e.title,
//             image: e.hdurl ? e.hdurl : null,
//             description: e.explanation ? e.explanation : null,
//             date: e.date,
//         }

//         return tmp2.push(tmp1)

//     })


//     tmp2.map((e: any) => {
//         let element = new Imagenes(e)
//         element.save()
//             .then(() => {  })
//             .catch((err: any) => console.log(err))
//     })
// }

// export default request