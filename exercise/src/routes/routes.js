import express from "express";

//adding api paths allows us to categorise aspects of project

const router = express.Router();

import api from "./api/api.js";
router.use("/api", api);

router.get("/", (req, res) => {
    res.send("Add /api/contacts to the url to see contacts data.");
});

export default router;
