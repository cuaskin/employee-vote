export default `
  query employee($id: ID) {
    employee(id: $id) {
      id
      firstName
      lastName
      vote
      email
      phone
      avatarUrl
      jobTitle
      address
    }
  }
`;
