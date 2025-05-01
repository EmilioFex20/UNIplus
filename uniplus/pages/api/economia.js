import { connectToDatabase } from "@/lib/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  try {
    await connectToDatabase();

    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ message: "No autenticado" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    const { economia } = req.body;
    user.economia = economia;
    await user.save();

    res.status(200).json({ message: "Progreso actualizado" });
  } catch (error) {
    console.error("Error al actualizar economía:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
}
