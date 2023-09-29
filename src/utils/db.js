import mongoose from "mongoose";

// Koneksi ke database MongoDB
const connectDB = async () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Koneksi database gagal:"));
  db.once("open", () => {
    console.log("Koneksi database berhasil.");
  });
};

export { connectDB };
