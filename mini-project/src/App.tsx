import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import StudentForm from "./pages/StudentForm";
import StudentDetails from "./pages/StudentDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<StudentForm />} />
        <Route path="/details/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}