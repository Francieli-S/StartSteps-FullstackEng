'use client'
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from "@/store-students/actions"
import { Dispatch } from 'redux'
import * as React from 'react'

const StudentList: React.FC = () => {
  // access store - useSelector
  const students: readonly IStudent[] = useSelector((state: StudentState) => state.students )

  // update store - useDispatch
    const dispatch: Dispatch<any> = useDispatch()

    const removeStudent = React.useCallback(
        (id: number) => dispatch(deleteStudent(id)),
        [dispatch, deleteStudent]
    )
  
  return (
    <div>
      <h1>List of Students:</h1>
      {students.map(student => (
        <div key={student.id}>
          <p>Student name: {student.name}</p>
          <p>Student hobby: {student.hobby}</p>
          <button onClick={() => removeStudent(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default StudentList