// Example validator template (optional usage)
export const createUserValidator = {
    requiredFields: ["name", "email", "password"],
  };
  
  export const validateFields = (body, requiredFields) => {
    for (const field of requiredFields) {
      if (!body[field]) {
        return `${field} is required`;
      }
    }
    return null;
  };
  