const book = {
    title: 'superBook',
    author: 'bohdan rayons',
    pages: 201,
    isAvailable: true
}

const giveProperties = (obj) => Object.values(obj)

const user = {
    profile: {
        email: 'ggwp@gmail.com'
    },
    role: 'admin'
}

const userRole = user.role

const checkRoleProperty = (property) => property.hasOwnProperty()
console.log(checkRoleProperty(userRole))