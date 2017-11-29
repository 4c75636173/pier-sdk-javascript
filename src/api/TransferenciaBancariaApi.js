(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ContaBancariaPortadorUpdate', '../model/ContaBancariaPortadorResponse', '../model/PageContaBancariaPortadorResponse', '../model/ContaBancariaPortadorPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContaBancariaPortadorUpdate'), require('../model/ContaBancariaPortadorResponse'), require('../model/PageContaBancariaPortadorResponse'), require('../model/ContaBancariaPortadorPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TransferenciaBancariaApi = factory(root.Pier.ApiClient, root.Pier.ContaBancariaPortadorUpdate, root.Pier.ContaBancariaPortadorResponse, root.Pier.PageContaBancariaPortadorResponse, root.Pier.ContaBancariaPortadorPersist);
  }
}(this, function(ApiClient, ContaBancariaPortadorUpdate, ContaBancariaPortadorResponse, PageContaBancariaPortadorResponse, ContaBancariaPortadorPersist) {
  'use strict';

  /**
   * TransferenciaBancaria service.
   * @module api/TransferenciaBancariaApi
   * @version 2.46.4
   */

  /**
   * Constructs a new TransferenciaBancariaApi. 
   * @alias module:api/TransferenciaBancariaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT1 operation.
     * @callback module:api/TransferenciaBancariaApi~atualizarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza conta banc\u00C3\u00A1ria portador
     * Esse recurso permite atualizar uma conta banc\u00C3\u00A1ria do portador.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria do portador (id).
     * @param {module:model/ContaBancariaPortadorUpdate} update update
     * @param {module:api/TransferenciaBancariaApi~atualizarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaBancariaPortadorResponse}
     */
    this.atualizarUsingPUT1 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT1";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling atualizarUsingPUT1";
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
      var returnType = ContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET9 operation.
     * @callback module:api/TransferenciaBancariaApi~consultarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta conta banc\u00C3\u00A1ria portador
     * Esse recurso permite consultar uma conta banc\u00C3\u00A1ria do portador a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria (id).
     * @param {module:api/TransferenciaBancariaApi~consultarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaBancariaPortadorResponse}
     */
    this.consultarUsingGET9 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET9";
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
      var returnType = ContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET11 operation.
     * @callback module:api/TransferenciaBancariaApi~listarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista contas banc\u00C3\u00A1rias portador
     * Esse recurso permite listar contas banc\u00C3\u00A1rias do portador.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta C\u00C3\u00B3digo identificador da conta cart\u00C3\u00A3o
     * @param {String} opts.nomeAgencia Descri\u00C3\u00A7\u00C3\u00A3o da ag\u00C3\u00AAncia
     * @param {String} opts.numeroAgencia N\u00C3\u00BAmero da ag\u00C3\u00AAncia
     * @param {String} opts.numeroConta N\u00C3\u00BAmero da conta
     * @param {Integer} opts.flagContaOrigemDoc Sinaliza se origem \u00C3\u00A9 DOC (1: DOC, 0: TED)
     * @param {Integer} opts.idPessoaFisica C\u00C3\u00B3digo da pessoa
     * @param {String} opts.favorecido Nome do favorecido
     * @param {String} opts.numeroReceiraFederal Documento do favorecido
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/TransferenciaBancariaApi~listarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaBancariaPortadorResponse}
     */
    this.listarUsingGET11 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idConta': opts['idConta'],
        'nomeAgencia': opts['nomeAgencia'],
        'numeroAgencia': opts['numeroAgencia'],
        'numeroConta': opts['numeroConta'],
        'flagContaOrigemDoc': opts['flagContaOrigemDoc'],
        'idPessoaFisica': opts['idPessoaFisica'],
        'favorecido': opts['favorecido'],
        'numeroReceiraFederal': opts['numeroReceiraFederal'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST7 operation.
     * @callback module:api/TransferenciaBancariaApi~salvarUsingPOST7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra uma conta banc\u00C3\u00A1ria do portador
     * Esse recurso permite cadastrar contas banc\u00C3\u00A1rias do portador.
     * @param {module:model/ContaBancariaPortadorPersist} persist persist
     * @param {module:api/TransferenciaBancariaApi~salvarUsingPOST7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaBancariaPortadorResponse}
     */
    this.salvarUsingPOST7 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST7";
      }


      var pathParams = {
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
      var returnType = ContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
