const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/404');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminData = require('./routes/admin'); (no longer export data)
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminData.routes); (no longer use adminData)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
