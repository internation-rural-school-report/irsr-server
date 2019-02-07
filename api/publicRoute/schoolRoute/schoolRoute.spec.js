const request = require("supertest");

const server = require("../../server");
const db = require("../../../data/config/dbConfig");
const { schools } = require("../../../data/seeds-test/school");
const { school_levels } = require("../../../data/seeds-test/school_level");
const { countries } = require("../../../data/seeds-test/country");

const school = {
  name: "The New Hope",
  level_id: 3,
  country_id: 3
};

afterEach(async () => {
  await db("school").truncate();
  await db("school").insert(schools);
});

describe("School Routes", () => {
  describe("GET api/schools", () => {
    it("should return status 200", async () => {
      let response = await request(server).get("/api/schools");
      expect(response.status).toBe(200);
    });
    it("should return a JSON", async () => {
      let response = await request(server).get("/api/schools");
      expect(response.type).toMatch(/json/i);
    });

    it("should return a list of school", async () => {
      let response = await request(server).get("/api/schools");

      expect(response.body.length).toBe(2);
      expect(response.body[0].school).toEqual(schools[0].name);
    });
  });

  describe("POST api/schools", () => {
    it("should return status 400 for missing input", async () => {
      let response = await request(server)
        .post("/api/schools")
        .send();
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      let newSchool = { ...school };
      newSchool.name = null;

      response = await request(server)
        .post("/api/schools")
        .send({ school: { ...newSchool } });
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      newSchool = { ...school };
      newSchool.level_id = null;

      response = await request(server)
        .post("/api/schools")
        .send({ school: { ...newSchool } });
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");

      newSchool = { ...school };
      newSchool.country_id = null;

      response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing required info");
    });

    it("should return status 400 for invalid input type", async () => {
      let newSchool = { ...school };
      newSchool.name = 1;

      let response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      newSchool = { ...school };
      newSchool.level_id = "Elementary";
      response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");

      newSchool = { ...school };
      newSchool.country_id = "Ghana";
      response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });
      expect(response.status).toBe(400);
      expect(response.text).toBe("Invalid input type");
    });

    it("should return status 200 for valid input", async () => {
      let newSchool = { ...school };
      let response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });
      expect(response.status).toBe(200);
    });

    it("should return a JSON for valid input", async () => {
      let newSchool = { ...school };
      let response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });
      expect(response.type).toMatch(/json/i);
    });

    it("should return a school code for valid input", async () => {
      let newSchool = { ...school };
      let response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });

      expect(response.body.code).not.toBeNull;
      expect(typeof response.body.code).toBe("string");
      expect(response.body.code.length).toBe(4);
    });

    it("should return a school id for valid input", async () => {
      let newSchool = { ...school };
      let response = await request(server)
        .post("/api/schools")
        .send({ school: newSchool });

      expect(response.body.id).not.toBeNull;
      expect(typeof response.body.id).toBe("number");
    });
  });

  describe("GET api/schools/:id", () => {
    it("should return status 200", async () => {
      let response = await request(server).get("/api/schools/1");
      expect(response.status).toBe(200);

      response = await request(server).get("/api/schools/2");
      expect(response.status).toBe(200);
    });

    it("should return a JSON", async () => {
      let response = await request(server).get("/api/schools/1");
      expect(response.type).toMatch(/json/i);
    });

    it("should return school details", async () => {
      let response = await request(server).get("/api/schools/1");

      expect(response.body.id).toBe(1);
      expect(response.body.school).toBe(schools[0].name);
      expect(response.body.level).toEqual(school_levels[0].name);
      expect(response.body.country).toEqual(countries[0].name);
    });
  });
});
