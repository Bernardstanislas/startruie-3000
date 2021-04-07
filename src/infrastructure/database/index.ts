import { Client } from "pg";

export const client = new Client({
    host: "localhost",
    user: "stan",
    database: "startruie",
});

export const init = async () => {
    await client.connect();
    await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await client.query(`CREATE TABLE IF NOT EXISTS pigs (
            id      uuid DEFAULT uuid_generate_v4 (),
            name    VARCHAR NOT NULL,
            age     DECIMAL NOT NULL,
            PRIMARY KEY(id)
        );`);
};

export const close = async () => {
    await client.end();
};
