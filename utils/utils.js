/**
    the function recursively retrieves the value from a nested object based on a string representing a path of keys 
    separated by dots. The function works by splitting the path string into an array of keys, then using the first 
    key to access the next level of the object, and repeating this process until it reaches the desired level.

    @example
    const data = {
        user: {
            profile: {
                name: "Alice",
                age: 30
            },
            settings: {
                theme: "dark"
            }
        }
    };
    console.log(get(data, "user.profile.name")); // Output: "Alice"
    console.log(get(data, "user.settings.theme")); // Output: "dark"
    console.log(get(data, "user.profile.age")); // Output: 30
    console.log(get(data, "user.profile")); // Output: { name: "Alice", age: 30 }
    console.log(get(data, "user.profile.nonexistent")); // Output: undefined
 */
export const get = (item, keyArrayAsString) => {
    if (!keyArrayAsString) return;
    const keys = keyArrayAsString.split(".");
    const key = keys.shift();

    if (keys.length === 0) {
        return item[key];
    }

    return get(item[key], keys.join("."));
};

/**
   @description The toCamelCase function converts a string to camel case format. 
   It processes the string by removing special characters (# and -), splitting it into words, and then converting 
   each word to the appropriate case.

   @example
    console.log(toCamelCase("hello-world")); // Output: "helloWorld"
    console.log(toCamelCase("user#profile#name")); // Output: "userProfileName"
    console.log(toCamelCase("convert-this-string")); // Output: "convertThisString"
    console.log(toCamelCase("example#test-case")); // Output: "exampleTestCase"

 */
export const toCamelCase = (label) => {
    if (!label) return ''
    label = String(label)

    /**
     * @description converts word to camelCase format   
     * input: "word"
     * output: "Word"      
     */
    const convert = (word = "") => {
        return word.split('').map((l, inx) => inx === 0 ? l.toUpperCase() : l).join('')
    }
    return String(label).replace(new RegExp(/#|-/i), ' ').split(' ').map((word, wordIndex) => wordIndex === 0 ? word.toLowerCase() : convert(word)).join('')
}