export const envConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'development',
  port: process.env.APP_PORT,
  mongoUrl: process.env.MONGO_URL,
  registerUrl: process.env.REGISTER_URL,
});
