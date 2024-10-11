import express from "express";
import { createTask, deleteTask, readTaskById, readTasks, updateStatusToComplete, updateTask } from "./taskController";
const router = express.Router();

router.route("/tasks").get(readTasks).post(createTask);
router.route("/tasks/:id").get(readTaskById).patch(updateTask).delete(deleteTask);

router.route("/tasks-complete").get(updateStatusToComplete);

export default router;
