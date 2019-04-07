const request = require("supertest");

const server = require("../api/server");
const db = require("../data/config/dbConfig");
const { admins } = require("../data/seeds-test/admin");
const { decodeToken } = require("../api/token/token");

const data = {
	"code": "XxYyZz",
	"admin": {
		"username": "teschy",
		"firstname": "Tesch",
		"lastname": "Y",
		"email": "techy@gmail.com",
		"password": "pass",
		"school_id": 1
	}
};

const user = {
  "username": "mmbah",
  "password": "password"
}

afterEach(async () => {
  await db("admin").truncate();
  await db("admin").insert(admins);
});

describe("Admin Routes", () => {

  describe("POST api/admins/register", () => {
    it("should return status 400 for missing input", async () => {
      let response = await request(server)
        .post("/api/admins/register")
        .send();
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      let body = { ...data };
      body.code = null;

      response = await request(server)
      .post("/api/admins/register")
      .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = { ...data };
      body.admin = null;

      response = await request(server)
      .post("/api/admins/register")
      .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, admin: {
          ...data.admin,
          username: null
        }
      };

      response = await request(server)
      .post("/api/admins/register")
      .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, admin: {
          ...data.admin,
          firstname: null
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, admin: {
          ...data.admin,
          lastname: null
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, admin: {
          ...data.admin,
          email: null
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, admin: {
          ...data.admin,
          password: null
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      body = {
        ...data, admin: {
          ...data.admin,
          school_id: null
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");
    });

    it("should return status 400 for invalid input type", async () => {
      let body = { ...data };
      body.code = 123;

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, admin: {
          ...data.admin,
          username: 123
        }
      };

      response = await request(server)
      .post("/api/admins/register")
      .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, admin: {
          ...data.admin,
          firstname: 123
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, admin: {
          ...data.admin,
          lastname: 123
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, admin: {
          ...data.admin,
          email: []
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, admin: {
          ...data.admin,
          password: 123
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      body = {
        ...data, admin: {
          ...data.admin,
          school_id: '50'
        }
      };
  
      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");
    });

    it("should return status 400 for invalid school code", async () => {
      let body = { ...data };
      body.code = 'dsfjds';

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid school id or code");
    })

    it("should return status 400 for invalid school id", async () => {
      let body = {
        ...data, admin: {
          ...data.admin,
          school_id: 50
        }
      };

      response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid school id or code");
    })

    it("should return status 200 for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.status).toBe(201);
    });

    it("should return a JSON for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/admins/register")
        .send(body);
      expect(response.type).toMatch(/json/i);
    });

    it("should return admin id for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/admins/register")
        .send(body);

      expect(response.body.id).not.toBeNull;
      expect(typeof response.body.id).toBe("number");
      expect(response.body.id).toBe(3);
    });

    it("should return token for valid input", async () => {
      let body = { ...data };
      let response = await request(server)
        .post("/api/admins/register")
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
        .post("/api/admins/login")
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
        .post("/api/admins/login")
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
        .post("/api/admins/login")
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
        .post("/api/admins/login")
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
        .post("/api/admins/login")
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
        .post("/api/admins/login")
        .send(body);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid username or password");
    })

    it("should return status 200 for valid input", async () => {
      let body = { user: user };
      let response = await request(server)
        .post("/api/admins/login")
        .send(body);

      expect(response.status).toBe(200);
    });

    it("should return a JSON for valid input", async () => {
      let body = { user: user };
      let response = await request(server)
        .post("/api/admins/login")
        .send(body);

      expect(response.type).toMatch(/json/i);
    });

    it("should return token for valid input", async () => {
      let body = { user: user };
      let response = await request(server)
        .post("/api/admins/login")
        .send(body);

      const decoded = await decodeToken(response.body.token);

      expect(response.body.token).not.toBeNull;
      expect(typeof response.body.token).toBe("string");
      expect(decoded).toBeTruthy();
    });
  });
});
