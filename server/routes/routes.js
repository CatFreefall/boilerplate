const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();

router.get("/", controller.getData);
router.get("/id=:id", controller.getIDs);
router.get("/names", controller.getNames);

router.post("/", controller.addData);

module.exports = router;
