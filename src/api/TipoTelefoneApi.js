(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TipoTelefone', '../model/PageTipoTelefones'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TipoTelefone'), require('../model/PageTipoTelefones'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TipoTelefoneApi = factory(root.Pier.ApiClient, root.Pier.TipoTelefone, root.Pier.PageTipoTelefones);
  }
}(this, function(ApiClient, TipoTelefone, PageTipoTelefones) {
  'use strict';

  /**
   * TipoTelefone service.
   * @module api/TipoTelefoneApi
   * @version 2.0.0
   */

  /**
   * Constructs a new TipoTelefoneApi. 
   * @alias module:api/TipoTelefoneApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET8 operation.
     * @callback module:api/TipoTelefoneApi~consultarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTelefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Telefone
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idTipoTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id)
     * @param {module:api/TipoTelefoneApi~consultarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTelefone}
     */
    this.consultarUsingGET8 = function(idTipoTelefone, callback) {
      var postBody = null;

      // verify the required parameter 'idTipoTelefone' is set
      if (idTipoTelefone == undefined || idTipoTelefone == null) {
        throw "Missing the required parameter 'idTipoTelefone' when calling consultarUsingGET8";
      }


      var pathParams = {
        'id_tipo_telefone': idTipoTelefone
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
      var returnType = TipoTelefone;

      return this.apiClient.callApi(
        '/api/tipos-telefones/{id_tipo_telefone}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET9 operation.
     * @callback module:api/TipoTelefoneApi~listarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTelefones} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos de Telefones
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {String} opts.nome Nome do Tipo do Telefone
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/TipoTelefoneApi~listarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTelefones}
     */
    this.listarUsingGET9 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
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
      var returnType = PageTipoTelefones;

      return this.apiClient.callApi(
        '/api/tipos-telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
