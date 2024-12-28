import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SqliteService {
  private sqliteConnection: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);

  constructor() { }

  async initDb() {
    try {
      // Create a database connection
      const db: SQLiteDBConnection = await this.sqliteConnection.createConnection(
        'my-database',
        false,
        'no-encryption',
        1,
        false
      );

      // Open the database
      await db.open();

      // Execute a SQL command to create a table
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL
        );
      `;
      await db.execute(createTableQuery);

      console.log('Database initialized successfully!');

      // Close the connection if needed
      await this.sqliteConnection.closeConnection('my-database', false);
    } catch (error) {
      console.error('Failed to initialize database:', error);
    }
  }
}
