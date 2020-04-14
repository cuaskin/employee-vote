export default `
  mutation saveEmployee($id: ID, $vote: Int){
    saveEmployee(id: $id, vote: $vote) {
      id
      vote
    }
  }
`;
