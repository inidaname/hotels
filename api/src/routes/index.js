import express from 'express';
import {
  createAuth,
  room,
  product,
  salesLog,
  expenditure,
  supply,
  inventory,
  roomLogs
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

// Create product and room
routes.post('/room', room.createRoom);
routes.put('/room/:id', room.editRoom);
routes.delete('/room/:id', room.deleteRoom);

routes.post('/product', product.createProduct);
routes.put('/product/:id', product.editProduct);
routes.delete('/product/:id', product.deleteProduct);

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
routes.post('/inventory', inventory.createInventory);
routes.put('/inventory/:id', inventory.editInvenotry);
routes.delete('/inventory/:id', inventory.deleteInventory);

// Room logs for booking and reservation
routes.post('/roomlodge', roomLogs.createLogs);
routes.put('/roomlodge/:id', roomLogs.editRoom);
routes.delete('/roomlodge/:id', roomLogs.deleteRoom);

export default routes;
