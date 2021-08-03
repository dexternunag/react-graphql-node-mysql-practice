import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'

import { schema } from './Schema'
import { Users } from './Entities/Users'

const PORT = 3000;

const main = async () => {
    // Init database
    await createConnection({
        type: 'mysql',
        database: 'graphqlcrud',
        username: 'root',
        password: 'password',
        logging: true,
        // synchronize: true,
        entities: [Users]
    })

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }))
    app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`))
}

main().catch(err => console.log(err))