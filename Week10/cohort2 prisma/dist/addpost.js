"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const Prisma = new client_1.PrismaClient;
function AddPost(title, content, authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Prisma.post.create({
            data: {
                title,
                content,
                authorId
            }
        });
        if (res) {
            console.log("Post added Successfullyy");
        }
        console.log(res);
    });
}
AddPost("Sunrise", "Glimpse of Sunrise from the Himalyan Peak", 6);
AddPost("PArty", "Farewell paryy 2024", 6);
AddPost("Work Mode", "At google office", 6);
