import React, { useState } from 'react';

function App() {
  const [students] = useState([
    { id: 1, name: "Ahmed", age: 20, score: 95, grade: "A+", email: "ahmed@gmail.com" },
    { id: 2, name: "Sara", age: 21, score: 82, grade: "B", email: "sara@gmail.com" },
    { id: 3, name: "Hossam", age: 22, score: 91, grade: "A", email: "hossam@gmail.com" },
    { id: 4, name: "Doaa", age: 22, score: 88, grade: "B+", email: "doaa@gmail.com" },
    { id: 5, name: "Omar", age: 20, score: 76, grade: "C+", email: "omar@gmail.com" },
    { id: 6, name: "Layla", age: 21, score: 98, grade: "A+", email: "layla@gmail.com" },
    { id: 7, name: "Khaled", age: 23, score: 65, grade: "D", email: "khaled@gmail.com" },
    { id: 8, name: "Nour", age: 22, score: 85, grade: "B+", email: "nour@gmail.com" },
    { id: 9, name: "Youssef", age: 21, score: 79, grade: "B", email: "youssef@gmail.com" },
    { id: 10, name: "Mariam", age: 20, score: 93, grade: "A", email: "mariam@gmail.com" },
    { id: 11, name: "Ali", age: 23, score: 72, grade: "C", email: "ali@gmail.com" },
    { id: 12, name: "Zain", age: 22, score: 89, grade: "B+", email: "zain@gmail.com" },
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
            <option value="A+">Grade A+</option>
            <option value="A">Grade A</option>
            <option value="B+">Grade B+</option>
            <option value="B">Grade B</option>
            <option value="C+">Grade C+</option>
            <option value="C">Grade C</option>
            <option value="D">Grade D</option>
          </select>
        </div>

        {filteredStudents.map(student => (
          <div 
            key={student.id} 
            onClick={() => setSelectedStudent(student)} 
            className="bg-gray-800 p-4 mb-3 rounded-lg shadow hover:bg-blue-700 cursor-pointer transition-all duration-200 border border-gray-700 flex justify-between items-center"
          >
            <h2 className="font-semibold text-lg">{student.name}</h2>
            <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-bold text-blue-300">{student.grade}</span>
          </div>
        ))}

        {selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-gray-600">
              <h2 className="text-2xl font-bold mb-4 text-white">Student Details</h2>
              <p className="mb-2 text-gray-300"><strong>Name:</strong> {selectedStudent.name}</p>
              <p className="mb-2 text-gray-300"><strong>Age:</strong> {selectedStudent.age}</p>
              <p className="mb-2 text-gray-300"><strong>Score:</strong> {selectedStudent.score}</p>
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