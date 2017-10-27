(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/EstagioCartaoResponse', '../model/StatusCartaoResponse', '../model/StatusContaResponse', '../model/StatusImpressaoResponse', '../model/PageEstagioCartaoResponse', '../model/PageStatusCartaoResponse', '../model/PageStatusContaResponse', '../model/PageStatusImpressaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EstagioCartaoResponse'), require('../model/StatusCartaoResponse'), require('../model/StatusContaResponse'), require('../model/StatusImpressaoResponse'), require('../model/PageEstagioCartaoResponse'), require('../model/PageStatusCartaoResponse'), require('../model/PageStatusContaResponse'), require('../model/PageStatusImpressaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.StatusParametroApi = factory(root.Pier.ApiClient, root.Pier.EstagioCartaoResponse, root.Pier.StatusCartaoResponse, root.Pier.StatusContaResponse, root.Pier.StatusImpressaoResponse, root.Pier.PageEstagioCartaoResponse, root.Pier.PageStatusCartaoResponse, root.Pier.PageStatusContaResponse, root.Pier.PageStatusImpressaoResponse);
  }
}(this, function(ApiClient, EstagioCartaoResponse, StatusCartaoResponse, StatusContaResponse, StatusImpressaoResponse, PageEstagioCartaoResponse, PageStatusCartaoResponse, PageStatusContaResponse, PageStatusImpressaoResponse) {
  'use strict';

  /**
   * StatusParametro service.
   * @module api/StatusParametroApi
   * @version 2.43.0
   */

  /**
   * Constructs a new StatusParametroApi. 
   * @alias module:api/StatusParametroApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarEstagioCartaoUsingGET operation.
     * @callback module:api/StatusParametroApi~consultarEstagioCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstagioCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Estagio Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Est\u00C3\u00A1gio de Entrega do Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Entrega do Cart\u00C3\u00A3o (id).
     * @param {module:api/StatusParametroApi~consultarEstagioCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstagioCartaoResponse}
     */
    this.consultarEstagioCartaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarEstagioCartaoUsingGET";
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
      var returnType = EstagioCartaoResponse;

      return this.apiClient.callApi(
        '/api/estagios-cartoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarStatusCartaoUsingGET operation.
     * @callback module:api/StatusParametroApi~consultarStatusCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Status Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Status de Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Entrega do Cart\u00C3\u00A3o (id).
     * @param {module:api/StatusParametroApi~consultarStatusCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusCartaoResponse}
     */
    this.consultarStatusCartaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarStatusCartaoUsingGET";
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
      var returnType = StatusCartaoResponse;

      return this.apiClient.callApi(
        '/api/status-cartoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET18 operation.
     * @callback module:api/StatusParametroApi~consultarUsingGET18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Status Conta
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Status Conta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status da Conta (id).
     * @param {module:api/StatusParametroApi~consultarUsingGET18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusContaResponse}
     */
    this.consultarUsingGET18 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET18";
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
      var returnType = StatusContaResponse;

      return this.apiClient.callApi(
        '/api/status-contas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET19 operation.
     * @callback module:api/StatusParametroApi~consultarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Status Impress\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/StatusParametroApi~consultarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusImpressaoResponse}
     */
    this.consultarUsingGET19 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET19";
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
      var returnType = StatusImpressaoResponse;

      return this.apiClient.callApi(
        '/api/status-impressoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarEstagiosCartoesUsingGET operation.
     * @callback module:api/StatusParametroApi~listarEstagiosCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEstagioCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00A7\u00C3\u00B5es de Est\u00C3\u00A1gios do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que sejam listadas as op\u00C3\u00A7\u00C3\u00B5es de Est\u00C3\u00A1gio de Entrega que podem ser atribu\u00C3\u00ADdas aos Cart\u00C3\u00B5es.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id Id do est\u00C3\u00A1gio cart\u00C3\u00A3o
     * @param {String} opts.nome Nome do est\u00C3\u00A1gio cart\u00C3\u00A3o
     * @param {module:api/StatusParametroApi~listarEstagiosCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEstagioCartaoResponse}
     */
    this.listarEstagiosCartoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageEstagioCartaoResponse;

      return this.apiClient.callApi(
        '/api/estagios-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusCartoesUsingGET operation.
     * @callback module:api/StatusParametroApi~listarStatusCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00A7\u00C3\u00B5es de Status do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que sejam listadas as possibilidades de Status que podem ser atribu\u00C3\u00ADdas aos Cart\u00C3\u00B5es.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id) 
     * @param {String} opts.nome Nome atribu\u00C3\u00ADdo ao Status de Entrega do Cart\u00C3\u00A3o.
     * @param {Integer} opts.permiteDesbloquear Par\u00C3\u00A2metro que define se o status do cart\u00C3\u00A3o permite a reativa\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteAtribuirComoBloqueio Par\u00C3\u00A2metro que define se o status do cart\u00C3\u00A3o permite a reativa\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteAtribuirComoCancelamento Par\u00C3\u00A2metro que define se o status do cart\u00C3\u00A3o permite a reativa\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.cobrarTarifaAoEmitirNovaVia Par\u00C3\u00A2metro que define se o status do cart\u00C3\u00A3o permite a reativa\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o, sendo: 0: Inativo e 1: Ativo.
     * @param {module:api/StatusParametroApi~listarStatusCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusCartaoResponse}
     */
    this.listarStatusCartoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'permiteDesbloquear': opts['permiteDesbloquear'],
        'permiteAtribuirComoBloqueio': opts['permiteAtribuirComoBloqueio'],
        'permiteAtribuirComoCancelamento': opts['permiteAtribuirComoCancelamento'],
        'cobrarTarifaAoEmitirNovaVia': opts['cobrarTarifaAoEmitirNovaVia']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusCartaoResponse;

      return this.apiClient.callApi(
        '/api/status-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposEventosTransacoesUsingGET operation.
     * @callback module:api/StatusParametroApi~listarTiposEventosTransacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de transa\u00C3\u00A7\u00C3\u00B5es
     * Esse recurso permite listar os tipos de transa\u00C3\u00A7\u00C3\u00B5es dispon\u00C3\u00ADveis.
     * @param {module:api/StatusParametroApi~listarTiposEventosTransacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarTiposEventosTransacoesUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = [Object];

      return this.apiClient.callApi(
        '/api/tipos-eventos-transacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET25 operation.
     * @callback module:api/StatusParametroApi~listarUsingGET25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Status Contas cadastrados para o Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Status Contas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status da Conta (id).
     * @param {String} opts.nome Nome atribu\u00C3\u00ADdo ao Status da Conta.
     * @param {Integer} opts.permiteAlterarVencimento Par\u00C3\u00A2metro que define se o Status da conta permite a solicita\u00C3\u00A7\u00C3\u00A3o da altera\u00C3\u00A7\u00C3\u00A3o do Dia para Vencimento das Faturas, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteAlterarLimite Par\u00C3\u00A2metro que define se o Status da conta permite altera\u00C3\u00A7\u00C3\u00A3o de Limites, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteEmitirNovaViaCartao Par\u00C3\u00A2metro que define se o Status da conta permite solicitar uma nova via de Cart\u00C3\u00A3o, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteFazerTransferencia Par\u00C3\u00A2metro que define se o Status da conta permite originar Transfer\u00C3\u00AAncias de Cr\u00C3\u00A9dito para outras Contas do mesmo Emissor ou para uma Conta Banc\u00C3\u00A1ria, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteReceberTransferencia Par\u00C3\u00A2metro que define se o Status da conta permite  receber Transfer\u00C3\u00AAncias de Cr\u00C3\u00A9dito originadas de outras Contas do mesmo emissor, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteCriarAcordoCobranca Par\u00C3\u00A2metro que define se o Status da conta permite ter um Acordo de Cobran\u00C3\u00A7a de D\u00C3\u00ADvida criado para ela, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteAtribuirComoBloqueio Par\u00C3\u00A2metro que define se o Status da conta permite ser atribu\u00C3\u00ADdo para Bloquear temporariamente uma Conta, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteDesbloquear Par\u00C3\u00A2metro que define se o Status da conta permite ser desbloqueada, sendo: 0: Inativo e 1: Ativo.
     * @param {Integer} opts.permiteAtribuirComoCancelamento Par\u00C3\u00A2metro que define se o Status da conta permite ser atribu\u00C3\u00ADdo para realizar o cancelamento definitivo de uma conta, sendo: 0: Inativo e 1: Ativo.
     * @param {module:api/StatusParametroApi~listarUsingGET25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusContaResponse}
     */
    this.listarUsingGET25 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'permiteAlterarVencimento': opts['permiteAlterarVencimento'],
        'permiteAlterarLimite': opts['permiteAlterarLimite'],
        'permiteEmitirNovaViaCartao': opts['permiteEmitirNovaViaCartao'],
        'permiteFazerTransferencia': opts['permiteFazerTransferencia'],
        'permiteReceberTransferencia': opts['permiteReceberTransferencia'],
        'permiteCriarAcordoCobranca': opts['permiteCriarAcordoCobranca'],
        'permiteAtribuirComoBloqueio': opts['permiteAtribuirComoBloqueio'],
        'permiteDesbloquear': opts['permiteDesbloquear'],
        'permiteAtribuirComoCancelamento': opts['permiteAtribuirComoCancelamento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusContaResponse;

      return this.apiClient.callApi(
        '/api/status-contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET26 operation.
     * @callback module:api/StatusParametroApi~listarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00A7\u00C3\u00B5es de Status Impress\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que sejam listadas as op\u00C3\u00A7\u00C3\u00B5es de Status Impress\u00C3\u00A3o que podem ser atribu\u00C3\u00ADdas aos Cart\u00C3\u00B5es.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id Id do est\u00C3\u00A1gio cart\u00C3\u00A3o
     * @param {String} opts.nome Nome do status impress\u00C3\u00A3o
     * @param {module:api/StatusParametroApi~listarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusImpressaoResponse}
     */
    this.listarUsingGET26 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusImpressaoResponse;

      return this.apiClient.callApi(
        '/api/status-impressoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
