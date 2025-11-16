import express from "express";
import { fetchBooksFromArchive } from "../controllers/archiveController.js";

const router = express.Router();

router.get("/fetch-archive-books", fetchBooksFromArchive);

export default router;
