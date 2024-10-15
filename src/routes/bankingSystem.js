import express from 'express';
import { BankingSystemController } from '../controllers/bankingSystem.js';
const router = express.Router();

router.route('/balance/:id').get(BankingSystemController.getBalance);
router.route('/deposit/:id').put(BankingSystemController.deposit);
router.route('/withdrawal/:id').put(BankingSystemController.withdrawal);
router.route('/transfer/:id').put(BankingSystemController.transfer);
router.route('/log/:id').get(BankingSystemController.log);

export default router;
