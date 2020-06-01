import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    /* 'mongodb://127.0.0.1:27017/nonvegmart */ 'mongodb+srv://deven:deven@nonvegmart-qbfql.mongodb.net/test?retryWrites=true&w=majority',
  JWT_SECRET: /* process.env.JWT_SECRET || */ 'somethingsecret',

  // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
};
