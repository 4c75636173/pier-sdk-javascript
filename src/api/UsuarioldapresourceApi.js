(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/UsuarioLdapUpdate', '../model/UsuarioLdapPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UsuarioLdapUpdate'), require('../model/UsuarioLdapPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.UsuarioldapresourceApi = factory(root.Pier.ApiClient, root.Pier.UsuarioLdapUpdate, root.Pier.UsuarioLdapPersist);
  }
}(this, function(ApiClient, UsuarioLdapUpdate, UsuarioLdapPersist) {
  'use strict';

  /**
   * Usuarioldapresource service.
   * @module api/UsuarioldapresourceApi
   * @version 2.74.2
   */

  /**
   * Constructs a new UsuarioldapresourceApi. 
   * @alias module:api/UsuarioldapresourceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT22 operation.
     * @callback module:api/UsuarioldapresourceApi~alterarUsingPUT22Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * alterar
     * @param {Integer} id id
     * @param {module:model/UsuarioLdapUpdate} update update
     * @param {module:api/UsuarioldapresourceApi~alterarUsingPUT22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.alterarUsingPUT22 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT22";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT22";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios-ldap/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ativarUsuarioUsingPOST operation.
     * @callback module:api/UsuarioldapresourceApi~ativarUsuarioUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ativarUsuario
     * @param {Integer} id id
     * @param {module:api/UsuarioldapresourceApi~ativarUsuarioUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.ativarUsuarioUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarUsuarioUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios-ldap/{id}/ativar-usuario', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET52 operation.
     * @callback module:api/UsuarioldapresourceApi~consultarUsingGET52Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * consultar
     * @param {Integer} id id
     * @param {module:api/UsuarioldapresourceApi~consultarUsingGET52Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.consultarUsingGET52 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET52";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios-ldap/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarUsuarioUsingPOST operation.
     * @callback module:api/UsuarioldapresourceApi~desativarUsuarioUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * desativarUsuario
     * @param {Integer} id id
     * @param {module:api/UsuarioldapresourceApi~desativarUsuarioUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.desativarUsuarioUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarUsuarioUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios-ldap/{id}/desativar-usuario', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET64 operation.
     * @callback module:api/UsuarioldapresourceApi~listarUsingGET64Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listar
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome 
     * @param {String} opts.cpf 
     * @param {String} opts.email 
     * @param {module:model/String} opts.status 
     * @param {Integer} opts.idEmissor 
     * @param {module:api/UsuarioldapresourceApi~listarUsingGET64Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.listarUsingGET64 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'cpf': opts['cpf'],
        'email': opts['email'],
        'status': opts['status'],
        'idEmissor': opts['idEmissor']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios-ldap', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the perfisUsingGET operation.
     * @callback module:api/UsuarioldapresourceApi~perfisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * perfis
     * @param {Integer} id id
     * @param {module:api/UsuarioldapresourceApi~perfisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.perfisUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling perfisUsingGET";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios-ldap/{id}/perfis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST33 operation.
     * @callback module:api/UsuarioldapresourceApi~salvarUsingPOST33Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * salvar
     * @param {module:model/UsuarioLdapPersist} persist persist
     * @param {module:api/UsuarioldapresourceApi~salvarUsingPOST33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.salvarUsingPOST33 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST33";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios-ldap', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
