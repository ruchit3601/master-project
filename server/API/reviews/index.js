// Libraries
import express from "express";
import passport from "passport";

// Databse Modal
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   /new
Desc    Add new food review/rating
Params  none
BODY    review object
Access  Public
Method  POST
*/
Router.post("/new", async ( req, res ) => {
    try {
        const{ reviewData } = req.body; 

        await ReviewModel.create(reviewData);

        return res.json({ review: "Sucessfully Created Review." })
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
});

/*
Route   /delete
Desc    Add new food review/rating
Params  _id
BODY    none
Access  Public
Method  DELETE
*/
Router.delete("/delete/:id", async (req, res) => {

    try {
        const { _id } = req.params;

            await ReviewModel.findByIdAndDelete(_id);

            return res.json({ review: "Sucessfully Deleted the Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;