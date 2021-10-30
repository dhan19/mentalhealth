module.exports = [
    {
        url: "/create",
        post: {
            summary: "create",
            description: "create",
            parameters: [{
                in: "body",
                name: "body",
                description: "Model of user creation",
                required: true,
                schema: {
                    $ref: "#/definitions/categoryCreate"
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

    {
        url: "/category",
        get: {
            summary: "category",
            description: "get category",
            // parameters: [{
            //     in: "body",
            //     name: "body",
            //     description: "get category and subcategories",
            //     required: true,
            //     schema: {
            //         $ref: "#/definitions/categoryCreate"
            //     }
            // }],
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

    {
        url: "/createSubCategory",
        post: {
            summary: "Add SubCategory",
            description: "Add SubCategory",
            parameters: [{
                in: "body",
                name: "body",
                description: "Model of user creation",
                required: true,
                schema: {
                    $ref: "#/definitions/subcategoryCreate"
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

    {
        url: "/showsubcategory/{id}",
        get: {
            summary: "show SubCategory",
            description: "show SubCategory",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    description: "cat id",
                    required: true,
                    type: "string"
                },
            ],
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

    {
        url: "/symptom",
        post: {
            summary: "value",
            description: "symptoms of subcategory",
            parameters: [{
                in: "body",
                name: "body",
                description: "symptoms of subcategory",
                required: true,
                schema: {
                    $ref: "#/definitions/symptoms"
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

    {
        url: "/getsymptoms/{id}",
        get: {
            summary: "show symptoms",
            description: "show symptoms",
            parameters: [
                {
                    in: "path",
                    name: "id",
                    description: "user id",
                    required: true,
                    type: "string"
                },
            ],
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