const express = require('express');


const hwRoutes = require('./routes/hwRoutes')


const PORT = 5555;
const app = express();


app.use(hwRoutes)



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
