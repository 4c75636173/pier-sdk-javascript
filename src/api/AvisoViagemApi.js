(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AvisoViagemResponse', '../model/PageAvisoViagemResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AvisoViagemResponse'), require('../model/PageAvisoViagemResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AvisoViagemApi = factory(root.Pier.ApiClient, root.Pier.AvisoViagemResponse, root.Pier.PageAvisoViagemResponse);
  }
}(this, function(ApiClient, AvisoViagemResponse, PageAvisoViagemResponse) {
  'use strict';

  /**
   * AvisoViagem service.
   * @module api/AvisoViagemApi
   * @version 2.54.4
   */

  /**
   * Constructs a new AvisoViagemApi. 
   * @alias module:api/AvisoViagemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET4 operation.
     * @callback module:api/AvisoViagemApi~consultarUsingGET4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar um aviso viagem de acordo com o id passado
     * Este m\u00C3\u00A9todo permite que seja consultado um aviso viagen existente na base do emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id).
     * @param {module:api/AvisoViagemApi~consultarUsingGET4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.consultarUsingGET4 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET4";
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
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desabilitarUsingPOST operation.
     * @callback module:api/AvisoViagemApi~desabilitarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desabilitar um aviso viagem de acordo com o id passado
     * Este m\u00C3\u00A9todo permite que seja desabilitado um aviso viagen existente na base do emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id).
     * @param {module:api/AvisoViagemApi~desabilitarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.desabilitarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desabilitarUsingPOST";
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
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens/{id}/desabilitar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the habilitarUsingPOST operation.
     * @callback module:api/AvisoViagemApi~habilitarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Habilitar um aviso viagem de acordo com o id passado
     * Este m\u00C3\u00A9todo permite que seja habilitado um aviso viagen existente na base do emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id).
     * @param {module:api/AvisoViagemApi~habilitarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.habilitarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling habilitarUsingPOST";
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
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens/{id}/habilitar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET6 operation.
     * @callback module:api/AvisoViagemApi~listarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os avisos viagens gerados pelo Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os avisos viagens existentes na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idCartao C\u00C3\u00B3digo Identificador do cart\u00C3\u00A3o na base (id)
     * @param {String} opts.codigoPais Codigo identificador do pa\u00C3\u00ADs na base (id)
     * @param {String} opts.dataInicio Data inicio do aviso viagem
     * @param {String} opts.dataFim Data fim do aviso viagem
     * @param {Integer} opts.flagAtivo Identifica se o aviso viagem esta ativo ou n\u00C3\u00A3o
     * @param {module:api/AvisoViagemApi~listarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAvisoViagemResponse}
     */
    this.listarUsingGET6 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idCartao': opts['idCartao'],
        'codigoPais': opts['codigoPais'],
        'dataInicio': opts['dataInicio'],
        'dataFim': opts['dataFim'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST3 operation.
     * @callback module:api/AvisoViagemApi~salvarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo Aviso Viagem
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo Aviso Viagem na base de dados do Emissor.
     * @param {Integer} idCartao C\u00C3\u00B3digo Identificador do cart\u00C3\u00A3o na base (id)
     * @param {String} codigoPais Codigo identificador do pa\u00C3\u00ADs na base (id)
     * @param {String} dataInicio Data inicio do aviso viagem
     * @param {String} dataFim Data fim do aviso viagem
     * @param {module:api/AvisoViagemApi~salvarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.salvarUsingPOST3 = function(idCartao, codigoPais, dataInicio, dataFim, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'codigoPais' is set
      if (codigoPais == undefined || codigoPais == null) {
        throw "Missing the required parameter 'codigoPais' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'dataInicio' is set
      if (dataInicio == undefined || dataInicio == null) {
        throw "Missing the required parameter 'dataInicio' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'dataFim' is set
      if (dataFim == undefined || dataFim == null) {
        throw "Missing the required parameter 'dataFim' when calling salvarUsingPOST3";
      }


      var pathParams = {
      };
      var queryParams = {
        'idCartao': idCartao,
        'codigoPais': codigoPais,
        'dataInicio': dataInicio,
        'dataFim': dataFim
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
