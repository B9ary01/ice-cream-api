const request=require("supertest");

const app=require("../app");

describe("API test: ",()=>{

    let api;

beforeAll(()=>{
    api=app.listen(3030);

})

afterAll((finished)=>{
  api.close(finished);
})


it("responds to a GET request at  / with 200 request",(done)=>{
request(api).get("/").expect(200, done);
})



})