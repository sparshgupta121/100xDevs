import { Client } from 'pg';

export async function getClient(){
    const client = new Client("postgresql://testproj_owner:7KQJzsGPCkW0@ep-cold-hat-a5sis9zs.us-east-2.aws.neon.tech/testproj?sslmode=require")
    await client.connect();
    return client;

}

