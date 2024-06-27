import * as dotenv from 'dotenv';
dotenv.config();

interface Auth {
    type: string;
    user: string;
    clientId: string | undefined;
    clientSecret: string | undefined;
    refreshToken: string | undefined;
}

const auth: Auth = {
    type: 'OAuth2',
    user: 'krishnakumar329865@gmail.com',
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN
};

export { auth };
