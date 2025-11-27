import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { studentApi, Student } from '../services/studentApi';

export default function StudentDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadStudent = async () => {
    if (!id) {
      navigate('/');
      return;
    }

    setLoading(true);
    try {
      const data = await studentApi.getStudentById(parseInt(id));
      setStudent(data);
    } catch (error) {
      alert('Failed to load student details.');
      console.error('Error loading student:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-center text-gray-600">Loading student details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-center text-red-600">Student not found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Student Details
          </h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <h3 className="text-sm font-medium text-gray-600">Student ID</h3>
              <p className="text-lg text-gray-900">{student.id}</p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h3 className="text-sm font-medium text-gray-600">Name</h3>
              <p className="text-lg text-gray-900">{student.name}</p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h3 className="text-sm font-medium text-gray-600">Section</h3>
              <p className="text-lg text-gray-900">{student.section}</p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <h3 className="text-sm font-medium text-gray-600">Marks</h3>
              <p className="text-lg text-gray-900">{student.marks}</p>
            </div>

            <div className="pb-3">
              <h3 className="text-sm font-medium text-gray-600">Grade</h3>
              <p className="text-lg text-gray-900">{student.grade}</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Back to Student List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}