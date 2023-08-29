const {expect} = require("chai");
const request = require("request")
 
let mobile = {
    title : "",
    path : "",
    link : "",
    description : ""
}
describe("test Get API", function(){
    it("returns status code of 200", function(done){
        request.get("http://localhost:3000/api/mobile", function(error,response,bodyString){
            let bodyObj = JSON.parse(bodyString)
            expect(bodyObj.message).to.equal.apply("success")
            done();
        })
    })
})

describe("test Post API", function(){
    it("add mobile to DB", function(done){
        request.post({url:"http://localhost:3000/api/mobile", form: mobile}, function(error,response,bodyString){
            let bodyObj = JSON.parse(bodyString)
            expect(bodyObj.message).to.equal.apply("success")
            done();
        })
    })
})
