const asyncHandler = require("express-async-handler");

exports.getAllRecipes = asyncHandler(async (req: any, res: { send: (arg0: string) => void; }, next: any) => {
    res.send("NOT IMPLEMENTED: Get Recipes");
});