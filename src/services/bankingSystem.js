import { BankingSystemRepository } from '../repositories/bankingSystem.js';

export class BankingSystemService {
	static async deposit() {
		const deposit = BankingSystemRepository.deposit();
		return deposit;
	}

	static async withdrawal() {
		const withdrawal = BankingSystemRepository.withdrawal();
		return withdrawal;
	}

	static async transfer() {
		const transfer = BankingSystemRepository.transfer();
		return transfer;
	}

	static async log() {
		const log = BankingSystemRepository.log();
		return log;
	}
}
