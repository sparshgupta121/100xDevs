const { Client } = require('pg');
const client = new Client("postgresql://testproj_owner:7KQJzsGPCkW0@ep-cold-hat-a5sis9zs.us-east-2.aws.neon.tech/testproj?sslmode=require");

async function createTable(){
    try{await client.connect();
    const result = await client.query(`CREATE TABLE IF NOT EXISTS Test (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`)

    console.log("executed");
    
    console.log(result);}

    finally{
        await client.end();
    }
}

async function addUSers(username:string,email:string,password:string){
    try{
    await client.connect();
    const result= await client.query(`
        INSERT INTO TEST(username,email,password) VALUES ('${username}1','${email}+.','${password}')
        
        `) //not safe for SQL Injections
    const Saferesult= await client.query(`
        INSERT INTO TEST(username,email,password) VALUES ($1,$2,$3)`,[username,email,password]) //Safe for SQL Injections
    }catch (err:any) {
        console.error("Error adding user:", err.message);
    } finally {
        await client.end();
    }


}

createTable()
addUSers("Sparshhh","sparh@gmail.com","8520410");



//RELATIONSHIP 

`CREATE TABLE ADDRESSES(

FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE

)`

//TRANSACTIONS 

'BEGIN'

//QUERIES TO SEND TO DB IN A TRANSACTION 

'COMMIT'

//JOINS 

