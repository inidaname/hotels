import express from 'express';
import {user, counter} from '../controllers/index.js';

const routes = express.Router();

routes.all('*', function(req, res, next){
    if (!req.header('token')){
        return res.status(400).json({message: `Please provide a token`});
    } else {
        next();
    }
})

routes.get('/', function(req, res) {
    return res.status(200).json({message: `Hotels API`});
})

// user routes
routes.route('/user/?:id')
    .post(user.createUser)
    .get(user.getUserById)
    .patch(user.updateUser);

routes.route('/login')
    .post(user.login);

routes.route('/counter/?:id')
    .post(counter.createCounter)
    .get(counter.getCounterById)
    .patch(counter.updateData);

routes.route('/counter/user/?:id')
    .get(counter.getCounterByUserId);

export default routes;