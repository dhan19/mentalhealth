module.exports = [
    {
        url: "/activity",
        post: {
            summary: "show activities",
            description: "show activities",
            parameters: [{
                in: "body",
                name: "body",
                description: "activities of subcategory",
                required: true,
                schema: {
                    $ref: "#/definitions/activities"
                }
            }],
            responses: {
                default: {
                    description: "Unexpected error",
                    schema: {
                        $ref: "#/definitions/Error"
                    }
                }
            }
        }
    },
];