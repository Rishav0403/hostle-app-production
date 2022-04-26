import User from "../models/User.js";

export const getNetData = async (req, res) => {
    const {userId } = req.user;
    if(!userId){
        UnauthenticatedError('Unauthenticated user');
    }
    const totalMealOn = await User.find({mealstatus:true}).count();
    const allMealType = await User.find({mealstatus:true, mealtype: 'All'}).count();
    const vegMealOn = await User.find({mealstatus:true, mealtype:'Veg'}).count();
    const nonChickenMealOn = await User.find({mealstatus:true, mealtype:'Non Chicken'}).count();
    const nonEggMealOn = await User.find({mealstatus:true, mealtype:'Non Egg'}).count();
    res.json({
        total: totalMealOn,
        allMealType,
        veg: vegMealOn,
        nonChicken: nonChickenMealOn,
        nonEgg: nonEggMealOn
    });
}   

export const getIndividualMeal = async (req, res) => {
    const {userId } = req.user;
    if(!userId){
        UnauthenticatedError('Unauthenticated user');
    }
    const users = await User.find({}, {_id:1, __v:0, password:0, email:0, createdAt:0 }).select('-password');
    res.json(users);
}