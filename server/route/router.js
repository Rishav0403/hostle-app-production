import express from "express";
import { register, login } from "../controllers/auth.js";
import { getNetData, getIndividualMeal } from '../controllers/manager.js'
import { updatemeal, getmeal } from "../controllers/boarderMeal.js";
import { startguestmeal, getguests, updateguest, deleteguest } from "../controllers/guestMeal.js";
// jwt authentication for routes
import authenticator from '../middleware/authentication.js';


const router = express.Router();

router.route('/boardermeal').patch(authenticator ,updatemeal).get(authenticator ,getmeal);
router.route('/getNetData').get(authenticator, getNetData);
router.route('/getIndividualMeal').get(authenticator, getIndividualMeal);

router.route('/user/login').post(login);
router.route('/user/register').post(register);


router.route('/guestMeal').post(authenticator ,startguestmeal).get(authenticator ,getguests);
router.route('/guestMeal/:id').patch(authenticator ,updateguest).delete(authenticator ,deleteguest);


export default router;