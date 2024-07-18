import { Pool, PoolClient } from "pg";

class Database {
  private pool: Pool;
  private static instance: Database;

  private constructor() {
    this.pool = new Pool({
      connectionString: process.env.POSTGRES_URL,
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<PoolClient> {
    try {
      const client = await this.pool.connect();

      const res = await client.query("SELECT NOW()");
      console.log(res.rows[0]);

      client.release();
      return client;
      
    } catch (error) {
      console.error("Erro ao conectar ao banco de dados:", error);
      process.exit(1);
    }
  }
}

export default Database;
