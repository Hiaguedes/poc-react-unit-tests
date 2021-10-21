import {gql} from '@apollo/client'

const ALL_USERS = gql`
        query allUsers{
        allUsers{
          id
          name
          password
        }
      }
`

export {ALL_USERS}