const PORT = process.env.PORT || 3000;

module.exports = async function(app) {
  try {
    await app.listen(PORT);
    console.log("RESTful web-API is running on port", PORT);
  } catch (error) {
    console.log(error);
    process.exit(1);
    return;
  }
};
