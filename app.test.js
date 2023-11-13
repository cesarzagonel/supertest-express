const request = require("supertest");
const app = require("./app");

it("should say hello world", async () => {
  const response = await request(app).get("/").expect(200);
  expect(response.text).toEqual("hello world");
});

it("should create user", async () => {
  const response = await request(app)
    .post("/users")
    .send({ name: "Cesar" })
    .expect(201);

  expect(response.body.name).toBe("Cesar");
});

it("should list users", async () => {
  const response = await request(app).get("/users").expect(200);

  expect(response.body).toStrictEqual([
    {
      name: "Jhon",
    },
    {
      name: "Cesar",
    },
  ]);
});
