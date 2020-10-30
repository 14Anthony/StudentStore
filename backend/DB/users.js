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
        email: 'travis@travis.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true

    },

    {
        name: 'Frank',
        email: 'travis@travis.com',
        password: "#",
        isAdmin: true

    },
    {
        name: 'Kevin',
        email: 'kevin@anthony.com',


    },

    {
        name: 'Kerishma',
        email: 'kerishma@travis.com',


    },

    {
        name: 'Daniel',
        email: 'daniel@travis.com',


    },

]

export default users
