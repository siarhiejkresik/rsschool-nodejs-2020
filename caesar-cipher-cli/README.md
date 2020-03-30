# caesar chipher cli

The command line programm to encode/decode a text by [Caesar chipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## Installing

1. go to <https://github.com/siarhiejkresik/rsschool-nodejs-2020> and clone the repository
2. switch to caesar branch `git checkout caesar`
3. install dependencies `npm install`

## Running

`node caesar-cipher-cli <options>`

The programm accepts 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file (default: stdin)
3.  **-o, --output**: an output file  (default: stdout)
4.  **-a, --action**: an action (encode/decode)

## Examples

`$ echo "AaBbZz012=+" | node caesar-cipher-cli -a encode -s 2
`  
`$ CcDdBb012=+`
