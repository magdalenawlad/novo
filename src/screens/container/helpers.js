const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const EMPTY_STRING = "";
const EMPTY_OBJECT = {};
const FIELD_IS_REQUIRED_ERROR_TEXT = "Field is required";
const INVALID_EMAIL_ERROR_TEXT = "Invalid email address";

const formConfig = {
    first_name: {
        label: "Name",
        type: "text",
        validate: (value) => !!value.trim() ? EMPTY_STRING : FIELD_IS_REQUIRED_ERROR_TEXT
    },
    last_name: {
        label: "Surname",
        type: "text",
        validate: (value) => !!value.trim() ? EMPTY_STRING : FIELD_IS_REQUIRED_ERROR_TEXT
    },
    email: {
        label: "Email",
        type: "email",
        validate: (value) => {
            if (!value.trim()) return FIELD_IS_REQUIRED_ERROR_TEXT
            else if (!EMAIL_PATTERN.test(value)) return INVALID_EMAIL_ERROR_TEXT
            return EMPTY_STRING;
        }
    }
}

export const initialFormValues = Object.keys(formConfig).reduce((acc, key ) => ({
    ...acc,
    [key]: EMPTY_STRING
}), {})

export const getInputLabel = (name) => name && formConfig[name] ? formConfig[name].label : EMPTY_STRING;
export const getInputType = (name) => name && formConfig[name] ? formConfig[name].type : null;
export const validate = name => value => formConfig[name].validate(value);

export const isShallowEqual = (firstObj = EMPTY_OBJECT, secondObj) => {
    for (let key in firstObj){
        if (firstObj[key] !== secondObj[key]) return false;
    }
    return true;
}
