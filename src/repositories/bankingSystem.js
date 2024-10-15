import client from '../lib/db.js';

export class BankingSystemRepository {
  static async getAccount(accountID) {
    const query = await client.query(`SELECT * FROM accounts WHERE id = $1`, [
      accountID,
    ]);

    const account = query.rows.length === 0 ? false : true;

    return account;
  }

  static async insufficientCheck(accountID, amount) {
    const query = await client.query(
      `SELECT balance FROM accounts WHERE id = $1`,
      [accountID],
    );
    const balance = query.rows[0].balance;

    const insufficient = amount > balance ? true : false;

    return insufficient;
  }

  static async getBalance(accountID) {
    const query = await client.query(
      `SELECT balance FROM accounts WHERE id = $1`,
      [accountID],
    );

    const balance = query.rows[0].balance;
    return balance;
  }

  static async updateBalance(accountID, newBalance) {
    const query = await client.query(
      'UPDATE accounts SET balance = $1 WHERE id = $2 RETURNING *',
      [newBalance, accountID],
    );

    const senderNewBalance = query.rows[0].balance;

    return senderNewBalance;
  }

  static async log() {
    return 'log';
  }
}
