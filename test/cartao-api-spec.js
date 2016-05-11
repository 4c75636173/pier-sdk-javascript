require('dotenv').config();
const expect = require('chai').expect;

const CartaoApi = require('../src/api/CartaoApi');
const ApiClient = require('../src/ApiClient');

describe('CartaoApi', () => {
  let cartaoApi;

  before(() => {
    const apiClient = new ApiClient();

    if (!process.env.BASE_URL) {
      throw new Error('environment variable BASE_URL not defined.');
    } else if (!process.env.API_KEY) {
      throw new Error('environment variable API_KEY not defined.');
    }

    apiClient.basePath = process.env.BASE_URL;
    apiClient.authentications.access_token.apiKey = process.env.API_KEY;
    cartaoApi = new CartaoApi(apiClient);
  });

  // TODO
  describe('#desbloquearCartaoUsingPOST', () => {

  });

  // TODO
  describe('#consultarSaldosLimitesUsingGET', () => {

  });

  // TODO
  describe('#consultarExtratoFaturasUsingGET', () => {
    it('should return one value', (done) => {
      cartaoApi.consultarExtratoFaturasUsingGET(1, 1, Date.now(), (error, data, response) => {
        expect(response.status).to.be.equal(200);

        done();
      });
    });
  });

  describe('#consultarCartoesUsingGET', () => {

    it('should return an array with one value', (done) => {
      cartaoApi.consultarCartoesUsingGET(1, (error, data, response) => {

        expect(response.status).to.be.equal(200);
        expect(data).to.exist;

        // TODO: `codigoRetorno` should be NaN?
        expect(data.codigoRetorno).to.be.NaN;

        // TODO: `descricaoRetorno` should be 'null' (string)?
        expect(data.descricaoRetorno).to.be.equal('null');
        expect(data.cartoes).to.be.instanceof(Array);
        expect(data.cartoes).to.have.lengthOf(1);

        done();
      });
    });
  });

  describe('#consultarCartaoUsingGET', () => {

    it('should throw exeception when missing `idConta`', () => {
      expect(() => cartaoApi.consultarCartaoUsingGET()).to.throw(/idConta/);
    });

    it('should throw exeception when missing `idCartao`', () => {
      expect(() => cartaoApi.consultarCartaoUsingGET(1)).to.throw(/idCartao/);
    });

    it('should return card `5162000000010595`', (done) => {
      const options = {
        numeroCartao: '5162000000010595'
      };

      cartaoApi.consultarCartaoUsingGET(1, 1, options, (error, data, response) => {
        expect(response.status).to.be.equal(200);
        expect(data).to.exist;

        // TODO: `codigoRetorno` should be NaN?
        expect(data.codigoRetorno).to.be.NaN;

        // TODO: `descricaoRetorno` should be 'null' (string)?
        expect(data.descricaoRetorno).to.be.equal('null');
        expect(data.cartoes).to.be.instanceof(Array);
        expect(data.cartoes).to.have.lengthOf(1);
        expect(data.cartoes[0].numeroCartao).to.be.equal('5162000000010595');

        done();
      });
    });

    it('should not found any any card with number `5162000000099999`', (done) => {
      const options = {
        numeroCartao: '5162000000099999'
      };

      cartaoApi.consultarCartaoUsingGET(1, 1, options, (error, data, response) => {
        expect(response.status).to.be.equal(200);
        expect(data).to.exist;

        // TODO: `codigoRetorno` should be NaN?
        expect(data.codigoRetorno).to.be.NaN;

        // TODO: `descricaoRetorno` should be 'null' (string)?
        expect(data.descricaoRetorno).to.be.equal('null');
        expect(data.cartoes).to.be.instanceof(Array);
        expect(data.cartoes).to.be.empty;

        done();
      });
    });

    it('should return one value', (done) => {
      cartaoApi.consultarCartaoUsingGET(1, 1, {}, (error, data, response) => {
        expect(response.status).to.be.equal(200);
        expect(data).to.exist;

        // TODO: `codigoRetorno` should be NaN?
        expect(data.codigoRetorno).to.be.NaN;

        // TODO: `descricaoRetorno` should be 'null' (string)?
        expect(data.descricaoRetorno).to.be.equal('null');
        expect(data.cartoes).to.be.instanceof(Array);
        expect(data.cartoes).to.have.lengthOf(1);

        done();
      });
    });

  });

  // TODO
  describe('#cancelarCartaoUsingPOST', () => {

  });

});
