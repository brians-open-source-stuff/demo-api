/*
 * This file is a controller for a resource.
 * Here, we perform different actions on the resource, such as create, read, update, or delete.
 * A controller retrieves data from the model, and sends the data to the view.
 */

const {
  getOnePage,
  getAllPages,
  createPage,
  updatePage,
  deletePage
} = require("../models/pages.model");

exports.showPage = async function(req, res, next) {
  try {
    const [rows] = await getOnePage(req.params.id);

    if (rows.length) {
      res.json(rows[0]);
    } else {
      res.status(404);
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
};

exports.showAllPages = async function(req, res, next) {
  try {
    const [rows] = await getAllPages();

    if (rows.length) {
      res.json(rows);
    } else {
      res.status(404);
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
};

exports.addPage = async function(req, res, next) {
  try {
    const [result] = await createPage(req.fields.title, req.fields.content);

    if (result.serverStatus === 2 && result.warningStatus === 0) {
      res.status(204);
      res.end();
    } else {
      res.status(400);
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
};

exports.updatePage = async function(req, res, next) {
  try {
    const [result] = await updatePage(
      req.params.id,
      req.fields.title,
      req.fields.content
    );

    if (result.serverStatus === 2 && result.warningStatus === 0) {
      const [rows] = await getOnePage(req.params.id);
      res.json(rows[0]);
    } else {
      res.status(400);
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
};

exports.deletePage = async function(req, res, next) {
  try {
    const [result] = await deletePage(req.params.id);

    if (result.serverStatus === 2 && result.warningStatus === 0) {
      res.status(204);
      res.end();
    } else {
      res.status(400);
      res.end();
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
};
