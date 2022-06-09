const bcryptjs = require('bcryptjs')

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Johny',
        email: 'johny@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    {
        name: 'Dani',
        email: 'dani@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
    }
]

module.exports = users;