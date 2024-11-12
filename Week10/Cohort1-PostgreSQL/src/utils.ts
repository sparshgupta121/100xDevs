import { Client } from 'pg';

export async function getClient() {
    const client = new Client("dburl");
    await client.connect();
    return client;
}
