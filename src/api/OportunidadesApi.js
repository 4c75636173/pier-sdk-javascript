(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/StatusOportunidadeResponse', '../model/StatusOportunidade', '../model/OportunidadeResponse', '../model/OportunidadeUpdate', '../model/TipoOportunidade', '../model/TipoOportunidadeResponse', '../model/PageStatusOprtunidadesAUD', '../model/PageOprtunidadeAUD', '../model/PageTipoOprtunidadesAUD', '../model/PageStatusOprtunidades', '../model/PageTipoOprtunidades', '../model/PageOprtunidadesResponse', '../model/OportunidadePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatusOportunidadeResponse'), require('../model/StatusOportunidade'), require('../model/OportunidadeResponse'), require('../model/OportunidadeUpdate'), require('../model/TipoOportunidade'), require('../model/TipoOportunidadeResponse'), require('../model/PageStatusOprtunidadesAUD'), require('../model/PageOprtunidadeAUD'), require('../model/PageTipoOprtunidadesAUD'), require('../model/PageStatusOprtunidades'), require('../model/PageTipoOprtunidades'), require('../model/PageOprtunidadesResponse'), require('../model/OportunidadePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OportunidadesApi = factory(root.Pier.ApiClient, root.Pier.StatusOportunidadeResponse, root.Pier.StatusOportunidade, root.Pier.OportunidadeResponse, root.Pier.OportunidadeUpdate, root.Pier.TipoOportunidade, root.Pier.TipoOportunidadeResponse, root.Pier.PageStatusOprtunidadesAUD, root.Pier.PageOprtunidadeAUD, root.Pier.PageTipoOprtunidadesAUD, root.Pier.PageStatusOprtunidades, root.Pier.PageTipoOprtunidades, root.Pier.PageOprtunidadesResponse, root.Pier.OportunidadePersist);
  }
}(this, function(ApiClient, StatusOportunidadeResponse, StatusOportunidade, OportunidadeResponse, OportunidadeUpdate, TipoOportunidade, TipoOportunidadeResponse, PageStatusOprtunidadesAUD, PageOprtunidadeAUD, PageTipoOprtunidadesAUD, PageStatusOprtunidades, PageTipoOprtunidades, PageOprtunidadesResponse, OportunidadePersist) {
  'use strict';

  /**
   * Oportunidades service.
   * @module api/OportunidadesApi
   * @version 2.13.0
   */

  /**
   * Constructs a new OportunidadesApi. 
   * @alias module:api/OportunidadesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarStatusUsingPUT operation.
     * @callback module:api/OportunidadesApi~alterarStatusUsingPUTCallback
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
     * @param {module:api/OportunidadesApi~alterarStatusUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['access_token'];
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
     * Callback function to receive the result of the alterarUsingPUT3 operation.
     * @callback module:api/OportunidadesApi~alterarUsingPUT3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera as oportunidades
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o das oportunidades.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id).
     * @param {module:model/OportunidadeUpdate} update update
     * @param {module:api/OportunidadesApi~alterarUsingPUT3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.alterarUsingPUT3 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT3";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT3";
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
      var returnType = OportunidadeResponse;

      return this.apiClient.callApi(
        '/api/oportunidades/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT7 operation.
     * @callback module:api/OportunidadesApi~alterarUsingPUT7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera os tipos oportunidades
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos tipos oportunidades.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {module:model/TipoOportunidade} persist persist
     * @param {module:api/OportunidadesApi~alterarUsingPUT7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.alterarUsingPUT7 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT7";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling alterarUsingPUT7";
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
      var returnType = TipoOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarStatusUsingGET operation.
     * @callback module:api/OportunidadesApi~consultarStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado status do tipo oportunidade
     * Este recurso permite consultar dados de um determinado status do tipo oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (idStatus).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do status (idStatus).
     * @param {module:api/OportunidadesApi~consultarStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['access_token'];
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
     * Callback function to receive the result of the consultarUsingGET17 operation.
     * @callback module:api/OportunidadesApi~consultarUsingGET17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado tipo oportunidade
     * Este recurso permite consultar dados de um determinado tipo oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {module:api/OportunidadesApi~consultarUsingGET17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.consultarUsingGET17 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET17";
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
      var returnType = TipoOportunidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET7 operation.
     * @callback module:api/OportunidadesApi~consultarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada oportunidade
     * Este recurso permite consultar dados de uma determinada oportunidade a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da oportunidade (id).
     * @param {module:api/OportunidadesApi~consultarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.consultarUsingGET7 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET7";
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
      var returnType = OportunidadeResponse;

      return this.apiClient.callApi(
        '/api/oportunidades/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarAuditoriasStatusUsingGET operation.
     * @callback module:api/OportunidadesApi~listarAuditoriasStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusOprtunidadesAUD} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as auditorias dos status oportunidades
     * Este recurso permite listar os status oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.revType C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {Date} opts.revDate Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do status oportunidade
     * @param {Integer} opts.idTipoOportunidade C\u00C3\u00B3digo identificador do tipo oportunidade
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo
     * @param {module:api/OportunidadesApi~listarAuditoriasStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusOprtunidadesAUD}
     */
    this.listarAuditoriasStatusUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'revType': opts['revType'],
        'revDate': opts['revDate'],
        'id': opts['id'],
        'idTipoOportunidade': opts['idTipoOportunidade'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusOprtunidadesAUD;

      return this.apiClient.callApi(
        '/api/auditorias-status-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarAuditoriasUsingGET operation.
     * @callback module:api/OportunidadesApi~listarAuditoriasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOprtunidadeAUD} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as auditorias das oportunidades
     * Este recurso permite listar as auditorias das oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idStatusOportunidade C\u00C3\u00B3digo identificador do status oportunidade
     * @param {Date} opts.dataCadastro Data do cadastro da oportunidade
     * @param {Date} opts.dataAtualizacao Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade
     * @param {String} opts.numeroReceitaFederal N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade
     * @param {Date} opts.dataInicioVigencia In\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
     * @param {Date} opts.datatFimVigencia Fim da vig\u00C3\u00AAncia da oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa
     * @param {Date} opts.revDate Data da auditoria
     * @param {Date} opts.revType Tipo da auditoria
     * @param {module:api/OportunidadesApi~listarAuditoriasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOprtunidadeAUD}
     */
    this.listarAuditoriasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
        'revType': opts['revType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOprtunidadeAUD;

      return this.apiClient.callApi(
        '/api/auditorias-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarAuditoriasUsingGET1 operation.
     * @callback module:api/OportunidadesApi~listarAuditoriasUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoOprtunidadesAUD} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as auditorias dos tipos oportunidades
     * Este recurso permite listar os tipos oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.revType C\u00C3\u00B3digo que representa o tipo de a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {Date} opts.revDate Data da a\u00C3\u00A7\u00C3\u00A3o realizada no recurso de tipos oportunidades
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade no qual foi realizado a a\u00C3\u00A7\u00C3\u00A3o
     * @param {Boolean} opts.flagAtivo Atributo que representa se o tipo oportunidade est\u00C3\u00A1 ativo
     * @param {module:api/OportunidadesApi~listarAuditoriasUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoOprtunidadesAUD}
     */
    this.listarAuditoriasUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'revType': opts['revType'],
        'revDate': opts['revDate'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoOprtunidadesAUD;

      return this.apiClient.callApi(
        '/api/auditorias-tipos-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusUsingGET operation.
     * @callback module:api/OportunidadesApi~listarStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusOprtunidades} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os status do tipo oportunidades
     * Este recurso permite listar os status do tipo oportunidades.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do status oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o status oportunidade est\u00C3\u00A1 ativo
     * @param {module:api/OportunidadesApi~listarStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusOprtunidades}
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
        'page': opts['page'],
        'limit': opts['limit'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusOprtunidades;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET16 operation.
     * @callback module:api/OportunidadesApi~listarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoOprtunidades} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos oportunidades
     * Este recurso permite listar os tipos oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o tipo oportunidade est\u00C3\u00A1 ativo
     * @param {module:api/OportunidadesApi~listarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoOprtunidades}
     */
    this.listarUsingGET16 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'descricao': opts['descricao'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoOprtunidades;

      return this.apiClient.callApi(
        '/api/tipos-oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET7 operation.
     * @callback module:api/OportunidadesApi~listarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOprtunidadesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as oportunidades
     * Este recurso permite listar as oportunidades.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idStatusOportunidade C\u00C3\u00B3digo identificador do status oportunidade
     * @param {Date} opts.dataCadastro Data do cadastro da oportunidade
     * @param {Date} opts.dataAtualizacao Data da atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade
     * @param {String} opts.numeroReceitaFederal N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade
     * @param {Date} opts.dataInicioVigencia Data de in\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
     * @param {Date} opts.dataFimVigencia Data do fim da vig\u00C3\u00AAncia da oportunidade
     * @param {Boolean} opts.flagAtivo Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa
     * @param {module:api/OportunidadesApi~listarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOprtunidadesResponse}
     */
    this.listarUsingGET7 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOprtunidadesResponse;

      return this.apiClient.callApi(
        '/api/oportunidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarStatusUsingPOST operation.
     * @callback module:api/OportunidadesApi~salvarStatusUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra status para o tipo oportunidade
     * Esse recurso permite cadastrar status para o tipo oportunidade.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo oportunidade (id).
     * @param {module:model/StatusOportunidade} persist persist
     * @param {module:api/OportunidadesApi~salvarStatusUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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

      var authNames = ['access_token'];
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
     * Callback function to receive the result of the salvarUsingPOST3 operation.
     * @callback module:api/OportunidadesApi~salvarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra as oportunidade
     * Esse recurso permite cadastrar oportunidades.
     * @param {module:model/OportunidadePersist} persist persist
     * @param {module:api/OportunidadesApi~salvarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.salvarUsingPOST3 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST3";
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
      var returnType = OportunidadeResponse;

      return this.apiClient.callApi(
        '/api/oportunidades', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST6 operation.
     * @callback module:api/OportunidadesApi~salvarUsingPOST6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra tipos oportunidades
     * Esse recurso permite cadastrar tipos oportunidades.
     * @param {module:model/TipoOportunidade} persist persist
     * @param {module:api/OportunidadesApi~salvarUsingPOST6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
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