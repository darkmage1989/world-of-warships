import { gql } from "@apollo/client";
export const SHIPS = gql`
  {
    vehicles {
      title
      description
      name
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;
