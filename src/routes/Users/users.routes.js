import { Router } from "express";
import {
  getMany,
  getCookie,
  getFirst,
  update,
} from "../../controllers/users/user.controller.js";
import { Delete } from "../../controllers/users/user.controller.js";

const route = Router();

route.get("/", getMany.bind());
route.get("/cookie", getCookie.bind());
route.get("/:id", getFirst);
route.delete("/:id", Delete);
route.put("/:id", update);
export default route;
