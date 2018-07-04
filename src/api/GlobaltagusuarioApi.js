(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/UsuarioUpdateValue', '../model/UsuarioResponse', '../model/ControleSegurancaDispositivoResponse', '../model/ControleSegurancaDispositivoUpdateValor', '../model/PageUsuarioContasResponse', '../model/PageControleSegurancaDispositivoResponse', '../model/PageUsuarioResponse', '../model/UsuarioPersistencia', '../model/ControleSegurancaDispositivoPersistencia', '../model/UsuarioSenhaFortePersistencia'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UsuarioUpdateValue'), require('../model/UsuarioResponse'), require('../model/ControleSegurancaDispositivoResponse'), require('../model/ControleSegurancaDispositivoUpdateValor'), require('../model/PageUsuarioContasResponse'), require('../model/PageControleSegurancaDispositivoResponse'), require('../model/PageUsuarioResponse'), require('../model/UsuarioPersistencia'), require('../model/ControleSegurancaDispositivoPersistencia'), require('../model/UsuarioSenhaFortePersistencia'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagusuarioApi = factory(root.Pier.ApiClient, root.Pier.UsuarioUpdateValue, root.Pier.UsuarioResponse, root.Pier.ControleSegurancaDispositivoResponse, root.Pier.ControleSegurancaDispositivoUpdateValor, root.Pier.PageUsuarioContasResponse, root.Pier.PageControleSegurancaDispositivoResponse, root.Pier.PageUsuarioResponse, root.Pier.UsuarioPersistencia, root.Pier.ControleSegurancaDispositivoPersistencia, root.Pier.UsuarioSenhaFortePersistencia);
  }
}(this, function(ApiClient, UsuarioUpdateValue, UsuarioResponse, ControleSegurancaDispositivoResponse, ControleSegurancaDispositivoUpdateValor, PageUsuarioContasResponse, PageControleSegurancaDispositivoResponse, PageUsuarioResponse, UsuarioPersistencia, ControleSegurancaDispositivoPersistencia, UsuarioSenhaFortePersistencia) {
  'use strict';

  /**
   * globaltagusuario service.
   * @module api/GlobaltagusuarioApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagusuarioApi. 
   * @alias module:api/GlobaltagusuarioApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarSenhaLoginUsingPOST operation.
     * @callback module:api/GlobaltagusuarioApi~alterarSenhaLoginUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_alterar_senha_login}}}
     * {{{usuario_resource_alterar_senha_login_notes}}}
     * @param {String} login {{{usuario_resource_alterar_senha_login_param_login}}}
     * @param {String} senhaNova {{{usuario_resource_alterar_senha_login_param_senha_nova}}}
     * @param {module:api/GlobaltagusuarioApi~alterarSenhaLoginUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.alterarSenhaLoginUsingPOST = function(login, senhaNova, callback) {
      var postBody = null;

      // verify the required parameter 'login' is set
      if (login == undefined || login == null) {
        throw "Missing the required parameter 'login' when calling alterarSenhaLoginUsingPOST";
      }

      // verify the required parameter 'senhaNova' is set
      if (senhaNova == undefined || senhaNova == null) {
        throw "Missing the required parameter 'senhaNova' when calling alterarSenhaLoginUsingPOST";
      }


      var pathParams = {
        'login': login
      };
      var queryParams = {
      };
      var headerParams = {
        'senhaNova': senhaNova
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/usuarios/{login}/alterar-senha', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarSenhaUsingPUT operation.
     * @callback module:api/GlobaltagusuarioApi~alterarSenhaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_alterar_senha}}}
     * {{{usuario_resource_alterar_senha_notes}}}
     * @param {Integer} id {{{usuario_resource_alterar_senha_param_id}}}
     * @param {String} senhaAtual {{{usuario_resource_alterar_senha_param_senha_atual}}}
     * @param {String} senhaNova {{{usuario_resource_alterar_senha_param_senha_nova}}}
     * @param {module:api/GlobaltagusuarioApi~alterarSenhaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = [];
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
     * Callback function to receive the result of the alterarUsingPUT23 operation.
     * @callback module:api/GlobaltagusuarioApi~alterarUsingPUT23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UsuarioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_alterar}}}
     * {{{usuario_resource_alterar_notes}}}
     * @param {Integer} id {{{usuario_resource_alterar_param_id}}}
     * @param {module:model/UsuarioUpdateValue} update update
     * @param {module:api/GlobaltagusuarioApi~alterarUsingPUT23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UsuarioResponse}
     */
    this.alterarUsingPUT23 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT23";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT23";
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
      var returnType = UsuarioResponse;

      return this.apiClient.callApi(
        '/api/usuarios/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ativarUsuarioUsingPOST1 operation.
     * @callback module:api/GlobaltagusuarioApi~ativarUsuarioUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UsuarioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_ativar_usuario}}}
     * {{{usuario_resource_ativar_usuario_notes}}}
     * @param {Integer} id {{{usuario_resource_ativar_usuario_param_id}}}
     * @param {module:api/GlobaltagusuarioApi~ativarUsuarioUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UsuarioResponse}
     */
    this.ativarUsuarioUsingPOST1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarUsuarioUsingPOST1";
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
      var returnType = UsuarioResponse;

      return this.apiClient.callApi(
        '/api/usuarios/{id}/ativar-usuario', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarUsingPUT2 operation.
     * @callback module:api/GlobaltagusuarioApi~atualizarUsingPUT2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ControleSegurancaDispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{controle_seguranca_dispositivo_atualizar}}}
     * {{{controle_seguranca_dispositivo_atualizar_notas}}}
     * @param {module:model/ControleSegurancaDispositivoUpdateValor} update update
     * @param {module:api/GlobaltagusuarioApi~atualizarUsingPUT2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ControleSegurancaDispositivoResponse}
     */
    this.atualizarUsingPUT2 = function(update, callback) {
      var postBody = update;

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling atualizarUsingPUT2";
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
      var returnType = ControleSegurancaDispositivoResponse;

      return this.apiClient.callApi(
        '/api/controles-seguranca-dispositivos', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarContasVinculadasUsingGET operation.
     * @callback module:api/GlobaltagusuarioApi~consultarContasVinculadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageUsuarioContasResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_recurso_listar_por_id_usuario}}}
     * {{{usuario_recurso_listar_por_id_usuario_notas}}}
     * @param {Integer} id {{{usuario_recurso_listar_por_id_param_id_usuario}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagusuarioApi~consultarContasVinculadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageUsuarioContasResponse}
     */
    this.consultarContasVinculadasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarContasVinculadasUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageUsuarioContasResponse;

      return this.apiClient.callApi(
        '/api/usuarios/{id}/vincular-contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET14 operation.
     * @callback module:api/GlobaltagusuarioApi~consultarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageControleSegurancaDispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{controle_seguranca_dispositivo_consultar}}}
     * {{{controle_seguranca_dispositivo_consultar_notas}}}
     * @param {Integer} idUsuario {{{usuario_resource_consultar_param_idUsuario}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagusuarioApi~consultarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageControleSegurancaDispositivoResponse}
     */
    this.consultarUsingGET14 = function(idUsuario, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idUsuario' is set
      if (idUsuario == undefined || idUsuario == null) {
        throw "Missing the required parameter 'idUsuario' when calling consultarUsingGET14";
      }


      var pathParams = {
      };
      var queryParams = {
        'idUsuario': idUsuario,
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageControleSegurancaDispositivoResponse;

      return this.apiClient.callApi(
        '/api/controles-seguranca-dispositivos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET50 operation.
     * @callback module:api/GlobaltagusuarioApi~consultarUsingGET50Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UsuarioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_consultar}}}
     * {{{usuario_resource_consultar_notes}}}
     * @param {Integer} id {{{usuario_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagusuarioApi~consultarUsingGET50Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UsuarioResponse}
     */
    this.consultarUsingGET50 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET50";
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
      var returnType = UsuarioResponse;

      return this.apiClient.callApi(
        '/api/usuarios/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarUsuarioUsingPOST1 operation.
     * @callback module:api/GlobaltagusuarioApi~desativarUsuarioUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UsuarioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_desativar_usuario}}}
     * {{{usuario_resource_desativar_usuario_notes}}}
     * @param {Integer} id {{{usuario_resource_desativar_usuario_param_id}}}
     * @param {module:api/GlobaltagusuarioApi~desativarUsuarioUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UsuarioResponse}
     */
    this.desativarUsuarioUsingPOST1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarUsuarioUsingPOST1";
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
      var returnType = UsuarioResponse;

      return this.apiClient.callApi(
        '/api/usuarios/{id}/desativar-usuario', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET62 operation.
     * @callback module:api/GlobaltagusuarioApi~listarUsingGET62Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageUsuarioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_listar}}}
     * {{{usuario_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{usuario_request_nome_value}}}
     * @param {String} opts.cpf {{{usuario_request_cpf_value}}}
     * @param {String} opts.email {{{usuario_request_email_value}}}
     * @param {module:model/String} opts.status {{{usuario_request_status_value}}}
     * @param {module:api/GlobaltagusuarioApi~listarUsingGET62Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageUsuarioResponse}
     */
    this.listarUsingGET62 = function(opts, callback) {
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
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageUsuarioResponse;

      return this.apiClient.callApi(
        '/api/usuarios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the recuperarSenhaUsingPOST operation.
     * @callback module:api/GlobaltagusuarioApi~recuperarSenhaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_recuperar_senha}}}
     * {{{usuario_resource_recuperar_senha_notes}}}
     * @param {Integer} id {{{usuario_resource_recuperar_senha_param_id}}}
     * @param {module:api/GlobaltagusuarioApi~recuperarSenhaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = [];
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
     * Callback function to receive the result of the salvarUsingPOST33 operation.
     * @callback module:api/GlobaltagusuarioApi~salvarUsingPOST33Callback
     * @param {String} error Error message, if any.
     * @param {module:model/UsuarioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_salvar}}}
     * {{{usuario_resource_salvar_notes}}}
     * @param {module:model/UsuarioPersistencia} persist persist
     * @param {module:api/GlobaltagusuarioApi~salvarUsingPOST33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UsuarioResponse}
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
      var returnType = UsuarioResponse;

      return this.apiClient.callApi(
        '/api/usuarios', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST9 operation.
     * @callback module:api/GlobaltagusuarioApi~salvarUsingPOST9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ControleSegurancaDispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{controle_seguranca_dispositivo_salvar}}}
     * {{{controle_seguranca_dispositivo_salvar_notas}}}
     * @param {module:model/ControleSegurancaDispositivoPersistencia} persist persist
     * @param {module:api/GlobaltagusuarioApi~salvarUsingPOST9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ControleSegurancaDispositivoResponse}
     */
    this.salvarUsingPOST9 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST9";
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
      var returnType = ControleSegurancaDispositivoResponse;

      return this.apiClient.callApi(
        '/api/controles-seguranca-dispositivos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarSenhaForteUsingPOST operation.
     * @callback module:api/GlobaltagusuarioApi~validarSenhaForteUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_validar_senha_forte}}}
     * {{{usuario_resource_validar_senha_forte_notes}}}
     * @param {String} senha {{{usuario_resource_validar_senha_forte_param_senha}}}
     * @param {module:model/UsuarioSenhaFortePersistencia} usuarioSenhaFortePersist {{{usuario_resource_validar_senha_forte_param_id_plataforma}}}
     * @param {module:api/GlobaltagusuarioApi~validarSenhaForteUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validarSenhaForteUsingPOST = function(senha, usuarioSenhaFortePersist, callback) {
      var postBody = usuarioSenhaFortePersist;

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling validarSenhaForteUsingPOST";
      }

      // verify the required parameter 'usuarioSenhaFortePersist' is set
      if (usuarioSenhaFortePersist == undefined || usuarioSenhaFortePersist == null) {
        throw "Missing the required parameter 'usuarioSenhaFortePersist' when calling validarSenhaForteUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/usuarios/validar-senha-forte', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarSenhaLoginUsingPOST operation.
     * @callback module:api/GlobaltagusuarioApi~validarSenhaLoginUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_validar_senha_login}}}
     * {{{usuario_resource_validar_senha_login_notes}}}
     * @param {String} login {{{usuario_resource_validar_senha_login_param_login}}}
     * @param {String} senha {{{usuario_resource_validar_senha_login_param_senha}}}
     * @param {module:api/GlobaltagusuarioApi~validarSenhaLoginUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.validarSenhaLoginUsingPOST = function(login, senha, callback) {
      var postBody = null;

      // verify the required parameter 'login' is set
      if (login == undefined || login == null) {
        throw "Missing the required parameter 'login' when calling validarSenhaLoginUsingPOST";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling validarSenhaLoginUsingPOST";
      }


      var pathParams = {
        'login': login
      };
      var queryParams = {
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/usuarios/{login}/validar-senha', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarSenhaUsingGET1 operation.
     * @callback module:api/GlobaltagusuarioApi~validarSenhaUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_resource_validar_senha}}}
     * {{{usuario_resource_validar_senha_notes}}}
     * @param {String} senha {{{usuario_resource_validar_senha_param_senha}}}
     * @param {Integer} id {{{usuario_resource_validar_senha_param_id}}}
     * @param {module:api/GlobaltagusuarioApi~validarSenhaUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/usuarios/{id}/validar-senha', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vincularContasUsingPOST operation.
     * @callback module:api/GlobaltagusuarioApi~vincularContasUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{usuario_recurso_vincular_usuarios}}}
     * {{{usuario_recurso_vincular_usuarios_notas}}}
     * @param {Integer} id {{{usuario_recurso_vincular_usuarios_param_id}}}
     * @param {module:api/GlobaltagusuarioApi~vincularContasUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.vincularContasUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling vincularContasUsingPOST";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/usuarios/{id}/vincular-usuarios', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
