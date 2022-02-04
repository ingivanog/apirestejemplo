module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.TYPEORM_PORT) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [process.env.ENTITY_PATH],
    synchronize: false,
  }