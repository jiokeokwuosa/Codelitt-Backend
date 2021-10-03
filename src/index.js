import express from "express";
import cors from "cors";
import { config } from "dotenv";
import "./db";
import {graphqlHTTP} from 'express-graphql';
import schema from './graphql/schema';

config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/v1", (req, res) =>
  res
    .status(200)
    .json({ status: "success", message: "Welcome to Codelitt Inc. Goto /graphql" })
);

//register route for graphql
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}))
//server
app.listen(port, () => {
  console.log(`Server running at port ${port} on ${process.env.NODE_ENV}`);
});


export default app;
