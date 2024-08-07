interface IStudent {
  id: number
  name: string
  hobby: string
}

interface AddStudentAction {
  type: 'ADD_STUDENT'
  student: IStudent
}

interface DeleteStudentAction {
  type: 'DELETE_STUDENT'
  id: number
}

interface StudentState {
  students: IStudent[]
}

type StudentAction = AddStudentAction | DeleteStudentAction

