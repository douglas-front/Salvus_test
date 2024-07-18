import { Iproduct } from "../types/typeProduct";
import Database from "../dataBase/db";

interface Props {
  values: Iproduct;
}

class Post {
  public async PostProduct({ values }: Props) {
    const db: Database = Database.getInstance();
    const client = await db.connect();

    try {

      const query: string = "INSERT INTO products(productName,description,price, productdate) VALUES ($1,$2,$3, NOW())";
     
      const postValues = [
        values.productName, 
        values.description, 
        values.price
      ];
    
      await client.query(query, postValues);

    } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw error;
    }
  }
}

export default Post;
