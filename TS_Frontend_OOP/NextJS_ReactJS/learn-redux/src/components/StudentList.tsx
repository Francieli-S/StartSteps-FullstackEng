import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from "@/store-students/actions"

const StudentList: React.FC = () => {
  // access store - useSelector
  const students: readonly IStudent[] = useSelector(state: StudentState => state.students)

  // update store - useDispatch
  
  return (
    <div>
      <h1>List of Students:</h1>
      {students.map(student => (
        <div key={student.id}>
          <p>Student name: {student.name}</p>
          <p>Student hobby: {student.hobby}</p>
          <button onClick={() => deleteStudent}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default StudentList