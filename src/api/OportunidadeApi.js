(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/StatusOportunidadeResponse', '../model/StatusOportunidade', '../model/OportunidadeResponse', '../model/OportunidadeUpdate', '../model/TipoOportunidade', '../model/TipoOportunidadeResponse', '../model/PageStatusOportunidadeAUDResponse', '../model/PageOportunidadeAUDResponse', '../model/PageTipoOportunidadeAUDResponse', '../model/PageStatusOportunidadeResponse', '../model/PageOportunidadeResponse', '../model/PageTipoOportunidadeResponse', '../model/OportunidadePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatusOportunidadeResponse'), require('../model/StatusOportunidade'), require('../model/OportunidadeResponse'), require('../model/OportunidadeUpdate'), require('../model/TipoOportunidade'), require('../model/TipoOportunidadeResponse'), require('../model/PageStatusOportunidadeAUDResponse'), require('../model/PageOportunidadeAUDResponse'), require('../model/PageTipoOportunidadeAUDResponse'), require('../model/PageStatusOportunidadeResponse'), require('../model/PageOportunidadeResponse'), require('../model/PageTipoOportunidadeResponse'), require('../model/OportunidadePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OportunidadeApi = factory(root.Pier.ApiClient, root.Pier.StatusOportunidadeResponse, root.Pier.StatusOportunidade, root.Pier.OportunidadeResponse, root.Pier.OportunidadeUpdate, root.Pier.TipoOportunidade, root.Pier.TipoOportunidadeResponse, root.Pier.PageStatusOportunidadeAUDResponse, root.Pier.PageOportunidadeAUDResponse, root.Pier.PageTipoOportunidadeAUDResponse, root.Pier.PageStatusOportunidadeResponse, root.Pier.PageOportunidadeResponse, root.Pier.PageTipoOportunidadeResponse, root.Pier.OportunidadePersist);
  }
}(this, function(ApiClient, StatusOportunidadeResponse, StatusOportunidade, OportunidadeResponse, OportunidadeUpdate, TipoOportunidade, TipoOportunidadeResponse, PageStatusOportunidadeAUDResponse, PageOportunidadeAUDResponse, PageTipoOportunidadeAUDResponse, PageStatusOportunidadeResponse, PageOportunidadeResponse, PageTipoOportunidadeResponse, OportunidadePersist) {
  'use strict';

  /**
   * Oportunidade service.
   * @module api/OportunidadeApi
   * @version 2.54.2
   */

  /**
   * Constructs a new OportunidadeApi. 
   * @alias module:api/OportunidadeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarStatusUsingPUT operation.
     * @callback module:api/OportunidadeApi~alterarStatusUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera o status do tipo oportunidade
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o do status do tipo oportunidade.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status do tipo oportunidade (id).
     * @param {module:model/StatusOportunidade} persist persist
     * @param {module:api/OportunidadeApi~alterarStatusUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusOportunidadeResponse}
     */
    this.alterarStatusUsingPUT = function(id, idStatus, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarStatusUsingPUT";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling alterarStatusUsingPUT";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling alterarStatusUsingPUT";
      }


      var pathParams = {
        'id': id,
        'idStatus': idStatus
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
      var returnType = StatusOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}/status/{idStatus}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT12 operation.
     * @callback module:api/OportunidadeApi~alterarUsingPUT12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera as oportunidades
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o das oportunidades.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id).
     * @param {module:model/OportunidadeUpdate} update update
     * @param {module:api/OportunidadeApi~alterarUsingPUT12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.alterarUsingPUT12 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT12";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT12";
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
      var returnType = OportunidadeResponse;

      return this.apiClient.callApi(
        '/api/oportunidades/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT18 operation.
     * @callback module:api/OportunidadeApi~alterarUsingPUT18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera os tipos oportunidades
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos tipos oportunidades.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {module:model/TipoOportunidade} persist persist
     * @param {module:api/OportunidadeApi~alterarUsingPUT18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.alterarUsingPUT18 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT18";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling alterarUsingPUT18";
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
      var returnType = TipoOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarStatusUsingGET operation.
     * @callback module:api/OportunidadeApi~consultarStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado status do tipo oportunidade
     * Este recurso permite consultar dados de um determinado status do tipo oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (idStatus).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status (idStatus).
     * @param {module:api/OportunidadeApi~consultarStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusOportunidadeResponse}
     */
    this.consultarStatusUsingGET = function(id, idStatus, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarStatusUsingGET";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling consultarStatusUsingGET";
      }


      var pathParams = {
        'id': id,
        'idStatus': idStatus
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
      var returnType = StatusOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}/status/{idStatus}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET22 operation.
     * @callback module:api/OportunidadeApi~consultarUsingGET22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada oportunidade
     * Este recurso permite consultar dados de uma determinada oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id).
     * @param {module:api/OportunidadeApi~consultarUsingGET22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.consultarUsingGET22 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET22";
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
      var returnType = OportunidadeResponse;

      return this.apiClient.callApi(
        '/api/oportunidades/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET36 operation.
     * @callback module:api/OportunidadeApi~consultarUsingGET36Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado tipo oportunidade
     * Este recurso permite consultar dados de um determinado tipo oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {module:api/OportunidadeApi~consultarUsingGET36Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.consultarUsingGET36 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET36";
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
      var returnType = TipoOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarAuditoriasStatusUsingGET operation.
     * @callback module:api/OportunidadeApi~listarAuditoriasStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusOportunidadeAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as auditorias dos status oportunidades
     * Este recurso permite listar os status oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.revType C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {String} opts.revDate Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do status oportunidade
     * @param {Integer} opts.idTipoOportunidade C\u00C3\u00B3digo identificador do tipo oportunidade
     * @param {String} opts.nome Nome do status oportunidade
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo
     * @param {String} opts.revUser Usu\u00C3\u00A1rio da auditoria
     * @param {module:api/OportunidadeApi~listarAuditoriasStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusOportunidadeAUDResponse}
     */
    this.listarAuditoriasStatusUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'revType': opts['revType'],
        'revDate': opts['revDate'],
        'id': opts['id'],
        'idTipoOportunidade': opts['idTipoOportunidade'],
        'nome': opts['nome'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo'],
        'revUser': opts['revUser']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusOportunidadeAUDResponse;

      return this.apiClient.callApi(
        '/api/auditorias-status-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarAuditoriasUsingGET operation.
     * @callback module:api/OportunidadeApi~listarAuditoriasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOportunidadeAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as auditorias das oportunidades
     * Este recurso permite listar as auditorias das oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idStatusOportunidade C\u00C3\u00B3digo identificador do status oportunidade
     * @param {String} opts.dataCadastro Data do cadastro da oportunidade
     * @param {String} opts.dataAtualizacao Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade
     * @param {String} opts.numeroReceitaFederal N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade
     * @param {String} opts.dataInicioVigencia In\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
     * @param {String} opts.datatFimVigencia Fim da vig\u00C3\u00AAncia da oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa
     * @param {String} opts.revDate Data da auditoria
     * @param {String} opts.revType Tipo da auditoria
     * @param {String} opts.revUser Usu\u00C3\u00A1rio da auditoria
     * @param {module:api/OportunidadeApi~listarAuditoriasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOportunidadeAUDResponse}
     */
    this.listarAuditoriasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idStatusOportunidade': opts['idStatusOportunidade'],
        'dataCadastro': opts['dataCadastro'],
        'dataAtualizacao': opts['dataAtualizacao'],
        'numeroReceitaFederal': opts['numeroReceitaFederal'],
        'dataInicioVigencia': opts['dataInicioVigencia'],
        'datatFimVigencia': opts['datatFimVigencia'],
        'flagAtivo': opts['flagAtivo'],
        'revDate': opts['revDate'],
        'revType': opts['revType'],
        'revUser': opts['revUser']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOportunidadeAUDResponse;

      return this.apiClient.callApi(
        '/api/auditorias-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarAuditoriasUsingGET1 operation.
     * @callback module:api/OportunidadeApi~listarAuditoriasUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoOportunidadeAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as auditorias dos tipos oportunidades
     * Este recurso permite listar os tipos oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.revType C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {String} opts.revDate Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o
     * @param {Boolean} opts.flagAtivo Atributo que representa se o tipo oportunidade est\u00C3\u00A1 ativo
     * @param {String} opts.revUser Usu\u00C3\u00A1rio da auditoria
     * @param {module:api/OportunidadeApi~listarAuditoriasUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoOportunidadeAUDResponse}
     */
    this.listarAuditoriasUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'revType': opts['revType'],
        'revDate': opts['revDate'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo'],
        'revUser': opts['revUser']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoOportunidadeAUDResponse;

      return this.apiClient.callApi(
        '/api/auditorias-tipos-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusUsingGET operation.
     * @callback module:api/OportunidadeApi~listarStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os status do tipo oportunidades
     * Este recurso permite listar os status do tipo oportunidades.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.nome Nome do status oportunidade
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo
     * @param {module:api/OportunidadeApi~listarStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusOportunidadeResponse}
     */
    this.listarStatusUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarStatusUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET28 operation.
     * @callback module:api/OportunidadeApi~listarUsingGET28Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as oportunidades
     * Este recurso permite listar as oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idStatusOportunidade C\u00C3\u00B3digo identificador do status oportunidade
     * @param {String} opts.dataCadastro Data do cadastro da oportunidade
     * @param {String} opts.dataAtualizacao Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade
     * @param {String} opts.numeroReceitaFederal N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade
     * @param {String} opts.dataInicioVigencia Data de in\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
     * @param {String} opts.dataFimVigencia Data do fim da vig\u00C3\u00AAncia da oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa
     * @param {module:api/OportunidadeApi~listarUsingGET28Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOportunidadeResponse}
     */
    this.listarUsingGET28 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idStatusOportunidade': opts['idStatusOportunidade'],
        'dataCadastro': opts['dataCadastro'],
        'dataAtualizacao': opts['dataAtualizacao'],
        'numeroReceitaFederal': opts['numeroReceitaFederal'],
        'dataInicioVigencia': opts['dataInicioVigencia'],
        'dataFimVigencia': opts['dataFimVigencia'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET43 operation.
     * @callback module:api/OportunidadeApi~listarUsingGET43Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos oportunidades
     * Este recurso permite listar os tipos oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o tipo oportunidade est\u00C3\u00A1 ativo
     * @param {module:api/OportunidadeApi~listarUsingGET43Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoOportunidadeResponse}
     */
    this.listarUsingGET43 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarStatusUsingPOST operation.
     * @callback module:api/OportunidadeApi~salvarStatusUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra status para o tipo oportunidade
     * Esse recurso permite cadastrar status para o tipo oportunidade.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {module:model/StatusOportunidade} persist persist
     * @param {module:api/OportunidadeApi~salvarStatusUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusOportunidadeResponse}
     */
    this.salvarStatusUsingPOST = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling salvarStatusUsingPOST";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarStatusUsingPOST";
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
      var returnType = StatusOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST18 operation.
     * @callback module:api/OportunidadeApi~salvarUsingPOST18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra as oportunidades
     * Esse recurso permite cadastrar oportunidades.
     * @param {module:model/OportunidadePersist} persist persist
     * @param {module:api/OportunidadeApi~salvarUsingPOST18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.salvarUsingPOST18 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST18";
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
      var returnType = OportunidadeResponse;

      return this.apiClient.callApi(
        '/api/oportunidades', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST25 operation.
     * @callback module:api/OportunidadeApi~salvarUsingPOST25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra tipos oportunidades
     * Esse recurso permite cadastrar tipos oportunidades.
     * @param {module:model/TipoOportunidade} persist persist
     * @param {module:api/OportunidadeApi~salvarUsingPOST25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.salvarUsingPOST25 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST25";
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
      var returnType = TipoOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
