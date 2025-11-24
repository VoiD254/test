const a = 16
let mmk = "mmk was here"

// accidental global variable + typo
mmkk = "this should not exist"

// logic error: adding string to number
console.log(a + "1")

// wrong variable name (ReferenceError)
console.log(mmkz)

// bad comparison (assignment instead of comparison)
if (a = 10) {
    console.log("a is ten?")
}

// unreachable code after return inside block
function test() {
    return "done"
    console.log("this will never run")
}

// insecure eval usage
eval("console.log('eval is dangerous')")
