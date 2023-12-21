export const deleteStudentApi = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/student/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete student with ID ${id}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error; 
    }
  };
  