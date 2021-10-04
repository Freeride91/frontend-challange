import { gql } from "@apollo/client";

export default class Queries {
  public static allMembers = gql`
    query allMembers {
      allMembers {
        id
        firstName
        lastName
        profilePictureUrl
        address {
          country
          state
          postalCode
          city
          addressLine
        }
      }
    }
  `;

  public static memberById = gql`
    query memberById($id: ID!) {
      member(id: $id) {
        id
        firstName
        lastName
        email
        phoneNumber
        profilePictureUrl
        address {
          country
          state
          postalCode
          city
          addressLine
        }
      }
    }
  `;
}
