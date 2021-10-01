import { gql } from "@apollo/client";

export default class Queries {
  public static ALL_MEMBERS = gql`
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
}
