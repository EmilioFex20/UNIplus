import { connectToDatabase } from "@/lib/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await connectToDatabase();

    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ message: "No autenticado" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).lean();

    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const { password, ...safeUser } = user;

    res.status(200).json(safeUser);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
}