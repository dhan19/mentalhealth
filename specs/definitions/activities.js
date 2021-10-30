module.exports = [

    {
        name: "activities",
        properties: {
            user_id: {
                type: "string"
            },
            // parent_id: {
            //     type: "string"
            // },
            // value: {
            //     type: "number"
            // },
            activities: {
                type: 'array',
                items: {
                    type: 'array',
                    properties: {
                        column: { type: "string" }
                        // score: { type: "string" }
                    }
                }
            }
        },
      
    }

];