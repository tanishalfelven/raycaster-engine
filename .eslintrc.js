module.exports = {
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
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
