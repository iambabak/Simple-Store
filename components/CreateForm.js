export const createFormData = formObject => {
    let formData = new FormData()
    appendToFormData(formObject, formData)
    console.log('formData',formData)
    console.log('formObject',formObject)

    return formData
  }
  export function appendToFormData(formObject, formData) {
    for (const field in formObject) {
      if (formObject.hasOwnProperty(field)) {
        const fieldValue = formObject[field]
  
        if (fieldValue !== undefined) {
          if (typeof fieldValue === "object") {
            if (
              typeof fieldValue.name === "string" &&
              typeof fieldValue.size === "number"
            ) {
              // it's a file
              formData.append(field, fieldValue)
            } else {
              // it's an object
              if (Array.isArray(fieldValue)) {
                // array
                formData.append(field, JSON.stringify(fieldValue))
              } else {
                // plain object
                formData.append(field, JSON.stringify(fieldValue))
              }
            }
          } else {
            // it's not an object
            formData.append(field, fieldValue)
          }
        }
      }
    }
  }