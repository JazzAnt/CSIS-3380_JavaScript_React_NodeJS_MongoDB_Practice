//export allows functions, constants, and objects to be imported by other files
export const log = (message, timestamp) =>
  console.log(`The ${message} received at ${timestamp}`);

export const MAX_SIZE = 20;

export const item = {
  type: "furniture",
  category: "bedroom",
};

//export default have a different import syntax, and cannot have an alias
//used to denote important imports
const student = {
    name: "John",
    course: "CSIS3375"
}
export default student

//react convention:
/**
 * 1 component per file
 * exported by default
 */