export default function capital(str) {
    // check if string is empty
    if (!str) {
      return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}
