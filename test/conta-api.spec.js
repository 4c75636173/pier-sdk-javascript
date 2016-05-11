require('dotenv').config();
const expect = require('chai').expect;

const ContaApi = require('../src/api/ContaApi');
const ApiClient = require('../src/ApiClient');

describe('ContaApi', () => {
  let contaApi;

  before(() => {
    const apiClient = new ApiClient();

    if (!process.env.BASE_URL) {
      throw new Error('environment variable BASE_URL not defined.');
    } else if (!process.env.API_KEY) {
      throw new Error('environment variable API_KEY not defined.');
    }

    apiClient.basePath = process.env.BASE_URL;
    apiClient.authentications.access_token.apiKey = process.env.API_KEY;
    contaApi = new ContaApi(apiClient);
  });

  describe('#buscarContaUsingGET', () => {
    it('should return account not found when seaching unkown account', (done) => {
      contaApi.buscarContaUsingGET({ nome: 'NotFoundAccount' }, (error, data, response) => {
        expect(response.status).to.be.equal(404);
        done();
      });
    });

    it('should return an account when search a known account by idConta', (done) => {
      contaApi.buscarContaUsingGET({ idConta: 2 }, (error, data, response) => {
        expect(response.status).to.be.equal(200);
        expect(data.contas).to.not.be.empty;
        done();
      });
    });
  });

  describe('#consultarContaUsingGET', () => {
    it('should return an account when search a known account', (done) => {
      contaApi.consultarContaUsingGET(2, (error, data, response) => {
        expect(response.status).to.be.equal(200);
        expect(data).to.exist;
        expect(data.cartao).to.exist;
        expect(data.pessoaFisica).to.exist;
        expect(data.saldoLimite).to.exist;
        done();
      });
    });
  });

});
