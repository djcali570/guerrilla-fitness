/**
 *  Common input validators v1.2.1
 * 
 *  Updates: Added full name, username
 */

export const Validation = {
    isEmpty: (input: string | null | undefined) => {
        return input === '' || input === 'null' || input === 'undefined';
    },
    isEmptyDate: (input: Date | null | undefined): boolean => {
        return input === null || input === undefined;
    },
    isValidEmail: (input: string) => {
        // Check if input is a non-empty string
        if (!input || typeof input !== 'string' || !input.trim()) {
            return false;
        }

        // More comprehensive email regex
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

        return emailRegex.test(input.trim());
    },

    isXChars(input: string, chars: number) {

        return input.length >= chars;

    },

    isValidPassword: (input: string): boolean => {
        // Check if the input has at least 8 characters
        if (input.length < 8) {
            return false;
        }

        // Check if there is at least one capital letter
        if (!/[A-Z]/.test(input)) {
            return false;
        }

        // Check if there is at least one number
        if (!/\d/.test(input)) {
            return false;
        }

        // Check if there is at least one special character
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input)) {
            return false;
        }

        // If all conditions pass, the password is valid
        return true;
    },
    isValidFullName: (fullName: string): boolean => {
        // Regular expression for validating a full name with exactly two words
        const fullNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)$/;

        return fullNameRegex.test(fullName);
    },

    isValidUsername: (username: string): boolean => {
        // Regular expression for validating a username on Instagram
        // Allows letters, numbers, periods, and underscores
        // Must start with a letter or a number
        // Cannot contain consecutive underscores or periods
        // Cannot end with a period
        const usernameRegex = /^[a-zA-Z0-9](?!.*[._]{2})[a-zA-Z0-9_.]*[^._]$/;

        // Check if the length is at least 6 characters
        const isLengthValid = username.length >= 6;

        return usernameRegex.test(username) && isLengthValid;
    }

}