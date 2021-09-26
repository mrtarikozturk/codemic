
export const capitalize = (text) => {
    return  text !== "" ? text[0].toUpperCase() + text.substring(1).toLowerCase() : ""
}