import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Conexão porta ${process.env.PORT}`);
});
