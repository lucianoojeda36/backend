const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>console.log('DB is conected'))
.catch((err:any)=>console.log(err))

