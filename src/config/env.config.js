import dotenv from 'dotenv'

dotenv.config( { quiet: true })

export const config = {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
};

if ( !config.port || !config.nodeEnv || !config.mongoUrl){
    console.error('Invalid configuration: Check the .env file. PORT/NODE_ENV/MONGO_URL are missing or are not formatted correctly.');
    process.exit(1);
}