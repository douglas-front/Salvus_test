import express, { Router } from "express";
import Get from "../controllers/Get";
import Post from "../controllers/Post";
import Update from "../controllers/Update";
import Delete from "../controllers/Delete";
import { Iproduct } from "../types/typeProduct";

export const router: Router = express.Router();
const getInstance: Get = new Get();
const postInstance: Post = new Post();
const updateInstance: Update = new Update();
const deleteInstance: Delete = new Delete();

router.get("/", async (req, res) => {

  try {

    const products: Iproduct[] = await getInstance.ListProducts();
    res.json(products);

  } catch (error) {

    if (!res.headersSent) {
      res.status(500).json({ error: "Erro ao listar produtos" });
    } 
    else {
      console.error(
        "Erro ao listar produtos após os cabeçalhos terem sido enviados:",
        error
      );
    }

  }
});

router.post("/post", async (req, res) => {

  try {
    const values: Iproduct = req.body;
    
    if (
      !values.productName ||
      !values.description ||
      values.price === undefined
    ) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    await postInstance.PostProduct({ values });
    res.status(201).json({ message: "Produto criado com sucesso" });

  } catch (error) {

    if (!res.headersSent) {
      res.status(500).json({ error: "Erro ao criar produto" });
    } 
    else {
      console.error(
        "Erro ao criar produto após os cabeçalhos terem sido enviados:",
        error
      );
    }
  }
});

router.put("/update/:id", async (req, res) => {

  try {

    const id: number = parseInt(req.params.id);
    const values: Iproduct = req.body;
    if (
      !values.productName ||
      !values.description ||
      values.price === undefined
    ) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios" });
    }

    await updateInstance.UpdateProduct({ values, id });
    res.status(200).json({ message: "Produto atualizado com sucesso" });

  } catch (error) {

    if (!res.headersSent) {
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
     else {
      console.error(
        "Erro ao atualizar produto após os cabeçalhos terem sido enviados:",
        error
      );
    }
  }
});

router.delete("/delete/:id", async (req, res) => {

  try {

    const id: number = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    await deleteInstance.DeleteProducts({ id });
    res.status(200).json({ message: "Produto deletado com sucesso" });

  } catch (error) {

    if (!res.headersSent) {
      res.status(500).json({ error: "Erro ao deletar produto" });
    } 
    else {
      console.error(
        "Erro ao deletar produto após os cabeçalhos terem sido enviados:",
        error
      );
    }
  }
});
