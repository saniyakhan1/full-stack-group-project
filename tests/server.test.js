const request = require('supertest');
const app = require('../server');

describe('/api/profiles/{nabeel} endpoint', () => {
  it('should return a JSON response', () => {
    return request(app).get('/api/profiles/nabeel').expect(200).expect('Content-Type', /json/);
  });
});

it('should return an object containing {nabeel} as the username', () => {
  return request(app)
    .get('/api/profiles/nabeel')
    .then((response) => {
      expect(response.body).toEqual(
        expect.objectContaining({
          userName: 'Nabeel',
        })
      );
    });
});

it("should return an object containing nabeel's data", () => {
  const expectedResponse = {
    introText: expect.any(String),
    age: expect.any(String),
    height: expect.any(String),
    weight: expect.any(String),
    favouriteColour: expect.any(String),
    favouriteCousin: expect.any(String),
  };
  return request(app)
    .get('/api/profiles/nabeel')
    .then((response) => {
      expect(response.body).toEqual(expect.objectContaining(expectedResponse));
    });
});

describe('/api/profiles/{invalid} endpoint', () => {
  it('should return a 400 response', () => {
    return request(app).get('/api/profiles/invalid').expect(400);
  });
});
