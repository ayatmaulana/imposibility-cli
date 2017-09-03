module.exports = [
    {
        type: 'input',
        name: 'q',
        message: 'What\'s your domain name',
        default: function () {
          return 'ayatm';
        },
        filter: (val) => {
            return val.toLowerCase()
        }
    },
    {
        type: 'list',
        name: 'k',
        message: 'And Add ...',
        choices: ["adjectives","verbs","nouns"]
    },
    {
        type: 'list',
        name: 'o',
        message: 'To The ... Of Word',
        choices: ['suffix','prefix']
    }
]