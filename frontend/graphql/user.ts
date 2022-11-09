export const ME = `
query {
  meUser {
    user {
      email
    }
  }
}
`;

export const LOGIN = `
mutation Login($email: String, $password: String) {
  loginUser(email: $email, password: $password) {
    user {
      email
    }
    exp
    token
  }
}
`;
