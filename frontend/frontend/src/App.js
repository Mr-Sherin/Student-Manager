import { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Sidebar from "./components/Sidebar";
import View from "./components/view";

const apiBaseUrl = "http://localhost:3000";

function App() {
  const [students, setStudents] = useState([]);
  const [values, setValues] = useState({ sname: "", sage: "", splace: "" });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("Connect the form to the backend CRUD API.");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });
  const [activeTab, setActiveTab] = useState("view");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
      setActiveTab("view");
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
    setActiveTab("add");
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
    <div className="app-shell dashboard-layout" data-theme={theme}>
      <Sidebar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        totalRecords={students.length}
      />

      <main className="main-content">
        <section className="hero">
          <div className="hero__text">
            <p className="hero__eyebrow">Student Management System</p>
            <h2>Dashboard</h2>
            <p className="hero__message">{message}</p>
          </div>
          <div className="hero__widget">
            <div className="widget__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="widget__data">
              <h3>{students.length}</h3>
              <p>Total Records</p>
            </div>
          </div>
        </section>

        <div className="tab-content">
          {activeTab === "add" && (
            <Add
              values={values}
              onChange={handleChange}
              onSubmit={handleSubmit}
              title={editingId ? "Update student" : "Add new student"}
              submitLabel={editingId ? "Update student" : "Save student"}
            />
          )}

          {activeTab === "view" && (
            <View students={students} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
