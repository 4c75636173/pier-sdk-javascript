(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/StatusOportunidadeResponse', '../model/StatusOportunidadePersistValue', '../model/OportunidadeResponse', '../model/OportunidadeUpdateValue', '../model/TipoOportunidadePersistValue', '../model/TipoOportunidadeResponse', '../model/PageStatusOportunidadeAUDResponse', '../model/PageOportunidadeAUDResponse', '../model/PageTipoOportunidadeAUDResponse', '../model/PageStatusOportunidadeResponse', '../model/PageOportunidadeResponse', '../model/PageTipoOportunidadeResponse', '../model/OportunidadePersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatusOportunidadeResponse'), require('../model/StatusOportunidadePersistValue'), require('../model/OportunidadeResponse'), require('../model/OportunidadeUpdateValue'), require('../model/TipoOportunidadePersistValue'), require('../model/TipoOportunidadeResponse'), require('../model/PageStatusOportunidadeAUDResponse'), require('../model/PageOportunidadeAUDResponse'), require('../model/PageTipoOportunidadeAUDResponse'), require('../model/PageStatusOportunidadeResponse'), require('../model/PageOportunidadeResponse'), require('../model/PageTipoOportunidadeResponse'), require('../model/OportunidadePersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagoportunidadeApi = factory(root.Pier.ApiClient, root.Pier.StatusOportunidadeResponse, root.Pier.StatusOportunidadePersistValue, root.Pier.OportunidadeResponse, root.Pier.OportunidadeUpdateValue, root.Pier.TipoOportunidadePersistValue, root.Pier.TipoOportunidadeResponse, root.Pier.PageStatusOportunidadeAUDResponse, root.Pier.PageOportunidadeAUDResponse, root.Pier.PageTipoOportunidadeAUDResponse, root.Pier.PageStatusOportunidadeResponse, root.Pier.PageOportunidadeResponse, root.Pier.PageTipoOportunidadeResponse, root.Pier.OportunidadePersistValue);
  }
}(this, function(ApiClient, StatusOportunidadeResponse, StatusOportunidadePersistValue, OportunidadeResponse, OportunidadeUpdateValue, TipoOportunidadePersistValue, TipoOportunidadeResponse, PageStatusOportunidadeAUDResponse, PageOportunidadeAUDResponse, PageTipoOportunidadeAUDResponse, PageStatusOportunidadeResponse, PageOportunidadeResponse, PageTipoOportunidadeResponse, OportunidadePersistValue) {
  'use strict';

  /**
   * globaltagoportunidade service.
   * @module api/GlobaltagoportunidadeApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagoportunidadeApi. 
   * @alias module:api/GlobaltagoportunidadeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarStatusUsingPUT operation.
     * @callback module:api/GlobaltagoportunidadeApi~alterarStatusUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_alterar_status}}}
     * {{{tipo_oportunidade_resource_alterar_status_notes}}}
     * @param {Integer} id {{{tipo_oportunidade_resource_alterar_status_param_id}}}
     * @param {Integer} idStatus {{{tipo_oportunidade_resource_alterar_status_param_id_status}}}
     * @param {module:model/StatusOportunidadePersistValue} persist persist
     * @param {module:api/GlobaltagoportunidadeApi~alterarStatusUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagoportunidadeApi~alterarUsingPUT12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{oportunidade_resource_alterar}}}
     * {{{oportunidade_resource_alterar_notes}}}
     * @param {Integer} id {{{oportunidade_resource_alterar_param_id}}}
     * @param {module:model/OportunidadeUpdateValue} update update
     * @param {module:api/GlobaltagoportunidadeApi~alterarUsingPUT12Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the alterarUsingPUT20 operation.
     * @callback module:api/GlobaltagoportunidadeApi~alterarUsingPUT20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_alterar}}}
     * {{{tipo_oportunidade_resource_alterar_notes}}}
     * @param {Integer} id {{{tipo_oportunidade_resource_alterar_param_id}}}
     * @param {module:model/TipoOportunidadePersistValue} persist persist
     * @param {module:api/GlobaltagoportunidadeApi~alterarUsingPUT20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.alterarUsingPUT20 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT20";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling alterarUsingPUT20";
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
     * @callback module:api/GlobaltagoportunidadeApi~consultarStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_consultar_status}}}
     * {{{tipo_oportunidade_resource_consultar_status_notes}}}
     * @param {Integer} id {{{tipo_oportunidade_resource_consultar_status_param_id}}}
     * @param {Integer} idStatus {{{tipo_oportunidade_resource_consultar_status_param_id_status}}}
     * @param {module:api/GlobaltagoportunidadeApi~consultarStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the consultarUsingGET25 operation.
     * @callback module:api/GlobaltagoportunidadeApi~consultarUsingGET25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{oportunidade_resource_consultar}}}
     * {{{oportunidade_resource_consultar_notes}}}
     * @param {Integer} id {{{oportunidade_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagoportunidadeApi~consultarUsingGET25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.consultarUsingGET25 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET25";
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
     * Callback function to receive the result of the consultarUsingGET44 operation.
     * @callback module:api/GlobaltagoportunidadeApi~consultarUsingGET44Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_consultar}}}
     * {{{tipo_oportunidade_resource_consultar_notes}}}
     * @param {Integer} id {{{tipo_oportunidade_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagoportunidadeApi~consultarUsingGET44Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.consultarUsingGET44 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET44";
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
     * @callback module:api/GlobaltagoportunidadeApi~listarAuditoriasStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusOportunidadeAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_listar_auditorias_status}}}
     * {{{tipo_oportunidade_resource_listar_auditorias_status_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.revType {{{status_oportunidade_a_u_d_request_rev_type_value}}}
     * @param {String} opts.revDate {{{status_oportunidade_a_u_d_request_rev_date_value}}}
     * @param {Integer} opts.id {{{status_oportunidade_a_u_d_request_id_value}}}
     * @param {Integer} opts.idTipoOportunidade {{{status_oportunidade_a_u_d_request_id_tipo_oportunidade_value}}}
     * @param {String} opts.nome {{{status_oportunidade_a_u_d_request_nome_value}}}
     * @param {String} opts.descricao {{{status_oportunidade_a_u_d_request_descricao_value}}}
     * @param {Boolean} opts.flagAtivo {{{status_oportunidade_a_u_d_request_flag_ativo_value}}}
     * @param {String} opts.revUser {{{status_oportunidade_a_u_d_request_rev_user_value}}}
     * @param {module:api/GlobaltagoportunidadeApi~listarAuditoriasStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagoportunidadeApi~listarAuditoriasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOportunidadeAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{oportunidade_resource_listar_auditorias}}}
     * {{{oportunidade_resource_listar_auditorias_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idStatusOportunidade {{{oportunidade_a_u_d_request_id_status_oportunidade_value}}}
     * @param {String} opts.dataCadastro {{{oportunidade_a_u_d_request_data_cadastro_value}}}
     * @param {String} opts.dataAtualizacao {{{oportunidade_a_u_d_request_data_atualizacao_value}}}
     * @param {String} opts.numeroReceitaFederal {{{oportunidade_a_u_d_request_numero_receita_federal_value}}}
     * @param {String} opts.dataInicioVigencia {{{oportunidade_a_u_d_request_data_inicio_vigencia_value}}}
     * @param {String} opts.datatFimVigencia {{{oportunidade_a_u_d_request_datat_fim_vigencia_value}}}
     * @param {Boolean} opts.flagAtivo {{{oportunidade_a_u_d_request_flag_ativo_value}}}
     * @param {String} opts.revDate {{{oportunidade_a_u_d_request_rev_date_value}}}
     * @param {String} opts.revType {{{oportunidade_a_u_d_request_rev_type_value}}}
     * @param {String} opts.revUser {{{oportunidade_a_u_d_request_rev_user_value}}}
     * @param {module:api/GlobaltagoportunidadeApi~listarAuditoriasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagoportunidadeApi~listarAuditoriasUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoOportunidadeAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_listar_auditorias}}}
     * {{{tipo_oportunidade_resource_listar_auditorias_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.revType {{{tipo_oportunidade_a_u_d_request_rev_type_value}}}
     * @param {String} opts.revDate {{{tipo_oportunidade_a_u_d_request_rev_date_value}}}
     * @param {Integer} opts.id {{{tipo_oportunidade_a_u_d_request_id_value}}}
     * @param {String} opts.descricao {{{tipo_oportunidade_a_u_d_request_descricao_value}}}
     * @param {Boolean} opts.flagAtivo {{{tipo_oportunidade_a_u_d_request_flag_ativo_value}}}
     * @param {String} opts.revUser {{{tipo_oportunidade_a_u_d_request_rev_user_value}}}
     * @param {module:api/GlobaltagoportunidadeApi~listarAuditoriasUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagoportunidadeApi~listarStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_listar_status}}}
     * {{{tipo_oportunidade_resource_listar_status_notes}}}
     * @param {Integer} id {{{tipo_oportunidade_resource_listar_status_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{status_oportunidade_request_nome_value}}}
     * @param {String} opts.descricao {{{status_oportunidade_request_descricao_value}}}
     * @param {Boolean} opts.flagAtivo {{{status_oportunidade_request_flag_ativo_value}}}
     * @param {module:api/GlobaltagoportunidadeApi~listarStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET35 operation.
     * @callback module:api/GlobaltagoportunidadeApi~listarUsingGET35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{oportunidade_resource_listar}}}
     * {{{oportunidade_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idStatusOportunidade {{{oportunidade_request_id_status_oportunidade_value}}}
     * @param {String} opts.dataCadastro {{{oportunidade_request_data_cadastro_value}}}
     * @param {String} opts.dataAtualizacao {{{oportunidade_request_data_atualizacao_value}}}
     * @param {String} opts.numeroReceitaFederal {{{oportunidade_request_numero_receita_federal_value}}}
     * @param {String} opts.dataInicioVigencia {{{oportunidade_request_data_inicio_vigencia_value}}}
     * @param {String} opts.dataFimVigencia {{{oportunidade_request_data_fim_vigencia_value}}}
     * @param {Boolean} opts.flagAtivo {{{oportunidade_request_flag_ativo_value}}}
     * @param {module:api/GlobaltagoportunidadeApi~listarUsingGET35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOportunidadeResponse}
     */
    this.listarUsingGET35 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET55 operation.
     * @callback module:api/GlobaltagoportunidadeApi~listarUsingGET55Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_listar}}}
     * {{{tipo_oportunidade_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.descricao {{{tipo_oportunidade_request_descricao_value}}}
     * @param {Boolean} opts.flagAtivo {{{tipo_oportunidade_request_flag_ativo_value}}}
     * @param {module:api/GlobaltagoportunidadeApi~listarUsingGET55Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoOportunidadeResponse}
     */
    this.listarUsingGET55 = function(opts, callback) {
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
     * @callback module:api/GlobaltagoportunidadeApi~salvarStatusUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_salvar_status}}}
     * {{{tipo_oportunidade_resource_salvar_status_notes}}}
     * @param {Integer} id {{{tipo_oportunidade_resource_salvar_status_param_id}}}
     * @param {module:model/StatusOportunidadePersistValue} persist persist
     * @param {module:api/GlobaltagoportunidadeApi~salvarStatusUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the salvarUsingPOST21 operation.
     * @callback module:api/GlobaltagoportunidadeApi~salvarUsingPOST21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{oportunidade_resource_salvar}}}
     * {{{oportunidade_resource_salvar_notes}}}
     * @param {module:model/OportunidadePersistValue} persist persist
     * @param {module:api/GlobaltagoportunidadeApi~salvarUsingPOST21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OportunidadeResponse}
     */
    this.salvarUsingPOST21 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST21";
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
     * Callback function to receive the result of the salvarUsingPOST30 operation.
     * @callback module:api/GlobaltagoportunidadeApi~salvarUsingPOST30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOportunidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_oportunidade_resource_salvar}}}
     * {{{tipo_oportunidade_resource_salvar_notes}}}
     * @param {module:model/TipoOportunidadePersistValue} persist persist
     * @param {module:api/GlobaltagoportunidadeApi~salvarUsingPOST30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOportunidadeResponse}
     */
    this.salvarUsingPOST30 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST30";
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
