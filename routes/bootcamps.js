const express = require("express");
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");
const router = express.Router();

<<<<<<< HEAD
router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});
=======
router.route("/").get(getBootcamps).post(createBootcamp);
>>>>>>> feature/controllers

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
