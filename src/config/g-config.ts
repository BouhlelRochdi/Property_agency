// eslint-disable-next-line prettier/prettier
import { environment } from "src/environements/environement";

export default () => ({
    production: process.env.production || environment.production,
    baseUrl: process.env.baseUrl || environment.baseUrl,
    apiPort: parseInt(process.env.PORT, 10) || environment.apiPort,
    apiUrl: process.env.apiUrl || environment.apiUrl,

    // DB
    mongoUri: process.env.mongoUri || environment.mongoUri,

    // JWT
    jwtSecret: process.env.jwtSecret || environment.jwtSecret,
});
