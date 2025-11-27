import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentApi, Student } from '../services/studentApi';

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadStudents = async () => {
    setLoading(true);
    try {
      const data = await studentApi.getAllStudents();
      setStudents(data);
    } catch (error) {
      alert('Failed to load students. Please make sure the server is running.');
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await studentApi.deleteStudent(id);
        alert('Student deleted successfully! Click "Load Students" to see updated list.');
      } catch (error) {
        alert('Failed to delete student.');
        console.error('Error deleting student:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Student Result Management
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={loadStudents}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Load Students'}
            </button>
            <button
              onClick={() => navigate('/add')}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Add Student
            </button>
          </div>

          {students.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No students loaded. Click "Load Students" to fetch data.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Section</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Marks</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Grade</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.section}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.marks}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.grade}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => navigate(`/edit/${student.id}`)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => navigate(`/details/${student.id}`)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            View
                          </button>
                          <button
                            onClick={() => student.id && handleDelete(student.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}