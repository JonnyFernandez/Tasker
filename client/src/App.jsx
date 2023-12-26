import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext"



export default function App() {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/task" element={<h1>tarea</h1>} />
          <Route path="/add-task" element={<h1>agregar tarea</h1>} />
          <Route path="/tasks/:id" element={<h1>buscar una tarea</h1>} />
          <Route path="/profile" element={<h1>perfil</h1>} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>

  )
}
