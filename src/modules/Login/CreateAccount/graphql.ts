import {gql} from '@apollo/client'

const CREATE_ACCOUNT = gql`
mutation createUser($name: String!, $password: String!) {
    createUser(name: $name, password: $password) {
        name
        password
    }
}
`

export {CREATE_ACCOUNT}