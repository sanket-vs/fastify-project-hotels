require('dotenv').config();


const ENV_VARS = {
  RDS_HOSTNAME: process.env.RDS_HOSTNAME,
  RDS_PASSWORD: process.env.RDS_PASSWORD,
  RDS_USERNAME: process.env.RDS_USERNAME,
  RDS_DATABASE: process.env.RDS_DATABASE,
  RDS_PORT: process.env.RDS_PORT,
  TIMEZONE: process.env.TIMEZONE,
}

export {
    ENV_VARS
}