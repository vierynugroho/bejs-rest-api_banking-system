import { BankingSystemRepository } from '../repositories/bankingSystem.js';

export class BankingSystemService {
  static async getBalance(accountID) {
    const balance = await BankingSystemRepository.getBalance(accountID);
    return balance;
  }

  static async deposit(senderID, receiverID, amount) {
    const deposit = await BankingSystemRepository.deposit(
      senderID,
      receiverID,
      amount,
    );
    return deposit;
  }

  static async withdrawal() {
    const withdrawal = await BankingSystemRepository.withdrawal();
    return withdrawal;
  }

  static async transfer() {
    const transfer = await BankingSystemRepository.transfer();
    return transfer;
  }

  static async log() {
    const log = await BankingSystemRepository.log();
    return log;
  }
}
