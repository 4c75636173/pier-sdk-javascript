(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/EstgioCarto', '../model/ListaDeEstgiosCartes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EstgioCarto'), require('../model/ListaDeEstgiosCartes'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EstgioCartoApi = factory(root.Pier.ApiClient, root.Pier.EstgioCarto, root.Pier.ListaDeEstgiosCartes);
  }
}(this, function(ApiClient, EstgioCarto, ListaDeEstgiosCartes) {
  'use strict';

  /**
   * EstgioCarto service.
   * @module api/EstgioCartoApi
   * @version 1.1.0
   */

  /**
   * Constructs a new EstgioCartoApi. 
   * @alias module:api/EstgioCartoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarEstagioCartaoUsingGET operation.
     * @callback module:api/EstgioCartoApi~consultarEstagioCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstgioCarto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Estagio Cart\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Est\u00C3\u00A1gio de Entrega do Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).  
     * @param {Integer} idEstagioCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Entrega do Cart\u00C3\u00A3o (id).
     * @param {module:api/EstgioCartoApi~consultarEstagioCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstgioCarto}
     */
    this.consultarEstagioCartaoUsingGET = function(idEstagioCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idEstagioCartao' is set
      if (idEstagioCartao == undefined || idEstagioCartao == null) {
        throw "Missing the required parameter 'idEstagioCartao' when calling consultarEstagioCartaoUsingGET";
      }


      var pathParams = {
        'id_estagio_cartao': idEstagioCartao
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EstgioCarto;

      return this.apiClient.callApi(
        '/api/estagios-cartoes/{id_estagio_cartao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarEstagiosCartoesUsingGET operation.
     * @callback module:api/EstgioCartoApi~listarEstagiosCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListaDeEstgiosCartes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00A7\u00C3\u00B5es de Est\u00C3\u00A1gios do Cart\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite que sejam listadas as op\u00C3\u00A7\u00C3\u00B5es de Est\u00C3\u00A1gio de Entrega que podem ser atribu\u00C3\u00ADdas aos Cart\u00C3\u00B5es.
     * @param {Integer} id Id do est\u00C3\u00A1gio cart\u00C3\u00A3o
     * @param {String} nome Nome do est\u00C3\u00A1gio cart\u00C3\u00A3o
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/EstgioCartoApi~listarEstagiosCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ListaDeEstgiosCartes}
     */
    this.listarEstagiosCartoesUsingGET = function(id, nome, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarEstagiosCartoesUsingGET";
      }

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling listarEstagiosCartoesUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'nome': nome,
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListaDeEstgiosCartes;

      return this.apiClient.callApi(
        '/api/estagios-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
