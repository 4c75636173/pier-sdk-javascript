(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ContaBancariaPortadorUpdateValue', '../model/ContaBancariaPortadorResponse', '../model/TransferenciaCreditoContaBancariaResponse', '../model/TransferenciaBancariaResponse', '../model/PageTransferenciaCreditoContaBancariaResponse', '../model/PageContaBancariaPortadorResponse', '../model/PageTransferenciaBancariaResponse', '../model/ContaBancariaPortadorPersistValue', '../model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest', '../model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse', '../model/TransferenciaCreditoContaBancariaPersistValue', '../model/TransferenciaBancariaPersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContaBancariaPortadorUpdateValue'), require('../model/ContaBancariaPortadorResponse'), require('../model/TransferenciaCreditoContaBancariaResponse'), require('../model/TransferenciaBancariaResponse'), require('../model/PageTransferenciaCreditoContaBancariaResponse'), require('../model/PageContaBancariaPortadorResponse'), require('../model/PageTransferenciaBancariaResponse'), require('../model/ContaBancariaPortadorPersistValue'), require('../model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest'), require('../model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse'), require('../model/TransferenciaCreditoContaBancariaPersistValue'), require('../model/TransferenciaBancariaPersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagtransferenciabancariaApi = factory(root.Pier.ApiClient, root.Pier.ContaBancariaPortadorUpdateValue, root.Pier.ContaBancariaPortadorResponse, root.Pier.TransferenciaCreditoContaBancariaResponse, root.Pier.TransferenciaBancariaResponse, root.Pier.PageTransferenciaCreditoContaBancariaResponse, root.Pier.PageContaBancariaPortadorResponse, root.Pier.PageTransferenciaBancariaResponse, root.Pier.ContaBancariaPortadorPersistValue, root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaRequest, root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaResponse, root.Pier.TransferenciaCreditoContaBancariaPersistValue, root.Pier.TransferenciaBancariaPersistValue);
  }
}(this, function(ApiClient, ContaBancariaPortadorUpdateValue, ContaBancariaPortadorResponse, TransferenciaCreditoContaBancariaResponse, TransferenciaBancariaResponse, PageTransferenciaCreditoContaBancariaResponse, PageContaBancariaPortadorResponse, PageTransferenciaBancariaResponse, ContaBancariaPortadorPersistValue, PlanoParcelamentoTransferenciaCreditoContaBancariaRequest, PlanoParcelamentoTransferenciaCreditoContaBancariaResponse, TransferenciaCreditoContaBancariaPersistValue, TransferenciaBancariaPersistValue) {
  'use strict';

  /**
   * globaltagtransferenciabancaria service.
   * @module api/GlobaltagtransferenciabancariaApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagtransferenciabancariaApi. 
   * @alias module:api/GlobaltagtransferenciabancariaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT1 operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~atualizarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_bancaria_resource_atualizar}}}
     * {{{conta_bancaria_resource_atualizar_notes}}}
     * @param {Integer} id {{{conta_bancaria_resource_atualizar_param_id}}}
     * @param {module:model/ContaBancariaPortadorUpdateValue} update update
     * @param {module:api/GlobaltagtransferenciabancariaApi~atualizarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaBancariaPortadorResponse}
     */
    this.atualizarUsingPUT1 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT1";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling atualizarUsingPUT1";
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
      var returnType = ContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarTransferenciaCreditoContaBancariaUsingPOST operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~cancelarTransferenciaCreditoContaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria}}}
     * {{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria_notes}}}
     * @param {Integer} idTransferencia {{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria_param_id_transferencia}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~cancelarTransferenciaCreditoContaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.cancelarTransferenciaCreditoContaBancariaUsingPOST = function(idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling cancelarTransferenciaCreditoContaBancariaUsingPOST";
      }


      var pathParams = {
        'idTransferencia': idTransferencia
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
        '/api/transferencias-creditos-contas-bancarias/{idTransferencia}/cancelar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the confirmarTransferenciaCreditoContaBancariaUsingPOST operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~confirmarTransferenciaCreditoContaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria}}}
     * {{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria_notes}}}
     * @param {Integer} idTransferencia {{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria_param_id_transferencia}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~confirmarTransferenciaCreditoContaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.confirmarTransferenciaCreditoContaBancariaUsingPOST = function(idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling confirmarTransferenciaCreditoContaBancariaUsingPOST";
      }


      var pathParams = {
        'idTransferencia': idTransferencia
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
        '/api/transferencias-creditos-contas-bancarias/{idTransferencia}/confirmar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTransferenciaBancariaUsingGET operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~consultarTransferenciaBancariaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_consultar_transferencia_bancaria}}}
     * {{{transferencia_bancaria_resource_consultar_transferencia_bancaria_notes}}}
     * @param {Integer} idTransferencia {{{transferencia_bancaria_resource_consultar_transferencia_bancaria_param_id_transferencia}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~consultarTransferenciaBancariaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaCreditoContaBancariaResponse}
     */
    this.consultarTransferenciaBancariaUsingGET = function(idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarTransferenciaBancariaUsingGET";
      }


      var pathParams = {
        'idTransferencia': idTransferencia
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
      var returnType = TransferenciaCreditoContaBancariaResponse;

      return this.apiClient.callApi(
        '/api/transferencias-creditos-contas-bancarias/{idTransferencia}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET12 operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~consultarUsingGET12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_bancaria_resource_consultar}}}
     * {{{conta_bancaria_resource_consultar_notes}}}
     * @param {Integer} id {{{conta_bancaria_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~consultarUsingGET12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaBancariaPortadorResponse}
     */
    this.consultarUsingGET12 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET12";
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
      var returnType = ContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET47 operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~consultarUsingGET47Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_consultar}}}
     * {{{transferencia_bancaria_resource_consultar_notes}}}
     * @param {Integer} id {{{transferencia_bancaria_resource_consultar_param_id}}}
     * @param {Integer} idTransferencia {{{transferencia_bancaria_resource_consultar_param_id_evento}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino {{{transferencia_bancaria_resource_consultar_param_id_conta_portador}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~consultarUsingGET47Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaBancariaResponse}
     */
    this.consultarUsingGET47 = function(id, idTransferencia, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET47";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET47";
      }


      var pathParams = {
        'id': id,
        'id_transferencia': idTransferencia
      };
      var queryParams = {
        'id_conta_bancaria_destino': opts['idContaBancariaDestino']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TransferenciaBancariaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-contas-bancarias/{id_transferencia}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTransferenciaBancariaUsingGET operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~listarTransferenciaBancariaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_listar_transferencia_bancaria}}}
     * {{{transferencia_bancaria_resource_listar_transferencia_bancaria_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idConta {{{transferencia_credito_conta_bancaria_request_id_conta_value}}}
     * @param {String} opts.dataSolicitacaoInicial {{{transferencia_credito_conta_bancaria_request_data_solicitacao_inicial_value}}}
     * @param {String} opts.dataSolicitacaoFinal {{{transferencia_credito_conta_bancaria_request_data_solicitacao_final_value}}}
     * @param {Integer} opts.status {{{transferencia_credito_conta_bancaria_request_status_value}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~listarTransferenciaBancariaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaCreditoContaBancariaResponse}
     */
    this.listarTransferenciaBancariaUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'dataSolicitacaoInicial': opts['dataSolicitacaoInicial'],
        'dataSolicitacaoFinal': opts['dataSolicitacaoFinal'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTransferenciaCreditoContaBancariaResponse;

      return this.apiClient.callApi(
        '/api/transferencias-creditos-contas-bancarias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET16 operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~listarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_bancaria_resource_listar}}}
     * {{{conta_bancaria_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta {{{conta_bancaria_portador_listar_request_id_conta_value}}}
     * @param {String} opts.nomeAgencia {{{conta_bancaria_portador_listar_request_nome_agencia_value}}}
     * @param {Integer} opts.banco {{{conta_bancaria_portador_listar_request_codigo_banco_value}}}
     * @param {String} opts.numeroAgencia {{{conta_bancaria_portador_listar_request_numero_agencia_value}}}
     * @param {String} opts.numeroConta {{{conta_bancaria_portador_listar_request_numero_conta_value}}}
     * @param {Integer} opts.flagAtivo {{{conta_bancaria_portador_listar_request_flag_ativo_value}}}
     * @param {Integer} opts.flagContaOrigemDoc {{{conta_bancaria_portador_listar_request_flag_conta_origem_doc_value}}}
     * @param {Integer} opts.idPessoaFisica {{{conta_bancaria_portador_listar_request_id_pessoa_fisica_value}}}
     * @param {String} opts.favorecido {{{conta_bancaria_portador_listar_request_favorecido_value}}}
     * @param {String} opts.numeroReceiraFederal {{{conta_bancaria_portador_listar_request_numero_receira_federal_value}}}
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~listarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaBancariaPortadorResponse}
     */
    this.listarUsingGET16 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idConta': opts['idConta'],
        'nomeAgencia': opts['nomeAgencia'],
        'banco': opts['banco'],
        'numeroAgencia': opts['numeroAgencia'],
        'numeroConta': opts['numeroConta'],
        'flagAtivo': opts['flagAtivo'],
        'flagContaOrigemDoc': opts['flagContaOrigemDoc'],
        'idPessoaFisica': opts['idPessoaFisica'],
        'favorecido': opts['favorecido'],
        'numeroReceiraFederal': opts['numeroReceiraFederal'],
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
      var returnType = PageContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET59 operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~listarUsingGET59Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_listar}}}
     * {{{transferencia_bancaria_resource_listar_notes}}}
     * @param {Integer} id {{{transferencia_bancaria_resource_listar_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino {{{transferencia_bancaria_resource_listar_param_id_conta_portador}}}
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagtransferenciabancariaApi~listarUsingGET59Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaBancariaResponse}
     */
    this.listarUsingGET59 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET59";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_conta_bancaria_destino': opts['idContaBancariaDestino'],
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
      var returnType = PageTransferenciaBancariaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-contas-bancarias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST7 operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~salvarUsingPOST7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_bancaria_resource_salvar}}}
     * {{{conta_bancaria_resource_salvar_notes}}}
     * @param {module:model/ContaBancariaPortadorPersistValue} persist persist
     * @param {module:api/GlobaltagtransferenciabancariaApi~salvarUsingPOST7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaBancariaPortadorResponse}
     */
    this.salvarUsingPOST7 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST7";
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
      var returnType = ContaBancariaPortadorResponse;

      return this.apiClient.callApi(
        '/api/contas-bancarias-portador', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the simularTransferenciaBancariaUsingPOST operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~simularTransferenciaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_simular_transferencia_bancaria}}}
     * {{{transferencia_bancaria_resource_simular_transferencia_bancaria_notes}}}
     * @param {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} request request
     * @param {module:api/GlobaltagtransferenciabancariaApi~simularTransferenciaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse}
     */
    this.simularTransferenciaBancariaUsingPOST = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling simularTransferenciaBancariaUsingPOST";
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
      var returnType = PlanoParcelamentoTransferenciaCreditoContaBancariaResponse;

      return this.apiClient.callApi(
        '/api/simular-transferencias-creditos-contas-bancarias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferenciaCreditoContaBancariaUsingPOST operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~transferenciaCreditoContaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_transferencia_credito_conta_bancaria}}}
     * {{{transferencia_bancaria_resource_transferencia_credito_conta_bancaria_notes}}}
     * @param {module:model/TransferenciaCreditoContaBancariaPersistValue} persist persist
     * @param {module:api/GlobaltagtransferenciabancariaApi~transferenciaCreditoContaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaCreditoContaBancariaResponse}
     */
    this.transferenciaCreditoContaBancariaUsingPOST = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling transferenciaCreditoContaBancariaUsingPOST";
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
      var returnType = TransferenciaCreditoContaBancariaResponse;

      return this.apiClient.callApi(
        '/api/transferencias-creditos-contas-bancarias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferirUsingPOST operation.
     * @callback module:api/GlobaltagtransferenciabancariaApi~transferirUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_bancaria_resource_transferir}}}
     * {{{transferencia_bancaria_resource_transferir_notes}}}
     * @param {Integer} id {{{transferencia_bancaria_resource_transferir_param_id}}}
     * @param {module:model/TransferenciaBancariaPersistValue} transferenciaBancariaPersist transferenciaBancariaPersist
     * @param {module:api/GlobaltagtransferenciabancariaApi~transferirUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaBancariaResponse}
     */
    this.transferirUsingPOST = function(id, transferenciaBancariaPersist, callback) {
      var postBody = transferenciaBancariaPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling transferirUsingPOST";
      }

      // verify the required parameter 'transferenciaBancariaPersist' is set
      if (transferenciaBancariaPersist == undefined || transferenciaBancariaPersist == null) {
        throw "Missing the required parameter 'transferenciaBancariaPersist' when calling transferirUsingPOST";
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
      var returnType = TransferenciaBancariaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-contas-bancarias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
