const Query = {
    users(parent, args, { db }, info) {
        if(!args.query) {
            return db.users
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, { db }, info) {
        if(!args.query) {
            return db.posts
        }

        return db.posts.filter((post) => {
            // filter method returns a post of posts array if the return value is true
            return post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    comments(parent, args, { db }, info) {
        return db.comments
    },
    me() {
        return {
            id: '123098',
            name: 'Mike',
            email: 'mike@example.com',
            age: 28
        }
    },
    post() {
        return {
            id: '1234567890',
            title: 'How are you',
            body: 'I am very good.',
            published: true
        }
    }
}

export { Query as default }
