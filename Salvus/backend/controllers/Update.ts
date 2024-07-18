import { Iproduct, productUpdate } from "../types/typeProduct";
import Database from "../dataBase/db";

class Update {
  public async UpdateProduct({ values, id }: productUpdate) {
    const db: Database = Database.getInstance();
    const client = await db.connect();

    try {
      if (
        !values.productName ||
        !values.description ||
        values.price === undefined
      ) {
        throw new Error("Todos os campos são obrigatórios");
      }

      const query: string = "UPDATE products SET productName=$1, description=$2, price=$3 WHERE id=$4";

      const updateValues = [
        values.productName,
        values.description,
        values.price,
        id,
      ];

      await client.query(query, updateValues);
      return { message: "Produto atualizado com sucesso" };
      
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      throw error;
    }
  }
}

export default Update;
