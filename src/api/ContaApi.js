(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AjusteResponse', '../model/LimiteDisponibilidade', '../model/ContaResponse', '../model/BoletoDeFatura', '../model/ModelDate', '../model/DividaClienteResponse', '../model/DetalhesFaturaConsignadaResponse', '../model/FaturaConsignadaDetalheResponse', '../model/DetalhesFaturaResponse', '../model/LinkTransferenciaBancariaResponse', '../model/PageTransferencias', '../model/ContaDetalheResponse', '../model/CartaoImpressao', '../model/PageFaturasConsignadas', '../model/PageFaturas', '../model/PageHistoricoEventos', '../model/LinkPageHistoricoAssessoriaResponse', '../model/PageHistoricoAtraso', '../model/PageTransacoesCorrentes', '../model/LinkPageTransferenciaBancariaResponse', '../model/PageContas', '../model/PageTransacaoResponse', '../model/TransferenciaBancariaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AjusteResponse'), require('../model/LimiteDisponibilidade'), require('../model/ContaResponse'), require('../model/BoletoDeFatura'), require('../model/ModelDate'), require('../model/DividaClienteResponse'), require('../model/DetalhesFaturaConsignadaResponse'), require('../model/FaturaConsignadaDetalheResponse'), require('../model/DetalhesFaturaResponse'), require('../model/LinkTransferenciaBancariaResponse'), require('../model/PageTransferencias'), require('../model/ContaDetalheResponse'), require('../model/CartaoImpressao'), require('../model/PageFaturasConsignadas'), require('../model/PageFaturas'), require('../model/PageHistoricoEventos'), require('../model/LinkPageHistoricoAssessoriaResponse'), require('../model/PageHistoricoAtraso'), require('../model/PageTransacoesCorrentes'), require('../model/LinkPageTransferenciaBancariaResponse'), require('../model/PageContas'), require('../model/PageTransacaoResponse'), require('../model/TransferenciaBancariaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ContaApi = factory(root.Pier.ApiClient, root.Pier.AjusteResponse, root.Pier.LimiteDisponibilidade, root.Pier.ContaResponse, root.Pier.BoletoDeFatura, root.Pier.ModelDate, root.Pier.DividaClienteResponse, root.Pier.DetalhesFaturaConsignadaResponse, root.Pier.FaturaConsignadaDetalheResponse, root.Pier.DetalhesFaturaResponse, root.Pier.LinkTransferenciaBancariaResponse, root.Pier.PageTransferencias, root.Pier.ContaDetalheResponse, root.Pier.CartaoImpressao, root.Pier.PageFaturasConsignadas, root.Pier.PageFaturas, root.Pier.PageHistoricoEventos, root.Pier.LinkPageHistoricoAssessoriaResponse, root.Pier.PageHistoricoAtraso, root.Pier.PageTransacoesCorrentes, root.Pier.LinkPageTransferenciaBancariaResponse, root.Pier.PageContas, root.Pier.PageTransacaoResponse, root.Pier.TransferenciaBancariaPersist);
  }
}(this, function(ApiClient, AjusteResponse, LimiteDisponibilidade, ContaResponse, BoletoDeFatura, ModelDate, DividaClienteResponse, DetalhesFaturaConsignadaResponse, FaturaConsignadaDetalheResponse, DetalhesFaturaResponse, LinkTransferenciaBancariaResponse, PageTransferencias, ContaDetalheResponse, CartaoImpressao, PageFaturasConsignadas, PageFaturas, PageHistoricoEventos, LinkPageHistoricoAssessoriaResponse, PageHistoricoAtraso, PageTransacoesCorrentes, LinkPageTransferenciaBancariaResponse, PageContas, PageTransacaoResponse, TransferenciaBancariaPersist) {
  'use strict';

  /**
   * Conta service.
   * @module api/ContaApi
   * @version 2.15.5
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
     * @param {Date} dataAjuste Data do ajuste.
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
     * @param {module:model/LimiteDisponibilidade} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o dos limites da conta
     * Esse recurso permite realizar a altera\u00C3\u00A7\u00C3\u00A3o dos Limites de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Number} limiteGlobal Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui.
     * @param {Number} limiteCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais.
     * @param {Number} limiteParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas.
     * @param {Number} limiteParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.
     * @param {Number} limiteSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
     * @param {Number} limiteSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.
     * @param {Number} limiteConsignado Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos.
     * @param {Number} limiteInternacionalCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais.
     * @param {Number} limiteInternacionalParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas.
     * @param {Number} limiteInternacionalParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
     * @param {Number} limiteInternacionalSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional.
     * @param {Number} limiteInternacionalSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento.
     * @param {module:api/ContaApi~alterarLimiteUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidade}
     */
    this.alterarLimiteUsingPUT = function(id, limiteGlobal, limiteCompra, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo, limiteConsignado, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteGlobal' is set
      if (limiteGlobal == undefined || limiteGlobal == null) {
        throw "Missing the required parameter 'limiteGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteCompra' is set
      if (limiteCompra == undefined || limiteCompra == null) {
        throw "Missing the required parameter 'limiteCompra' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteParcelado' is set
      if (limiteParcelado == undefined || limiteParcelado == null) {
        throw "Missing the required parameter 'limiteParcelado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteParcelas' is set
      if (limiteParcelas == undefined || limiteParcelas == null) {
        throw "Missing the required parameter 'limiteParcelas' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteSaqueGlobal' is set
      if (limiteSaqueGlobal == undefined || limiteSaqueGlobal == null) {
        throw "Missing the required parameter 'limiteSaqueGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteSaquePeriodo' is set
      if (limiteSaquePeriodo == undefined || limiteSaquePeriodo == null) {
        throw "Missing the required parameter 'limiteSaquePeriodo' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteConsignado' is set
      if (limiteConsignado == undefined || limiteConsignado == null) {
        throw "Missing the required parameter 'limiteConsignado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalCompra' is set
      if (limiteInternacionalCompra == undefined || limiteInternacionalCompra == null) {
        throw "Missing the required parameter 'limiteInternacionalCompra' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalParcelado' is set
      if (limiteInternacionalParcelado == undefined || limiteInternacionalParcelado == null) {
        throw "Missing the required parameter 'limiteInternacionalParcelado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalParcelas' is set
      if (limiteInternacionalParcelas == undefined || limiteInternacionalParcelas == null) {
        throw "Missing the required parameter 'limiteInternacionalParcelas' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalSaqueGlobal' is set
      if (limiteInternacionalSaqueGlobal == undefined || limiteInternacionalSaqueGlobal == null) {
        throw "Missing the required parameter 'limiteInternacionalSaqueGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalSaquePeriodo' is set
      if (limiteInternacionalSaquePeriodo == undefined || limiteInternacionalSaquePeriodo == null) {
        throw "Missing the required parameter 'limiteInternacionalSaquePeriodo' when calling alterarLimiteUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'limiteGlobal': limiteGlobal,
        'limiteCompra': limiteCompra,
        'limiteParcelado': limiteParcelado,
        'limiteParcelas': limiteParcelas,
        'limiteSaqueGlobal': limiteSaqueGlobal,
        'limiteSaquePeriodo': limiteSaquePeriodo,
        'limiteConsignado': limiteConsignado,
        'limiteInternacionalCompra': limiteInternacionalCompra,
        'limiteInternacionalParcelado': limiteInternacionalParcelado,
        'limiteInternacionalParcelas': limiteInternacionalParcelas,
        'limiteInternacionalSaqueGlobal': limiteInternacionalSaqueGlobal,
        'limiteInternacionalSaquePeriodo': limiteInternacionalSaquePeriodo
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidade;

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
     * Callback function to receive the result of the consultarBoletoEmitidoUsingGET operation.
     * @callback module:api/ContaApi~consultarBoletoEmitidoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoDeFatura} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta os dados de um determinado boleto da fatura
     * Este recurso consulta um boleto da fatura
     * @param {Integer} id Id Conta
     * @param {module:api/ContaApi~consultarBoletoEmitidoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoDeFatura}
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
      var returnType = BoletoDeFatura;

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
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:model/ModelDate} opts.dataVencimento Data do vencimento
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
     * @param {module:model/ModelDate} opts.dataVencimento Data Vencimento
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
     * @param {module:model/ModelDate} dataVencimento Data Vencimento.
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
     * @param {module:model/ModelDate} opts.dataVencimento Data Vencimento
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
     * @param {module:model/LimiteDisponibilidade} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os limites da conta
     * Este m\u00C3\u00A9todo permite consultar os Limites configurados para uma determinada Conta, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} id Id Conta
     * @param {module:api/ContaApi~consultarLimiteDisponibilidadeUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidade}
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
      var returnType = LimiteDisponibilidade;

      return this.apiClient.callApi(
        '/api/contas/{id}/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET20 operation.
     * @callback module:api/ContaApi~consultarUsingGET20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LinkTransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria para um banco
     * Este recurso permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada para uma conta banc\u00C3\u00A1ria. De modo geral, esta opera\u00C3\u00A7\u00C3\u00A3o poder\u00C3\u00A1 ser utilizada para uma consulta simples destes detalhes ou para realizar a montagem de um comprovante de 2\u00C2\u00AA via de transfer\u00C3\u00AAncia entre contas.
     * @param {Integer} id Id Conta
     * @param {Integer} idTransferencia Id Transfer\u00C3\u00AAncia
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
     * @param {module:api/ContaApi~consultarUsingGET20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LinkTransferenciaBancariaResponse}
     */
    this.consultarUsingGET20 = function(id, idTransferencia, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET20";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET20";
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
      var returnType = LinkTransferenciaBancariaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-contas-bancarias/{id_transferencia}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET21 operation.
     * @callback module:api/ContaApi~consultarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferencias} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta os detalhes de uma determinada transfer\u00C3\u00AAncia
     * Este m\u00C3\u00A9todo permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada entre contas.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idTransferencia C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id_transferencia).
     * @param {module:api/ContaApi~consultarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferencias}
     */
    this.consultarUsingGET21 = function(id, idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET21";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET21";
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
      var returnType = PageTransferencias;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes/{id_transferencia}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET3 operation.
     * @callback module:api/ContaApi~consultarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada conta
     * Este m\u00C3\u00A9todo permite consultar dados de uma determinada conta a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~consultarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaDetalheResponse}
     */
    this.consultarUsingGET3 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET3";
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
     * @param {module:model/BoletoDeFatura} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gera um boleto de recarga
     * Este recurso gera um boleto de recarga
     * @param {Integer} id Id Conta
     * @param {Number} valor 
     * @param {module:model/ModelDate} dataVencimento 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/ContaApi~gerarBoletoRecargaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoDeFatura}
     */
    this.gerarBoletoRecargaUsingPOST = function(id, valor, dataVencimento, opts, callback) {
      opts = opts || {};
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
        'page': opts['page'],
        'limit': opts['limit'],
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
      var returnType = BoletoDeFatura;

      return this.apiClient.callApi(
        '/api/contas/{id}/gerar-boleto-recarga', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarCartaoUsingPOST operation.
     * @callback module:api/ContaApi~gerarCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressao} data The data returned by the service call.
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
     * data is of type: {module:model/CartaoImpressao}
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
      var returnType = CartaoImpressao;

      return this.apiClient.callApi(
        '/api/contas/{id}/pessoas/{id_pessoa}/gerar-cartao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFaturasConsignadasUsingGET operation.
     * @callback module:api/ContaApi~listarFaturasConsignadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaturasConsignadas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as faturas consignadas da conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:model/ModelDate} opts.dataVencimento Apresenta a data de vencimento da fatura.
     * @param {module:api/ContaApi~listarFaturasConsignadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaturasConsignadas}
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
      var returnType = PageFaturasConsignadas;

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
     * @param {module:model/PageFaturas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as faturas da conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:model/ModelDate} opts.dataVencimento Data de Vencimento da Fatura.
     * @param {module:api/ContaApi~listarFaturasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaturas}
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
      var returnType = PageFaturas;

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
     * @param {module:model/PageHistoricoEventos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista o hist\u00C3\u00B3rico de altera\u00C3\u00A7\u00C3\u00B5es de limites da conta
     * Este recurso consulta o hist\u00C3\u00B3rico com as altera\u00C3\u00A7\u00C3\u00B5es de limites da conta informada
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/ContaApi~listarHistoricoAlteracoesLimitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoEventos}
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
      var returnType = PageHistoricoEventos;

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
     * @param {module:model/LinkPageHistoricoAssessoriaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista o hist\u00C3\u00B3rico de entradas/sa\u00C3\u00ADdas de assessorias de cobran\u00C3\u00A7a
     * Permite listar todos os registros de entrada e sa\u00C3\u00ADda da Conta em arquivos de integra\u00C3\u00A7\u00C3\u00A3o com empresas de assessorias de cobran\u00C3\u00A7a a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (idConta).
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/ContaApi~listarHistoricoAssessoriaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LinkPageHistoricoAssessoriaResponse}
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
      var returnType = LinkPageHistoricoAssessoriaResponse;

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
     * @param {module:model/PageHistoricoAtraso} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista o historico de atrasos das faturas
     * Este recurso lista o hist\u00C3\u00B3rico do pagamento de faturas em atraso
     * @param {Integer} id Id Conta
     * @param {module:api/ContaApi~listarHistoricoAtrasosFaturasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoAtraso}
     */
    this.listarHistoricoAtrasosFaturasUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoAtrasosFaturasUsingGET";
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
      var returnType = PageHistoricoAtraso;

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
     * @param {module:model/PageTransacoesCorrentes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da conta
     * Este m\u00C3\u00A9todo permite que sejam listadas todas as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/ContaApi~listarNaoProcessadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransacoesCorrentes}
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
      var returnType = PageTransacoesCorrentes;

      return this.apiClient.callApi(
        '/api/contas/{id}/transacoes/listar-nao-processadas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarProcessadasUsingGET operation.
     * @callback module:api/ContaApi~listarProcessadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacoesCorrentes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as transa\u00C3\u00A7\u00C3\u00B5es processadas da conta
     * Este m\u00C3\u00A9todo permite que sejam listadas todas as transa\u00C3\u00A7\u00C3\u00B5es processadas da Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:model/ModelDate} opts.dataVencimento Data de vencimento do extrato no formato yyyy-MM-dd.
     * @param {module:api/ContaApi~listarProcessadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransacoesCorrentes}
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
      var returnType = PageTransacoesCorrentes;

      return this.apiClient.callApi(
        '/api/contas/{id}/transacoes/listar-processadas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET22 operation.
     * @callback module:api/ContaApi~listarUsingGET22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LinkPageTransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as transfer\u00C3\u00AAncias banc\u00C3\u00A1rias realizadas
     * Este recurso tem como objetivo permitir que o portador de um Cart\u00C3\u00A3o possa consultar uma lista das Transfer\u00C3\u00AAncias Banc\u00C3\u00A1rias para os Favorecidos cadastrados.
     * @param {Integer} id Id Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idContaBancariaDestino C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/ContaApi~listarUsingGET22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LinkPageTransferenciaBancariaResponse}
     */
    this.listarUsingGET22 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET22";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_conta_bancaria_destino': opts['idContaBancariaDestino'],
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
      var returnType = LinkPageTransferenciaBancariaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-contas-bancarias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET23 operation.
     * @callback module:api/ContaApi~listarUsingGET23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferencias} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as transfer\u00C3\u00AAncias realizadas pela conta
     * Este m\u00C3\u00A9todo permite que sejam listadas as transfer\u00C3\u00AAncias realizadas pela conta existentes na base do emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idTransferencia C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id).
     * @param {Integer} opts.idContaOrigem C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 debitado para a transfer\u00C3\u00AAncia. (id).
     * @param {Integer} opts.idContaDestino C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 creditado para a transfer\u00C3\u00AAncia. (id).
     * @param {Number} opts.valorTransferencia Valor estabelecido para ser transferido.
     * @param {module:model/ModelDate} opts.dataTransferencia Data estabelecida para ocorrer a transfer\u00C3\u00AAncia.
     * @param {module:api/ContaApi~listarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferencias}
     */
    this.listarUsingGET23 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET23";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = PageTransferencias;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET4 operation.
     * @callback module:api/ContaApi~listarUsingGET4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista contas existentes na base de dados do Emissor
     * Este recurso permite listar contas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id).
     * @param {Integer} opts.idOrigemComercial C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta.
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id).
     * @param {Integer} opts.idStatusConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id).
     * @param {Integer} opts.diaVencimento Apresenta o dia de vencimento.
     * @param {Integer} opts.melhorDiaCompra Apresenta o melhor dia de compra.
     * @param {module:model/ModelDate} opts.dataStatusConta Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela.
     * @param {module:model/ModelDate} opts.dataCadastro Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
     * @param {module:model/ModelDate} opts.dataUltimaAlteracaoVencimento Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento.
     * @param {module:api/ContaApi~listarUsingGET4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContas}
     */
    this.listarUsingGET4 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageContas;

      return this.apiClient.callApi(
        '/api/contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reativarUsingPOST operation.
     * @callback module:api/ContaApi~reativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de contas que foram desativadas por inadimpl\u00C3\u00AAncia
     * Este recurso permite reativar contas que foram desativadas por inadimpl\u00C3\u00AAncia. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
     * @param {Integer} id Id Conta
     * @param {module:api/ContaApi~reativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.reativarUsingPOST = function(id, callback) {
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
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
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
     * @param {module:model/LinkTransferenciaBancariaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias
     * Este recurso tem como objetivo permitir que o portador de um cart\u00C3\u00A3o possa realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para uma conta banc\u00C3\u00A1ria. Assim, o valor do cr\u00C3\u00A9dito somado a tarifa para transfer\u00C3\u00AAncia, quando praticada pelo emissor, ser\u00C3\u00A1 debitado da conta de origem, se houver saldo suficiente, e ser\u00C3\u00A1 creditado na conta banc\u00C3\u00A1ria de destino.
     * @param {Integer} id Id Conta
     * @param {module:model/TransferenciaBancariaPersist} transferenciaBancariaPersist transferenciaBancariaPersist
     * @param {module:api/ContaApi~transferirUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LinkTransferenciaBancariaResponse}
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
      var returnType = LinkTransferenciaBancariaResponse;

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
     * @param {module:model/PageTransferencias} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza uma transfer\u00C3\u00AAncia de Cr\u00C3\u00A9dito para outro cliente do mesmo Emissor
     * Este m\u00C3\u00A9todo permite que um portador de um cart\u00C3\u00A3o possa realizar auma transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para outro cliente do mesmo emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 debitado (id).
     * @param {Integer} idContaDestino C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 creditado (id).
     * @param {Number} valorTransferencia Valor da Transfer\u00C3\u00AAncia.
     * @param {module:api/ContaApi~transferirUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferencias}
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
      var returnType = PageTransferencias;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias-creditos-cartoes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
