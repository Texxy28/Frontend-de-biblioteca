export const logout = () => {
    localStorage.removeItem("token"); // Eliminar el token
    window.location.href = "/login"; // Redirigir al login
  };