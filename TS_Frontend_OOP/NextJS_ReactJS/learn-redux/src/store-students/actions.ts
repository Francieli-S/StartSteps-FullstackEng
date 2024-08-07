export const addStudent = (student: IStudent) => {
  const action: StudentAction = { type: 'ADD_STUDENT', student };
  return action;
};

export const deleteStudent = (id: number) => {
  const action: StudentAction = { type: 'DELETE_STUDENT', id };
  return action;
};
