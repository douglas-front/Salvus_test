import Database from "../dataBase/db";

interface Props {
  id: number;
}

class Delete {
  public async DeleteProducts({ id }: Props) {
    const db: Database = Database.getInstance();
    const client = await db.connect();

    try {
      
      const query: string = "DELETE FROM products WHERE id=$1";
      await client.query(query, [id]);
      return { message: "Produto deletado com sucesso" };

    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      throw error;
    }
  }
}

export default Delete;
