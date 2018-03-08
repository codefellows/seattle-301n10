# REGEX (Regular Expressions)
Commonly used for fuzzy search and input validation

### Pattern match text
[a-zA-Z] -> match any one character, upper case or lower case, order doesn’t matter
Shorthand: \w

### Validate character followed by whitespace
[a-z]\s

### Optional group
Feb(ruary)?

### Pattern match numbers
[0-9] will match any number
[0-4] will limit to range, or use \d if matching all

\([0-9]+\) -> will match any character 0-9, any quantity, within parentheses
\([0-9]{3}\) -> will limit to three characters, can specify ending number
\(\d{3}\) -> shorthand for [0-9]
? makes it optional

### Validate a Phone Number
(555) 555-5555    
Regex pattern: \(\d{3}\)\s\d{3}-\d{4}

555 555-5555      
Regex pattern: \(?\d{3}\)?\s\d{3}-\d{4}

555-555-5555      
Regex pattern: \(?\d{3}\)?-?\s?\d{3}-\d{4}

555 555 5555      
Regex pattern: \(?\d{3}\)?-?\s?\d{3}-?\s?\d{4}

5555555555        
Regex pattern: \(?\d{3}\)?-?\s?\d{3}-?\s?\d{4}

### Validate an email address
allie@codefellows.com           
Regex pattern: \w+@\w+.\w+

allie.grampa@codefelllows.com   
Regex pattern: \w+.?\w+?@\w+.\w+