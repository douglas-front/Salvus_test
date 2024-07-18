import Database from "../dataBase/db";
import { Iproduct } from "../types/typeProduct";

class Get {
  public async ListProducts() {
    const db: Database = Database.getInstance();
    const client = await db.connect();

    try {
      const query: string = "SELECT * FROM products";
      const res = await client.query(query);

      const products: Iproduct[] = res.rows;
      return products;
      
    } catch (error) {
      console.error("Erro ao listar produtos:", error);
      throw error;
    }
  }
}

export default Get;
