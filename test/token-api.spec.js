require('dotenv').config();
const expect = require('chai').expect;

const TokenApi = require('../src/api/TokenApi');
const ApiClient = require('../src/ApiClient');
const BodyAccessToken = require('../src/model/BodyAccessToken');

describe('TokenApi', () => {
  let tokenApi;

  before(() => {
    const apiClient = new ApiClient();

    if (!process.env.BASE_URL) {
      throw new Error('environment variable BASE_URL not defined.');
    } else if (!process.env.API_KEY) {
      throw new Error('environment variable API_KEY not defined.');
    }

    apiClient.basePath = process.env.BASE_URL;
    apiClient.authentications.access_token.apiKey = process.env.API_KEY;
    tokenApi = new TokenApi(apiClient);
  });

  // TODO
  describe('#callbackUsingPOST', () => {
    it('should throw error if BodyAccessToken is null or undefined', () => {
      expect(tokenApi.callbackUsingPOST).to.throw(/bodyAccessToken/);
    });
  });

  // TODO
  describe('#validarUsingPOST', () => {
    it('should throw error if BodyAccessToken is null or undefined', () => {
      expect(tokenApi.validarUsingPOST).to.throw(/bodyAccessToken/);
    });
  });

});
