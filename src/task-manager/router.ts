import express from "express";
import { createTask, deleteTask, readTaskById, readTasks, updateTask } from "./taskController";
const router = express.Router();

router.route("/tasks").get(readTasks).post(createTask);
router.route("/tasks/:id").get(readTaskById).patch(updateTask).delete(deleteTask);

export default router;
