class DataHinding {
    // public strPub: string = "Public String Variable"
    protected str: string = "Protected String Variable"
    private str1: string = "Private String Variable"

    protected protectedMethod() {
        console.log("Protected method")
    }

    private privateMethod() {
        console.log("Private method")
    }
}

class DataHindingSub extends DataHinding {
    protectedMethod() {
        console.log("Overriding Super Class Protected method")
    }

    printProtectedVariable() {
        console.log(this.str)
    }


}

var objDataHinding = new DataHinding()
var objDataHindingSub = new DataHindingSub()

objDataHindingSub.protectedMethod()