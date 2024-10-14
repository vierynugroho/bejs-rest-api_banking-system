import express from 'express';
import { BankingSystemController } from '../controllers/bankingSystem.js';
const router = express.Router();

router.route('/deposit').get(BankingSystemController.deposit);
router.route('/withdrawal').get(BankingSystemController.withdrawal);
router.route('/transfer').get(BankingSystemController.transfer);
router.route('/log').get(BankingSystemController.log);

export default router;
