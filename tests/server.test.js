const { response } = require("express");
const app=require("../server.js");

describe("server file", () => {
  describe("retrieveDataFor function", () => {
    it("should retrieve data for valid user", () => {
      expect(response.statusCode).toEqual(200);
    })
  })
})


// describe("nabeel API",()=>{
//   it("GET /nabeel --> array nabeel's info",()=>{
//     return request(app).get("/nabeel").expect("Content-Type", /json/).expect(200).then(response=>{
//       expect(response.body).toEqual(expect.arrayContaining([
//         expect.objectContaining({
//           id:expect.any(Number),
//           name:expect.any(String),
//           completed: expect.any(Boolean)
//         })
//       ]))
//     })
//   })

//   it("GET /nabeel/id --> specific nabeel by ID",()=>{return request(app).get("/nabeel").expect("content-Type", /json/).expect(200).then(response=>{
//     expect(response.body).toEqual(expect.arrayContaining([
//       expect.objectContaining({
//         id:expect.any(Number),
//         name:expect.any(String),
//         completed: expect.any(Boolean)
//       })
//     ]))
//   })
// })

//   it("GET /nabeel/id --> return 404 if not found",()=>{
//     return request(app).get("/nabeel/999999").expect(404)
//   })

//   it("POST /nabeel/id --> created nabeel",()=>{
//     return request(app).post("/nabeel").send({
//       name:"nabeel khan"
//     }).expect("content-Type",/json/).expect(201).then(response=>{
//       expect(response.body).toEqual(expect.objectContaining({
//         name: "nabeel khan",
//         completed: false
//         })
//       )
//     })
//   })
  
//   it("POST /nabeel/id --> validates request body",()=>{
//     return request(app).post("/nabeel").send({name:123}).expect(422)
//   })
// })
