const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /files/data', () => {
    it('Should return a 200 status code and the correct data', function (done) {
        this.timeout(2200); 

        chai
            .request(server)
            .get('/files/data')
            .end((err, res) => {
                expect(res).to.have.status(200);

                expect(res.body).to.have.property('status').that.equals('success');
                expect(res.body).to.have.property('data').that.is.an('array');

                if (res.body.data.length > 0) {
                    const firstFile = res.body.data[0];
                    expect(firstFile).to.have.property('file').that.is.a('string');
                    expect(firstFile).to.have.property('lines').that.is.an('array');

                    if (firstFile.lines.length > 0) {
                        const firstLine = firstFile.lines[0];
                        expect(firstLine).to.have.property('text').that.is.a('string');
                        expect(firstLine).to.have.property('number').that.is.a('number');
                        expect(firstLine).to.have.property('hex').that.is.a('string');
                    }
                }

                done();
            });
    });

    it('Should handle errors and return a 500 status code', (done) => {
        const originalGetFiles = require('../services/apis').getFiles;
        require('../services/apis').getFiles = () => {
            throw new Error('Simulated error');
        };

        chai
            .request(server)
            .get('/files/data')
            .end((err, res) => {
                expect(res).to.have.status(500);

                expect(res.body).to.have.property('status').that.equals('error');
                expect(res.body).to.have.property('message').that.is.a('string');

                require('../services/apis').getFiles = originalGetFiles;

                done();
            });
    });
});
