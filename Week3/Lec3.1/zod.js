const express = require('express');
const zod = require('zod');

const app = express()

const schema = zod.array(zod.number());

const schemaa = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(z.literal("US"))
})

app.use(express.json())

app.post('/health-checkup',function(req,res){

    const Kidney = req.body.Kidneys;
    const response = schema.safeParse(Kidney)
    res.send({
        response
    })

})

app.listen(3000);