import { connectToDatabase } from "../../lib/db";

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    res.status(200).json({ message: "Conexión exitosa con MongoDB" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al conectar con MongoDB", error: error.message });
  }
}
