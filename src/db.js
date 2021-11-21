const users = [{
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
}, {
    id: '2',
    name: 'Hikaru',
    email: 'hikaru@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

// Demo post data
const posts = [{
    id: '10',
    title: 'Today is the first day',
    body: 'Today is the first day of the rest of your life!',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'Tomorrow is not day off',
    body: 'I am going to work tomorrow.',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Hello everyone',
    body: 'Greetings are important.',
    published: true,
    author: '2'
}]

// Demo comment data
const comments = [{
    id: '102',
    text: 'This is the first comment.',
    author: '2',
    post: '10'
}, {
    id: '103',
    text: 'This is the second comment.',
    author: '3',
    post: '12'
}, {
    id: '104',
    text: 'This is the third comment.',
    author: '2',
    post: '11'
}, {
    id: '105',
    text: 'This is the fourth comment.',
    author: '1',
    post: '12'
}]

const db = {
    users, 
    posts, 
    comments
}

export { db as default }