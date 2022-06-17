const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dbBuku");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "koneksi database gagal.."));

db.once("open", () => {
  console.log("Koneksi database berhasil");
});
