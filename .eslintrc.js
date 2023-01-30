export default {
    extends: "eslint:recommended",
    environment: "es2022",
    rules : {
        "key-spacing" : [
            "error",
            {
                beforeColon : true,
                afterColon : true,
                align : "colon"
            }
        ],
        indent : ["error", 4]
    }
};
