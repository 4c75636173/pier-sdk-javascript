(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ControleTentativaCadastroResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ControleTentativaCadastroResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagusuariotokenApi = factory(root.Pier.ApiClient, root.Pier.ControleTentativaCadastroResponse);
  }
}(this, function(ApiClient, ControleTentativaCadastroResponse) {
  'use strict';

  /**
   * globaltagusuariotoken service.
   * @module api/GlobaltagusuariotokenApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagusuariotokenApi. 
   * @alias module:api/GlobaltagusuariotokenApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the incrementarTentativaUsingPUT operation.
     * @callback module:api/GlobaltagusuariotokenApi~incrementarTentativaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ControleTentativaCadastroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_token_recurso_controle_tentativa_cadastro_incrementar}}}
     * {{{usuario_token_recurso_controle_tentativa_cadastro_incrementar_notas}}}
     * @param {String} cpf {{{usuario_token_recurso_controle_tentativa_cadastro_incrementar_param_cpf}}}
     * @param {module:api/GlobaltagusuariotokenApi~incrementarTentativaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ControleTentativaCadastroResponse}
     */
    this.incrementarTentativaUsingPUT = function(cpf, callback) {
      var postBody = null;

      // verify the required parameter 'cpf' is set
      if (cpf == undefined || cpf == null) {
        throw "Missing the required parameter 'cpf' when calling incrementarTentativaUsingPUT";
      }


      var pathParams = {
      };
      var queryParams = {
        'cpf': cpf
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ControleTentativaCadastroResponse;

      return this.apiClient.callApi(
        '/api/usuarios-tokens/incrementar-tentativas', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the verificarTentativaUsingGET operation.
     * @callback module:api/GlobaltagusuariotokenApi~verificarTentativaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ControleTentativaCadastroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_token_recurso_controle_tentativa_cadastro_verificar}}}
     * {{{usuario_token_recurso_controle_tentativa_cadastro_verificar_notas}}}
     * @param {String} cpf {{{usuario_token_recurso_controle_tentativa_cadastro_verificar_param_cpf}}}
     * @param {module:api/GlobaltagusuariotokenApi~verificarTentativaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ControleTentativaCadastroResponse}
     */
    this.verificarTentativaUsingGET = function(cpf, callback) {
      var postBody = null;

      // verify the required parameter 'cpf' is set
      if (cpf == undefined || cpf == null) {
        throw "Missing the required parameter 'cpf' when calling verificarTentativaUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'cpf': cpf
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ControleTentativaCadastroResponse;

      return this.apiClient.callApi(
        '/api/usuarios-tokens/verificar-tentativas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
