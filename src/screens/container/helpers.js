const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const EMPTY_STRING = "";

const formConfig = {
    first_name: {
        label: "Name",
        type: "text",
        validate: (value) => !!value.trim() ? "" : "Field is required"
    },
    last_name: {
        label: "Surname",
        type: "text",
        validate: (value) => !!value.trim() ? "" : "Field is required"
    },
    email: {
        label: "Email",
        type: "email",
        validate: (value) => {
            if (!value.trim()) return "Field is required"
            else if (!EMAIL_PATTERN.test(value)) return "Invalid email address"
            return "";
        }
    }
}

export const initialFormValues = Object.keys(formConfig).reduce((acc, key ) => ({
    ...acc,
    [key]: EMPTY_STRING
}), {})

export const getInputLabel = (name) => formConfig[name].label;
export const getInputType = (name) => formConfig[name].type;
export const validate = name => value => formConfig[name].validate(value);
