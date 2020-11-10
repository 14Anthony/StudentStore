import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'travisAdmin User',
        email: 'travis@travis.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },

    {
        name: 'Anthony',
        email: 'Anthony@anthony.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },

    {
        name: 'Zach ',
        email: 'zach@zach.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },

    {
        name: 'Frank',
        email: 'frank@frank.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },
    {
        name: 'Kevin',
        email: 'kevin@anthony.com',
        password: bcrypt.hashSync('123456', 10),

    },

    {
        name: 'Kerishma',
        email: 'kerishma@travis.com',
        password: bcrypt.hashSync('123456', 10),

    },

    {
        name: 'Daniel',
        email: 'daniel@travis.com',
        password: bcrypt.hashSync('123456', 10),

    },

]

export default users
