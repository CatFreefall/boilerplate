const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();

router.get("/", controller.getData);
router.get("/id=:id", controller.getIDs);
router.get("/names", controller.getNames);

router.post("/", controller.addData);

router.delete("/id=:id", controller.deleteData);

module.exports = router;
