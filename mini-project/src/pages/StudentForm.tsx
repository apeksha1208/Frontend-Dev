import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { studentApi } from '../services/studentApi';

export default function StudentForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    section: '',
    marks: '',
    grade: '',
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEdit && id) {
      loadStudent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, id]);

  const loadStudent = async () => {
    setLoading(true);
    try {
      const student = await studentApi.getStudentById(parseInt(id!));
      setFormData({
        name: student.name,
        section: student.section,
        marks: student.marks.toString(),
        grade: student.grade,
      });
    } catch (error) {
      alert('Failed to load student data.');
      console.error('Error loading student:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.section || !formData.marks || !formData.grade) {
      alert('Please fill in all fields.');
      return;
    }

    const marks = parseInt(formData.marks);
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert('Please enter a valid marks value (0-100).');
      return;
    }

    setSaving(true);
    try {
      const studentData = {
        name: formData.name,
        section: formData.section,
        marks: marks,
        grade: formData.grade,
      };

      if (isEdit && id) {
        await studentApi.updateStudent(parseInt(id), { ...studentData, id: parseInt(id) });
        alert('Student updated successfully! Click "Load Students" on the main page to see the changes.');
      } else {
        await studentApi.createStudent(studentData);
        alert('Student added successfully! Click "Load Students" on the main page to see the new entry.');
      }
      navigate('/');
    } catch (error) {
      alert(isEdit ? 'Failed to update student.' : 'Failed to add student.');
      console.error('Error saving student:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-center text-gray-600">Loading student data...</p>
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
            {isEdit ? 'Edit Student' : 'Add New Student'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter student name"
              />
            </div>

            <div>
              <label htmlFor="section" className="block text-sm font-medium text-gray-700 mb-1">
                Section *
              </label>
              <input
                type="text"
                id="section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter section (e.g., A, B, C)"
              />
            </div>

            <div>
              <label htmlFor="marks" className="block text-sm font-medium text-gray-700 mb-1">
                Marks *
              </label>
              <input
                type="number"
                id="marks"
                name="marks"
                value={formData.marks}
                onChange={handleChange}
                required
                min="0"
                max="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter marks (0-100)"
              />
            </div>

            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                Grade *
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter grade (e.g., A, B+, C-)"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : (isEdit ? 'Update Student' : 'Add Student')}
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}