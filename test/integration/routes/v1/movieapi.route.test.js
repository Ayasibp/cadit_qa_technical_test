import request from "supertest"
import app from "../../../../src/app.js" // Assuming your Express app is in app.js
import { mockClient } from "jest-mock-pg"

jest.mock("pg", () => ({
  Client: mockClient,
}))

describe("Integration tests for Express app with mock DB", () => {
  let client

  beforeEach(() => {
    client = new Client()
  })

  afterEach(() => {
    client.end()
  })

  test("GET /users should return a list of users", async () => {
    // Mock query result
    const mockQueryResult = {
      rows: [{ id: 1, name: "John Doe", email: "john@example.com" }],
    }

    // Mock the query method of the client
    client.query.mockResolvedValueOnce(mockQueryResult)

    const response = await request(app).get("/users")
    expect(response.status).toBe(200)
    expect(response.body.length).toBe(1)
    expect(response.body[0].name).toBe("John Doe")
    expect(response.body[0].email).toBe("john@example.com")
  })

  test("POST /users should create a new user", async () => {
    // Mock query result
    const mockQueryResult = {
      rows: [],
    }

    // Mock the query method of the client
    client.query.mockResolvedValueOnce(mockQueryResult)

    const newUser = { name: "Jane Smith", email: "jane@example.com" }
    const response = await request(app).post("/users").send(newUser)
    expect(response.status).toBe(201)

    // Check if the client.query method was called with the correct SQL and parameters
    expect(client.query).toHaveBeenCalledWith(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [newUser.name, newUser.email]
    )
  })

  // Add more tests for other routes as needed
})
