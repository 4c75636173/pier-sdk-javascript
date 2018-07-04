(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LogAcessoUsuarioPersistencia', '../model/LogAcessoUsuarioResposta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LogAcessoUsuarioPersistencia'), require('../model/LogAcessoUsuarioResposta'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltaglogApi = factory(root.Pier.ApiClient, root.Pier.LogAcessoUsuarioPersistencia, root.Pier.LogAcessoUsuarioResposta);
  }
}(this, function(ApiClient, LogAcessoUsuarioPersistencia, LogAcessoUsuarioResposta) {
  'use strict';

  /**
   * globaltaglog service.
   * @module api/GlobaltaglogApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltaglogApi. 
   * @alias module:api/GlobaltaglogApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the salvarUsingPOST18 operation.
     * @callback module:api/GlobaltaglogApi~salvarUsingPOST18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LogAcessoUsuarioResposta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{log_acesso_usuario_recurso_salvar}}}
     * {{{log_acesso_usuario_recurso_salvar_notas}}}
     * @param {module:model/LogAcessoUsuarioPersistencia} logAcessoUsuarioPersist logAcessoUsuarioPersist
     * @param {module:api/GlobaltaglogApi~salvarUsingPOST18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LogAcessoUsuarioResposta}
     */
    this.salvarUsingPOST18 = function(logAcessoUsuarioPersist, callback) {
      var postBody = logAcessoUsuarioPersist;

      // verify the required parameter 'logAcessoUsuarioPersist' is set
      if (logAcessoUsuarioPersist == undefined || logAcessoUsuarioPersist == null) {
        throw "Missing the required parameter 'logAcessoUsuarioPersist' when calling salvarUsingPOST18";
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
      var returnType = LogAcessoUsuarioResposta;

      return this.apiClient.callApi(
        '/api/logs/log-acessos-usuario', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
