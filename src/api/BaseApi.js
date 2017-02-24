(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Base', '../model/BodyAccessToken', '../model/PageBases'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Base'), require('../model/BodyAccessToken'), require('../model/PageBases'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.BaseApi = factory(root.Pier.ApiClient, root.Pier.Base, root.Pier.BodyAccessToken, root.Pier.PageBases);
  }
}(this, function(ApiClient, Base, BodyAccessToken, PageBases) {
  'use strict';

  /**
   * Base service.
   * @module api/BaseApi
   * @version 2.8.0
   */

  /**
   * Constructs a new BaseApi. 
   * @alias module:api/BaseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT operation.
     * @callback module:api/BaseApi~alterarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Base} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar base
     * Este recurso permite que seja modificado uma base j\u00C3\u00A1 cadastrada
     * @param {Integer} id C\u00C3\u00B3digo identificador da base
     * @param {String} servidor IP do servidor
     * @param {String} usuario Nome do usu\u00C3\u00A1rio
     * @param {String} senha Senha
     * @param {String} nomeBase Nome da base
     * @param {Boolean} senhaCriptografada senha Criptografada
     * @param {String} domain Dom\u00C3\u00ADnio da base
     * @param {String} nomeBaseControleAcesso Nome da base de controle acesso
     * @param {String} servidorControleAcesso Servidor do controle de acesso
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idEmissor C\u00C3\u00B3digo do identificador do emissor
     * @param {module:api/BaseApi~alterarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Base}
     */
    this.alterarUsingPUT = function(id, servidor, usuario, senha, nomeBase, senhaCriptografada, domain, nomeBaseControleAcesso, servidorControleAcesso, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT";
      }

      // verify the required parameter 'servidor' is set
      if (servidor == undefined || servidor == null) {
        throw "Missing the required parameter 'servidor' when calling alterarUsingPUT";
      }

      // verify the required parameter 'usuario' is set
      if (usuario == undefined || usuario == null) {
        throw "Missing the required parameter 'usuario' when calling alterarUsingPUT";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling alterarUsingPUT";
      }

      // verify the required parameter 'nomeBase' is set
      if (nomeBase == undefined || nomeBase == null) {
        throw "Missing the required parameter 'nomeBase' when calling alterarUsingPUT";
      }

      // verify the required parameter 'senhaCriptografada' is set
      if (senhaCriptografada == undefined || senhaCriptografada == null) {
        throw "Missing the required parameter 'senhaCriptografada' when calling alterarUsingPUT";
      }

      // verify the required parameter 'domain' is set
      if (domain == undefined || domain == null) {
        throw "Missing the required parameter 'domain' when calling alterarUsingPUT";
      }

      // verify the required parameter 'nomeBaseControleAcesso' is set
      if (nomeBaseControleAcesso == undefined || nomeBaseControleAcesso == null) {
        throw "Missing the required parameter 'nomeBaseControleAcesso' when calling alterarUsingPUT";
      }

      // verify the required parameter 'servidorControleAcesso' is set
      if (servidorControleAcesso == undefined || servidorControleAcesso == null) {
        throw "Missing the required parameter 'servidorControleAcesso' when calling alterarUsingPUT";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'servidor': servidor,
        'usuario': usuario,
        'senha': senha,
        'nomeBase': nomeBase,
        'senhaCriptografada': senhaCriptografada,
        'domain': domain,
        'nomeBaseControleAcesso': nomeBaseControleAcesso,
        'idEmissor': opts['idEmissor'],
        'servidorControleAcesso': servidorControleAcesso
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Base;

      return this.apiClient.callApi(
        '/api/bases', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clearUsingGET operation.
     * @callback module:api/BaseApi~clearUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BodyAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Limpar mapa de bases
     * @param {module:api/BaseApi~clearUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BodyAccessToken}
     */
    this.clearUsingGET = function(callback) {
      var postBody = null;


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
        '/api/bases/clear', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET1 operation.
     * @callback module:api/BaseApi~consultarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Base} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar base
     * Este recurso permite que seja consultada uma base do emissor atrav\u00C3\u00A9s de um id especifico
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da base (id).
     * @param {module:api/BaseApi~consultarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Base}
     */
    this.consultarUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET1";
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
      var returnType = Base;

      return this.apiClient.callApi(
        '/api/bases/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET1 operation.
     * @callback module:api/BaseApi~listarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBases} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar bases
     * Este recurso permite que sejam listadas as bases existentes
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador da base
     * @param {String} opts.servidor IP do servidor
     * @param {String} opts.usuario Nome do usu\u00C3\u00A1rio
     * @param {String} opts.senha Senha
     * @param {String} opts.nomeBase Nome da base
     * @param {Boolean} opts.senhaCriptografada senha Criptografada
     * @param {String} opts.domain Dom\u00C3\u00ADnio da base
     * @param {String} opts.nomeBaseControleAcesso Nome da base de controle acesso
     * @param {Integer} opts.idEmissor C\u00C3\u00B3digo do identificador do emissor
     * @param {String} opts.servidorControleAcesso Servidor do controle de acesso
     * @param {module:api/BaseApi~listarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBases}
     */
    this.listarUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'servidor': opts['servidor'],
        'usuario': opts['usuario'],
        'senha': opts['senha'],
        'nomeBase': opts['nomeBase'],
        'senhaCriptografada': opts['senhaCriptografada'],
        'domain': opts['domain'],
        'nomeBaseControleAcesso': opts['nomeBaseControleAcesso'],
        'idEmissor': opts['idEmissor'],
        'servidorControleAcesso': opts['servidorControleAcesso']
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
        '/api/bases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST1 operation.
     * @callback module:api/BaseApi~salvarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Base} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salvar base
     * Este recurso permite que seja adicionado uma nova base
     * @param {String} servidor IP do servidor
     * @param {String} usuario Nome do usu\u00C3\u00A1rio
     * @param {String} senha Senha
     * @param {String} nomeBase Nome da base
     * @param {Boolean} senhaCriptografada senha Criptografada
     * @param {String} domain Dom\u00C3\u00ADnio da base
     * @param {String} nomeBaseControleAcesso Nome da base de controle acesso
     * @param {String} servidorControleAcesso Servidor do controle de acesso
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idEmissor C\u00C3\u00B3digo do identificador do emissor
     * @param {module:api/BaseApi~salvarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Base}
     */
    this.salvarUsingPOST1 = function(servidor, usuario, senha, nomeBase, senhaCriptografada, domain, nomeBaseControleAcesso, servidorControleAcesso, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'servidor' is set
      if (servidor == undefined || servidor == null) {
        throw "Missing the required parameter 'servidor' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'usuario' is set
      if (usuario == undefined || usuario == null) {
        throw "Missing the required parameter 'usuario' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'nomeBase' is set
      if (nomeBase == undefined || nomeBase == null) {
        throw "Missing the required parameter 'nomeBase' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'senhaCriptografada' is set
      if (senhaCriptografada == undefined || senhaCriptografada == null) {
        throw "Missing the required parameter 'senhaCriptografada' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'domain' is set
      if (domain == undefined || domain == null) {
        throw "Missing the required parameter 'domain' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'nomeBaseControleAcesso' is set
      if (nomeBaseControleAcesso == undefined || nomeBaseControleAcesso == null) {
        throw "Missing the required parameter 'nomeBaseControleAcesso' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'servidorControleAcesso' is set
      if (servidorControleAcesso == undefined || servidorControleAcesso == null) {
        throw "Missing the required parameter 'servidorControleAcesso' when calling salvarUsingPOST1";
      }


      var pathParams = {
      };
      var queryParams = {
        'servidor': servidor,
        'usuario': usuario,
        'senha': senha,
        'nomeBase': nomeBase,
        'senhaCriptografada': senhaCriptografada,
        'domain': domain,
        'nomeBaseControleAcesso': nomeBaseControleAcesso,
        'idEmissor': opts['idEmissor'],
        'servidorControleAcesso': servidorControleAcesso
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Base;

      return this.apiClient.callApi(
        '/api/bases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
