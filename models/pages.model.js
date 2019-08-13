/*
 * This file is a model file for a resource in the database server.
 * Here, we look Medusa in the eye and play around with actual SQL codes.
 * Do not do this anywhere else in your application.
 * Usually, this is a Database Programmer's job.
 */

const db = require("../config/sql");

exports.createPage = function(title, content) {
  return new Promise(async function(resolve, reject) {
    try {
      resolve(
        await db.query(
          "INSERT INTO pages SET title = :title, content = :content",
          { title, content }
        )
      );
    } catch (error) {
      reject(error);
    }
  });
};

exports.getOnePage = function(id) {
  return new Promise(async function(resolve, reject) {
    try {
      resolve(
        await db.query("SELECT id, title, content FROM pages WHERE id = :id", {
          id
        })
      );
    } catch (error) {
      reject(error);
    }
  });
};

exports.getAllPages = function() {
  return new Promise(async function(resolve, reject) {
    try {
      resolve(await db.query("SELECT id, title, content FROM pages"));
    } catch (error) {
      reject(error);
    }
  });
};

exports.updatePage = function(id, title, content) {
  return new Promise(async function(resolve, reject) {
    try {
      resolve(
        await db.query(
          "UPDATE pages SET title = :title, content = :content WHERE id = :id",
          { id, title, content }
        )
      );
    } catch (error) {
      reject(error);
    }
  });
};

exports.deletePage = function(id) {
  return new Promise(async function(resolve, reject) {
    try {
      resolve(await db.query("DELETE FROM pages WHERE id = :id", { id }));
    } catch (error) {
      reject(error);
    }
  });
};
