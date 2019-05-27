const Palindrome = (str) => {
    if (str.length < 2) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return Palindrome(str.substr(1, (str.length - 2)))
    }
};

Palindrome("topot");

export default Palindrome;