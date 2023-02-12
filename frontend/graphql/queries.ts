import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    getUsers {
      id
      firstName
      lastName
      mbti
      country
      city
      age
    }
  }
`;
