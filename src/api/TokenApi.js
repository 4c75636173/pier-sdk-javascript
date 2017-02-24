(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Token', '../model/BodyAccessToken', '../model/PageBases'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Token'), require('../model/BodyAccessToken'), require('../model/PageBases'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TokenApi = factory(root.Pier.ApiClient, root.Pier.Token, root.Pier.BodyAccessToken, root.Pier.PageBases);
  }
}(this, function(ApiClient, Token, BodyAccessToken, PageBases) {
  'use strict';

  /**
   * Token service.
   * @module api/TokenApi
   * @version 2.8.0
   */

  /**
   * Constructs a new TokenApi. 
   * @alias module:api/TokenApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT5 operation.
     * @callback module:api/TokenApi~alterarUsingPUT5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar token
     * Este recurso permite que seja modificado um token j\u00C3\u00A1 cadastrado
     * @param {Integer} id C\u00C3\u00B3digo identificador do token
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Token
     * @param {Integer} opts.base C\u00C3\u00B3digo identificador da base
     * @param {String} opts.owner Owner do token
     * @param {module:model/String} opts.status Status do token
     * @param {String} opts.criadoPor Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token
     * @param {String} opts.alteradoPor Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token
     * @param {module:api/TokenApi~alterarUsingPUT5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Token}
     */
    this.alterarUsingPUT5 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT5";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'token': opts['token'],
        'base': opts['base'],
        'owner': opts['owner'],
        'status': opts['status'],
        'criadoPor': opts['criadoPor'],
        'alteradoPor': opts['alteradoPor']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Token;

      return this.apiClient.callApi(
        '/api/tokens', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the callbackUsingPOST operation.
     * @callback module:api/TokenApi~callbackUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BodyAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /api/tokens/callback
     * @param {module:model/BodyAccessToken} bodyAccessToken bodyAccessToken
     * @param {module:api/TokenApi~callbackUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BodyAccessToken}
     */
    this.callbackUsingPOST = function(bodyAccessToken, callback) {
      var postBody = bodyAccessToken;

      // verify the required parameter 'bodyAccessToken' is set
      if (bodyAccessToken == undefined || bodyAccessToken == null) {
        throw "Missing the required parameter 'bodyAccessToken' when calling callbackUsingPOST";
      }


      var pathParams = {
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
      var returnType = BodyAccessToken;

      return this.apiClient.callApi(
        '/api/tokens/callback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET14 operation.
     * @callback module:api/TokenApi~consultarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar token
     * Este recurso permite que seja consultado um token do emissor atrav\u00C3\u00A9s de um id especifico
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do token (id).
     * @param {module:api/TokenApi~consultarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Token}
     */
    this.consultarUsingGET14 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET14";
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

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Token;

      return this.apiClient.callApi(
        '/api/tokens/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET14 operation.
     * @callback module:api/TokenApi~listarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBases} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar tokens
     * Este recurso permite que sejam listados os tokens existentes
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do token
     * @param {String} opts.token Token
     * @param {Integer} opts.base C\u00C3\u00B3digo identificador da base
     * @param {String} opts.owner Owner do token
     * @param {module:model/String} opts.status Status do token
     * @param {String} opts.criadoPor Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token
     * @param {Date} opts.dataCriacao Data de cria\u00C3\u00A7\u00C3\u00A3o do token
     * @param {String} opts.alteradoPor Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token
     * @param {Date} opts.dataModificacao Data de modifica\u00C3\u00A7\u00C3\u00A3o do token
     * @param {module:api/TokenApi~listarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBases}
     */
    this.listarUsingGET14 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'token': opts['token'],
        'base': opts['base'],
        'owner': opts['owner'],
        'status': opts['status'],
        'criadoPor': opts['criadoPor'],
        'dataCriacao': opts['dataCriacao'],
        'alteradoPor': opts['alteradoPor'],
        'dataModificacao': opts['dataModificacao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageBases;

      return this.apiClient.callApi(
        '/api/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST5 operation.
     * @callback module:api/TokenApi~salvarUsingPOST5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salvar token
     * Este recurso permite que seja adicionado um novo token
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Token
     * @param {Integer} opts.base C\u00C3\u00B3digo identificador da base
     * @param {String} opts.owner Owner do token
     * @param {module:model/String} opts.status Status do token
     * @param {String} opts.criadoPor Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token
     * @param {String} opts.alteradoPor Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token
     * @param {module:api/TokenApi~salvarUsingPOST5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Token}
     */
    this.salvarUsingPOST5 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'token': opts['token'],
        'base': opts['base'],
        'owner': opts['owner'],
        'status': opts['status'],
        'criadoPor': opts['criadoPor'],
        'alteradoPor': opts['alteradoPor']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Token;

      return this.apiClient.callApi(
        '/api/tokens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarUsingPOST operation.
     * @callback module:api/TokenApi~validarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /api/tokens/validar
     * @param {module:model/BodyAccessToken} bodyAccessToken bodyAccessToken
     * @param {module:api/TokenApi~validarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.validarUsingPOST = function(bodyAccessToken, callback) {
      var postBody = bodyAccessToken;

      // verify the required parameter 'bodyAccessToken' is set
      if (bodyAccessToken == undefined || bodyAccessToken == null) {
        throw "Missing the required parameter 'bodyAccessToken' when calling validarUsingPOST";
      }


      var pathParams = {
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/tokens/validar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
