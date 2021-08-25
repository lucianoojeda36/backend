import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const BookingsSchema = new Schema ({
name : {type: String , require:true },
image : {type: String },
description: {type: String },
city: {type: String },
address: {type: String },
reserve:{ table: Boolean , client: String , date: Date , cancellation : Boolean} 
})



const Bookings = mongoose.model('Reservas',BookingsSchema)

export default Bookings;