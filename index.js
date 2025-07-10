import express from "express";
import db_connect from "./db_connect.js";
import userRoutes from "./User/user.routes.js";
import postRoutes from "./post/blog/post.js";
import savedRoutes from "./post/savedBlog/savedpost.routes.js";

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

/*//!ROUTES */

app.use(userRoutes);
app.use(postRoutes);
app.use(savedRoutes);
/* database and port */
await db_connect();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
