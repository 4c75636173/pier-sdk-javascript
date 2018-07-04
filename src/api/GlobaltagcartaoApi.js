(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CartaoResponse', '../model/EstagioCartaoUpdate', '../model/HistoricoImpressaoCartaoResponse', '../model/DadosCartaoImpressaoResponse', '../model/DadosCartaoResponse', '../model/LimiteDisponibilidadeResponse', '../model/LoteCartoesPrePagosResponse', '../model/PortadorResponse', '../model/CartaoDetalheResponse', '../model/CartaoMultiAppImpressaoResponse', '../model/PageLoteCartoesPrePagosResponse', '../model/PageCartaoResponse', '../model/ValidaCVVRequest', '../model/ValidaCartaoResponse', '../model/ValidaSenhaCartaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CartaoResponse'), require('../model/EstagioCartaoUpdate'), require('../model/HistoricoImpressaoCartaoResponse'), require('../model/DadosCartaoImpressaoResponse'), require('../model/DadosCartaoResponse'), require('../model/LimiteDisponibilidadeResponse'), require('../model/LoteCartoesPrePagosResponse'), require('../model/PortadorResponse'), require('../model/CartaoDetalheResponse'), require('../model/CartaoMultiAppImpressaoResponse'), require('../model/PageLoteCartoesPrePagosResponse'), require('../model/PageCartaoResponse'), require('../model/ValidaCVVRequest'), require('../model/ValidaCartaoResponse'), require('../model/ValidaSenhaCartaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagcartaoApi = factory(root.Pier.ApiClient, root.Pier.CartaoResponse, root.Pier.EstagioCartaoUpdate, root.Pier.HistoricoImpressaoCartaoResponse, root.Pier.DadosCartaoImpressaoResponse, root.Pier.DadosCartaoResponse, root.Pier.LimiteDisponibilidadeResponse, root.Pier.LoteCartoesPrePagosResponse, root.Pier.PortadorResponse, root.Pier.CartaoDetalheResponse, root.Pier.CartaoMultiAppImpressaoResponse, root.Pier.PageLoteCartoesPrePagosResponse, root.Pier.PageCartaoResponse, root.Pier.ValidaCVVRequest, root.Pier.ValidaCartaoResponse, root.Pier.ValidaSenhaCartaoResponse);
  }
}(this, function(ApiClient, CartaoResponse, EstagioCartaoUpdate, HistoricoImpressaoCartaoResponse, DadosCartaoImpressaoResponse, DadosCartaoResponse, LimiteDisponibilidadeResponse, LoteCartoesPrePagosResponse, PortadorResponse, CartaoDetalheResponse, CartaoMultiAppImpressaoResponse, PageLoteCartoesPrePagosResponse, PageCartaoResponse, ValidaCVVRequest, ValidaCartaoResponse, ValidaSenhaCartaoResponse) {
  'use strict';

  /**
   * globaltagcartao service.
   * @module api/GlobaltagcartaoApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagcartaoApi. 
   * @alias module:api/GlobaltagcartaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarAlterarSenhaUsingPUT operation.
     * @callback module:api/GlobaltagcartaoApi~alterarAlterarSenhaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_alterar_alterar_senha}}}
     * {{{cartao_resource_alterar_alterar_senha_notes}}}
     * @param {Integer} id {{{cartao_resource_alterar_alterar_senha_param_id}}}
     * @param {String} senha {{{cartao_resource_alterar_alterar_senha_param_nova_senha}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~alterarAlterarSenhaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.alterarAlterarSenhaUsingPUT = function(id, senha, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarAlterarSenhaUsingPUT";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling alterarAlterarSenhaUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/cartoes/{id}/alterar-senha', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarEstagioUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~alterarEstagioUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_alterar_estagio}}}
     * {{{cartao_resource_alterar_estagio_notes}}}
     * @param {Integer} id {{{cartao_resource_alterar_estagio_param_id}}}
     * @param {module:model/EstagioCartaoUpdate} update {{{cartao_resource_alterar_estagio_param_id_estagio_cartao}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~alterarEstagioUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.alterarEstagioUsingPOST = function(id, update, opts, callback) {
      opts = opts || {};
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarEstagioUsingPOST";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarEstagioUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/alterar-estagio', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarStatusImpressaoUsingPUT operation.
     * @callback module:api/GlobaltagcartaoApi~alterarStatusImpressaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricoImpressaoCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_alterar_status_impressao}}}
     * {{{cartao_resource_alterar_status_impressao_notes}}}
     * @param {Integer} id {{{cartao_resource_alterar_status_impressao_param_id}}}
     * @param {Integer} idStatusImpressao {{{cartao_resource_alterar_status_impressao_param_id_status_impressao}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~alterarStatusImpressaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HistoricoImpressaoCartaoResponse}
     */
    this.alterarStatusImpressaoUsingPUT = function(id, idStatusImpressao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarStatusImpressaoUsingPUT";
      }

      // verify the required parameter 'idStatusImpressao' is set
      if (idStatusImpressao == undefined || idStatusImpressao == null) {
        throw "Missing the required parameter 'idStatusImpressao' when calling alterarStatusImpressaoUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status_impressao': idStatusImpressao
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HistoricoImpressaoCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/alterar-status-impressao', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atribuirPessoaUsingPUT operation.
     * @callback module:api/GlobaltagcartaoApi~atribuirPessoaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_atribuir_pessoa}}}
     * {{{cartao_resource_atribuir_pessoa_notes}}}
     * @param {Integer} id {{{cartao_resource_atribuir_pessoa_param_id_cartao}}}
     * @param {Integer} idPessoa {{{cartao_resource_atribuir_pessoa_param_id_pessoa}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~atribuirPessoaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.atribuirPessoaUsingPUT = function(id, idPessoa, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atribuirPessoaUsingPUT";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling atribuirPessoaUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_pessoa': idPessoa
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/atribuir-titular', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bloquearUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~bloquearUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_bloquear}}}
     * {{{cartao_resource_bloquear_notes}}}
     * @param {Integer} id {{{cartao_resource_bloquear_param_id}}}
     * @param {Integer} idStatus {{{cartao_resource_bloquear_param_id_status}}}
     * @param {String} observacao {{{cartao_resource_bloquear_param_observacao}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~bloquearUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.bloquearUsingPOST = function(id, idStatus, observacao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling bloquearUsingPOST";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling bloquearUsingPOST";
      }

      // verify the required parameter 'observacao' is set
      if (observacao == undefined || observacao == null) {
        throw "Missing the required parameter 'observacao' when calling bloquearUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status': idStatus,
        'observacao': observacao
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/bloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarAlterarSenhaUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~cadastrarAlterarSenhaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_cadastrar_alterar_senha}}}
     * {{{cartao_resource_cadastrar_alterar_senha_notes}}}
     * @param {Integer} id {{{cartao_resource_cadastrar_alterar_senha_param_id}}}
     * @param {String} senha {{{cartao_resource_cadastrar_alterar_senha_param_nova_senha}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~cadastrarAlterarSenhaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.cadastrarAlterarSenhaUsingPOST = function(id, senha, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cadastrarAlterarSenhaUsingPOST";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling cadastrarAlterarSenhaUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/cartoes/{id}/cadastrar-senha', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~cancelarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_cancelar}}}
     * {{{cartao_resource_cancelar_notes}}}
     * @param {Integer} id {{{cartao_resource_cancelar_param_id}}}
     * @param {Integer} idStatus {{{cartao_resource_cancelar_param_id_status}}}
     * @param {String} observacao {{{cartao_resource_cancelar_param_observacao}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~cancelarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.cancelarUsingPOST = function(id, idStatus, observacao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cancelarUsingPOST";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling cancelarUsingPOST";
      }

      // verify the required parameter 'observacao' is set
      if (observacao == undefined || observacao == null) {
        throw "Missing the required parameter 'observacao' when calling cancelarUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status': idStatus,
        'observacao': observacao
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/cancelar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarCartaoImpressaoUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~consultarCartaoImpressaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DadosCartaoImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_consultar_cartao_impressao}}}
     * {{{cartao_resource_consultar_cartao_impressao_notes}}}
     * @param {Integer} id {{{cartao_resource_consultar_cartao_impressao_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~consultarCartaoImpressaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DadosCartaoImpressaoResponse}
     */
    this.consultarCartaoImpressaoUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarCartaoImpressaoUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DadosCartaoImpressaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/consultar-dados-impressao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarDadosReaisCartaoUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~consultarDadosReaisCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DadosCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_consultar_dados_reais_cartao}}}
     * {{{cartao_resource_consultar_dados_reais_cartao_notes}}}
     * @param {Integer} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~consultarDadosReaisCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DadosCartaoResponse}
     */
    this.consultarDadosReaisCartaoUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarDadosReaisCartaoUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DadosCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/consultar-dados-reais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLimiteDisponibilidadeUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~consultarLimiteDisponibilidadeUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_consultar_limite_disponibilidade}}}
     * {{{cartao_resource_consultar_limite_disponibilidade_notes}}}
     * @param {Integer} id {{{cartao_resource_consultar_limite_disponibilidade_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~consultarLimiteDisponibilidadeUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.consultarLimiteDisponibilidadeUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLimiteDisponibilidadeUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLotesCartoesPrePagosUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~consultarLotesCartoesPrePagosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoteCartoesPrePagosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_consultar_lotes_cartoes_pre_pagos}}}
     * {{{cartao_resource_consultar_lotes_cartoes_pre_pagos_notes}}}
     * @param {Integer} id {{{cartao_resource_consultar_lotes_cartoes_pre_pagos_param_id_lote}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~consultarLotesCartoesPrePagosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LoteCartoesPrePagosResponse}
     */
    this.consultarLotesCartoesPrePagosUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLotesCartoesPrePagosUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoteCartoesPrePagosResponse;

      return this.apiClient.callApi(
        '/api/cartoes/lotes-cartoes-pre-pagos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarPortadorUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~consultarPortadorUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_consultar_portador}}}
     * {{{cartao_resource_consultar_portador_notes}}}
     * @param {Integer} id {{{cartao_resource_consultar_portador_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~consultarPortadorUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PortadorResponse}
     */
    this.consultarPortadorUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarPortadorUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PortadorResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/portadores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET9 operation.
     * @callback module:api/GlobaltagcartaoApi~consultarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_consultar}}}
     * {{{cartao_resource_consultar_notes}}}
     * @param {Integer} id {{{cartao_resource_consultar_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~consultarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoDetalheResponse}
     */
    this.consultarUsingGET9 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET9";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoDetalheResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desbloquearSenhaIncorretaUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~desbloquearSenhaIncorretaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_desbloquear_senha_incorreta}}}
     * {{{cartao_resource_desbloquear_senha_incorreta_notes}}}
     * @param {Integer} id {{{cartao_resource_desbloquear_senha_incorreta_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~desbloquearSenhaIncorretaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.desbloquearSenhaIncorretaUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desbloquearSenhaIncorretaUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/desbloquear-senha-incorreta', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desbloquearUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~desbloquearUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_desbloquear}}}
     * {{{cartao_resource_desbloquear_notes}}}
     * @param {Integer} id {{{cartao_resource_desbloquear_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~desbloquearUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.desbloquearUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desbloquearUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/desbloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarLotesCartoesPrePagosUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~gerarLotesCartoesPrePagosUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoteCartoesPrePagosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_gerar_lotes_cartoes_pre_pagos}}}
     * {{{cartao_resource_gerar_lotes_cartoes_pre_pagos_notes}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {Integer} opts.idOrigemComercial {{{lote_cartoes_pre_pagos_persist_id_origem_comercial_value}}}
     * @param {Integer} opts.idProduto {{{lote_cartoes_pre_pagos_persist_id_produto_value}}}
     * @param {Integer} opts.idTipoCartao {{{lote_cartoes_pre_pagos_persist_id_tipo_cartao_value}}}
     * @param {Integer} opts.idImagem {{{lote_cartoes_pre_pagos_persist_id_imagem_value}}}
     * @param {Integer} opts.idEndereco {{{lote_cartoes_pre_pagos_persist_id_endereco_value}}}
     * @param {Integer} opts.quantidadeCartoes {{{lote_cartoes_pre_pagos_persist_quantidade_cartoes_value}}}
     * @param {String} opts.identificadorExterno {{{lote_cartoes_pre_pagos_persist_identificador_externo_value}}}
     * @param {module:api/GlobaltagcartaoApi~gerarLotesCartoesPrePagosUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LoteCartoesPrePagosResponse}
     */
    this.gerarLotesCartoesPrePagosUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idOrigemComercial': opts['idOrigemComercial'],
        'idProduto': opts['idProduto'],
        'idTipoCartao': opts['idTipoCartao'],
        'idImagem': opts['idImagem'],
        'idEndereco': opts['idEndereco'],
        'quantidadeCartoes': opts['quantidadeCartoes'],
        'identificadorExterno': opts['identificadorExterno']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoteCartoesPrePagosResponse;

      return this.apiClient.callApi(
        '/api/cartoes/lotes-cartoes-pre-pagos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarNovaViaCartaoMultiAppUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~gerarNovaViaCartaoMultiAppUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoMultiAppImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_gerar_nova_via_multiplo}}}
     * {{{cartao_resource_gerar_nova_via_multiplo_notes}}}
     * @param {Integer} id {{{cartao_resource_gerar_nova_via_param_id_cartao}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~gerarNovaViaCartaoMultiAppUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoMultiAppImpressaoResponse}
     */
    this.gerarNovaViaCartaoMultiAppUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarNovaViaCartaoMultiAppUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoMultiAppImpressaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/gerar-nova-via-multiplo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarNovaViaUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~gerarNovaViaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_gerar_nova_via}}}
     * {{{cartao_resource_gerar_nova_via_notes}}}
     * @param {Integer} id {{{cartao_resource_gerar_nova_via_param_id_cartao}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~gerarNovaViaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.gerarNovaViaUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarNovaViaUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/gerar-nova-via', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lancarTarifaSegundaViaUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~lancarTarifaSegundaViaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_lancar_tarifa_segunda_via}}}
     * {{{cartao_resource_lancar_tarifa_segunda_via_notes}}}
     * @param {Integer} id {{{cartao_resource_lancar_tarifa_segunda_via_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~lancarTarifaSegundaViaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.lancarTarifaSegundaViaUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling lancarTarifaSegundaViaUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/lancar-tarifa-reemissao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarLotesCartoesPrePagosUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~listarLotesCartoesPrePagosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageLoteCartoesPrePagosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_listar_lotes_cartoes_pre_pagos}}}
     * {{{cartao_resource_listar_lotes_cartoes_pre_pagos_notes}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idOrigemComercial {{{lote_cartoes_pre_pagos_request_id_origem_comercial_value}}}
     * @param {Integer} opts.idProduto {{{lote_cartoes_pre_pagos_request_id_produto_value}}}
     * @param {Integer} opts.idTipoCartao {{{lote_cartoes_pre_pagos_request_id_tipo_cartao_value}}}
     * @param {Integer} opts.idImagem {{{lote_cartoes_pre_pagos_request_id_imagem_value}}}
     * @param {Integer} opts.idEndereco {{{lote_cartoes_pre_pagos_request_id_endereco_value}}}
     * @param {Integer} opts.quantidadeCartoes {{{lote_cartoes_pre_pagos_request_quantidade_cartoes_value}}}
     * @param {String} opts.dataCadastro {{{lote_cartoes_pre_pagos_request_data_cadastro_value}}}
     * @param {String} opts.usuarioCadastro {{{lote_cartoes_pre_pagos_request_usuario_cadastro_value}}}
     * @param {Integer} opts.statusProcessamento {{{lote_cartoes_pre_pagos_request_status_processamento_value}}}
     * @param {String} opts.identificadorExterno {{{lote_cartoes_pre_pagos_request_identificador_externo_value}}}
     * @param {module:api/GlobaltagcartaoApi~listarLotesCartoesPrePagosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageLoteCartoesPrePagosResponse}
     */
    this.listarLotesCartoesPrePagosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idOrigemComercial': opts['idOrigemComercial'],
        'idProduto': opts['idProduto'],
        'idTipoCartao': opts['idTipoCartao'],
        'idImagem': opts['idImagem'],
        'idEndereco': opts['idEndereco'],
        'quantidadeCartoes': opts['quantidadeCartoes'],
        'dataCadastro': opts['dataCadastro'],
        'usuarioCadastro': opts['usuarioCadastro'],
        'statusProcessamento': opts['statusProcessamento'],
        'identificadorExterno': opts['identificadorExterno']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageLoteCartoesPrePagosResponse;

      return this.apiClient.callApi(
        '/api/cartoes/lotes-cartoes-pre-pagos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET11 operation.
     * @callback module:api/GlobaltagcartaoApi~listarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_listar}}}
     * {{{cartao_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idStatusCartao {{{cartao_request_id_status_cartao_value}}}
     * @param {Integer} opts.idEstagioCartao {{{cartao_request_id_estagio_cartao_value}}}
     * @param {Integer} opts.idConta {{{cartao_request_id_conta_value}}}
     * @param {Integer} opts.idPessoa {{{cartao_request_id_pessoa_value}}}
     * @param {Integer} opts.idProduto {{{cartao_request_id_produto_value}}}
     * @param {String} opts.tipoPortador {{{cartao_request_tipo_portador_value}}}
     * @param {String} opts.numeroCartao {{{cartao_request_numero_cartao_value}}}
     * @param {String} opts.nomeImpresso {{{cartao_request_nome_impresso_value}}}
     * @param {String} opts.dataGeracao {{{cartao_request_data_geracao_value}}}
     * @param {String} opts.dataStatusCartao {{{cartao_request_data_status_cartao_value}}}
     * @param {String} opts.dataEstagioCartao {{{cartao_request_data_estagio_cartao_value}}}
     * @param {String} opts.dataValidade {{{cartao_request_data_validade_value}}}
     * @param {String} opts.dataImpressao {{{cartao_request_data_impressao_value}}}
     * @param {String} opts.arquivoImpressao {{{cartao_request_arquivo_impressao_value}}}
     * @param {Integer} opts.flagImpressaoOrigemComercial {{{cartao_request_flag_impressao_origem_comercial_value}}}
     * @param {Integer} opts.flagProvisorio {{{cartao_request_flag_provisorio_value}}}
     * @param {String} opts.codigoDesbloqueio {{{cartao_request_codigo_desbloqueio_value}}}
     * @param {Integer} opts.sequencialCartao {{{cartao_request_sequencial_cartao_value}}}
     * @param {module:api/GlobaltagcartaoApi~listarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCartaoResponse}
     */
    this.listarUsingGET11 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idStatusCartao': opts['idStatusCartao'],
        'idEstagioCartao': opts['idEstagioCartao'],
        'idConta': opts['idConta'],
        'idPessoa': opts['idPessoa'],
        'idProduto': opts['idProduto'],
        'tipoPortador': opts['tipoPortador'],
        'numeroCartao': opts['numeroCartao'],
        'nomeImpresso': opts['nomeImpresso'],
        'dataGeracao': opts['dataGeracao'],
        'dataStatusCartao': opts['dataStatusCartao'],
        'dataEstagioCartao': opts['dataEstagioCartao'],
        'dataValidade': opts['dataValidade'],
        'dataImpressao': opts['dataImpressao'],
        'arquivoImpressao': opts['arquivoImpressao'],
        'flagImpressaoOrigemComercial': opts['flagImpressaoOrigemComercial'],
        'flagProvisorio': opts['flagProvisorio'],
        'codigoDesbloqueio': opts['codigoDesbloqueio'],
        'sequencialCartao': opts['sequencialCartao']
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reativarUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~reativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_reativar}}}
     * {{{cartao_resource_reativar_notes}}}
     * @param {Integer} id {{{cartao_resource_reativar_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~reativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.reativarUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling reativarUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/reativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarCVVUsingPOST operation.
     * @callback module:api/GlobaltagcartaoApi~validarCVVUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_validar_c_v_v}}}
     * {{{cartao_resource_validar_c_v_v_notes}}}
     * @param {Integer} id {{{cartao_resource_validar_c_v_v_param_id}}}
     * @param {module:model/ValidaCVVRequest} validaCVV validaCVV
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~validarCVVUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validarCVVUsingPOST = function(id, validaCVV, opts, callback) {
      opts = opts || {};
      var postBody = validaCVV;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling validarCVVUsingPOST";
      }

      // verify the required parameter 'validaCVV' is set
      if (validaCVV == undefined || validaCVV == null) {
        throw "Missing the required parameter 'validaCVV' when calling validarCVVUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/cartoes/{id}/validar-cvv', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarDadosImpressosBandeiradoUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~validarDadosImpressosBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_validar_dados_impressos_bandeirado}}}
     * {{{cartao_resource_validar_dados_impressos_bandeirado_notes}}}
     * @param {String} numeroCartao {{{cartao_resource_validar_dados_impressos_bandeirado_param_numero_cartao}}}
     * @param {String} nomePortador {{{cartao_resource_validar_dados_impressos_bandeirado_param_nome_portador}}}
     * @param {String} dataValidade {{{cartao_resource_validar_dados_impressos_bandeirado_param_data_validade}}}
     * @param {String} codigoSeguranca {{{cartao_resource_validar_dados_impressos_bandeirado_param_codigo_seguranca}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~validarDadosImpressosBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarDadosImpressosBandeiradoUsingGET = function(numeroCartao, nomePortador, dataValidade, codigoSeguranca, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarDadosImpressosBandeiradoUsingGET";
      }

      // verify the required parameter 'nomePortador' is set
      if (nomePortador == undefined || nomePortador == null) {
        throw "Missing the required parameter 'nomePortador' when calling validarDadosImpressosBandeiradoUsingGET";
      }

      // verify the required parameter 'dataValidade' is set
      if (dataValidade == undefined || dataValidade == null) {
        throw "Missing the required parameter 'dataValidade' when calling validarDadosImpressosBandeiradoUsingGET";
      }

      // verify the required parameter 'codigoSeguranca' is set
      if (codigoSeguranca == undefined || codigoSeguranca == null) {
        throw "Missing the required parameter 'codigoSeguranca' when calling validarDadosImpressosBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'nome_portador': nomePortador,
        'data_validade': dataValidade,
        'codigo_seguranca': codigoSeguranca
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-dados-impressos-bandeirados', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarDadosImpressosNaoBandeiradoUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~validarDadosImpressosNaoBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_validar_dados_impressos_nao_bandeirado}}}
     * {{{cartao_resource_validar_dados_impressos_nao_bandeirado_notes}}}
     * @param {String} numeroCartao {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_numero_cartao}}}
     * @param {String} nomePortador {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_nome_portador}}}
     * @param {String} dataValidade {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_data_validade}}}
     * @param {String} codigoSeguranca {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_codigo_seguranca}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~validarDadosImpressosNaoBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarDadosImpressosNaoBandeiradoUsingGET = function(numeroCartao, nomePortador, dataValidade, codigoSeguranca, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'nomePortador' is set
      if (nomePortador == undefined || nomePortador == null) {
        throw "Missing the required parameter 'nomePortador' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'dataValidade' is set
      if (dataValidade == undefined || dataValidade == null) {
        throw "Missing the required parameter 'dataValidade' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'codigoSeguranca' is set
      if (codigoSeguranca == undefined || codigoSeguranca == null) {
        throw "Missing the required parameter 'codigoSeguranca' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'nome_portador': nomePortador,
        'data_validade': dataValidade,
        'codigo_seguranca': codigoSeguranca
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-dados-impressos-nao-bandeirados', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarDe55CartaoMastercardUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~validarDe55CartaoMastercardUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_validar_de55_cartao_mastercard}}}
     * {{{cartao_resource_validar_de55_cartao_mastercard_notes}}}
     * @param {String} numeroCartao {{{cartao_resource_validar_de55_cartao_mastercard_param_numero_cartao}}}
     * @param {String} criptograma {{{cartao_resource_validar_de55_cartao_mastercard_param_criptograma}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~validarDe55CartaoMastercardUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarDe55CartaoMastercardUsingGET = function(numeroCartao, criptograma, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarDe55CartaoMastercardUsingGET";
      }

      // verify the required parameter 'criptograma' is set
      if (criptograma == undefined || criptograma == null) {
        throw "Missing the required parameter 'criptograma' when calling validarDe55CartaoMastercardUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'criptograma': criptograma
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-de55-mastercard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarSenhaUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~validarSenhaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaSenhaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_validar_senha}}}
     * {{{cartao_resource_validar_senha_notes}}}
     * @param {Integer} id {{{cartao_resource_validar_senha_param_id}}}
     * @param {String} senha {{{cartao_resource_validar_senha_param_senha}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~validarSenhaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaSenhaCartaoResponse}
     */
    this.validarSenhaUsingGET = function(id, senha, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling validarSenhaUsingGET";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling validarSenhaUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaSenhaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/validar-senha', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarTarjaUsingGET operation.
     * @callback module:api/GlobaltagcartaoApi~validarTarjaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_resource_validar_tarja}}}
     * {{{cartao_resource_validar_tarja_notes}}}
     * @param {String} numeroCartao {{{cartao_resource_validar_tarja_param_numero_cartao}}}
     * @param {String} trilha1 {{{cartao_resource_validar_tarja_param_trilha1}}}
     * @param {String} trilha2 {{{cartao_resource_validar_tarja_param_trilha2}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Authorization
     * @param {module:api/GlobaltagcartaoApi~validarTarjaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarTarjaUsingGET = function(numeroCartao, trilha1, trilha2, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarTarjaUsingGET";
      }

      // verify the required parameter 'trilha1' is set
      if (trilha1 == undefined || trilha1 == null) {
        throw "Missing the required parameter 'trilha1' when calling validarTarjaUsingGET";
      }

      // verify the required parameter 'trilha2' is set
      if (trilha2 == undefined || trilha2 == null) {
        throw "Missing the required parameter 'trilha2' when calling validarTarjaUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'trilha1': trilha1,
        'trilha2': trilha2
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-tarja', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
