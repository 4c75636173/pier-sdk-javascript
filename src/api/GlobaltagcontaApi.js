(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AjusteFinanceiroResponse', '../model/AlterarProdutoRequest', '../model/ContaResponse', '../model/AdesaoPagamentoSabadoResponse', '../model/BeneficioPagamentoAtrasoResponse', '../model/BoletoResponse', '../model/DividaClienteResponse', '../model/PageTaxasRefinanciamentoResponse', '../model/ContaDetalheResponse', '../model/TransferenciaDetalheResponse', '../model/ContaMultiAppResponse', '../model/ContaMultiAppPersistValue', '../model/CartaoEmbossingResponse', '../model/CartaoEmbossingRequest', '../model/CartaoImpressaoProvisorioResponse', '../model/CartaoImpressaoResponse', '../model/PageHistoricoEventosResponse', '../model/PageHistoricoAssessoriaResponse', '../model/PageHistoricoAtrasoFaturaResponse', '../model/PageTransacaoNaoProcessadaResponse', '../model/PageTransacoesCorrentesResponse', '../model/PageContaResponse', '../model/PageTransacaoProcessadaNaoProcessadaResponse', '../model/PageTransferenciaResponse', '../model/ContaPersistValue', '../model/EmprestimoPessoalRequest', '../model/EmprestimoPessoalResponse', '../model/PageTransacaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AjusteFinanceiroResponse'), require('../model/AlterarProdutoRequest'), require('../model/ContaResponse'), require('../model/AdesaoPagamentoSabadoResponse'), require('../model/BeneficioPagamentoAtrasoResponse'), require('../model/BoletoResponse'), require('../model/DividaClienteResponse'), require('../model/PageTaxasRefinanciamentoResponse'), require('../model/ContaDetalheResponse'), require('../model/TransferenciaDetalheResponse'), require('../model/ContaMultiAppResponse'), require('../model/ContaMultiAppPersistValue'), require('../model/CartaoEmbossingResponse'), require('../model/CartaoEmbossingRequest'), require('../model/CartaoImpressaoProvisorioResponse'), require('../model/CartaoImpressaoResponse'), require('../model/PageHistoricoEventosResponse'), require('../model/PageHistoricoAssessoriaResponse'), require('../model/PageHistoricoAtrasoFaturaResponse'), require('../model/PageTransacaoNaoProcessadaResponse'), require('../model/PageTransacoesCorrentesResponse'), require('../model/PageContaResponse'), require('../model/PageTransacaoProcessadaNaoProcessadaResponse'), require('../model/PageTransferenciaResponse'), require('../model/ContaPersistValue'), require('../model/EmprestimoPessoalRequest'), require('../model/EmprestimoPessoalResponse'), require('../model/PageTransacaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagcontaApi = factory(root.Pier.ApiClient, root.Pier.AjusteFinanceiroResponse, root.Pier.AlterarProdutoRequest, root.Pier.ContaResponse, root.Pier.AdesaoPagamentoSabadoResponse, root.Pier.BeneficioPagamentoAtrasoResponse, root.Pier.BoletoResponse, root.Pier.DividaClienteResponse, root.Pier.PageTaxasRefinanciamentoResponse, root.Pier.ContaDetalheResponse, root.Pier.TransferenciaDetalheResponse, root.Pier.ContaMultiAppResponse, root.Pier.ContaMultiAppPersistValue, root.Pier.CartaoEmbossingResponse, root.Pier.CartaoEmbossingRequest, root.Pier.CartaoImpressaoProvisorioResponse, root.Pier.CartaoImpressaoResponse, root.Pier.PageHistoricoEventosResponse, root.Pier.PageHistoricoAssessoriaResponse, root.Pier.PageHistoricoAtrasoFaturaResponse, root.Pier.PageTransacaoNaoProcessadaResponse, root.Pier.PageTransacoesCorrentesResponse, root.Pier.PageContaResponse, root.Pier.PageTransacaoProcessadaNaoProcessadaResponse, root.Pier.PageTransferenciaResponse, root.Pier.ContaPersistValue, root.Pier.EmprestimoPessoalRequest, root.Pier.EmprestimoPessoalResponse, root.Pier.PageTransacaoResponse);
  }
}(this, function(ApiClient, AjusteFinanceiroResponse, AlterarProdutoRequest, ContaResponse, AdesaoPagamentoSabadoResponse, BeneficioPagamentoAtrasoResponse, BoletoResponse, DividaClienteResponse, PageTaxasRefinanciamentoResponse, ContaDetalheResponse, TransferenciaDetalheResponse, ContaMultiAppResponse, ContaMultiAppPersistValue, CartaoEmbossingResponse, CartaoEmbossingRequest, CartaoImpressaoProvisorioResponse, CartaoImpressaoResponse, PageHistoricoEventosResponse, PageHistoricoAssessoriaResponse, PageHistoricoAtrasoFaturaResponse, PageTransacaoNaoProcessadaResponse, PageTransacoesCorrentesResponse, PageContaResponse, PageTransacaoProcessadaNaoProcessadaResponse, PageTransferenciaResponse, ContaPersistValue, EmprestimoPessoalRequest, EmprestimoPessoalResponse, PageTransacaoResponse) {
  'use strict';

  /**
   * globaltagconta service.
   * @module api/GlobaltagcontaApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagcontaApi. 
   * @alias module:api/GlobaltagcontaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ajustarContaUsingPOST1 operation.
     * @callback module:api/GlobaltagcontaApi~ajustarContaUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AjusteFinanceiroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_ajustar_conta}}}
     * {{{conta_resource_ajustar_conta_notes}}}
     * @param {Integer} id {{{conta_resource_ajustar_conta_param_id}}}
     * @param {Integer} idTipoAjuste {{{ajuste_persist_id_tipo_ajuste_value}}}
     * @param {String} dataAjuste {{{ajuste_persist_data_ajuste_value}}}
     * @param {Number} valorAjuste {{{ajuste_persist_valor_ajuste_value}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.identificadorExterno {{{ajuste_persist_identificador_externo_value}}}
     * @param {Integer} opts.idTransacaoOriginal {{{ajuste_persist_id_transacao_original}}}
     * @param {module:api/GlobaltagcontaApi~ajustarContaUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AjusteFinanceiroResponse}
     */
    this.ajustarContaUsingPOST1 = function(id, idTipoAjuste, dataAjuste, valorAjuste, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ajustarContaUsingPOST1";
      }

      // verify the required parameter 'idTipoAjuste' is set
      if (idTipoAjuste == undefined || idTipoAjuste == null) {
        throw "Missing the required parameter 'idTipoAjuste' when calling ajustarContaUsingPOST1";
      }

      // verify the required parameter 'dataAjuste' is set
      if (dataAjuste == undefined || dataAjuste == null) {
        throw "Missing the required parameter 'dataAjuste' when calling ajustarContaUsingPOST1";
      }

      // verify the required parameter 'valorAjuste' is set
      if (valorAjuste == undefined || valorAjuste == null) {
        throw "Missing the required parameter 'valorAjuste' when calling ajustarContaUsingPOST1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'idTipoAjuste': idTipoAjuste,
        'dataAjuste': dataAjuste,
        'valorAjuste': valorAjuste,
        'identificadorExterno': opts['identificadorExterno'],
        'idTransacaoOriginal': opts['idTransacaoOriginal']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AjusteFinanceiroResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/ajustes-financeiros', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarProdutoUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~alterarProdutoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_alterar_produto}}}
     * {{{conta_resource_alterar_produto_notes}}}
     * @param {Integer} id {{{conta_resource_alterar_produto_param_id}}}
     * @param {module:model/AlterarProdutoRequest} request request
     * @param {module:api/GlobaltagcontaApi~alterarProdutoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.alterarProdutoUsingPOST = function(id, request, callback) {
      var postBody = request;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarProdutoUsingPOST";
      }

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling alterarProdutoUsingPOST";
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
        '/api/contas/{id}/alterar-produto', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarTitularUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~alterarTitularUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_alterar_titular}}}
     * {{{conta_resource_alterar_titular_notes}}}
     * @param {Integer} id {{{conta_resource_alterar_titular_param_id_conta}}}
     * @param {Integer} idPessoa {{{conta_resource_alterar_titular_param_id_pessoa}}}
     * @param {module:api/GlobaltagcontaApi~alterarTitularUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaResponse}
     */
    this.alterarTitularUsingPOST = function(id, idPessoa, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarTitularUsingPOST";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling alterarTitularUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_pessoa': idPessoa
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ContaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/alterar-titular', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarVencimentoUsingPUT operation.
     * @callback module:api/GlobaltagcontaApi~alterarVencimentoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_alterar_vencimento}}}
     * {{{conta_resource_alterar_vencimento_notes}}}
     * @param {Integer} id {{{conta_resource_alterar_vencimento_param_id}}}
     * @param {Integer} novoDiaVencimento {{{conta_resource_alterar_vencimento_param_novo_dia_vencimento}}}
     * @param {module:api/GlobaltagcontaApi~alterarVencimentoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaResponse}
     */
    this.alterarVencimentoUsingPUT = function(id, novoDiaVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarVencimentoUsingPUT";
      }

      // verify the required parameter 'novoDiaVencimento' is set
      if (novoDiaVencimento == undefined || novoDiaVencimento == null) {
        throw "Missing the required parameter 'novoDiaVencimento' when calling alterarVencimentoUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'novo_dia_vencimento': novoDiaVencimento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ContaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/alterar-vencimento', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ativarAnuidadeUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~ativarAnuidadeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_ativar_anuidade}}}
     * {{{conta_resource_ativar_anuidade_notes}}}
     * @param {Integer} id {{{conta_resource_ativar_anuidade_param_id}}}
     * @param {Integer} idAnuidade {{{anuidade_request_id_anuidade_value}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.DDD {{{anuidade_request_d_d_d_value}}}
     * @param {String} opts.celular {{{anuidade_request_celular_value}}}
     * @param {Integer} opts.idOperadora {{{anuidade_request_id_operadora_value}}}
     * @param {Integer} opts.idOrigemComercial {{{anuidade_request_id_origem_comercial_value}}}
     * @param {module:api/GlobaltagcontaApi~ativarAnuidadeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.ativarAnuidadeUsingPOST = function(id, idAnuidade, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarAnuidadeUsingPOST";
      }

      // verify the required parameter 'idAnuidade' is set
      if (idAnuidade == undefined || idAnuidade == null) {
        throw "Missing the required parameter 'idAnuidade' when calling ativarAnuidadeUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idAnuidade': idAnuidade,
        'DDD': opts['DDD'],
        'celular': opts['celular'],
        'idOperadora': opts['idOperadora'],
        'idOrigemComercial': opts['idOrigemComercial']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/atribuir-anuidade', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ativarEnvioFaturaEmailUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~ativarEnvioFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_ativar_envio_fatura_email}}}
     * {{{conta_resource_ativar_envio_fatura_email_notes}}}
     * @param {Integer} id {{{conta_resource_ativar_envio_fatura_email_param_id}}}
     * @param {module:api/GlobaltagcontaApi~ativarEnvioFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.ativarEnvioFaturaEmailUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarEnvioFaturaEmailUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/ativar-fatura-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bloquearUsingPOST1 operation.
     * @callback module:api/GlobaltagcontaApi~bloquearUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_bloquear}}}
     * {{{conta_resource_bloquear_notes}}}
     * @param {Integer} id {{{conta_resource_bloquear_param_id}}}
     * @param {Integer} idStatus {{{conta_resource_bloquear_param_id_status}}}
     * @param {module:api/GlobaltagcontaApi~bloquearUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaResponse}
     */
    this.bloquearUsingPOST1 = function(id, idStatus, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling bloquearUsingPOST1";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling bloquearUsingPOST1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status': idStatus
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ContaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/bloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~cadastrarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdesaoPagamentoSabadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aderir_pagamento_sabado_recurso_cadastrar}}}
     * {{{aderir_pagamento_sabado_recurso_cadastrar_notas}}}
     * @param {Integer} id {{{aderir_pagamento_sabado_recurso_cadastrar_param_id}}}
     * @param {module:api/GlobaltagcontaApi~cadastrarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdesaoPagamentoSabadoResponse}
     */
    this.cadastrarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cadastrarUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AdesaoPagamentoSabadoResponse;

      return this.apiClient.callApi(
        '/api/adesoes-pagamentos-sabados', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarUsingPOST1 operation.
     * @callback module:api/GlobaltagcontaApi~cancelarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_cancelar}}}
     * {{{conta_resource_cancelar_notes}}}
     * @param {Integer} id {{{conta_resource_cancelar_param_id}}}
     * @param {Integer} idStatus {{{conta_resource_cancelar_param_id_status}}}
     * @param {module:api/GlobaltagcontaApi~cancelarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaResponse}
     */
    this.cancelarUsingPOST1 = function(id, idStatus, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cancelarUsingPOST1";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling cancelarUsingPOST1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status': idStatus
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ContaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/cancelar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarBeneficioPagamentoAtrasoUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~consultarBeneficioPagamentoAtrasoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BeneficioPagamentoAtrasoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_consultar_beneficio_pagamento_atraso}}}
     * {{{conta_resource_consultar_beneficio_pagamento_atraso_notes}}}
     * @param {Integer} id {{{conta_resource_consultar_beneficio_pagamento_atraso_param_id}}}
     * @param {module:api/GlobaltagcontaApi~consultarBeneficioPagamentoAtrasoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BeneficioPagamentoAtrasoResponse}
     */
    this.consultarBeneficioPagamentoAtrasoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarBeneficioPagamentoAtrasoUsingGET";
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
      var returnType = BeneficioPagamentoAtrasoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/consultar-beneficio-pagamento-atraso', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarBoletoEmitidoUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~consultarBoletoEmitidoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_consultar_boleto_emitido}}}
     * {{{conta_resource_consultar_boleto_emitido_notes}}}
     * @param {Integer} id {{{conta_resource_consultar_boleto_emitido_param_id}}}
     * @param {module:api/GlobaltagcontaApi~consultarBoletoEmitidoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoResponse}
     */
    this.consultarBoletoEmitidoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarBoletoEmitidoUsingGET";
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
      var returnType = BoletoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/consultar-dados-pagamento-fatura', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarDividaAtualizadaClienteUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~consultarDividaAtualizadaClienteUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DividaClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_consultar_divida_atualizada_cliente}}}
     * {{{conta_resource_consultar_divida_atualizada_cliente_notes}}}
     * @param {Integer} id {{{conta_resource_consultar_divida_atualizada_cliente_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataVencimento {{{divida_cliente_request_data_vencimento_value}}}
     * @param {Integer} opts.idEscritorioCobranca {{{divida_cliente_request_id_escritorio_cobranca_value}}}
     * @param {module:api/GlobaltagcontaApi~consultarDividaAtualizadaClienteUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DividaClienteResponse}
     */
    this.consultarDividaAtualizadaClienteUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarDividaAtualizadaClienteUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimento': opts['dataVencimento'],
        'idEscritorioCobranca': opts['idEscritorioCobranca']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DividaClienteResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/recuperar-divida-atualizada', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTaxasTarifasUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~consultarTaxasTarifasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTaxasRefinanciamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_consultar_taxas_tarifas}}}
     * {{{conta_resource_consultar_taxas_tarifas_notes}}}
     * @param {Integer} id {{{conta_resource_consultar_taxas_tarifas_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcontaApi~consultarTaxasTarifasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTaxasRefinanciamentoResponse}
     */
    this.consultarTaxasTarifasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTaxasTarifasUsingGET";
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
      var returnType = PageTaxasRefinanciamentoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/consultar-taxas-tarifas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET1 operation.
     * @callback module:api/GlobaltagcontaApi~consultarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AdesaoPagamentoSabadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aderir_pagamento_sabado_recurso_consultar}}}
     * {{{aderir_pagamento_sabado_recurso_consultar_notas}}}
     * @param {Integer} id {{{aderir_pagamento_sabado_recurso_consultar_param_id}}}
     * @param {String} dataVencimento {{{aderir_pagamento_sabado_recurso_consultar_param_data_vencimento}}}
     * @param {module:api/GlobaltagcontaApi~consultarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdesaoPagamentoSabadoResponse}
     */
    this.consultarUsingGET1 = function(id, dataVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET1";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling consultarUsingGET1";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'dataVencimento': dataVencimento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AdesaoPagamentoSabadoResponse;

      return this.apiClient.callApi(
        '/api/adesoes-pagamentos-sabados', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET16 operation.
     * @callback module:api/GlobaltagcontaApi~consultarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_consultar}}}
     * {{{conta_resource_consultar_notes}}}
     * @param {Integer} id {{{conta_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcontaApi~consultarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaDetalheResponse}
     */
    this.consultarUsingGET16 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET16";
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
      var returnType = ContaDetalheResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET51 operation.
     * @callback module:api/GlobaltagcontaApi~consultarUsingGET51Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_resource_consultar}}}
     * {{{transferencia_resource_consultar_notes}}}
     * @param {Integer} id {{{transferencia_resource_consultar_param_id_conta}}}
     * @param {Integer} idTransferencia {{{transferencia_resource_consultar_param_id_transferencia}}}
     * @param {module:api/GlobaltagcontaApi~consultarUsingGET51Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaDetalheResponse}
     */
    this.consultarUsingGET51 = function(id, idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET51";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET51";
      }


      var pathParams = {
        'id': id,
        'id_transferencia': idTransferencia
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
      var returnType = TransferenciaDetalheResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes/{id_transferencia}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the criarContasMultiAppUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~criarContasMultiAppUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaMultiAppResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_cadastrar_conta_multiapp}}}
     * {{{conta_resource_cadastrar_conta_multiapp_notes}}}
     * @param {module:model/ContaMultiAppPersistValue} contaMultiAppPersist contaMultiAppPersist
     * @param {module:api/GlobaltagcontaApi~criarContasMultiAppUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaMultiAppResponse}
     */
    this.criarContasMultiAppUsingPOST = function(contaMultiAppPersist, callback) {
      var postBody = contaMultiAppPersist;

      // verify the required parameter 'contaMultiAppPersist' is set
      if (contaMultiAppPersist == undefined || contaMultiAppPersist == null) {
        throw "Missing the required parameter 'contaMultiAppPersist' when calling criarContasMultiAppUsingPOST";
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
      var returnType = ContaMultiAppResponse;

      return this.apiClient.callApi(
        '/api/contas/cadastrar-conta-multiapp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarEnvioFaturaEmailUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~desativarEnvioFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_desativar_envio_fatura_email}}}
     * {{{conta_resource_desativar_envio_fatura_email_notes}}}
     * @param {Integer} id {{{conta_resource_desativar_envio_fatura_email_param_id}}}
     * @param {module:api/GlobaltagcontaApi~desativarEnvioFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.desativarEnvioFaturaEmailUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarEnvioFaturaEmailUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/desativar-fatura-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarBoletoRecargaUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~gerarBoletoRecargaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_gerar_boleto_recarga}}}
     * {{{conta_resource_gerar_boleto_recarga_notes}}}
     * @param {Integer} id {{{conta_resource_gerar_boleto_recarga_param_id}}}
     * @param {Number} valor {{{boleto_recarga_request_valor_value}}}
     * @param {String} dataVencimento {{{boleto_recarga_request_data_vencimento_value}}}
     * @param {module:api/GlobaltagcontaApi~gerarBoletoRecargaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoResponse}
     */
    this.gerarBoletoRecargaUsingPOST = function(id, valor, dataVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarBoletoRecargaUsingPOST";
      }

      // verify the required parameter 'valor' is set
      if (valor == undefined || valor == null) {
        throw "Missing the required parameter 'valor' when calling gerarBoletoRecargaUsingPOST";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling gerarBoletoRecargaUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'valor': valor,
        'dataVencimento': dataVencimento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BoletoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/gerar-boleto-recarga', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarCartaoEmbossingUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~gerarCartaoEmbossingUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoEmbossingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_gerar_cartao_embossing}}}
     * {{{conta_resource_gerar_cartao_embossing_notes}}}
     * @param {Integer} id {{{conta_resource_gerar_cartao_embossing_param_id}}}
     * @param {module:model/CartaoEmbossingRequest} cartaoEmbossingRequest cartaoEmbossingRequest
     * @param {module:api/GlobaltagcontaApi~gerarCartaoEmbossingUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoEmbossingResponse}
     */
    this.gerarCartaoEmbossingUsingPOST = function(id, cartaoEmbossingRequest, callback) {
      var postBody = cartaoEmbossingRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarCartaoEmbossingUsingPOST";
      }

      // verify the required parameter 'cartaoEmbossingRequest' is set
      if (cartaoEmbossingRequest == undefined || cartaoEmbossingRequest == null) {
        throw "Missing the required parameter 'cartaoEmbossingRequest' when calling gerarCartaoEmbossingUsingPOST";
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
      var returnType = CartaoEmbossingResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/gerar-cartao-grafica', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarCartaoProvisorioUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~gerarCartaoProvisorioUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressaoProvisorioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_gerar_cartao_provisorio}}}
     * {{{conta_resource_gerar_cartao_provisorio_notes}}}
     * @param {Integer} id {{{conta_resource_gerar_cartao_provisorio_param_id_conta}}}
     * @param {module:api/GlobaltagcontaApi~gerarCartaoProvisorioUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoImpressaoProvisorioResponse}
     */
    this.gerarCartaoProvisorioUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarCartaoProvisorioUsingPOST";
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
      var returnType = CartaoImpressaoProvisorioResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/gerar-cartao-provisorio', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarCartaoUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~gerarCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_gerar_cartao}}}
     * {{{conta_resource_gerar_cartao_notes}}}
     * @param {Integer} id {{{conta_resource_gerar_cartao_param_id}}}
     * @param {Integer} idPessoa {{{conta_resource_gerar_cartao_param_id_pessoa}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoPlastico {{{conta_resource_gerar_cartao_param_id_tipo_plastico}}}
     * @param {module:api/GlobaltagcontaApi~gerarCartaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoImpressaoResponse}
     */
    this.gerarCartaoUsingPOST = function(id, idPessoa, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarCartaoUsingPOST";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling gerarCartaoUsingPOST";
      }


      var pathParams = {
        'id': id,
        'id_pessoa': idPessoa
      };
      var queryParams = {
        'id_tipo_plastico': opts['idTipoPlastico']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoImpressaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/pessoas/{id_pessoa}/gerar-cartao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarCartaoVirtualUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~gerarCartaoVirtualUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_gerar_cartao_virtual}}}
     * {{{conta_resource_gerar_cartao_virtual_notes}}}
     * @param {Integer} id {{{conta_resource_gerar_cartao_virtual_param_id}}}
     * @param {String} dataValidade {{{conta_resource_gerar_cartao_virtual_param_data_validade}}}
     * @param {module:api/GlobaltagcontaApi~gerarCartaoVirtualUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoImpressaoResponse}
     */
    this.gerarCartaoVirtualUsingPOST = function(id, dataValidade, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarCartaoVirtualUsingPOST";
      }

      // verify the required parameter 'dataValidade' is set
      if (dataValidade == undefined || dataValidade == null) {
        throw "Missing the required parameter 'dataValidade' when calling gerarCartaoVirtualUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'dataValidade': dataValidade
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoImpressaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/gerar-cartao-virtual', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarHistoricoAlteracoesLimitesUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~listarHistoricoAlteracoesLimitesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoEventosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_listar_historico_alteracoes_limites}}}
     * {{{conta_resource_listar_historico_alteracoes_limites_notes}}}
     * @param {Integer} id {{{conta_resource_listar_historico_alteracoes_limites_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcontaApi~listarHistoricoAlteracoesLimitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoEventosResponse}
     */
    this.listarHistoricoAlteracoesLimitesUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoAlteracoesLimitesUsingGET";
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
      var returnType = PageHistoricoEventosResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/historicos-alteracoes-limites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarHistoricoAssessoriaUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~listarHistoricoAssessoriaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoAssessoriaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_listar_historico_assessoria}}}
     * {{{conta_resource_listar_historico_assessoria_notes}}}
     * @param {Integer} id {{{conta_resource_listar_historico_assessoria_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcontaApi~listarHistoricoAssessoriaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoAssessoriaResponse}
     */
    this.listarHistoricoAssessoriaUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoAssessoriaUsingGET";
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
      var returnType = PageHistoricoAssessoriaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/historicos-assessorias-cobranca', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarHistoricoAtrasosFaturasUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~listarHistoricoAtrasosFaturasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoAtrasoFaturaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_listar_historico_atrasos_faturas}}}
     * {{{conta_resource_listar_historico_atrasos_faturas_notes}}}
     * @param {Integer} id {{{conta_resource_listar_historico_atrasos_faturas_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcontaApi~listarHistoricoAtrasosFaturasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoAtrasoFaturaResponse}
     */
    this.listarHistoricoAtrasosFaturasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoAtrasosFaturasUsingGET";
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
      var returnType = PageHistoricoAtrasoFaturaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/historicos-faturas-atrasos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarNaoProcessadasUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~listarNaoProcessadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacaoNaoProcessadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transacoes_correntes_resource_listar_nao_processadas}}}
     * {{{transacoes_correntes_resource_listar_nao_processadas_notes}}}
     * @param {Integer} id {{{transacoes_correntes_resource_listar_nao_processadas_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataInicio {{{transacoes_nao_processadas_request_data_inicio_value}}}
     * @param {String} opts.dataFim {{{transacoes_nao_processadas_request_data_fim_value}}}
     * @param {module:api/GlobaltagcontaApi~listarNaoProcessadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransacaoNaoProcessadaResponse}
     */
    this.listarNaoProcessadasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarNaoProcessadasUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataInicio': opts['dataInicio'],
        'dataFim': opts['dataFim']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTransacaoNaoProcessadaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transacoes/listar-nao-processadas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarProcessadasUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~listarProcessadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacoesCorrentesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transacoes_correntes_resource_listar_processadas}}}
     * {{{transacoes_correntes_resource_listar_processadas_notes}}}
     * @param {Integer} id {{{transacoes_correntes_resource_listar_processadas_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataVencimento {{{transacoes_processadas_request_data_vencimento_value}}}
     * @param {String} opts.dataInicio {{{transacoes_processadas_request_data_inicio_value}}}
     * @param {String} opts.dataFim {{{transacoes_processadas_request_data_fim_value}}}
     * @param {Integer} opts.idTipoTransacao {{{transacoes_processadas_request_tipo_transacao}}}
     * @param {Integer} opts.recuperaEncargos {{{transacoes_processadas_request_recupera_encargos}}}
     * @param {module:api/GlobaltagcontaApi~listarProcessadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransacoesCorrentesResponse}
     */
    this.listarProcessadasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarProcessadasUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimento': opts['dataVencimento'],
        'dataInicio': opts['dataInicio'],
        'dataFim': opts['dataFim'],
        'idTipoTransacao': opts['idTipoTransacao'],
        'recuperaEncargos': opts['recuperaEncargos']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTransacoesCorrentesResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transacoes/listar-processadas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET19 operation.
     * @callback module:api/GlobaltagcontaApi~listarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_listar}}}
     * {{{conta_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idProduto {{{conta_request_id_produto_value}}}
     * @param {Integer} opts.idOrigemComercial {{{conta_request_id_origem_comercial_value}}}
     * @param {Integer} opts.idPessoa {{{conta_request_id_pessoa_value}}}
     * @param {Integer} opts.idStatusConta {{{conta_request_id_status_conta_value}}}
     * @param {Integer} opts.diaVencimento {{{conta_request_dia_vencimento_value}}}
     * @param {Integer} opts.melhorDiaCompra {{{conta_request_melhor_dia_compra_value}}}
     * @param {String} opts.dataStatusConta {{{conta_request_data_status_conta_value}}}
     * @param {String} opts.dataCadastro {{{conta_request_data_cadastro_value}}}
     * @param {String} opts.dataUltimaAlteracaoVencimento {{{conta_request_data_ultima_alteracao_vencimento_value}}}
     * @param {module:api/GlobaltagcontaApi~listarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaResponse}
     */
    this.listarUsingGET19 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idProduto': opts['idProduto'],
        'idOrigemComercial': opts['idOrigemComercial'],
        'idPessoa': opts['idPessoa'],
        'idStatusConta': opts['idStatusConta'],
        'diaVencimento': opts['diaVencimento'],
        'melhorDiaCompra': opts['melhorDiaCompra'],
        'dataStatusConta': opts['dataStatusConta'],
        'dataCadastro': opts['dataCadastro'],
        'dataUltimaAlteracaoVencimento': opts['dataUltimaAlteracaoVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageContaResponse;

      return this.apiClient.callApi(
        '/api/contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET61 operation.
     * @callback module:api/GlobaltagcontaApi~listarUsingGET61Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacaoProcessadaNaoProcessadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transacoes_correntes_resource_listar_nao_processadas_e_processadas}}}
     * {{{transacoes_correntes_resource_listar_nao_processadas_e_processadas_notes}}}
     * @param {Integer} id {{{transacoes_correntes_resource_listar_nao_processadas_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataVencimento {{{transacoes_processadas_request_data_vencimento_value}}}
     * @param {String} opts.dataInicio {{{transacoes_processadas_request_data_inicio_value}}}
     * @param {String} opts.dataFim {{{transacoes_processadas_request_data_fim_value}}}
     * @param {Integer} opts.idTipoTransacao {{{transacoes_processadas_request_tipo_transacao}}}
     * @param {module:api/GlobaltagcontaApi~listarUsingGET61Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransacaoProcessadaNaoProcessadaResponse}
     */
    this.listarUsingGET61 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET61";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimento': opts['dataVencimento'],
        'dataInicio': opts['dataInicio'],
        'dataFim': opts['dataFim'],
        'idTipoTransacao': opts['idTipoTransacao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTransacaoProcessadaNaoProcessadaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET63 operation.
     * @callback module:api/GlobaltagcontaApi~listarUsingGET63Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_resource_listar}}}
     * {{{transferencia_resource_listar_notes}}}
     * @param {Integer} id {{{transferencia_resource_listar_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTransferencia {{{transferencia_request_id_transferencia_value}}}
     * @param {Integer} opts.idContaOrigem {{{transferencia_request_id_conta_origem_value}}}
     * @param {Integer} opts.idContaDestino {{{transferencia_request_id_conta_destino_value}}}
     * @param {Number} opts.valorTransferencia {{{transferencia_request_valor_transferencia_value}}}
     * @param {String} opts.dataTransferencia {{{transferencia_request_data_transferencia_value}}}
     * @param {module:api/GlobaltagcontaApi~listarUsingGET63Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaResponse}
     */
    this.listarUsingGET63 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET63";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTransferencia': opts['idTransferencia'],
        'idContaOrigem': opts['idContaOrigem'],
        'idContaDestino': opts['idContaDestino'],
        'valorTransferencia': opts['valorTransferencia'],
        'dataTransferencia': opts['dataTransferencia']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTransferenciaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reativarUsingPOST1 operation.
     * @callback module:api/GlobaltagcontaApi~reativarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_reativar}}}
     * {{{conta_resource_reativar_notes}}}
     * @param {Integer} id {{{conta_resource_reativar_param_id}}}
     * @param {module:api/GlobaltagcontaApi~reativarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.reativarUsingPOST1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling reativarUsingPOST1";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/reativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST9 operation.
     * @callback module:api/GlobaltagcontaApi~salvarUsingPOST9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_salvar}}}
     * {{{conta_resource_salvar_notes}}}
     * @param {module:model/ContaPersistValue} contaPersist contaPersist
     * @param {module:api/GlobaltagcontaApi~salvarUsingPOST9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaResponse}
     */
    this.salvarUsingPOST9 = function(contaPersist, callback) {
      var postBody = contaPersist;

      // verify the required parameter 'contaPersist' is set
      if (contaPersist == undefined || contaPersist == null) {
        throw "Missing the required parameter 'contaPersist' when calling salvarUsingPOST9";
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
      var returnType = ContaResponse;

      return this.apiClient.callApi(
        '/api/contas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the simularEmprestimoFinanciamentoUsingPOST operation.
     * @callback module:api/GlobaltagcontaApi~simularEmprestimoFinanciamentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmprestimoPessoalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{financiamento_resource_simular_emprestimo_financiamento}}}
     * {{{financiamento_resource_simular_emprestimo_financiamento_notes}}}
     * @param {Integer} id {{{financiamento_resource_simular_emprestimo_financiamento_param_id_conta}}}
     * @param {module:model/EmprestimoPessoalRequest} request request
     * @param {module:api/GlobaltagcontaApi~simularEmprestimoFinanciamentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EmprestimoPessoalResponse}
     */
    this.simularEmprestimoFinanciamentoUsingPOST = function(id, request, callback) {
      var postBody = request;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling simularEmprestimoFinanciamentoUsingPOST";
      }

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling simularEmprestimoFinanciamentoUsingPOST";
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
      var returnType = EmprestimoPessoalResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/simular-emprestimos-financiamentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transacoesUsingGET operation.
     * @callback module:api/GlobaltagcontaApi~transacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_transacoes}}}
     * {{{conta_resource_transacoes_notes}}}
     * @param {Integer} id {{{conta_resource_transacoes_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcontaApi~transacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransacaoResponse}
     */
    this.transacoesUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling transacoesUsingGET";
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
      var returnType = PageTransacaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/timeline', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferirUsingPOST1 operation.
     * @callback module:api/GlobaltagcontaApi~transferirUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{transferencia_resource_transferir}}}
     * {{{transferencia_resource_transferir_notes}}}
     * @param {Integer} id {{{transferencia_resource_transferir_param_id_conta_origem}}}
     * @param {Integer} idContaDestino {{{transferencia_resource_transferir_param_id_conta_destino}}}
     * @param {Number} valorTransferencia {{{transferencia_resource_transferir_param_valor_transferencia}}}
     * @param {module:api/GlobaltagcontaApi~transferirUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaDetalheResponse}
     */
    this.transferirUsingPOST1 = function(id, idContaDestino, valorTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling transferirUsingPOST1";
      }

      // verify the required parameter 'idContaDestino' is set
      if (idContaDestino == undefined || idContaDestino == null) {
        throw "Missing the required parameter 'idContaDestino' when calling transferirUsingPOST1";
      }

      // verify the required parameter 'valorTransferencia' is set
      if (valorTransferencia == undefined || valorTransferencia == null) {
        throw "Missing the required parameter 'valorTransferencia' when calling transferirUsingPOST1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_conta_destino': idContaDestino,
        'valor_transferencia': valorTransferencia
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TransferenciaDetalheResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
