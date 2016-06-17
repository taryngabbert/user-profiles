const express = require('express');
const {json} = require('body-parser');
const session = require('express-session');

const sessionConfig = require('./server/config/sessionConfig')
const masterRoutes = require('./server/masterRoutes');

const app = express();
const port = 8080;

app.use( express.static(`${__dirname}/public`) );
app.use( json() );
app.use( session (sessionConfig) );
//Everything goes below app.use
masterRoutes(app);




app.listen(port, ()=> {
console.log(`Express is running on ${port}`);
});
