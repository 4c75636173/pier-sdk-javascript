(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TipoFaturamentoPersist', '../model/TipoFaturamentoResponse', '../model/TipoFaturamentoPorContaPersist', '../model/TipoFaturamentoPorContaResponse', '../model/PageTipoFaturamentoPorContaResponse', '../model/PageTipoFaturamentoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TipoFaturamentoPersist'), require('../model/TipoFaturamentoResponse'), require('../model/TipoFaturamentoPorContaPersist'), require('../model/TipoFaturamentoPorContaResponse'), require('../model/PageTipoFaturamentoPorContaResponse'), require('../model/PageTipoFaturamentoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.FaturamentoApi = factory(root.Pier.ApiClient, root.Pier.TipoFaturamentoPersist, root.Pier.TipoFaturamentoResponse, root.Pier.TipoFaturamentoPorContaPersist, root.Pier.TipoFaturamentoPorContaResponse, root.Pier.PageTipoFaturamentoPorContaResponse, root.Pier.PageTipoFaturamentoResponse);
  }
}(this, function(ApiClient, TipoFaturamentoPersist, TipoFaturamentoResponse, TipoFaturamentoPorContaPersist, TipoFaturamentoPorContaResponse, PageTipoFaturamentoPorContaResponse, PageTipoFaturamentoResponse) {
  'use strict';

  /**
   * Faturamento service.
   * @module api/FaturamentoApi
   * @version 2.54.0
   */

  /**
   * Constructs a new FaturamentoApi. 
   * @alias module:api/FaturamentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarTipoFaturamentoUsingPUT operation.
     * @callback module:api/FaturamentoApi~alterarTipoFaturamentoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Faturamento
     * Alterar as configura\u00C3\u00A7\u00C3\u00B5es de um determinado tipo de faturamento
     * @param {Integer} id Id
     * @param {module:model/TipoFaturamentoPersist} tipoFaturamentoPersist tipoFaturamentoPersist
     * @param {module:api/FaturamentoApi~alterarTipoFaturamentoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.alterarTipoFaturamentoUsingPUT = function(id, tipoFaturamentoPersist, callback) {
      var postBody = tipoFaturamentoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarTipoFaturamentoUsingPUT";
      }

      // verify the required parameter 'tipoFaturamentoPersist' is set
      if (tipoFaturamentoPersist == undefined || tipoFaturamentoPersist == null) {
        throw "Missing the required parameter 'tipoFaturamentoPersist' when calling alterarTipoFaturamentoUsingPUT";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarFaturamentoPorContaUsingPOST operation.
     * @callback module:api/FaturamentoApi~cadastrarFaturamentoPorContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoPorContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adiciona uma nova configura\u00C3\u00A7\u00C3\u00A3o de faturamento para uma conta
     * Este m\u00C3\u00A9todo permite adicionar uma nova configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento para um conta espec\u00C3\u00ADfica.
     * @param {module:model/TipoFaturamentoPorContaPersist} tipoFaturamentoPorContaPersist tipoFaturamentoPorContaPersist
     * @param {module:api/FaturamentoApi~cadastrarFaturamentoPorContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoPorContaResponse}
     */
    this.cadastrarFaturamentoPorContaUsingPOST = function(tipoFaturamentoPorContaPersist, callback) {
      var postBody = tipoFaturamentoPorContaPersist;

      // verify the required parameter 'tipoFaturamentoPorContaPersist' is set
      if (tipoFaturamentoPorContaPersist == undefined || tipoFaturamentoPorContaPersist == null) {
        throw "Missing the required parameter 'tipoFaturamentoPorContaPersist' when calling cadastrarFaturamentoPorContaUsingPOST";
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
      var returnType = TipoFaturamentoPorContaResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento-conta', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarTipoFaturamentoUsingPOST operation.
     * @callback module:api/FaturamentoApi~cadastrarTipoFaturamentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adiciona um novo faturamento
     * Adiciona uma nova configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento
     * @param {module:model/TipoFaturamentoPersist} tipoFaturamentoPersist tipoFaturamentoPersist
     * @param {module:api/FaturamentoApi~cadastrarTipoFaturamentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.cadastrarTipoFaturamentoUsingPOST = function(tipoFaturamentoPersist, callback) {
      var postBody = tipoFaturamentoPersist;

      // verify the required parameter 'tipoFaturamentoPersist' is set
      if (tipoFaturamentoPersist == undefined || tipoFaturamentoPersist == null) {
        throw "Missing the required parameter 'tipoFaturamentoPersist' when calling cadastrarTipoFaturamentoUsingPOST";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTipoFaturamentoUsingGET operation.
     * @callback module:api/FaturamentoApi~consultarTipoFaturamentoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Faturamento por id
     * Consulta os detalhes de uma determinada Faturamento
     * @param {Integer} id Id
     * @param {module:api/FaturamentoApi~consultarTipoFaturamentoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.consultarTipoFaturamentoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTipoFaturamentoUsingGET";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarFaturamentoPorContaUsingPOST operation.
     * @callback module:api/FaturamentoApi~desativarFaturamentoPorContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoPorContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativar uma configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento por conta atrav\u00C3\u00A9s do id
     * Desativa uma configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento de uma determinada conta.
     * @param {Integer} id Id
     * @param {String} modificadoPor modificadoPor
     * @param {module:api/FaturamentoApi~desativarFaturamentoPorContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoPorContaResponse}
     */
    this.desativarFaturamentoPorContaUsingPOST = function(id, modificadoPor, callback) {
      var postBody = modificadoPor;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarFaturamentoPorContaUsingPOST";
      }

      // verify the required parameter 'modificadoPor' is set
      if (modificadoPor == undefined || modificadoPor == null) {
        throw "Missing the required parameter 'modificadoPor' when calling desativarFaturamentoPorContaUsingPOST";
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
      var returnType = TipoFaturamentoPorContaResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento-conta/{id}/desativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarTipoFaturamentoUsingPOST operation.
     * @callback module:api/FaturamentoApi~desativarTipoFaturamentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativar uma configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento atrav\u00C3\u00A9s do id
     * Desativa uma configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento.
     * @param {Integer} id Id
     * @param {module:api/FaturamentoApi~desativarTipoFaturamentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.desativarTipoFaturamentoUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarTipoFaturamentoUsingPOST";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento/{id}/desativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFaturamentoPorContaUsingGET operation.
     * @callback module:api/FaturamentoApi~listarFaturamentoPorContaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoFaturamentoPorContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as configura\u00C3\u00A7\u00C3\u00B5es de tipos de faturamento por conta
     * Este m\u00C3\u00A9todo permite listar as configura\u00C3\u00A7\u00C3\u00B5es de tipos de faturamento registrados a uma conta.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTipoFaturamentoPorConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento por conta (id).
     * @param {Boolean} opts.status Representa se a configura\u00C3\u00A7\u00C3\u00A3o est\u00C3\u00A1 ativada ou desativada para a conta.
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento por conta (id).
     * @param {Integer} opts.idTipoFaturamento C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento relacionada (id).
     * @param {String} opts.dataHoraInclusao Data da inclus\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o, deve ser informada no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {String} opts.dataHoraCancelamento Data do cancelamento da configura\u00C3\u00A7\u00C3\u00A3o, deve ser informada no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;.
     * @param {String} opts.modificadoPor Identificador do respons\u00C3\u00A1vel pela modifica\u00C3\u00A7\u00C3\u00A3o do registro.
     * @param {module:api/FaturamentoApi~listarFaturamentoPorContaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoFaturamentoPorContaResponse}
     */
    this.listarFaturamentoPorContaUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoFaturamentoPorConta': opts['idTipoFaturamentoPorConta'],
        'status': opts['status'],
        'idConta': opts['idConta'],
        'idTipoFaturamento': opts['idTipoFaturamento'],
        'dataHoraInclusao': opts['dataHoraInclusao'],
        'dataHoraCancelamento': opts['dataHoraCancelamento'],
        'modificadoPor': opts['modificadoPor']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoFaturamentoPorContaResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento-conta', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTipoFaturamentoUsingGET operation.
     * @callback module:api/FaturamentoApi~listarTipoFaturamentoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista Tipos de Faturamento
     * Lista todas as configura\u00C3\u00A7\u00C3\u00B5es dos tipos de faturamento
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTipoFaturamento C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento (id).
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento.
     * @param {Boolean} opts.flagApenasDemonstrativo Flag que representa que o faturamento ser\u00C3\u00A1 apenas demonstrativo.
     * @param {Integer} opts.idConvenio C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do conv\u00C3\u00AAnio relacionado ao tipo de faturamento.
     * @param {module:api/FaturamentoApi~listarTipoFaturamentoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoFaturamentoResponse}
     */
    this.listarTipoFaturamentoUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoFaturamento': opts['idTipoFaturamento'],
        'descricao': opts['descricao'],
        'flagApenasDemonstrativo': opts['flagApenasDemonstrativo'],
        'idConvenio': opts['idConvenio']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
