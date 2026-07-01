import React, { useState } from 'react';

function App() {
  const [students] = useState([
    { id: 1, name: "Ahmed", age: 20, grade: "C", email: "ahmed@gmail.com" },
    { id: 2, name: "Sara", age: 21, grade: "B", email: "sara@gmaiil.com" },
    { id: 3, name: "HoSSaM", age: 22, grade: "A", email: "hossam@gmail.com" },
    { id: 4, name: "Doaa", age: 22, grade: "A", email: "doaa@gmail.com" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter(student => {
    const matchesName = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === "All" || student.grade === gradeFilter;
    return matchesName && matchesGrade;
  });

  return (
    // الخلفية الأساسية للموقع غامقة
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">Student Directory</h1>
        
        <div className="flex gap-2 mb-6">
          <input 
            type="text" 
            placeholder="Search by name..." 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="bg-gray-800 border-none p-3 rounded-lg w-full text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <select 
            onChange={(e) => setGradeFilter(e.target.value)} 
            className="bg-gray-800 border-none p-3 rounded-lg text-white outline-none"
          >
            <option value="All">All Grades</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
          </select>
        </div>

        {filteredStudents.map(student => (
          <div 
            key={student.id} 
            onClick={() => setSelectedStudent(student)} 
            className="bg-gray-800 p-4 mb-3 rounded-lg shadow hover:bg-blue-700 cursor-pointer transition-all duration-200 border border-gray-700"
          >
            <h2 className="font-semibold text-lg">{student.name}</h2>
          </div>
        ))}

        {selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-600">
              <h2 className="text-2xl font-bold mb-4 text-white">Student Details</h2>
              <p className="mb-2 text-gray-300"><strong>Name:</strong> {selectedStudent.name}</p>
              <p className="mb-2 text-gray-300"><strong>Age:</strong> {selectedStudent.age}</p>
              <p className="mb-2 text-gray-300"><strong>Grade:</strong> {selectedStudent.grade}</p>
              <p className="mb-2 text-gray-300"><strong>Email:</strong> {selectedStudent.email}</p>
              <button 
                onClick={() => setSelectedStudent(null)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 