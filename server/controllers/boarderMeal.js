import User from '../models/User.js';
import {UnauthenticatedError} from '../errors/index.js';

export const getmeal = async (req, res) => {
    const {userId, name} = req.user;
    if(!userId){
        UnauthenticatedError('Unauthenticated user');
    }
    const userData = await User.findById(userId).select('-password');
    res.json(userData);
}

export const updatemeal = async (req, res) => {
    const {userId, name} = req.user;
    const {mealstatus} = req.body;
    if(!userId){
        UnauthenticatedError('Unauthenticated user');
    }
    const updateData = await User.findByIdAndUpdate({_id:userId}, {mealstatus}, { new: true, runValidators: true }).select('-password');
    res.json(updateData);
}
