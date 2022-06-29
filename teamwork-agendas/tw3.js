//??JS-CC-004 : Email Validation Assignment.
// Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

// Valid email addresses must follow these rules:
// It must have the username@websitename.extension format type.
// The maximum length of the extension is 3.
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.

// Problem Statement
// Write a function that takes email variable and return true or false and write console invalid or valid.

// Please note that, extension length can be 2 or 3 letters( For example: .co, com. )

//!     pseudo code;
const mail = "rustuketen@gmail.com"
function validMail(mail) {
    if (mail.includes("@")) {
        let splitMail = mail.split("@");
        let username = splitMail[0];
        let last = splitMail[1].split(".");
        let webname = last[0];
        let extension = last[1];
        return (username.length > 0 &&
            webname.length > 0 &&
            (extension.length == 3 || extension.length == 2)
        );
    } else if (username.icludes("@") || last.icludes("@")){
        return ("false");
    } else {
    return ("false");
}};
console.log(validMail(mail));
