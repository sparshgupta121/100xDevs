"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const masti = new client_1.PrismaClient();
function deleteuser(email) {
    masti.user.delete({
        where: {
            email
        }
    }).then(res => console.log("DeletedSuceess")).catch((e) => console.log(e));
}
deleteuser("Sparsh@gmail.com");
