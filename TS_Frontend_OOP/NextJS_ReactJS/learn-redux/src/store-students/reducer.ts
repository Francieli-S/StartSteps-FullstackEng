const initialState: StudentState = {
  students: [
    { id: 11, name: 'Foxy', hobby: 'play' },
    { id: 22, name: 'Gato', hobby: 'cuddle' },
  ],
};

const reducer = (
  state: StudentState = initialState,
  action: StudentAction
): StudentState => {
  switch (action.type) {
    case 'ADD_STUDENT':
      const newStudent: IStudent = {
        id: Math.random(),
        name: action.student.name,
        hobby: action.student.hobby,
      };
      return { ...state, students: state.students.concat(newStudent) };
    case 'DELETE_STUDENT':
      const updateStudents: IStudent[] = state.students.filter(
        (student) => student.id !== action.id
      );
      return { ...state, students: updateStudents };
  }

  // return state;
};

export default reducer
