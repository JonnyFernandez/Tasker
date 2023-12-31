import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext"
import TaskPage from "./pages/TaskPage"
import TaskFormPage from "./pages/TaskFormPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import ProtectedRoute from "./ProtectedRoutes"
import { TaskProvider } from "./context/TaskContext"
import { CheckProvider } from "./context/Check.Context"
import NavBar from "./components/NavBar"
import CheckPage from "./pages/ChecksPage"



export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <CheckProvider>

          <BrowserRouter>
            <main className="container mx-auto px-10">
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/task" element={<TaskPage />} />
                  <Route path="/addtask" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/checks" element={<CheckPage />} />

                </Route>
              </Routes>
            </main>
          </BrowserRouter>


        </CheckProvider>
      </TaskProvider>
    </AuthProvider>

  )
}
