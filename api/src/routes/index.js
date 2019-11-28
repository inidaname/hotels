import express from 'express';
import {
  createAuth,
  room,
  product,
  salesLog,
  expenditure,
  supply,
  inventory,
  roomLogs,
  user,
  restaurant
} from '../controllers/index.js';

const routes = express.Router();

routes.all('/', function (req, res) {
  res.status(200).json({
    message: `You are on Hotel`
  });
});

// Create Hotel and user
routes.post('/create/hotel', createAuth.createHotel);
routes.post('/create/user', createAuth.createUser);

// Login
routes.route('/login').post(createAuth.login);

// User routes
routes.route('/users').get(user.getAllUser);
routes.route('/users/alldata').get(user.getData);
routes.route('/users/:id').delete(user.deleteUser).get(user.getUserById);

// Create product and room
routes.route('/room').post(room.createRoom).get(room.getAllRooms);
routes.route('/room/:id').get(room.getRoomById).put(room.editRoom).delete(room.deleteRoom);

routes.route('/product').post(product.createProduct).get(product.getAllProduct);
routes.route('/product/:id').put(product.editProduct).get(product.getProductById).delete(product.deleteProduct);

// restuarant routes
routes.route('/restaurant').post(restaurant.createMeal).get(restaurant.getAllMeal);
routes.route('/restaurant/:id').put(restaurant.editMeal).delete(restaurant.deleteMeal).get(restaurant.getMealById);

// Sales routes
routes.post('/sales', salesLog.createSaleLog);
routes.put('/sales/:id', salesLog.editSales);
routes.delete('/sales/:id', salesLog.deleteLog);

// Expenditure routes
routes.post('/expenditure', expenditure.createExpen);
routes.put('/expenditure/:id', expenditure.editExpenditure);
routes.delete('/expenditure/:id', expenditure.deleteExpenditure);

// Supply
routes.post('/supply', supply.createSupply);

// Inventory
routes.route('/inventory').post(inventory.createInventory).get(inventory.getAllInventory);
routes.put('/inventory/:id', inventory.editInvenotry);
routes.delete('/inventory/:id', inventory.deleteInventory);

// Room logs for booking and reservation
routes.post('/roomlodge', roomLogs.createLogs);
routes.put('/roomlodge/:id', roomLogs.editRoom);
routes.delete('/roomlodge/:id', roomLogs.deleteRoom);

export default routes;
