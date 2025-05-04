import { connectToDatabase } from "@/lib/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).json({ message: "Método no permitido" });

  try {
    await connectToDatabase();

    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ message: "No autenticado" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    user.coursesCompleted += 1;
    await user.save();

    res.status(200).json({ message: "Progreso actualizado" });
  } catch (error) {
    console.error("Error al actualizar el progreso del módulo:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
}
