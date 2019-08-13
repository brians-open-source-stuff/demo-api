/*
 * This file is the view for a resource.
 * Here we call controllers for different HTTP methods such as
 * POST, GET, PATCH, or DELETE (CRUD).
 * The view gets data from the controller.
 */

const {
  showPage,
  showAllPages,
  addPage,
  updatePage,
  deletePage
} = require("../controllers/pages.controller");

module.exports = function(app) {
  app.post("/pages", addPage);
  app.get("/pages", showAllPages);
  app.get("/pages/:id", showPage);
  app.patch("/pages/:id", updatePage);
  app.delete("/pages/:id", deletePage);
};
