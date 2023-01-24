import express from "express";
import {
  addJob,
  getAllJobs,
  getJobById,
  deleteJobById,
  deleteAllJobs,
} from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.route("/createJob").post(addJob);
jobRouter.route("/getJobs").get(getAllJobs);
jobRouter.route("/getJob/:id").get(getJobById);
jobRouter.route("/deleteJob/:id").delete(deleteJobById);
jobRouter.route("/deleteJobs").delete(deleteAllJobs);

export default jobRouter;
