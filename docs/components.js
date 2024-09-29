//componentes reutilizables para la documentación

const Task = require("../models/Task");

module.exports = {
    components: {
        schemas: {
            Task: {
                type:'object',
                properties: {
                    _id:{
                        type:'objectId',
                        description: 'user identification number',
                        example: '6201064b0028de7866e2b2c4'
                    },
                    title:{
                        type: 'string',
                        description: 'Title of the task',
                        example: 'Create a note'
                    },
                    created:{
                        type: 'object',
                        description: 'Task Created',
                        email: 'string',
                        example: 'abcd@efg.com'
                    },
                    completed:{
                        type: 'boolean',
                        description: 'Task status',
                        example: 'false'
                    },
                }
            }
        }
    }
};

