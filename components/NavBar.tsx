import { logout } from "@/services/authService"

export default function Navbar() {
  return (
    <nav>
      <button onClick={logout}>Cerrar Sesión</button>
    </nav>
  );
}