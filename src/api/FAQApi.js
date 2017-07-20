(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FaqResponse', '../model/PageFaqResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FaqResponse'), require('../model/PageFaqResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.FAQApi = factory(root.Pier.ApiClient, root.Pier.FaqResponse, root.Pier.PageFaqResponse);
  }
}(this, function(ApiClient, FaqResponse, PageFaqResponse) {
  'use strict';

  /**
   * FAQ service.
   * @module api/FAQApi
   * @version 2.24.0
   */

  /**
   * Constructs a new FAQApi. 
   * @alias module:api/FAQApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the adicionarUsingPOST operation.
     * @callback module:api/FAQApi~adicionarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adiciona uma nova FAQ
     * Adiciona uma nova FAQ
     * @param {String} pergunta Conte\u00C3\u00BAdo da pergunta.
     * @param {String} resposta Conte\u00C3\u00BAdo da resposta.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.relevancia N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta.
     * @param {String} opts.plataforma Plataforma em que a FAQ se encaixa.
     * @param {String} opts.categoria Categoria de assunto do qual a FAQ se trata.
     * @param {module:model/String} opts.status Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ.
     * @param {module:api/FAQApi~adicionarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaqResponse}
     */
    this.adicionarUsingPOST = function(pergunta, resposta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'pergunta' is set
      if (pergunta == undefined || pergunta == null) {
        throw "Missing the required parameter 'pergunta' when calling adicionarUsingPOST";
      }

      // verify the required parameter 'resposta' is set
      if (resposta == undefined || resposta == null) {
        throw "Missing the required parameter 'resposta' when calling adicionarUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'pergunta': pergunta,
        'resposta': resposta,
        'relevancia': opts['relevancia'],
        'plataforma': opts['plataforma'],
        'categoria': opts['categoria'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FaqResponse;

      return this.apiClient.callApi(
        '/api/faqs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT2 operation.
     * @callback module:api/FAQApi~alterarUsingPUT2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar FAQ
     * Alterar FAQ
     * @param {Integer} id Id
     * @param {String} pergunta Conte\u00C3\u00BAdo da pergunta.
     * @param {String} resposta Conte\u00C3\u00BAdo da resposta.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.relevancia N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta.
     * @param {String} opts.plataforma Plataforma em que a FAQ se encaixa.
     * @param {String} opts.categoria Categoria de assunto do qual a FAQ se trata.
     * @param {module:model/String} opts.status Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ.
     * @param {module:api/FAQApi~alterarUsingPUT2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaqResponse}
     */
    this.alterarUsingPUT2 = function(id, pergunta, resposta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT2";
      }

      // verify the required parameter 'pergunta' is set
      if (pergunta == undefined || pergunta == null) {
        throw "Missing the required parameter 'pergunta' when calling alterarUsingPUT2";
      }

      // verify the required parameter 'resposta' is set
      if (resposta == undefined || resposta == null) {
        throw "Missing the required parameter 'resposta' when calling alterarUsingPUT2";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'pergunta': pergunta,
        'resposta': resposta,
        'relevancia': opts['relevancia'],
        'plataforma': opts['plataforma'],
        'categoria': opts['categoria'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FaqResponse;

      return this.apiClient.callApi(
        '/api/faqs/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET8 operation.
     * @callback module:api/FAQApi~consultarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar FAQ por id
     * Consulta os detalhes de uma determinada FAQ
     * @param {Integer} id Id
     * @param {module:api/FAQApi~consultarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaqResponse}
     */
    this.consultarUsingGET8 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET8";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FaqResponse;

      return this.apiClient.callApi(
        '/api/faqs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET11 operation.
     * @callback module:api/FAQApi~listarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista FAQs
     * Lista todas as FAQs
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idFaq C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da FAQ (id).
     * @param {String} opts.pergunta Conte\u00C3\u00BAdo da pergunta.
     * @param {String} opts.resposta Conte\u00C3\u00BAdo da resposta.
     * @param {Integer} opts.relevancia N\u00C3\u00ADvel de relev\u00C3\u00A2ncia da pergunta.
     * @param {String} opts.plataforma Plataforma em que a FAQ se encaixa.
     * @param {String} opts.categoria Categoria de assunto do qual a FAQ se trata.
     * @param {module:model/String} opts.status Status descrevendo a situa\u00C3\u00A7\u00C3\u00A3o atual da FAQ.
     * @param {module:api/FAQApi~listarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaqResponse}
     */
    this.listarUsingGET11 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'idFaq': opts['idFaq'],
        'pergunta': opts['pergunta'],
        'resposta': opts['resposta'],
        'relevancia': opts['relevancia'],
        'plataforma': opts['plataforma'],
        'categoria': opts['categoria'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageFaqResponse;

      return this.apiClient.callApi(
        '/api/faqs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
