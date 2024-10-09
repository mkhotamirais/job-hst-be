import { Tasks } from "./models";
import { Request, Response } from "express";

export const readTasks = async (req: Request, res: Response) => {
  try {
    const data = await Tasks.find().sort("-createdAt");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else res.status(500).json({ error: "Internal Server Error" });
  }
};

export const readTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await Tasks.findById(id);
    if (!data) {
      res.status(404).json({ error: `Task with id ${id} not found` });
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, dueDate } = req.body;

  if (!title || title === "" || !description || description === "" || !status || !dueDate) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  try {
    const dupTitle = await Tasks.findOne({ title });
    if (dupTitle) {
      res.status(400).json({ error: "Title already exists" });
      return;
    }
    const data = await Tasks.create({ title, description, status, dueDate });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;

  if (!title || title === "" || !description || description === "" || !status || !dueDate) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  try {
    const match = await Tasks.findById(id);
    if (!match) {
      res.status(404).json({ error: `Task with id ${id} not found` });
      return;
    }

    const dupTitle = await Tasks.findOne({ title });
    if (dupTitle && dupTitle._id.toString() !== id) {
      res.status(409).json({ error: "Title already exists" });
      return;
    }

    await Tasks.findByIdAndUpdate(id, { title, description, status, dueDate }, { new: true });
    res.status(200).json({ message: `Task with title ${title} updated successfully` });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const match = await Tasks.findById(id);
    if (!match) {
      res.status(404).json({ error: `Task with id ${id} not found` });
      return;
    }
    await Tasks.findByIdAndDelete(id);
    res.status(200).json({ message: `Task with title ${match.title} deleted successfully` });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else res.status(500).json({ error: "Internal Server Error" });
  }
};
