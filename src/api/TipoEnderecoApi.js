(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TipoEndereco', '../model/PageTiposEndereco'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TipoEndereco'), require('../model/PageTiposEndereco'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TipoEnderecoApi = factory(root.Pier.ApiClient, root.Pier.TipoEndereco, root.Pier.PageTiposEndereco);
  }
}(this, function(ApiClient, TipoEndereco, PageTiposEndereco) {
  'use strict';

  /**
   * TipoEndereco service.
   * @module api/TipoEnderecoApi
   * @version 2.0.0
   */

  /**
   * Constructs a new TipoEnderecoApi. 
   * @alias module:api/TipoEnderecoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET7 operation.
     * @callback module:api/TipoEnderecoApi~consultarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoEndereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idTipoEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {module:api/TipoEnderecoApi~consultarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoEndereco}
     */
    this.consultarUsingGET7 = function(idTipoEndereco, callback) {
      var postBody = null;

      // verify the required parameter 'idTipoEndereco' is set
      if (idTipoEndereco == undefined || idTipoEndereco == null) {
        throw "Missing the required parameter 'idTipoEndereco' when calling consultarUsingGET7";
      }


      var pathParams = {
        'id_tipo_endereco': idTipoEndereco
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
      var returnType = TipoEndereco;

      return this.apiClient.callApi(
        '/api/tipos-endereco/{id_tipo_endereco}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET8 operation.
     * @callback module:api/TipoEnderecoApi~listarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTiposEndereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Endere\u00C3\u00A7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {String} opts.nome Nome do Tipo do Endere\u00C3\u00A7o
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/TipoEnderecoApi~listarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTiposEndereco}
     */
    this.listarUsingGET8 = function(opts, callback) {
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
      var returnType = PageTiposEndereco;

      return this.apiClient.callApi(
        '/api/tipos-endereco', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
