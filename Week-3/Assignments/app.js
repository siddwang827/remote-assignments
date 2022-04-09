const express = require('express');
const app = express();

//routes
const mainRoutes = require('./routes')
const dataRoutes = require('./routes/data')

app.use(mainRoutes);
app.use('/data', dataRoutes)





app.listen(3000, () => {
    console.log('Assignment app listening on port 3000!')
})