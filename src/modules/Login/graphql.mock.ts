import { GraphQLError } from 'graphql';
import {graphql} from 'msw'

export interface AllUsersResponse {
    allUsers: {
        id: string;
        name: string;
        password: string;
    }
}

export interface CreateUserResponse {
    data: {
        name: string;
        password: string
    },
    errors: typeof GraphQLError[]
}

const loadingHandlers = [
    graphql.query<AllUsersResponse, any>('allUsers', (req, res, ctx) => {
        return res(
            ctx.data({
                allUsers: {
                    id: '1',
                    name: 'Hiago',
                    password: '123456'
                }
            })
        )
    }),
    graphql.mutation<any, {name: string; password: string}>('createUser', (req, res, ctx) => {
        const {variables: {name, password}} = req;

        ctx.delay(500);

        if(!name || !password) {

            return res(ctx.errors([
                {
                    message: 'Deu ruim'
                }
            ]))
        }

        return res(
            ctx.data({
                name,
                password,
            })
        )
    })
]

export {loadingHandlers}