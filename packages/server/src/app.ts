import cors from "cors";
import express from "express";

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (_req: express.Request, res: express.Response) => {
  res.send('Server is up and running');
});

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);