import * as dotenv from 'dotenv';

dotenv.config();

import { createClient } from 'redis';

const connection = createClient({
    password: process.env.REDIS_PASS,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_HOST
    }
});

const redisGetToken = async (email: string): Promise<string | null> => {
  try {
    const token = await connection.get(email);
    return token;
  } catch (error) {
    console.error(`Error retrieving token from Redis for email ${email}:`, (error as Error).message);
    throw new Error(`Error retrieving token from Redis for email ${email}.`);
  }
};

export {
  connection,
  redisGetToken
};


