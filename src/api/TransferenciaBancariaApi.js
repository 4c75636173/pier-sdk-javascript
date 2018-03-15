(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ContaBancariaPortadorUpdate', '../model/ContaBancariaPortadorResponse', '../model/TransferenciaCreditoContaBancariaResponse', '../model/TransferenciaBancariaResponse', '../model/PageTransferenciaCreditoContaBancariaResponse', '../model/PageContaBancariaPortadorResponse', '../model/PageTransferenciaBancariaResponse', '../model/ContaBancariaPortadorPersist', '../model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest', '../model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse', '../model/TransferenciaCreditoContaBancariaPersist', '../model/TransferenciaBancariaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContaBancariaPortadorUpdate'), require('../model/ContaBancariaPortadorResponse'), require('../model/TransferenciaCreditoContaBancariaResponse'), require('../model/TransferenciaBancariaResponse'), require('../model/PageTransferenciaCreditoContaBancariaResponse'), require('../model/PageContaBancariaPortadorResponse'), require('../model/PageTransferenciaBancariaResponse'), require('../model/ContaBancariaPortadorPersist'), require('../model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest'), require('../model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse'), require('../model/TransferenciaCreditoContaBancariaPersist'), require('../model/TransferenciaBancariaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TransferenciaBancariaApi = factory(root.Pier.ApiClient, root.Pier.ContaBancariaPortadorUpdate, root.Pier.ContaBancariaPortadorResponse, root.Pier.TransferenciaCreditoContaBancariaResponse, root.Pier.TransferenciaBancariaResponse, root.Pier.PageTransferenciaCreditoContaBancariaResponse, root.Pier.PageContaBancariaPortadorResponse, root.Pier.PageTransferenciaBancariaResponse, root.Pier.ContaBancariaPortadorPersist, root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaRequest, root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaResponse, root.Pier.TransferenciaCreditoContaBancariaPersist, root.Pier.TransferenciaBancariaPersist);
  }
}(this, function(ApiClient, ContaBancariaPortadorUpdate, ContaBancariaPortadorResponse, TransferenciaCreditoContaBancariaResponse, TransferenciaBancariaResponse, PageTransferenciaCreditoContaBancariaResponse, PageContaBancariaPortadorResponse, PageTransferenciaBancariaResponse, ContaBancariaPortadorPersist, PlanoParcelamentoTransferenciaCreditoContaBancariaRequest, PlanoParcelamentoTransferenciaCreditoContaBancariaResponse, TransferenciaCreditoContaBancariaPersist, TransferenciaBancariaPersist) {
  'use strict';

  /**
   * TransferenciaBancaria service.
   * @module api/TransferenciaBancariaApi
   * @version 2.57.0
   */

  /**
   * Constructs a new TransferenciaBancariaApi. 
   * @alias module:api/TransferenciaBancariaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT1 operation.
     * @callback module:api/TransferenciaBancariaApi~atualizarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza conta banc\u00E1ria portador
     * Esse recurso permite atualizar uma conta banc\u00E1ria do portador.
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria do portador (id).
     * @param {module:model/ContaBancariaPortadorUpdate} update update
     * @param {module:api/TransferenciaBancariaApi~atualizarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TransferenciaBancariaApi~cancelarTransferenciaCreditoContaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar o cancelamento de uma transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias que esteja pendente de confirma\u00E7\u00E3o.
     * Este recurso tem como objetivo permitir o canelamento de uma transfer\u00EAncia de cr\u00E9dito entre contas.
     * @param {Integer} idTransferencia Id Transfer\u00EAncia
     * @param {module:api/TransferenciaBancariaApi~cancelarTransferenciaCreditoContaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TransferenciaBancariaApi~confirmarTransferenciaCreditoContaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar a confirma\u00E7\u00E3o de uma transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias que esteja pendente de confirma\u00E7\u00E3o.
     * Este recurso tem como objetivo permitir a confirma\u00E7\u00E3o da transfer\u00EAncia de cr\u00E9dito entre contas.
     * @param {Integer} idTransferencia Id Transfer\u00EAncia
     * @param {module:api/TransferenciaBancariaApi~confirmarTransferenciaCreditoContaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TransferenciaBancariaApi~consultarTransferenciaBancariaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a consulta de uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias de um portador
     * Recurso utilizado para recuperar uma transfer\u00EAncia de cr\u00E9dito entre contas banc\u00E1ria de um portador, utiliza o ID da transfer\u00EAncia banc\u00E1riae o idConta para realizar a consulta.
     * @param {Integer} idTransferencia Id Transfer\u00EAncia
     * @param {module:api/TransferenciaBancariaApi~consultarTransferenciaBancariaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TransferenciaBancariaApi~consultarUsingGET12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta conta banc\u00E1ria portador
     * Esse recurso permite consultar uma conta banc\u00E1ria do portador a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria (id).
     * @param {module:api/TransferenciaBancariaApi~consultarUsingGET12Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the consultarUsingGET41 operation.
     * @callback module:api/TransferenciaBancariaApi~consultarUsingGET41Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar uma transfer\u00EAncia banc\u00E1ria para um banco
     * Este recurso permite consultar os detalhes de uma determinada transfer\u00EAncia de cr\u00E9dito realizada para uma conta banc\u00E1ria. De modo geral, esta opera\u00E7\u00E3o poder\u00E1 ser utilizada para uma consulta simples destes detalhes ou para realizar a montagem de um comprovante de 2\u00AA via de transfer\u00EAncia entre contas.
     * @param {Integer} id Id Conta
     * @param {Integer} idTransferencia Id Transfer\u00EAncia
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria de destino (id)
     * @param {module:api/TransferenciaBancariaApi~consultarUsingGET41Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaBancariaResponse}
     */
    this.consultarUsingGET41 = function(id, idTransferencia, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET41";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET41";
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
     * @callback module:api/TransferenciaBancariaApi~listarTransferenciaBancariaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a listagem das transfer\u00EAncias banc\u00E1rias de cr\u00E9dito entre contas banc\u00E1rias
     * Recurso utilizado para listar as transfer\u00EAncia de cr\u00E9dito entre contas banc\u00E1ria de um portador solicitadas.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.idConta C\u00F3digo de identifica\u00E7\u00E3o da Conta.
     * @param {String} opts.dataSolicitacaoInicial Data inicial da solicita\u00E7\u00E3o de transfer\u00EAncia.
     * @param {String} opts.dataSolicitacaoFinal Data final da solicita\u00E7\u00E3o de transfer\u00EAncia
     * @param {Integer} opts.status C\u00F3digo do status do processamento
     * @param {module:api/TransferenciaBancariaApi~listarTransferenciaBancariaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET15 operation.
     * @callback module:api/TransferenciaBancariaApi~listarUsingGET15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista contas banc\u00E1rias portador
     * Esse recurso permite listar contas banc\u00E1rias do portador.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta C\u00F3digo identificador da conta cart\u00E3o
     * @param {String} opts.nomeAgencia Descri\u00E7\u00E3o da ag\u00EAncia
     * @param {String} opts.numeroAgencia N\u00FAmero da ag\u00EAncia
     * @param {String} opts.numeroConta N\u00FAmero da conta
     * @param {Integer} opts.flagContaOrigemDoc Sinaliza se origem \u00E9 DOC (1: DOC, 0: TED)
     * @param {Integer} opts.idPessoaFisica C\u00F3digo da pessoa
     * @param {String} opts.favorecido Nome do favorecido
     * @param {String} opts.numeroReceiraFederal Documento do favorecido
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/TransferenciaBancariaApi~listarUsingGET15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaBancariaPortadorResponse}
     */
    this.listarUsingGET15 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idConta': opts['idConta'],
        'nomeAgencia': opts['nomeAgencia'],
        'numeroAgencia': opts['numeroAgencia'],
        'numeroConta': opts['numeroConta'],
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
     * Callback function to receive the result of the listarUsingGET49 operation.
     * @callback module:api/TransferenciaBancariaApi~listarUsingGET49Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as transfer\u00EAncias banc\u00E1rias realizadas
     * Este recurso tem como objetivo permitir que o portador de um Cart\u00E3o possa consultar uma lista das Transfer\u00EAncias Banc\u00E1rias para os Favorecidos cadastrados.
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria de destino (id)
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/TransferenciaBancariaApi~listarUsingGET49Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaBancariaResponse}
     */
    this.listarUsingGET49 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET49";
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
     * Callback function to receive the result of the salvarUsingPOST8 operation.
     * @callback module:api/TransferenciaBancariaApi~salvarUsingPOST8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaBancariaPortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra uma conta banc\u00E1ria do portador
     * Esse recurso permite cadastrar contas banc\u00E1rias do portador.
     * @param {module:model/ContaBancariaPortadorPersist} persist persist
     * @param {module:api/TransferenciaBancariaApi~salvarUsingPOST8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaBancariaPortadorResponse}
     */
    this.salvarUsingPOST8 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST8";
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
     * @callback module:api/TransferenciaBancariaApi~simularTransferenciaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a simula\u00E7\u00E3o dos planos de parcelamentos para uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias
     * Realiza a simula\u00E7\u00E3o dos planos de parcelamentos para uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias.
     * @param {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} request request
     * @param {module:api/TransferenciaBancariaApi~simularTransferenciaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TransferenciaBancariaApi~transferenciaCreditoContaBancariaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaCreditoContaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias
     * Este recurso tem como objetivo permitir que o portador de um cart\u00E3o possa realizar a transfer\u00EAncia de cr\u00E9dito para uma conta banc\u00E1ria. Assim, o valor do cr\u00E9dito somado a tarifa para transfer\u00EAncia, quando praticada pelo emissor, ser\u00E1 debitado da conta de origem, se houver saldo suficiente, e ser\u00E1 creditado na conta banc\u00E1ria de destino.
     * @param {module:model/TransferenciaCreditoContaBancariaPersist} persist persist
     * @param {module:api/TransferenciaBancariaApi~transferenciaCreditoContaBancariaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TransferenciaBancariaApi~transferirUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias
     * Este recurso tem como objetivo permitir que o portador de um cart\u00E3o possa realizar a transfer\u00EAncia de cr\u00E9dito para uma conta banc\u00E1ria. Assim, o valor do cr\u00E9dito somado a tarifa para transfer\u00EAncia, quando praticada pelo emissor, ser\u00E1 debitado da conta de origem, se houver saldo suficiente, e ser\u00E1 creditado na conta banc\u00E1ria de destino.
     * @param {Integer} id Id Conta
     * @param {module:model/TransferenciaBancariaPersist} transferenciaBancariaPersist transferenciaBancariaPersist
     * @param {module:api/TransferenciaBancariaApi~transferirUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
