const express = require('express');
const router = require('./routers');
const models = require('./models');
const PORT = 3000;

const app = express();

app.use(router);

models.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Listening to port:${PORT}`);
	});
});