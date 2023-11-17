"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/user:

const permissions = require("../middlewares/permissions");
const passenger = require("../controllers/passenger");

// URL: /passengers
//rueter.use(permissons.isStaff,)  // eger hepsi ayni yetkiyi alacaksa kisaca böyle yazabiliriz.Binu yazaeasak asagidaki pathlerden permissons.isStaff,kaldirmaliyiz
router
  .route("/")
  .get(permissions.isStaff, passenger.list)
  .post(permissions.isStaff, passenger.create);

router
  .route("/:id")
  .get(permissions.isStaff, passenger.read)
  .put(permissions.isStaff, passenger.update)
  .patch(permissions.isStaff, passenger.update)
  .delete(permissions.isStaff, passenger.delete);

/* ------------------------------------------------------- */
module.exports = router;
