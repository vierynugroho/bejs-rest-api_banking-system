import express from 'express';
import { BankingSystemController } from '../controllers/bankingSystem.js';
const router = express.Router();

router.route('/balance/:id').get(BankingSystemController.getBalance);
router.route('/deposit').put(BankingSystemController.deposit);
router.route('/withdrawal').put(BankingSystemController.withdrawal);
router.route('/transfer').put(BankingSystemController.transfer);
router.route('/log').get(BankingSystemController.log);

export default router;
