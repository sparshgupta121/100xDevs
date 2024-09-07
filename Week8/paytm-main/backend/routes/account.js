const express = require("express")
const Account = require("../db");
const authMiddleware = require("../middleware");
const mongoose = require("mongoose")

const AccountRouter = express.Router();

AccountRouter.get("/balance",authMiddleware,async(req,res)=>{

    const AccountUser =await Account.findOne({
        userId:req.userId
    }) 

    res.json({
        balance:AccountUser.balance
    })


})

AccountRouter.post("/transfer",authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction()
    const {amount,to}=req.body;

    try {
        const account = await Account.findOne({ userId: req.userId }).session(session);
    
        if (account.balance < amount) {
            await session.abortTransaction(); 
            return res.status(400).json({ message: "Insufficient balance" });
        }
    
        await Account.updateOne(
            { userId: req.userId },
            { $inc: { balance: -amount } }
        ).session(session); 
    
        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction(); 
    } finally {
        session.endSession();
    }

})


module.exports = AccountRouter;

