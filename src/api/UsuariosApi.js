(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Usuario', '../model/PageUsuarios'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Usuario'), require('../model/PageUsuarios'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.UsuariosApi = factory(root.Pier.ApiClient, root.Pier.Usuario, root.Pier.PageUsuarios);
  }
}(this, function(ApiClient, Usuario, PageUsuarios) {
  'use strict';

  /**
   * Usuarios service.
   * @module api/UsuariosApi
   * @version 2.8.0
   */

  /**
   * Constructs a new UsuariosApi. 
   * @alias module:api/UsuariosApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarSenhaUsingPUT operation.
     * @callback module:api/UsuariosApi~alterarSenhaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar senha do usu\u00C3\u00A1rio
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha do usu\u00C3\u00A1rio.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).
     * @param {String} senhaAtual Senha Atual
     * @param {String} senhaNova Senha Nova
     * @param {module:api/UsuariosApi~alterarSenhaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.alterarSenhaUsingPUT = function(id, senhaAtual, senhaNova, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarSenhaUsingPUT";
      }

      // verify the required parameter 'senhaAtual' is set
      if (senhaAtual == undefined || senhaAtual == null) {
        throw "Missing the required parameter 'senhaAtual' when calling alterarSenhaUsingPUT";
      }

      // verify the required parameter 'senhaNova' is set
      if (senhaNova == undefined || senhaNova == null) {
        throw "Missing the required parameter 'senhaNova' when calling alterarSenhaUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'senha_atual': senhaAtual,
        'senha_nova': senhaNova
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/usuarios/{id}/alterar-senha', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT6 operation.
     * @callback module:api/UsuariosApi~alterarUsingPUT6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Usuario} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar os usu\u00C3\u00A1rios cadastrados
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos usu\u00C3\u00A1rios.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).
     * @param {module:model/Usuario} update update
     * @param {module:api/UsuariosApi~alterarUsingPUT6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Usuario}
     */
    this.alterarUsingPUT6 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT6";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT6";
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
      var returnType = Usuario;

      return this.apiClient.callApi(
        '/api/usuarios/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET16 operation.
     * @callback module:api/UsuariosApi~consultarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Usuario} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Usu\u00C3\u00A1rio
     * Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado Usu\u00C3\u00A1rio a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).
     * @param {module:api/UsuariosApi~consultarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Usuario}
     */
    this.consultarUsingGET16 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET16";
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
      var returnType = Usuario;

      return this.apiClient.callApi(
        '/api/usuarios/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET16 operation.
     * @callback module:api/UsuariosApi~listarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageUsuarios} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Usu\u00C3\u00A1rios cadastrados
     * Este m\u00C3\u00A9todo permite que sejam listados os usu\u00C3\u00A1rios existentes na base do PIER.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.id Id do Usuario
     * @param {String} opts.nome Nome do Usuario
     * @param {String} opts.cpf CPF do Usuario
     * @param {String} opts.email Email do Usuario
     * @param {module:model/String} opts.status Status do Usuario
     * @param {module:api/UsuariosApi~listarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageUsuarios}
     */
    this.listarUsingGET16 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'cpf': opts['cpf'],
        'email': opts['email'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageUsuarios;

      return this.apiClient.callApi(
        '/api/usuarios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recuperarSenhaUsingPOST operation.
     * @callback module:api/UsuariosApi~recuperarSenhaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recuperar senha do usu\u00C3\u00A1rio
     * Esse recurso permite recuperar a senha do usu\u00C3\u00A1rio.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).
     * @param {module:api/UsuariosApi~recuperarSenhaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.recuperarSenhaUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling recuperarSenhaUsingPOST";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/usuarios/{id}/recuperar-senha', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST6 operation.
     * @callback module:api/UsuariosApi~salvarUsingPOST6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Usuario} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar Usu\u00C3\u00A1rio
     * Esse recurso permite cadastrar usu\u00C3\u00A1rios.
     * @param {module:model/Usuario} persist persist
     * @param {module:api/UsuariosApi~salvarUsingPOST6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Usuario}
     */
    this.salvarUsingPOST6 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST6";
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
      var returnType = Usuario;

      return this.apiClient.callApi(
        '/api/usuarios', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarSenhaUsingGET1 operation.
     * @callback module:api/UsuariosApi~validarSenhaUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validar a senha do usu\u00C3\u00A1rio
     * Este m\u00C3\u00A9todo permite validar a senha do usu\u00C3\u00A1rio).
     * @param {String} senha Senha do usu\u00C3\u00A1rio
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).
     * @param {module:api/UsuariosApi~validarSenhaUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validarSenhaUsingGET1 = function(senha, id, callback) {
      var postBody = null;

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling validarSenhaUsingGET1";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling validarSenhaUsingGET1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/usuarios/{id}/validar-senha', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));