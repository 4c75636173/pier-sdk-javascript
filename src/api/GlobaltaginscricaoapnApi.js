(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InscricaoAPNResponse', '../model/PageInscricaoAPNResponse', '../model/InscricaoApnPersistencia'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InscricaoAPNResponse'), require('../model/PageInscricaoAPNResponse'), require('../model/InscricaoApnPersistencia'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltaginscricaoapnApi = factory(root.Pier.ApiClient, root.Pier.InscricaoAPNResponse, root.Pier.PageInscricaoAPNResponse, root.Pier.InscricaoApnPersistencia);
  }
}(this, function(ApiClient, InscricaoAPNResponse, PageInscricaoAPNResponse, InscricaoApnPersistencia) {
  'use strict';

  /**
   * globaltaginscricaoapn service.
   * @module api/GlobaltaginscricaoapnApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltaginscricaoapnApi. 
   * @alias module:api/GlobaltaginscricaoapnApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the desativarUsingPUT operation.
     * @callback module:api/GlobaltaginscricaoapnApi~desativarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InscricaoAPNResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{inscricao_apn_recurso_desativar}}}
     * {{{inscricao_apn_recurso_desativar_notas}}}
     * @param {Integer} id id
     * @param {module:api/GlobaltaginscricaoapnApi~desativarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/InscricaoAPNResponse}
     */
    this.desativarUsingPUT = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarUsingPUT";
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
      var returnType = InscricaoAPNResponse;

      return this.apiClient.callApi(
        '/api/inscricoes-apn/{id}/desativar', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET30 operation.
     * @callback module:api/GlobaltaginscricaoapnApi~listarUsingGET30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageInscricaoAPNResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{inscricao_apn_recurso_listar}}}
     * {{{inscricao_apn_recurso_listar_notas}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Array.<Integer>} opts.idCartoes {{{inscricao_apn_requisicao_id_cartoes_descricao}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.deviceToken {{{inscricao_apn_requisicao_device_token_descricao}}}
     * @param {String} opts.dataCriacao {{{inscricao_apn_requisicao_data_criacao_descricao}}}
     * @param {String} opts.dataDesativacao {{{inscricao_apn_requisicao_data_desativacao_descricao}}}
     * @param {Boolean} opts.ativo {{{inscricao_apn_requisicao_ativo_descricao}}}
     * @param {Integer} opts.idAplicacaoMobile {{{inscricao_apn_requisicao_id_aplicacao_mobile_descricao}}}
     * @param {module:api/GlobaltaginscricaoapnApi~listarUsingGET30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageInscricaoAPNResponse}
     */
    this.listarUsingGET30 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'idCartoes': this.apiClient.buildCollectionParam(opts['idCartoes'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'deviceToken': opts['deviceToken'],
        'dataCriacao': opts['dataCriacao'],
        'dataDesativacao': opts['dataDesativacao'],
        'ativo': opts['ativo'],
        'idAplicacaoMobile': opts['idAplicacaoMobile']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageInscricaoAPNResponse;

      return this.apiClient.callApi(
        '/api/inscricoes-apn', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST14 operation.
     * @callback module:api/GlobaltaginscricaoapnApi~salvarUsingPOST14Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InscricaoAPNResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{inscricao_apn_recurso_salvar}}}
     * {{{inscricao_apn_recurso_salvar_notas}}}
     * @param {module:model/InscricaoApnPersistencia} inscricaoPersist inscricaoPersist
     * @param {module:api/GlobaltaginscricaoapnApi~salvarUsingPOST14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InscricaoAPNResponse>}
     */
    this.salvarUsingPOST14 = function(inscricaoPersist, callback) {
      var postBody = inscricaoPersist;

      // verify the required parameter 'inscricaoPersist' is set
      if (inscricaoPersist == undefined || inscricaoPersist == null) {
        throw "Missing the required parameter 'inscricaoPersist' when calling salvarUsingPOST14";
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
      var returnType = [InscricaoAPNResponse];

      return this.apiClient.callApi(
        '/api/inscricoes-apn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
