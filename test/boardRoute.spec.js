const request = require("supertest");

const server = require("../api/server");
const db = require("../data/config/dbConfig");
const { boards } = require("../data/seeds-test/board");
const { decodeToken } = require("../api/token/token");

const data = {
	"board": {
		"username": "rich-guy",
		"firstname": "Rich",
		"lastname": "Guy",
		"email": "rgwahh@gmail.com",
		"password": "pass"
	}
}

const user = {
  "username": "bbob",
  "password": "password"
}

afterEach(async () => {
  await db("board").truncate();
  await db("board").insert(boards);
});

describe("Board Routes", () => {

  describe("POST api/boards/register", () => {
    it("should return status 400 for missing input", async () => {
      let response = await request(server)
        .post("/api/boards/register")
        .send();
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      let body = {
        ...data, board: {
          ...data.board,
          username: null
        }
      };

      response = await request(server)
      .post("/api/boards/register")
      .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, board: {
          ...data.board,
          firstname: null
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, board: {
          ...data.board,
          lastname: null
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, board: {
          ...data.board,
          email: null
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, board: {
          ...data.board,
          password: null
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");
    });

    it("should return status 400 for invalid input type", async () => {
      let body = {
        ...data, board: {
          ...data.board,
          username: 123
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, board: {
          ...data.board,
          firstname: 123
        }
      };

      response = await request(server)
      .post("/api/boards/register")
      .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, board: {
          ...data.board,
          lastname: 123
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, board: {
          ...data.board,
          email: 123
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, board: {
          ...data.board,
          password: 123
        }
      };

      response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");
    });

    it("should return status 200 for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.status).toBe(201);
    });

    it("should return a JSON for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/boards/register")
        .send(body);
      expect(response.type).toMatch(/json/i);
    });

    it("should return board id for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/boards/register")
        .send(body);

      expect(response.body.id).not.toBeNull;
      expect(typeof response.body.id).toBe("number");
      expect(response.body.id).toBe(3);
    });

    it("should return token for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/boards/register")
        .send(body);

        const decoded = await decodeToken(response.body.token);

      expect(response.body.token).not.toBeNull;
      expect(typeof response.body.token).toBe("string");
      expect(decoded).toBeTruthy();
    });
  });

  describe("POST api/admins/login", () => {
    it("should return status 400 for missing input", async () => {
      let response = await request(server)
        .post("/api/boards/login")
        .send();
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        user: {
          ...user,
          username: null
        }
      };

      response = await request(server)
        .post("/api/admins/login")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        user: {
          ...user,
          password: null
        }
      };

      response = await request(server)
        .post("/api/boards/login")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");
    });

    it("should return status 400 for invalid input type", async () => {
      let body = { ...data };
      body = {
        user: {
          ...user,
          username: 123
        }
      };

      response = await request(server)
        .post("/api/boards/login")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        user: {
          ...user,
          password: 123
        }
      };

      response = await request(server)
        .post("/api/boards/login")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");
    });

    it("should return status 400 for invalid password", async () => {
      const body = {
        user: {
          ...user,
          password: 'wrong'
        }
      };

      response = await request(server)
        .post("/api/boards/login")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid username or password");
    })

    it("should return status 400 for invalid username", async () => {
      const body = {
        user: {
          ...user,
          username: 'wrong'
        }
      };

      response = await request(server)
        .post("/api/boards/login")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid username or password");
    })

    it("should return status 200 for valid input", async () => {
      let body = { user: user };
      let response = await request(server)
        .post("/api/boards/login")
        .send(body);

      expect(response.status).toBe(200);
    });

    it("should return a JSON for valid input", async () => {
      let body = { user: user };
      let response = await request(server)
        .post("/api/boards/login")
        .send(body);

      expect(response.type).toMatch(/json/i);
    });

    it("should return token for valid input", async () => {
      let body = { user: user };
      let response = await request(server)
        .post("/api/boards/login")
        .send(body);

      const decoded = await decodeToken(response.body.token);

      expect(response.body.token).not.toBeNull;
      expect(typeof response.body.token).toBe("string");
      expect(decoded).toBeTruthy();
    });
  });
});
