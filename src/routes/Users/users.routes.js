import { Router } from "express";
import {
  getMany,
  getCookie,
  getFirst,
} from "../../controllers/users/user.controller.js";
const route = Router();

route.get("/", getMany.bind());
route.get("/cookie", getCookie.bind());
route.get("/:id", getFirst.bind());

export default route;
