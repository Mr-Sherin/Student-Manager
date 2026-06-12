import { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import View from "./components/view";

const apiBaseUrl = "http://localhost:3000";

function App() {
  const [students, setStudents] = useState([]);
  const [values, setValues] = useState({ sname: "", sage: "", splace: "" });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("Connect the form to the backend CRUD API.");

  const loadStudents = async () => {
    try {
      const response = await fetch(apiBaseUrl);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      setMessage("Backend not reachable yet. Start the API server on port 3000.");
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const endpoint = editingId ? `${apiBaseUrl}/${editingId}` : apiBaseUrl;
      const method = editingId ? "PUT" : "POST";

      await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      setValues({ sname: "", sage: "", splace: "" });
      setEditingId(null);
      setMessage(editingId ? "Student updated successfully." : "Student added successfully.");
      loadStudents();
    } catch (error) {
      setMessage("Could not save the student record.");
    }
  };

  const handleEdit = (student) => {
    setEditingId(student._id);
    setValues({
      sname: student.sname ?? "",
      sage: String(student.sage ?? ""),
      splace: student.splace ?? "",
    });
    setMessage("Editing the selected student.");
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${apiBaseUrl}/${id}`, {
        method: "DELETE",
      });
      setMessage("Student deleted successfully.");
      loadStudents();
    } catch (error) {
      setMessage("Could not delete the student record.");
    }
  };

  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-shell__main">
        <section className="hero">
          <p className="hero__eyebrow">Frontend connected to MongoDB CRUD API</p>
          <h2>Manage student records from one screen.</h2>
          <p className="hero__message">{message}</p>
        </section>

        <div className="layout-grid">
          <Add
            values={values}
            onChange={handleChange}
            onSubmit={handleSubmit}
            title={editingId ? "Update student" : "Add student"}
            submitLabel={editingId ? "Update student" : "Save student"}
          />

          <View students={students} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </main>
    </div>
  );
}

export default App;
