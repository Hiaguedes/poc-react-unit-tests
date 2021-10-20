import {graphql} from 'msw'

interface Response {
    getSomething: {
        id: number;
    }
}

export const handlers = [
    graphql.query<Response, any>('getSomething', (req, res, ctx) => {
        return res(
            ctx.data({
                getSomething: {
                    id: 1
                }
            })
        )
    }),
]