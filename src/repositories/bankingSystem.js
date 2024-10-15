import client from '../lib/db.js';

export class BankingSystemRepository {
  static async getAccount(accountID) {
    const query = await client.query(`SELECT * FROM accounts WHERE id = $1`, [
      accountID,
    ]);

    const account = query.rows.length === 0 ? false : true;

    return account;
  }

  static async getBalance(accountID) {
    const query = await client.query(
      `SELECT balance FROM accounts WHERE id = $1`,
      [accountID],
    );

    const balance = query.rows[0].balance;
    return balance;
  }

  static async deposit(senderID, receiverID, amount) {
    console.log({ senderID, receiverID });
    const senderBalance = await client.query(
      `SELECT balance FROM accounts WHERE id = $1`, // Fixed closing parenthesis
      [senderID],
    );

    console.log('====================================');
    console.log('SENDER');
    console.log(senderBalance); // Access the actual row data
    console.log('====================================');

    const receiverBalance = await client.query(
      `SELECT balance FROM accounts WHERE id = $1`, // Fixed closing parenthesis
      [receiverID],
    );

    console.log('====================================');
    console.log('RECEIVER');
    console.log(receiverBalance); // Access the actual row data
    console.log('====================================');

    return 'deposit';
  }

  static async withdrawal() {
    return 'withdrawal';
  }

  static async transfer() {
    return 'transfer';
  }

  static async log() {
    return 'log';
  }
}
