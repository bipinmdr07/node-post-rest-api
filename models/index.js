const Sequelize = require('sequelize');
const sequelize = new Sequelize('post_database', 'postgres', 'password', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.log('unable to connect to the database:', err);
	});
    
const models = {
	Post: sequelize.import('./post'),
	Comment: sequelize.import('./comment')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
		models[modelName].associate(models);
	}
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;