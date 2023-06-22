export const environment = {
    production: false,
    baseUrl: 'http://localhost:4200/',
    apiPort: 3333,
    apiUrl: 'http://localhost:3333/',

    // DB
    mongoUri: 'mongodb://127.0.0.1:27017/agence_immobiliere',

    // JWT
    jwtSecret: 'immobiliere-nest-local-secretKey-001',

    //mailer module config -- by app GR-G-2
    MAILER_SENDER_MAIL: 'rochdi.bouhlel@hotmail.com',
    MAILER_SENDER_PASS: 'azerty123456789',
    MAILER_HOST_SERVER: 'ssl0.ovh.net',
    MAILER_PORT: 587,
    MAILER_TLS_CIPHERS: 'SSLv3'
  };