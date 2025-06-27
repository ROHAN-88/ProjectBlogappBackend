import express from "express";

import { isUser } from "../Authication/authication.js";
import {
  EditUser,
  login,
  register,
  userData,
  userDetail,
} from "./user.service.js";

const routes = express.Router();

//!====================Register Routes============================
routes.post("/register", register);

//!==============login Routes=========================
routes.post("/login", login);

//!===========userData================================
routes.get("/getuserdetail", isUser, userData);

//!=============Edit User Data ===================
routes.put("/EditProfile/:id", isUser, EditUser);

//! ===================GetUserById=================

/// this is incomplete need to be completed
routes.get("/:id/userDetail", isUser, userDetail);

export default routes;
