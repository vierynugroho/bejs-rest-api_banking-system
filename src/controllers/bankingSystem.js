import { BankingSystemRepository } from '../repositories/bankingSystem.js';
import { BankingSystemService } from '../services/bankingSystem.js';
import { ErrorHandler } from '../utils/errorHandler.js';
import { formatRupiah } from '../utils/formatRupiah.js';

export class BankingSystemController {
  static async getBalance(req, res, next) {
    try {
      const accountID = req.params.id;
      const account = await BankingSystemRepository.getAccount(accountID);

      if (!account) {
        return next(
          new ErrorHandler(`account with ID: ${accountID} is not found`, 404),
        );
      }

      const balance = await formatRupiah(
        await BankingSystemService.getBalance(accountID),
      );

      res.json({
        status: true,
        statusCode: 200,
        message: 'get balance successfully',
        data: balance,
      });
    } catch (error) {
      next(new ErrorHandler(error.message, error.statusCode));
    }
  }

  static async deposit(req, res, next) {
    try {
      const accountID = req.params.id;
      const account = await BankingSystemRepository.getAccount(accountID);

      if (!account) {
        return next(
          new ErrorHandler(`account with ID: ${accountID} is not found`, 404),
        );
      }

      const deposit = await BankingSystemService.deposit(
        req.query.senderID,
        req.query.receiverID,
        req.query.amount,
      );
      res.json({
        status: true,
        statusCode: 200,
        message: 'deposit successfully',
        data: deposit,
      });
    } catch (error) {
      next(new ErrorHandler(error.message, error.statusCode));
    }
  }

  static async withdrawal(req, res, next) {
    const withdrawal = await BankingSystemService.withdrawal();
    res.json({
      status: true,
      statusCode: 200,
      message: 'withdrawal successfully',
      data: withdrawal,
    });
  }

  static async transfer(req, res, next) {
    const transfer = await BankingSystemService.transfer();
    res.json({
      status: true,
      statusCode: 200,
      message: 'transfer successfully',
      data: transfer,
    });
  }

  static async log(req, res, next) {
    const log = await BankingSystemService.log();
    res.json({
      status: true,
      statusCode: 200,
      message: 'log successfully',
      data: log,
    });
  }
}
