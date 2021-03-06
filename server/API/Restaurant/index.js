// Libraries
import express from "express";
import passport from "passport";

// Databse Modal
import { RestaurantModel } from "../../database/allModels";

//  Validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";


const Router = express.Router();

/*
Route   /
Desc    Get all restuarant details based in city
Params  none
Access  Public
Method  GET
*/
Router.get("/", async (req,res) => {
    try {
        await  ValidateRestaurantCity(req.query);
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });

        return res.json({ restaurants })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /restaurant
Desc    Get individual restuarant details based on id
Params  id
Access  Public
Method  GET
*/
Router.get("/:_id", async (req,res) => {
    try {
        await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if(!restaurant)
            return res.status(404).json({ error: "Restaurant Not Found" });
            
            return res.json({restaurant});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route   /search
Desc    Get all restuarant details based in search string
Params  none
Body    searchString
Access  Public
Method  GET
*/
Router.get("/search", async (req,res) => {
    try {
        await ValidateRestaurantSearchString(req.body);
        const { searchString } = req.body;
        const restaurant = await RestaurantModel.find({ 
            name: { $regex: searchString, $options: "i" }, 
        });

        if(!restaurant)
        return res.status(404).json({ error: `No Restaurant matched with ${searchString}` });
        
        return res.json({restaurant});
} catch (error) {
    return res.status(500).json({ error: error.message });
    }
});


export default Router;