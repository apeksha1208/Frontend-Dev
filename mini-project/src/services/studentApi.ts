export interface Student {
  id?: number;
  name: string;
  section: string;
  marks: number;
  grade: string;
}

const API_BASE_URL = 'http://localhost:3000';

export const studentApi = {
  async getAllStudents(): Promise<Student[]> {
    const response = await fetch(`${API_BASE_URL}/students`);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return response.json();
  },

  async getStudentById(id: number): Promise<Student> {
    const response = await fetch(`${API_BASE_URL}/students/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch student');
    }
    return response.json();
  },

  async createStudent(student: Omit<Student, 'id'>): Promise<Student> {
    const response = await fetch(`${API_BASE_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    if (!response.ok) {
      throw new Error('Failed to create student');
    }
    return response.json();
  },

  async updateStudent(id: number, student: Student): Promise<Student> {
    const response = await fetch(`${API_BASE_URL}/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    if (!response.ok) {
      throw new Error('Failed to update student');
    }
    return response.json();
  },

  async deleteStudent(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/students/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete student');
    }
  },
};