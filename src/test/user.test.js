const chai = require('chai');
const expect = chai.expect;
const url = `http://localhost:5000/`;
const request = require('supertest')(url);

describe('GraphQL', () => {
    it('Returns user with id = 6158b53c37daca3bbcdfa580', (done) => {
        request.post('/graphql')
        .send({ query: '{ getSingleUser(id: 6158b53c37daca3bbcdfa580) { id fullName, role } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            res.body.user.should.have.property('id')
            res.body.user.should.have.property('fullName')           
            done();
          })
     })
     it('Returns all users', (done) => {
        request.post('/graphql')
        .send({ query: '{ getAllUsers(id: 10) { id fullName, role } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            res.body.user.should.have.property('id')
            res.body.user.should.have.property('fullName')           
            done();
          })
     })
});