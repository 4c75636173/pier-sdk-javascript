(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AjusteResponse', '../model/LimiteDisponibilidadeResponse', '../model/ContaResponse', '../model/BoletoResponse', '../model/DividaClienteResponse', '../model/DetalhesFaturaConsignadaResponse', '../model/FaturaConsignadaDetalheResponse', '../model/DetalhesFaturaResponse', '../model/PageTaxasRefinanciamentoResponse', '../model/TransferenciaBancariaResponse', '../model/PageTransferenciaResponse', '../model/ContaDetalheResponse', '../model/CartaoEmbossingResponse', '../model/CartaoEmbossingRequest', '../model/CartaoImpressaoProvisorioResponse', '../model/CartaoImpressaoResponse', '../model/PageFaturaConsignadaResponse', '../model/PageFaturaResponse', '../model/PageHistoricoEventosResponse', '../model/PageHistoricoAssessoriaResponse', '../model/PageHistoricoAtrasoFaturaResponse', '../model/PageTransacaoNaoProcessadaResponse', '../model/PageContaHistoricoPagamentoResponse', '../model/PageTransacoesCorrentesResponse', '../model/PageTransferenciaBancariaResponse', '../model/PageContaResponse', '../model/PageTransacaoResponse', '../model/TransferenciaBancariaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AjusteResponse'), require('../model/LimiteDisponibilidadeResponse'), require('../model/ContaResponse'), require('../model/BoletoResponse'), require('../model/DividaClienteResponse'), require('../model/DetalhesFaturaConsignadaResponse'), require('../model/FaturaConsignadaDetalheResponse'), require('../model/DetalhesFaturaResponse'), require('../model/PageTaxasRefinanciamentoResponse'), require('../model/TransferenciaBancariaResponse'), require('../model/PageTransferenciaResponse'), require('../model/ContaDetalheResponse'), require('../model/CartaoEmbossingResponse'), require('../model/CartaoEmbossingRequest'), require('../model/CartaoImpressaoProvisorioResponse'), require('../model/CartaoImpressaoResponse'), require('../model/PageFaturaConsignadaResponse'), require('../model/PageFaturaResponse'), require('../model/PageHistoricoEventosResponse'), require('../model/PageHistoricoAssessoriaResponse'), require('../model/PageHistoricoAtrasoFaturaResponse'), require('../model/PageTransacaoNaoProcessadaResponse'), require('../model/PageContaHistoricoPagamentoResponse'), require('../model/PageTransacoesCorrentesResponse'), require('../model/PageTransferenciaBancariaResponse'), require('../model/PageContaResponse'), require('../model/PageTransacaoResponse'), require('../model/TransferenciaBancariaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ContaApi = factory(root.Pier.ApiClient, root.Pier.AjusteResponse, root.Pier.LimiteDisponibilidadeResponse, root.Pier.ContaResponse, root.Pier.BoletoResponse, root.Pier.DividaClienteResponse, root.Pier.DetalhesFaturaConsignadaResponse, root.Pier.FaturaConsignadaDetalheResponse, root.Pier.DetalhesFaturaResponse, root.Pier.PageTaxasRefinanciamentoResponse, root.Pier.TransferenciaBancariaResponse, root.Pier.PageTransferenciaResponse, root.Pier.ContaDetalheResponse, root.Pier.CartaoEmbossingResponse, root.Pier.CartaoEmbossingRequest, root.Pier.CartaoImpressaoProvisorioResponse, root.Pier.CartaoImpressaoResponse, root.Pier.PageFaturaConsignadaResponse, root.Pier.PageFaturaResponse, root.Pier.PageHistoricoEventosResponse, root.Pier.PageHistoricoAssessoriaResponse, root.Pier.PageHistoricoAtrasoFaturaResponse, root.Pier.PageTransacaoNaoProcessadaResponse, root.Pier.PageContaHistoricoPagamentoResponse, root.Pier.PageTransacoesCorrentesResponse, root.Pier.PageTransferenciaBancariaResponse, root.Pier.PageContaResponse, root.Pier.PageTransacaoResponse, root.Pier.TransferenciaBancariaPersist);
  }
}(this, function(ApiClient, AjusteResponse, LimiteDisponibilidadeResponse, ContaResponse, BoletoResponse, DividaClienteResponse, DetalhesFaturaConsignadaResponse, FaturaConsignadaDetalheResponse, DetalhesFaturaResponse, PageTaxasRefinanciamentoResponse, TransferenciaBancariaResponse, PageTransferenciaResponse, ContaDetalheResponse, CartaoEmbossingResponse, CartaoEmbossingRequest, CartaoImpressaoProvisorioResponse, CartaoImpressaoResponse, PageFaturaConsignadaResponse, PageFaturaResponse, PageHistoricoEventosResponse, PageHistoricoAssessoriaResponse, PageHistoricoAtrasoFaturaResponse, PageTransacaoNaoProcessadaResponse, PageContaHistoricoPagamentoResponse, PageTransacoesCorrentesResponse, PageTransferenciaBancariaResponse, PageContaResponse, PageTransacaoResponse, TransferenciaBancariaPersist) {
  'use strict';

  /**
   * Conta service.
   * @module api/ContaApi
   * @version 2.33.0
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
     * Callback function to receive the result of the ajustarContaUsingPOST operation.
     * @callback module:api/ContaApi~ajustarContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AjusteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lan\u00C3\u00A7a um ajuste para a conta do id informado
     * Este recurso insere um ajuste para a conta do id informado
     * @param {Integer} id Id Conta
     * @param {Integer} idTipoAjuste C\u00C3\u00B3digo identificador do tipo de ajuste.
     * @param {String} dataAjuste Data do ajuste.
     * @param {Number} valorAjuste Valor do ajuste
     * @param {module:api/ContaApi~ajustarContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AjusteResponse}
     */
    this.ajustarContaUsingPOST = function(id, idTipoAjuste, dataAjuste, valorAjuste, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ajustarContaUsingPOST";
      }

      // verify the required parameter 'idTipoAjuste' is set
      if (idTipoAjuste == undefined || idTipoAjuste == null) {
        throw "Missing the required parameter 'idTipoAjuste' when calling ajustarContaUsingPOST";
      }

      // verify the required parameter 'dataAjuste' is set
      if (dataAjuste == undefined || dataAjuste == null) {
        throw "Missing the required parameter 'dataAjuste' when calling ajustarContaUsingPOST";
      }

      // verify the required parameter 'valorAjuste' is set
      if (valorAjuste == undefined || valorAjuste == null) {
        throw "Missing the required parameter 'valorAjuste' when calling ajustarContaUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'idTipoAjuste': idTipoAjuste,
        'dataAjuste': dataAjuste,
        'valorAjuste': valorAjuste
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AjusteResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/ajustes-financeiros', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarLimiteUsingPUT operation.
     * @callback module:api/ContaApi~alterarLimiteUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o dos limites da conta
     * Esse recurso permite realizar a altera\u00C3\u00A7\u00C3\u00A3o dos Limites de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limiteGlobal Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui.
     * @param {Number} opts.limiteCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais.
     * @param {Number} opts.limiteParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas.
     * @param {Number} opts.limiteParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.
     * @param {Number} opts.limiteSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
     * @param {Number} opts.limiteSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.
     * @param {Number} opts.limiteConsignado Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos.
     * @param {Number} opts.limiteInternacionalCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais.
     * @param {Number} opts.limiteInternacionalParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas.
     * @param {Number} opts.limiteInternacionalParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
     * @param {Number} opts.limiteInternacionalSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional.
     * @param {Number} opts.limiteInternacionalSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento.
     * @param {Number} opts.limiteMaximo Valor m\u00C3\u00A1ximo do limite de cr\u00C3\u00A9dito para realizar transa\u00C3\u00A7\u00C3\u00B5es.
     * @param {module:api/ContaApi~alterarLimiteUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.alterarLimiteUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarLimiteUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'limiteGlobal': opts['limiteGlobal'],
        'limiteCompra': opts['limiteCompra'],
        'limiteParcelado': opts['limiteParcelado'],
        'limiteParcelas': opts['limiteParcelas'],
        'limiteSaqueGlobal': opts['limiteSaqueGlobal'],
        'limiteSaquePeriodo': opts['limiteSaquePeriodo'],
        'limiteConsignado': opts['limiteConsignado'],
        'limiteInternacionalCompra': opts['limiteInternacionalCompra'],
        'limiteInternacionalParcelado': opts['limiteInternacionalParcelado'],
        'limiteInternacionalParcelas': opts['limiteInternacionalParcelas'],
        'limiteInternacionalSaqueGlobal': opts['limiteInternacionalSaqueGlobal'],
        'limiteInternacionalSaquePeriodo': opts['limiteInternacionalSaquePeriodo'],
        'limiteMaximo': opts['limiteMaximo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/alterar-limites', 'PUT',
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
     * Callback function to receive the result of the consultarFaturaConsignadaAbertaUsingGET operation.
     * @callback module:api/ContaApi~consultarFaturaConsignadaAbertaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetalhesFaturaConsignadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar a fatura consignadas abertas da conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar a fatura consignada em aberto
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {String} opts.dataVencimento Data Vencimento
     * @param {module:api/ContaApi~consultarFaturaConsignadaAbertaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DetalhesFaturaConsignadaResponse}
     */
    this.consultarFaturaConsignadaAbertaUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarFaturaConsignadaAbertaUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'dataVencimento': opts['dataVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DetalhesFaturaConsignadaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas-consignadas/consultar-aberta', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarFaturaConsignadaUsingGET operation.
     * @callback module:api/ContaApi~consultarFaturaConsignadaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaturaConsignadaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada fatura consignada
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar uma fatura, atrav\u00C3\u00A9s do id da conta e o id da fatura.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idFatura C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da fatura (id_fatura).
     * @param {module:api/ContaApi~consultarFaturaConsignadaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaturaConsignadaDetalheResponse}
     */
    this.consultarFaturaConsignadaUsingGET = function(id, idFatura, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarFaturaConsignadaUsingGET";
      }

      // verify the required parameter 'idFatura' is set
      if (idFatura == undefined || idFatura == null) {
        throw "Missing the required parameter 'idFatura' when calling consultarFaturaConsignadaUsingGET";
      }


      var pathParams = {
        'id': id,
        'id_fatura': idFatura
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
      var returnType = FaturaConsignadaDetalheResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas-consignadas/{id_fatura}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarFaturaUsingGET operation.
     * @callback module:api/ContaApi~consultarFaturaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetalhesFaturaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Fatura da Conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar os detalhes de uma fatura vinculados a uma determinada conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {String} dataVencimento Data Vencimento.
     * @param {module:api/ContaApi~consultarFaturaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DetalhesFaturaResponse}
     */
    this.consultarFaturaUsingGET = function(id, dataVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarFaturaUsingGET";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling consultarFaturaUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'dataVencimento': dataVencimento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DetalhesFaturaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas/consultar-fechada', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLancamentosFuturosFaturaUsingGET operation.
     * @callback module:api/ContaApi~consultarLancamentosFuturosFaturaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetalhesFaturaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Lan\u00C3\u00A7amentos Futuros da Fatura de uma Conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar os detalhes dos lan\u00C3\u00A7amentos futuros de uma fatura vinculados a uma determinada conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {String} opts.dataVencimento Data Vencimento
     * @param {module:api/ContaApi~consultarLancamentosFuturosFaturaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DetalhesFaturaResponse}
     */
    this.consultarLancamentosFuturosFaturaUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLancamentosFuturosFaturaUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'dataVencimento': opts['dataVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DetalhesFaturaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas/consultar-aberta', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLimiteDisponibilidadeUsingGET1 operation.
     * @callback module:api/ContaApi~consultarLimiteDisponibilidadeUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os limites da conta
     * Este m\u00C3\u00A9todo permite consultar os Limites configurados para uma determinada Conta, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} id Id Conta
     * @param {module:api/ContaApi~consultarLimiteDisponibilidadeUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.consultarLimiteDisponibilidadeUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLimiteDisponibilidadeUsingGET1";
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
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/limites-disponibilidades', 'GET',
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
     * Callback function to receive the result of the consultarUsingGET25 operation.
     * @callback module:api/ContaApi~consultarUsingGET25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria para um banco
     * Este recurso permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada para uma conta banc\u00C3\u00A1ria. De modo geral, esta opera\u00C3\u00A7\u00C3\u00A3o poder\u00C3\u00A1 ser utilizada para uma consulta simples destes detalhes ou para realizar a montagem de um comprovante de 2\u00C2\u00AA via de transfer\u00C3\u00AAncia entre contas.
     * @param {Integer} id Id Conta
     * @param {Integer} idTransferencia Id Transfer\u00C3\u00AAncia
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
     * @param {module:api/ContaApi~consultarUsingGET25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransferenciaBancariaResponse}
     */
    this.consultarUsingGET25 = function(id, idTransferencia, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET25";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET25";
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
     * Callback function to receive the result of the consultarUsingGET26 operation.
     * @callback module:api/ContaApi~consultarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta os detalhes de uma determinada transfer\u00C3\u00AAncia
     * Este m\u00C3\u00A9todo permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada entre contas.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idTransferencia C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id_transferencia).
     * @param {module:api/ContaApi~consultarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaResponse}
     */
    this.consultarUsingGET26 = function(id, idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET26";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET26";
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
      var returnType = PageTransferenciaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes/{id_transferencia}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET6 operation.
     * @callback module:api/ContaApi~consultarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada conta
     * Este m\u00C3\u00A9todo permite consultar dados de uma determinada conta a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~consultarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaDetalheResponse}
     */
    this.consultarUsingGET6 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET6";
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
     * Callback function to receive the result of the listarFaturasConsignadasUsingGET operation.
     * @callback module:api/ContaApi~listarFaturasConsignadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaturaConsignadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as faturas consignadas da conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataVencimento Apresenta a data de vencimento da fatura.
     * @param {module:api/ContaApi~listarFaturasConsignadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaturaConsignadaResponse}
     */
    this.listarFaturasConsignadasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarFaturasConsignadasUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimento': opts['dataVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageFaturaConsignadaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas-consignadas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFaturasUsingGET operation.
     * @callback module:api/ContaApi~listarFaturasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaturaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as faturas da conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataVencimento Data de Vencimento da Fatura.
     * @param {module:api/ContaApi~listarFaturasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaturaResponse}
     */
    this.listarFaturasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarFaturasUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimento': opts['dataVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageFaturaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas', 'GET',
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
     * Callback function to receive the result of the listarUsingGET30 operation.
     * @callback module:api/ContaApi~listarUsingGET30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as transfer\u00C3\u00AAncias banc\u00C3\u00A1rias realizadas
     * Este recurso tem como objetivo permitir que o portador de um Cart\u00C3\u00A3o possa consultar uma lista das Transfer\u00C3\u00AAncias Banc\u00C3\u00A1rias para os Favorecidos cadastrados.
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/ContaApi~listarUsingGET30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaBancariaResponse}
     */
    this.listarUsingGET30 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET30";
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
     * Callback function to receive the result of the listarUsingGET31 operation.
     * @callback module:api/ContaApi~listarUsingGET31Callback
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
     * @param {module:api/ContaApi~listarUsingGET31Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaResponse}
     */
    this.listarUsingGET31 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET31";
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
     * Callback function to receive the result of the listarUsingGET8 operation.
     * @callback module:api/ContaApi~listarUsingGET8Callback
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
     * @param {module:api/ContaApi~listarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaResponse}
     */
    this.listarUsingGET8 = function(opts, callback) {
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
     * Callback function to receive the result of the transferirUsingPOST operation.
     * @callback module:api/ContaApi~transferirUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias
     * Este recurso tem como objetivo permitir que o portador de um cart\u00C3\u00A3o possa realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para uma conta banc\u00C3\u00A1ria. Assim, o valor do cr\u00C3\u00A9dito somado a tarifa para transfer\u00C3\u00AAncia, quando praticada pelo emissor, ser\u00C3\u00A1 debitado da conta de origem, se houver saldo suficiente, e ser\u00C3\u00A1 creditado na conta banc\u00C3\u00A1ria de destino.
     * @param {Integer} id Id Conta
     * @param {module:model/TransferenciaBancariaPersist} transferenciaBancariaPersist transferenciaBancariaPersist
     * @param {module:api/ContaApi~transferirUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the transferirUsingPOST1 operation.
     * @callback module:api/ContaApi~transferirUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferenciaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza uma transfer\u00C3\u00AAncia de Cr\u00C3\u00A9dito para outro cliente do mesmo Emissor
     * Este m\u00C3\u00A9todo permite que um portador de um cart\u00C3\u00A3o possa realizar auma transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para outro cliente do mesmo emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 debitado (id).
     * @param {Integer} idContaDestino C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 creditado (id).
     * @param {Number} valorTransferencia Valor da Transfer\u00C3\u00AAncia.
     * @param {module:api/ContaApi~transferirUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferenciaResponse}
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
      var returnType = PageTransferenciaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
