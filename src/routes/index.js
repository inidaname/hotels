import express from 'express';
import {user} from '../controllers/index.js';

const routes = express.Router();

routes.all('*', function(req, res, next){
    if (!req.header('token')){
        return res.status(400).json({message: `Please provide a token`})
    }
})

routes.get('/', function(req, res) {
    return res.status(200).json({message: `Hotels API`});
})

// user routes
routes.route('/user').post(user.createUser);

export default routes;