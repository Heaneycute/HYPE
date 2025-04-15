import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/HYPE/",
  define: {
    // Делаем переменные окружения доступными в клиентском коде
    "process.env": process.env,
  },
});
