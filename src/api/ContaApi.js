(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AjusteFinanceiroResponse', '../model/AlterarProdutoRequest', '../model/ContaResponse', '../model/BeneficioPagamentoAtrasoResponse', '../model/BoletoResponse', '../model/DividaClienteResponse', '../model/PageTaxasRefinanciamentoResponse', '../model/ContaDetalheResponse', '../model/TransferenciaDetalheResponse', '../model/CartaoEmbossingResponse', '../model/CartaoEmbossingRequest', '../model/CartaoImpressaoProvisorioResponse', '../model/CartaoImpressaoResponse', '../model/PageHistoricoEventosResponse', '../model/PageHistoricoAssessoriaResponse', '../model/PageHistoricoAtrasoFaturaResponse', '../model/PageTransacaoNaoProcessadaResponse', '../model/PageContaHistoricoPagamentoResponse', '../model/PageTransacoesCorrentesResponse', '../model/PageContaResponse', '../model/PageTransferenciaResponse', '../model/EmprestimoPessoalRequest', '../model/EmprestimoPessoalResponse', '../model/PageTransacaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AjusteFinanceiroResponse'), require('../model/AlterarProdutoRequest'), require('../model/ContaResponse'), require('../model/BeneficioPagamentoAtrasoResponse'), require('../model/BoletoResponse'), require('../model/DividaClienteResponse'), require('../model/PageTaxasRefinanciamentoResponse'), require('../model/ContaDetalheResponse'), require('../model/TransferenciaDetalheResponse'), require('../model/CartaoEmbossingResponse'), require('../model/CartaoEmbossingRequest'), require('../model/CartaoImpressaoProvisorioResponse'), require('../model/CartaoImpressaoResponse'), require('../model/PageHistoricoEventosResponse'), require('../model/PageHistoricoAssessoriaResponse'), require('../model/PageHistoricoAtrasoFaturaResponse'), require('../model/PageTransacaoNaoProcessadaResponse'), require('../model/PageContaHistoricoPagamentoResponse'), require('../model/PageTransacoesCorrentesResponse'), require('../model/PageContaResponse'), require('../model/PageTransferenciaResponse'), require('../model/EmprestimoPessoalRequest'), require('../model/EmprestimoPessoalResponse'), require('../model/PageTransacaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ContaApi = factory(root.Pier.ApiClient, root.Pier.AjusteFinanceiroResponse, root.Pier.AlterarProdutoRequest, root.Pier.ContaResponse, root.Pier.BeneficioPagamentoAtrasoResponse, root.Pier.BoletoResponse, root.Pier.DividaClienteResponse, root.Pier.PageTaxasRefinanciamentoResponse, root.Pier.ContaDetalheResponse, root.Pier.TransferenciaDetalheResponse, root.Pier.CartaoEmbossingResponse, root.Pier.CartaoEmbossingRequest, root.Pier.CartaoImpressaoProvisorioResponse, root.Pier.CartaoImpressaoResponse, root.Pier.PageHistoricoEventosResponse, root.Pier.PageHistoricoAssessoriaResponse, root.Pier.PageHistoricoAtrasoFaturaResponse, root.Pier.PageTransacaoNaoProcessadaResponse, root.Pier.PageContaHistoricoPagamentoResponse, root.Pier.PageTransacoesCorrentesResponse, root.Pier.PageContaResponse, root.Pier.PageTransferenciaResponse, root.Pier.EmprestimoPessoalRequest, root.Pier.EmprestimoPessoalResponse, root.Pier.PageTransacaoResponse);
  }
}(this, function(ApiClient, AjusteFinanceiroResponse, AlterarProdutoRequest, ContaResponse, BeneficioPagamentoAtrasoResponse, BoletoResponse, DividaClienteResponse, PageTaxasRefinanciamentoResponse, ContaDetalheResponse, TransferenciaDetalheResponse, CartaoEmbossingResponse, CartaoEmbossingRequest, CartaoImpressaoProvisorioResponse, CartaoImpressaoResponse, PageHistoricoEventosResponse, PageHistoricoAssessoriaResponse, PageHistoricoAtrasoFaturaResponse, PageTransacaoNaoProcessadaResponse, PageContaHistoricoPagamentoResponse, PageTransacoesCorrentesResponse, PageContaResponse, PageTransferenciaResponse, EmprestimoPessoalRequest, EmprestimoPessoalResponse, PageTransacaoResponse) {
  'use strict';

  /**
   * Conta service.
   * @module api/ContaApi
   * @version 2.50.17
   */

  /**
   * Constructs a new ContaApi. 
   * @alias module:api/ContaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ajustarContaUsingPOST1 operation.
     * @callback module:api/ContaApi~ajustarContaUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AjusteFinanceiroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lan\u00C3\u00A7a um ajuste para a conta do id informado
     * Este recurso insere um ajuste para a conta do id informado
     * @param {Integer} id Id Conta
     * @param {Integer} idTipoAjuste C\u00C3\u00B3digo identificador do tipo de ajuste.
     * @param {String} dataAjuste Data do ajuste no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ.
     * @param {Number} valorAjuste Valor do ajuste
     * @param {Object} opts Optional parameters
     * @param {String} opts.identificadorExterno Identificador Externo
     * @param {module:api/ContaApi~ajustarContaUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
        'identificadorExterno': opts['identificadorExterno']
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
     * @callback module:api/ContaApi~alterarProdutoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera o produto associado \u00C3\u00A0 conta.
     * O recurso permite fazer modifica\u00C3\u00A7\u00C3\u00A3o do produto associado \u00C3\u00A0 conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:model/AlterarProdutoRequest} request request
     * @param {module:api/ContaApi~alterarProdutoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~alterarTitularUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o de uma Pessoa tilular da conta
     * Esta m\u00C3\u00A9todo permite altera a pessoa de uma conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id)
     * @param {Integer} idPessoa C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de uma Pessoa (id).
     * @param {module:api/ContaApi~alterarTitularUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~alterarVencimentoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o do dia de vencimento das faturas da conta
     * Esse recurso permite alterar o vencimento de uma conta especifica.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} novoDiaVencimento Novo dia de vencimento.
     * @param {module:api/ContaApi~alterarVencimentoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~ativarAnuidadeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atribuir Anuidade
     * Esse recurso permite configurar qual a regra de Anuidade que ser\u00C3\u00A1 atribu\u00C3\u00ADda a uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idAnuidade Identificador da anuidade
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.DDD DDD do celular
     * @param {String} opts.celular N\u00C3\u00BAmero do celular
     * @param {Integer} opts.idOperadora Identificador da operadora do celular
     * @param {Integer} opts.idOrigemComercial Identificador da origem comercial
     * @param {module:api/ContaApi~ativarAnuidadeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~ativarEnvioFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     *  Ativa o servi\u00C3\u00A7o de envio de fatura por email
     * Este recurso ativa o servi\u00C3\u00A7o de envio de fatura por email
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~ativarEnvioFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~bloquearUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o bloqueio de uma determinada Conta
     * Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o do bloqueio de uma determinada conta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Conta.
     * @param {module:api/ContaApi~bloquearUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the cancelarUsingPOST1 operation.
     * @callback module:api/ContaApi~cancelarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cancelamento de uma determinada Conta
     * Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o do cancelamento de uma determinada conta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Conta.
     * @param {module:api/ContaApi~cancelarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~consultarBeneficioPagamentoAtrasoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BeneficioPagamentoAtrasoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta a data m\u00C3\u00A1xima para pagamento da fatura em atraso para receber o benef\u00C3\u00ADcio.
     * Este m\u00C3\u00A9todo permite consultar se o cliente tem direito ao benef\u00C3\u00ADcio de pagamento em atraso, em loja, at\u00C3\u00A9 o s\u00C3\u00A1bado subsequente ao vencimento, ficando isento do pagamento de multa, encargos, mora e IOF.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~consultarBeneficioPagamentoAtrasoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~consultarBoletoEmitidoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta os dados de um determinado boleto da fatura
     * Este recurso consulta um boleto da fatura
     * @param {Integer} id Id Conta
     * @param {module:api/ContaApi~consultarBoletoEmitidoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~consultarDividaAtualizadaClienteUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DividaClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta a d\u00C3\u00ADvida atualizada do cliente
     * Este recurso consulta a d\u00C3\u00ADvida atualizada do cliente
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataVencimento Data do vencimento
     * @param {Integer} opts.idEscritorioCobranca C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do escrit\u00C3\u00B3rio de cobran\u00C3\u00A7a
     * @param {module:api/ContaApi~consultarDividaAtualizadaClienteUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~consultarTaxasTarifasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTaxasRefinanciamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite consultar a partir do ID da conta as taxas e tarifas
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores consultem as taxas e tarifas da conta
     * @param {Integer} id ID da conta a ser consultada.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/ContaApi~consultarTaxasTarifasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the consultarUsingGET11 operation.
     * @callback module:api/ContaApi~consultarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada conta
     * Este m\u00C3\u00A9todo permite consultar dados de uma determinada conta a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~consultarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaDetalheResponse}
     */
    this.consultarUsingGET11 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET11";
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
     * Callback function to receive the result of the consultarUsingGET39 operation.
     * @callback module:api/ContaApi~consultarUsingGET39Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta os detalhes de uma determinada transfer\u00C3\u00AAncia
     * Este m\u00C3\u00A9todo permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada entre contas.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idTransferencia C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id_transferencia).
     * @param {module:api/ContaApi~consultarUsingGET39Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaDetalheResponse}
     */
    this.consultarUsingGET39 = function(id, idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET39";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET39";
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
     * Callback function to receive the result of the desativarEnvioFaturaEmailUsingPOST operation.
     * @callback module:api/ContaApi~desativarEnvioFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativa o servi\u00C3\u00A7o de envio de fatura por email
     * Este recurso desativa o servi\u00C3\u00A7o de envio de fatura por email
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~desativarEnvioFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~gerarBoletoRecargaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gera um boleto de recarga
     * Este recurso gera um boleto de recarga
     * @param {Integer} id Id Conta
     * @param {Number} valor Atributo que representa o valor do Boleto Emitido
     * @param {String} dataVencimento Atributo que representa a data de vencimento do boleto
     * @param {module:api/ContaApi~gerarBoletoRecargaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~gerarCartaoEmbossingUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoEmbossingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o envio para gera\u00C3\u00A7\u00C3\u00A3o de um novo cart\u00C3\u00A3o na gr\u00C3\u00A1fica
     * Este recurso permite que seja gerado um novo Cart\u00C3\u00A3o para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id), o idPessoa do Portador e o idTipoPlastico do Cart\u00C3\u00A3o que dever\u00C3\u00A1 ser gerado para impress\u00C3\u00A3o. Esta funcionalidade poder\u00C3\u00A1 ser utilizada para impress\u00C3\u00A3o de cart\u00C3\u00B5es em gr\u00C3\u00A1fica.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:model/CartaoEmbossingRequest} cartaoEmbossingRequest cartaoEmbossingRequest
     * @param {module:api/ContaApi~gerarCartaoEmbossingUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~gerarCartaoProvisorioUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressaoProvisorioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o provisorio
     * Este recurso permite que seja gerado um cart\u00C3\u00A3o provis\u00C3\u00B3rio para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~gerarCartaoProvisorioUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~gerarCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um novo cart\u00C3\u00A3o para impress\u00C3\u00A3o avulsa
     * Este recurso permite que seja gerado um novo Cart\u00C3\u00A3o para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id), o idPessoa do Portador e o idTipoPlastico do Cart\u00C3\u00A3o que dever\u00C3\u00A1 ser gerado para impress\u00C3\u00A3o. Esta funcionalidade poder\u00C3\u00A1 ser utilizada para realizar a impress\u00C3\u00A3o de cart\u00C3\u00B5es em Lojas, Quiosques, Escrit\u00C3\u00B3rios, Terminais de Auto Atendimento, ou outro local que o Emissor escolher, desde que se possua uma impressora de Cart\u00C3\u00B5es habilidade para o fazer, no local.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idPessoa C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoPlastico C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do TipoPlastico (id).
     * @param {module:api/ContaApi~gerarCartaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~gerarCartaoVirtualUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o virtual
     * Este recurso permite que seja gerado um Cart\u00C3\u00A3o virtual para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id). Esta funcionalidade poder\u00C3\u00A1 ser utilizada para realizar a cria\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00B5es virtuaes atraves de um app.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {String} dataValidade Data de Validade
     * @param {module:api/ContaApi~gerarCartaoVirtualUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~listarHistoricoAlteracoesLimitesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoEventosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista o hist\u00C3\u00B3rico de altera\u00C3\u00A7\u00C3\u00B5es de limites da conta
     * Este recurso consulta o hist\u00C3\u00B3rico com as altera\u00C3\u00A7\u00C3\u00B5es de limites da conta informada
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/ContaApi~listarHistoricoAlteracoesLimitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~listarHistoricoAssessoriaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoAssessoriaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista o hist\u00C3\u00B3rico de entradas/sa\u00C3\u00ADdas de assessorias de cobran\u00C3\u00A7a
     * Permite listar todos os registros de entrada e sa\u00C3\u00ADda da Conta em arquivos de integra\u00C3\u00A7\u00C3\u00A3o com empresas de assessorias de cobran\u00C3\u00A7a a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (idConta).
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/ContaApi~listarHistoricoAssessoriaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~listarHistoricoAtrasosFaturasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoAtrasoFaturaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista o historico de atrasos das faturas
     * Este recurso lista o hist\u00C3\u00B3rico do pagamento de faturas em atraso
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/ContaApi~listarHistoricoAtrasosFaturasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~listarNaoProcessadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacaoNaoProcessadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da conta
     * Este m\u00C3\u00A9todo permite que sejam listadas todas as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataInicio Data de in\u00C3\u00ADcio da consulta do extrato no formato yyyy-MM-dd (Par\u00C3\u00A2mentro Ignorado se dataFim n\u00C3\u00A3o for definida).
     * @param {String} opts.dataFim Data fim da consulta do extrato no formato yyyy-MM-dd  (Par\u00C3\u00A2mentro Ignorado se dataInicio n\u00C3\u00A3o for definida).
     * @param {module:api/ContaApi~listarNaoProcessadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarPagamentosUsingGET operation.
     * @callback module:api/ContaApi~listarPagamentosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaHistoricoPagamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista hist\u00C3\u00B3rico de pagamentos da conta
     * Este recurso permite listar todos os Pagamentos realizados por uma determinada Conta independente do seu Status de Processamento.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idPagamento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Pagamento
     * @param {Integer} opts.idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento onde o Pagamento foi realizado, quando este for o local de pagamento
     * @param {Integer} opts.idBanco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria onde o Pagamento foi realizado, quando este for o local de pagamento
     * @param {Integer} opts.idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o
     * @param {String} opts.dataHoraPagamento Data e Hora da realiza\u00C3\u00A7\u00C3\u00A3o do Pagamento. Quando feito em Institui\u00C3\u00A7\u00C3\u00A3o Banc\u00C3\u00A1ria, o hor\u00C3\u00A1rio do pagamento \u00C3\u00A9 exibido com valor zero
     * @param {Integer} opts.status C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Pagamento
     * @param {module:api/ContaApi~listarPagamentosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaHistoricoPagamentoResponse}
     */
    this.listarPagamentosUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarPagamentosUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idPagamento': opts['idPagamento'],
        'idEstabelecimento': opts['idEstabelecimento'],
        'idBanco': opts['idBanco'],
        'idCartao': opts['idCartao'],
        'dataHoraPagamento': opts['dataHoraPagamento'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageContaHistoricoPagamentoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/pagamentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarProcessadasUsingGET operation.
     * @callback module:api/ContaApi~listarProcessadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacoesCorrentesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as transa\u00C3\u00A7\u00C3\u00B5es processadas da conta
     * Este m\u00C3\u00A9todo permite que sejam listadas todas as transa\u00C3\u00A7\u00C3\u00B5es processadas da Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataVencimento Data de vencimento do extrato no formato yyyy-MM-dd.
     * @param {String} opts.dataInicio Data de in\u00C3\u00ADcio da consulta do extrato no formato yyyy-MM-dd (Ignorado quando o par\u00C3\u00A2mentro dataVencimento \u00C3\u00A9 usado).
     * @param {String} opts.dataFim Data fim da consulta do extrato no formato yyyy-MM-dd  (Ignorado quando o par\u00C3\u00A2mentro dataVencimento \u00C3\u00A9 usado).
     * @param {module:api/ContaApi~listarProcessadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
        'dataFim': opts['dataFim']
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
     * Callback function to receive the result of the listarUsingGET13 operation.
     * @callback module:api/ContaApi~listarUsingGET13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista contas existentes na base de dados do Emissor
     * Este recurso permite listar contas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id).
     * @param {Integer} opts.idOrigemComercial C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta.
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id).
     * @param {Integer} opts.idStatusConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do status da conta.
     * @param {Integer} opts.diaVencimento Apresenta o dia de vencimento.
     * @param {Integer} opts.melhorDiaCompra Apresenta o melhor dia de compra.
     * @param {String} opts.dataStatusConta Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela.
     * @param {String} opts.dataCadastro Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
     * @param {String} opts.dataUltimaAlteracaoVencimento Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento.
     * @param {module:api/ContaApi~listarUsingGET13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaResponse}
     */
    this.listarUsingGET13 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET43 operation.
     * @callback module:api/ContaApi~listarUsingGET43Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as transfer\u00C3\u00AAncias realizadas pela conta
     * Este m\u00C3\u00A9todo permite que sejam listadas as transfer\u00C3\u00AAncias realizadas pela conta existentes na base do emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTransferencia C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id).
     * @param {Integer} opts.idContaOrigem C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 debitado para a transfer\u00C3\u00AAncia. (id).
     * @param {Integer} opts.idContaDestino C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 creditado para a transfer\u00C3\u00AAncia. (id).
     * @param {Number} opts.valorTransferencia Valor estabelecido para ser transferido.
     * @param {String} opts.dataTransferencia Data estabelecida para ocorrer a transfer\u00C3\u00AAncia.
     * @param {module:api/ContaApi~listarUsingGET43Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaResponse}
     */
    this.listarUsingGET43 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET43";
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
     * @callback module:api/ContaApi~reativarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de contas.
     * Este recurso permite reativar contas. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
     * @param {Integer} id Id Conta
     * @param {module:api/ContaApi~reativarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the simularEmprestimoFinanciamentoUsingPOST operation.
     * @callback module:api/ContaApi~simularEmprestimoFinanciamentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmprestimoPessoalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Simula valores de presta\u00C3\u00A7\u00C3\u00B5es de empr\u00C3\u00A9stimos/financiamentos
     * Esta opera\u00C3\u00A7\u00C3\u00A3o pode ser utilizada para simular opera\u00C3\u00A7\u00C3\u00B5es financeiras a partir de informa\u00C3\u00A7\u00C3\u00B5es fornecidas pelo usu\u00C3\u00A1rio. Os c\u00C3\u00A1lculos gerados devem ser considerados apenas como refer\u00C3\u00AAncia para as situa\u00C3\u00A7\u00C3\u00B5es reais e n\u00C3\u00A3o como valores oficiais.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:model/EmprestimoPessoalRequest} request request
     * @param {module:api/ContaApi~simularEmprestimoFinanciamentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~transacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite listar uma linha do tempo com os eventos da conta
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir a listagem, em formato de timeline, dos eventos vinculados a uma detemrinada conta. Transa\u00C3\u00A7\u00C3\u00B5es, fechamento da fatura, pagamentos, gera\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00B5es e altera\u00C3\u00A7\u00C3\u00A3o de limite s\u00C3\u00A3o exemplos de eventos contemplados por esta funcionalidade. Neste m\u00C3\u00A9todo, as opera\u00C3\u00A7\u00C3\u00B5es s\u00C3\u00A3o ordenadas de forma decrescente.
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/ContaApi~transacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ContaApi~transferirUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza uma transfer\u00C3\u00AAncia de Cr\u00C3\u00A9dito para outro cliente do mesmo Emissor
     * Este m\u00C3\u00A9todo permite que um portador de um cart\u00C3\u00A3o possa realizar auma transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para outro cliente do mesmo emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 debitado (id).
     * @param {Integer} idContaDestino C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 creditado (id).
     * @param {Number} valorTransferencia Valor da Transfer\u00C3\u00AAncia.
     * @param {module:api/ContaApi~transferirUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
