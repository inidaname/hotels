import express from 'express';
import {
  account,
  createAuth,
  room,
  product,
  salesLog,
  expenditure,
  stock,
  roomType,
  reservation,
  user,
  restaurant,
  roomLogs,
  restaurantLogs,
  productRequest,
  customer
} from '../controllers/';

import {auth} from '../utils/auth'

const routes = express.Router();

routes.all('/', function (req, res) {
  res.status(200).json({
    message: `You are on Hotel`
  });
});

// Create Hotel and user
routes.post('/create/user', createAuth.createNewUser);

// Login
routes.route('/login').post(createAuth.login);

// User routes
routes.route('/users').get(auth, user.getAllUser);
routes.route('/users/:id')
.delete(auth, user.deleteUser)
.get(auth, user.getUserById);

// Create product and room
routes.route('/room').post(room.createRoom).get(room.getAllRooms);
routes.route('/room/:id').get(room.getRoomById).put(room.editRoom).delete(room.deleteRoom);

// Create roomvtype and describetion
routes.route('/roomtype').post(roomType.createRoomType).get(roomType.getAllRoomType);
routes.route('/roomtype/:id').get(roomType.getRoomType).put(roomType.updateRoomType).delete(roomType.deleteRoomType);

routes.route('/product').post(product.createProduct).get(product.getAllProduct);
routes.route('/product/:id').put(product.editProduct).get(product.getProductById).delete(product.deleteProduct);

// restuarant routes
routes.route('/restaurant').post(restaurant.createMeal).get(restaurant.getAllMeal);
routes.route('/restaurant/:id').put(restaurant.editMeal).delete(restaurant.deleteMeal).get(restaurant.getMealById);

// Sales routes
routes.post('/sales', salesLog.createSaleLog);
routes.put('/sales/:id', salesLog.editSales);
routes.delete('/sales/:id', salesLog.deleteLog);

// Restaurant routes
routes.post('/restaurantlog', restaurantLogs.createRestaurantLog);
routes.put('/restaurantlog/:id', restaurantLogs.editRestaurants);
routes.delete('/restaurantlog/:id', restaurantLogs.deleteLog);

// Expenditure routes
routes.post('/expenditure', expenditure.createExpen);
routes.put('/expenditure/:id', expenditure.editExpenditure);
routes.delete('/expenditure/:id', expenditure.deleteExpenditure);

// stock
routes.route('/stock').post(stock.createStock).get(stock.getAllStock);
routes.route('/stock/:id').put(stock.editStock).delete(stock.deleteStock);

// Room logs for booking and reservation
routes.route('/roomlodge').post(roomLogs.createLogs).get(roomLogs.getAllRoomLog);
routes.route('/roomlodge/:id').get(roomLogs.getRoomLogById);
routes.route('/roomlodge/bill/:id').get(roomLogs.getRoomLogBill);
routes.route('/roomlodge/:id').put(roomLogs.editRoom).delete(roomLogs.deleteRoom);
routes.route('/roomlodge/room/:number').get(roomLogs.getGuestByRoomNumber);

// customer
const { createCustomer, getAllCustomer, getCustmerBy, updateCustomer, deleteCustomer, getcustomergById } = customer;
routes.route('/customer').post(createCustomer).get(getAllCustomer);
routes.route('/customer/:id').get(getcustomergById).put(updateCustomer).delete(deleteCustomer)
routes.get('/searchCustomer', getCustmerBy)

// Account
routes.get('/account/sales', account.getAllSaleslog);
routes.get('/account/rooms', account.getAllRoomlog);
routes.get('/account/restaurant', account.getAllRestaurantlog);

// request product
routes.route('/request').post(productRequest.createProductRequest).put(productRequest.editProductRequest).delete(productRequest.editProductRequest).get(productRequest.allProductRequest);
routes.get('/request/:id', productRequest.getProductRequestById);

export default routes;
