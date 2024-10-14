import { BankingSystemService } from '../services/bankingSystem.js';

export class BankingSystemController {
	static async deposit(req, res, next) {
		const deposit = BankingSystemService.deposit();
		res.json({
			status: true,
			statusCode: 200,
			message: 'deposit successfully',
			data: deposit,
		});
	}

	static async withdrawal(req, res, next) {
		const withdrawal = BankingSystemService.withdrawal();
		res.json({
			status: true,
			statusCode: 200,
			message: 'withdrawal successfully',
			data: withdrawal,
		});
	}

	static async transfer(req, res, next) {
		const transfer = BankingSystemService.transfer();
		res.json({
			status: true,
			statusCode: 200,
			message: 'transfer successfully',
			data: transfer,
		});
	}

	static async log(req, res, next) {
		const log = BankingSystemService.log();
		res.json({
			status: true,
			statusCode: 200,
			message: 'log successfully',
			data: log,
		});
	}
}
