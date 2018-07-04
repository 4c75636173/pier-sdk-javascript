(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ConvenioPersist', '../model/ConvenioResponse', '../model/CampanhaUpdateValue', '../model/CampanhaResponse', '../model/ConfiguracaoRegistroCobrancaPersist', '../model/ConfiguracaoRegistroCobrancaResponse', '../model/ConfiguracaoRotativoDetalheResponse', '../model/ConfiguracaoRotativoPersist', '../model/ParametroProdutoResponse', '../model/TaxaAntecipacaoRequest', '../model/ProdutoDetalhesResponse', '../model/TipoAjusteResponse', '../model/PageTipoBoletoResponse', '../model/TipoEnderecoResponse', '../model/TipoOperacaoResponse', '../model/TipoTelefoneResponse', '../model/AtendimentoClienteResponse', '../model/BancoResponse', '../model/PageCampanhaResponse', '../model/PageContaDetalheResponse', '../model/PageConvenioResponse', '../model/PageCampoCodificadoDescricaoResponse', '../model/PageFantasiaBasicaResponse', '../model/HistoricoTelefoneResponse', '../model/PageTipoCampanhaResponse', '../model/PageConfiguracaoRotativoResponse', '../model/PagePortadorResponse', '../model/PageProdutoResponse', '../model/PagePromotorResponse', '../model/PageTipoAjusteResponse', '../model/PageTipoEnderecoResponse', '../model/PageTipoTelefoneResponse', '../model/PageControleVencimentoResponse', '../model/PageAtendimentoClienteResponse', '../model/PageBancoResponse', '../model/CampanhaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConvenioPersist'), require('../model/ConvenioResponse'), require('../model/CampanhaUpdateValue'), require('../model/CampanhaResponse'), require('../model/ConfiguracaoRegistroCobrancaPersist'), require('../model/ConfiguracaoRegistroCobrancaResponse'), require('../model/ConfiguracaoRotativoDetalheResponse'), require('../model/ConfiguracaoRotativoPersist'), require('../model/ParametroProdutoResponse'), require('../model/TaxaAntecipacaoRequest'), require('../model/ProdutoDetalhesResponse'), require('../model/TipoAjusteResponse'), require('../model/PageTipoBoletoResponse'), require('../model/TipoEnderecoResponse'), require('../model/TipoOperacaoResponse'), require('../model/TipoTelefoneResponse'), require('../model/AtendimentoClienteResponse'), require('../model/BancoResponse'), require('../model/PageCampanhaResponse'), require('../model/PageContaDetalheResponse'), require('../model/PageConvenioResponse'), require('../model/PageCampoCodificadoDescricaoResponse'), require('../model/PageFantasiaBasicaResponse'), require('../model/HistoricoTelefoneResponse'), require('../model/PageTipoCampanhaResponse'), require('../model/PageConfiguracaoRotativoResponse'), require('../model/PagePortadorResponse'), require('../model/PageProdutoResponse'), require('../model/PagePromotorResponse'), require('../model/PageTipoAjusteResponse'), require('../model/PageTipoEnderecoResponse'), require('../model/PageTipoTelefoneResponse'), require('../model/PageControleVencimentoResponse'), require('../model/PageAtendimentoClienteResponse'), require('../model/PageBancoResponse'), require('../model/CampanhaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagcadastrogeralApi = factory(root.Pier.ApiClient, root.Pier.ConvenioPersist, root.Pier.ConvenioResponse, root.Pier.CampanhaUpdateValue, root.Pier.CampanhaResponse, root.Pier.ConfiguracaoRegistroCobrancaPersist, root.Pier.ConfiguracaoRegistroCobrancaResponse, root.Pier.ConfiguracaoRotativoDetalheResponse, root.Pier.ConfiguracaoRotativoPersist, root.Pier.ParametroProdutoResponse, root.Pier.TaxaAntecipacaoRequest, root.Pier.ProdutoDetalhesResponse, root.Pier.TipoAjusteResponse, root.Pier.PageTipoBoletoResponse, root.Pier.TipoEnderecoResponse, root.Pier.TipoOperacaoResponse, root.Pier.TipoTelefoneResponse, root.Pier.AtendimentoClienteResponse, root.Pier.BancoResponse, root.Pier.PageCampanhaResponse, root.Pier.PageContaDetalheResponse, root.Pier.PageConvenioResponse, root.Pier.PageCampoCodificadoDescricaoResponse, root.Pier.PageFantasiaBasicaResponse, root.Pier.HistoricoTelefoneResponse, root.Pier.PageTipoCampanhaResponse, root.Pier.PageConfiguracaoRotativoResponse, root.Pier.PagePortadorResponse, root.Pier.PageProdutoResponse, root.Pier.PagePromotorResponse, root.Pier.PageTipoAjusteResponse, root.Pier.PageTipoEnderecoResponse, root.Pier.PageTipoTelefoneResponse, root.Pier.PageControleVencimentoResponse, root.Pier.PageAtendimentoClienteResponse, root.Pier.PageBancoResponse, root.Pier.CampanhaPersist);
  }
}(this, function(ApiClient, ConvenioPersist, ConvenioResponse, CampanhaUpdateValue, CampanhaResponse, ConfiguracaoRegistroCobrancaPersist, ConfiguracaoRegistroCobrancaResponse, ConfiguracaoRotativoDetalheResponse, ConfiguracaoRotativoPersist, ParametroProdutoResponse, TaxaAntecipacaoRequest, ProdutoDetalhesResponse, TipoAjusteResponse, PageTipoBoletoResponse, TipoEnderecoResponse, TipoOperacaoResponse, TipoTelefoneResponse, AtendimentoClienteResponse, BancoResponse, PageCampanhaResponse, PageContaDetalheResponse, PageConvenioResponse, PageCampoCodificadoDescricaoResponse, PageFantasiaBasicaResponse, HistoricoTelefoneResponse, PageTipoCampanhaResponse, PageConfiguracaoRotativoResponse, PagePortadorResponse, PageProdutoResponse, PagePromotorResponse, PageTipoAjusteResponse, PageTipoEnderecoResponse, PageTipoTelefoneResponse, PageControleVencimentoResponse, PageAtendimentoClienteResponse, PageBancoResponse, CampanhaPersist) {
  'use strict';

  /**
   * globaltagcadastrogeral service.
   * @module api/GlobaltagcadastrogeralApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagcadastrogeralApi. 
   * @alias module:api/GlobaltagcadastrogeralApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarConvenioUsingPUT operation.
     * @callback module:api/GlobaltagcadastrogeralApi~alterarConvenioUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvenioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera os dados banc\u00E1rios de um determinado conv\u00EAnio
     * Altera os dados banc\u00E1rios de um determinado conv\u00EAnio
     * @param {Integer} id Id
     * @param {module:model/ConvenioPersist} convenioPersist convenioPersist
     * @param {module:api/GlobaltagcadastrogeralApi~alterarConvenioUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConvenioResponse}
     */
    this.alterarConvenioUsingPUT = function(id, convenioPersist, callback) {
      var postBody = convenioPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarConvenioUsingPUT";
      }

      // verify the required parameter 'convenioPersist' is set
      if (convenioPersist == undefined || convenioPersist == null) {
        throw "Missing the required parameter 'convenioPersist' when calling alterarConvenioUsingPUT";
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
      var returnType = ConvenioResponse;

      return this.apiClient.callApi(
        '/api/convenios/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT1 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~alterarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campanha_resource_alterar}}}
     * {{{campanha_resource_alterar_notes}}}
     * @param {Integer} id {{{campanha_resource_alterar_param_id}}}
     * @param {module:model/CampanhaUpdateValue} update update
     * @param {module:api/GlobaltagcadastrogeralApi~alterarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CampanhaResponse}
     */
    this.alterarUsingPUT1 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT1";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT1";
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
      var returnType = CampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT2 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~alterarUsingPUT2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_registro_cobranca_resource_alterar}}}
     * {{{configuracao_registro_cobranca_resource_alterar_notes}}}
     * @param {Integer} id {{{configuracao_registro_cobranca_resource_alterar_param_id}}}
     * @param {module:model/ConfiguracaoRegistroCobrancaPersist} configuracaoPersist configuracaoPersist
     * @param {module:api/GlobaltagcadastrogeralApi~alterarUsingPUT2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.alterarUsingPUT2 = function(id, configuracaoPersist, callback) {
      var postBody = configuracaoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT2";
      }

      // verify the required parameter 'configuracaoPersist' is set
      if (configuracaoPersist == undefined || configuracaoPersist == null) {
        throw "Missing the required parameter 'configuracaoPersist' when calling alterarUsingPUT2";
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT3 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~alterarUsingPUT3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRotativoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_rotativo_resource_alterar}}}
     * {{{configuracao_rotativo_resource_alterar_notes}}}
     * @param {Integer} id {{{configuracao_rotativo_resource_alterar_param_id}}}
     * @param {module:model/ConfiguracaoRotativoPersist} configuracaoRotativoPersist configuracaoRotativoPersist
     * @param {module:api/GlobaltagcadastrogeralApi~alterarUsingPUT3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRotativoDetalheResponse}
     */
    this.alterarUsingPUT3 = function(id, configuracaoRotativoPersist, callback) {
      var postBody = configuracaoRotativoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT3";
      }

      // verify the required parameter 'configuracaoRotativoPersist' is set
      if (configuracaoRotativoPersist == undefined || configuracaoRotativoPersist == null) {
        throw "Missing the required parameter 'configuracaoRotativoPersist' when calling alterarUsingPUT3";
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
      var returnType = ConfiguracaoRotativoDetalheResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarConvenioUsingPOST operation.
     * @callback module:api/GlobaltagcadastrogeralApi~cadastrarConvenioUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvenioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adiciona novo conv\u00EAnio para o emissor
     * Adiciona novo conv\u00EAnio para o emissor
     * @param {module:model/ConvenioPersist} convenioPersist convenioPersist
     * @param {module:api/GlobaltagcadastrogeralApi~cadastrarConvenioUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConvenioResponse}
     */
    this.cadastrarConvenioUsingPOST = function(convenioPersist, callback) {
      var postBody = convenioPersist;

      // verify the required parameter 'convenioPersist' is set
      if (convenioPersist == undefined || convenioPersist == null) {
        throw "Missing the required parameter 'convenioPersist' when calling cadastrarConvenioUsingPOST";
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
      var returnType = ConvenioResponse;

      return this.apiClient.callApi(
        '/api/convenios', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST1 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~cadastrarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_registro_cobranca_resource_cadastrar}}}
     * {{{configuracao_registro_cobranca_resource_cadastrar_notes}}}
     * @param {module:model/ConfiguracaoRegistroCobrancaPersist} configuracaoPersist configuracaoPersist
     * @param {module:api/GlobaltagcadastrogeralApi~cadastrarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.cadastrarUsingPOST1 = function(configuracaoPersist, callback) {
      var postBody = configuracaoPersist;

      // verify the required parameter 'configuracaoPersist' is set
      if (configuracaoPersist == undefined || configuracaoPersist == null) {
        throw "Missing the required parameter 'configuracaoPersist' when calling cadastrarUsingPOST1";
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configurarTaxaAntecipacaoUsingPOST operation.
     * @callback module:api/GlobaltagcadastrogeralApi~configurarTaxaAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{produto_resource_configurar_taxa_antecipacao}}}
     * {{{produto_resource_configurar_taxa_antecipacao_notes}}}
     * @param {Integer} id {{{produto_resource_configurar_taxa_antecipacao_param_id}}}
     * @param {module:model/TaxaAntecipacaoRequest} taxaAntecipacaoRequest taxaAntecipacaoRequest
     * @param {module:api/GlobaltagcadastrogeralApi~configurarTaxaAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.configurarTaxaAntecipacaoUsingPOST = function(id, taxaAntecipacaoRequest, callback) {
      var postBody = taxaAntecipacaoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling configurarTaxaAntecipacaoUsingPOST";
      }

      // verify the required parameter 'taxaAntecipacaoRequest' is set
      if (taxaAntecipacaoRequest == undefined || taxaAntecipacaoRequest == null) {
        throw "Missing the required parameter 'taxaAntecipacaoRequest' when calling configurarTaxaAntecipacaoUsingPOST";
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
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/configurar-taxa-antecipacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarCampanhaUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarCampanhaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campanha_resource_consultar_campanha}}}
     * {{{campanha_resource_consultar_campanha_notes}}}
     * @param {Integer} id {{{campanha_resource_consultar_campanha_param_id_campanha}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarCampanhaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CampanhaResponse}
     */
    this.consultarCampanhaUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarCampanhaUsingGET";
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
      var returnType = CampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarConvenioUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarConvenioUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvenioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar dados banc\u00E1rios pelo id do conv\u00EAnio
     * Consultar dados banc\u00E1rios de um determinado conv\u00EAnio
     * @param {Integer} id Id
     * @param {module:api/GlobaltagcadastrogeralApi~consultarConvenioUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConvenioResponse}
     */
    this.consultarConvenioUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarConvenioUsingGET";
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
      var returnType = ConvenioResponse;

      return this.apiClient.callApi(
        '/api/convenios/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTaxaAntecipacaoUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarTaxaAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{produto_resource_consultar_taxa_antecipacao}}}
     * {{{produto_resource_consultar_taxa_antecipacao_notes}}}
     * @param {Integer} id {{{produto_resource_consultar_taxa_antecipacao_param_id}}}
     * @param {module:model/String} tipoTransacao {{{produto_resource_consultar_taxa_antecipacao_param_tipo_transacao}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarTaxaAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.consultarTaxaAntecipacaoUsingGET = function(id, tipoTransacao, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTaxaAntecipacaoUsingGET";
      }

      // verify the required parameter 'tipoTransacao' is set
      if (tipoTransacao == undefined || tipoTransacao == null) {
        throw "Missing the required parameter 'tipoTransacao' when calling consultarTaxaAntecipacaoUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'tipoTransacao': tipoTransacao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/consultar-taxa-antecipacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET10 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_registro_cobranca_resource_consultar}}}
     * {{{configuracao_registro_cobranca_resource_consultar_notes}}}
     * @param {Integer} id {{{configuracao_registro_cobranca_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.consultarUsingGET10 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET10";
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET11 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRotativoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_rotativo_resource_consultar}}}
     * {{{configuracao_rotativo_resource_consultar_notes}}}
     * @param {Integer} id {{{configuracao_rotativo_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRotativoDetalheResponse}
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
      var returnType = ConfiguracaoRotativoDetalheResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET31 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET31Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{produto_resource_consultar}}}
     * {{{produto_resource_consultar_notes}}}
     * @param {Integer} id {{{produto_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET31Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.consultarUsingGET31 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET31";
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
      var returnType = ProdutoDetalhesResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET40 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET40Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoAjusteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_transacoes_ajuste_resource_consultar}}}
     * {{{tipo_transacoes_ajuste_resource_consultar_notes}}}
     * @param {Integer} id {{{tipo_transacoes_ajuste_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET40Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoAjusteResponse}
     */
    this.consultarUsingGET40 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET40";
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
      var returnType = TipoAjusteResponse;

      return this.apiClient.callApi(
        '/api/tipos-ajustes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET41 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET41Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoBoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_boleto_resource_consultar}}}
     * {{{tipo_boleto_resource_consultar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{tipo_boleto_request_id_value}}}
     * @param {String} opts.descricao {{{tipo_boleto_request_descricao_value}}}
     * @param {Integer} opts.banco {{{tipo_boleto_request_banco_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET41Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoBoletoResponse}
     */
    this.consultarUsingGET41 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'banco': opts['banco']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoBoletoResponse;

      return this.apiClient.callApi(
        '/api/tipos-boletos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET42 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET42Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_endereco_resource_consultar}}}
     * {{{tipo_endereco_resource_consultar_notes}}}
     * @param {Integer} id {{{tipo_endereco_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET42Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoEnderecoResponse}
     */
    this.consultarUsingGET42 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET42";
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
      var returnType = TipoEnderecoResponse;

      return this.apiClient.callApi(
        '/api/tipos-enderecos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET43 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET43Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_operacao_resource_consultar}}}
     * {{{tipo_operacao_resource_consultar_notes}}}
     * @param {Integer} idCartao {{{tipo_operacao_resource_consultar_param_id_cartao}}}
     * @param {Integer} idEstabelecimento {{{tipo_operacao_resource_consultar_param_id_estabelecimento}}}
     * @param {String} codigoProcessamento {{{tipo_operacao_resource_consultar_param_codigo_processamento}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET43Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoOperacaoResponse}
     */
    this.consultarUsingGET43 = function(idCartao, idEstabelecimento, codigoProcessamento, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarUsingGET43";
      }

      // verify the required parameter 'idEstabelecimento' is set
      if (idEstabelecimento == undefined || idEstabelecimento == null) {
        throw "Missing the required parameter 'idEstabelecimento' when calling consultarUsingGET43";
      }

      // verify the required parameter 'codigoProcessamento' is set
      if (codigoProcessamento == undefined || codigoProcessamento == null) {
        throw "Missing the required parameter 'codigoProcessamento' when calling consultarUsingGET43";
      }


      var pathParams = {
      };
      var queryParams = {
        'idCartao': idCartao,
        'idEstabelecimento': idEstabelecimento,
        'codigoProcessamento': codigoProcessamento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TipoOperacaoResponse;

      return this.apiClient.callApi(
        '/api/tipos-operacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET45 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET45Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_telefone_resource_consultar}}}
     * {{{tipo_telefone_resource_consultar_notes}}}
     * @param {Integer} id {{{tipo_telefone_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET45Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTelefoneResponse}
     */
    this.consultarUsingGET45 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET45";
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
      var returnType = TipoTelefoneResponse;

      return this.apiClient.callApi(
        '/api/tipos-telefones/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET5 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{atendimento_cliente_resource_consultar}}}
     * {{{atendimento_cliente_resource_consultar_notes}}}
     * @param {Integer} id {{{atendimento_cliente_resource_consultar_param_id_atendimento}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoClienteResponse}
     */
    this.consultarUsingGET5 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET5";
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
      var returnType = AtendimentoClienteResponse;

      return this.apiClient.callApi(
        '/api/atendimento-clientes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET7 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~consultarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/BancoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{banco_resource_consultar}}}
     * {{{banco_resource_consultar_notes}}}
     * @param {Integer} id {{{banco_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastrogeralApi~consultarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BancoResponse}
     */
    this.consultarUsingGET7 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET7";
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
      var returnType = BancoResponse;

      return this.apiClient.callApi(
        '/api/bancos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarCampanhasUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarCampanhasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campanha_resource_listar_campanhas}}}
     * {{{campanha_resource_listar_campanhas_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTipoCampanha {{{campanha_request_id_tipo_campanha_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarCampanhasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampanhaResponse}
     */
    this.listarCampanhasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoCampanha': opts['idTipoCampanha']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarContasPorPessoaUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarContasPorPessoaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_resource_listar_contas_por_pessoa}}}
     * {{{pessoa_resource_listar_contas_por_pessoa_notes}}}
     * @param {String} numeroReceitaFederal {{{pessoa_resource_listar_contas_por_pessoa_param_numero_receita_federal}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarContasPorPessoaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaDetalheResponse}
     */
    this.listarContasPorPessoaUsingGET = function(numeroReceitaFederal, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroReceitaFederal' is set
      if (numeroReceitaFederal == undefined || numeroReceitaFederal == null) {
        throw "Missing the required parameter 'numeroReceitaFederal' when calling listarContasPorPessoaUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroReceitaFederal': numeroReceitaFederal,
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
      var returnType = PageContaDetalheResponse;

      return this.apiClient.callApi(
        '/api/pessoas/listar-contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarConveniosUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarConveniosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageConvenioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os dados banc\u00E1rios dos conv\u00EAnios existentes
     * Lista os dados banc\u00E1rios dos conv\u00EAnios existentes
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.banco Identifica\u00E7\u00E3o do banco.
     * @param {Integer} opts.agencia N\u00FAmero da ag\u00EAncia.
     * @param {String} opts.contaCorrente Conta corrente.
     * @param {Number} opts.numeroConvenio C\u00F3digo de identifica\u00E7\u00E3o do conv\u00EAnio.
     * @param {module:api/GlobaltagcadastrogeralApi~listarConveniosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageConvenioResponse}
     */
    this.listarConveniosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'banco': opts['banco'],
        'agencia': opts['agencia'],
        'contaCorrente': opts['contaCorrente'],
        'numeroConvenio': opts['numeroConvenio']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageConvenioResponse;

      return this.apiClient.callApi(
        '/api/convenios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarEstadosCivisUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarEstadosCivisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campo_codificado_resource_listar_estados_civis}}}
     * {{{campo_codificado_resource_listar_estados_civis_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarEstadosCivisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarEstadosCivisUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/estados-civis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFantasiasBasicasUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarFantasiasBasicasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFantasiaBasicaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{fantasia_basica_resource_listar_fantasias_basicas}}}
     * {{{fantasia_basica_resource_listar_fantasias_basicas_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarFantasiasBasicasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFantasiaBasicaResponse}
     */
    this.listarFantasiasBasicasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageFantasiaBasicaResponse;

      return this.apiClient.callApi(
        '/api/fantasias-basicas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarHistoricoTelefonesUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarHistoricoTelefonesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_resource_listar_historico_telefones}}}
     * {{{pessoa_resource_listar_historico_telefones_notes}}}
     * @param {Integer} id {{{pessoa_resource_listar_historico_telefones_param_id_pessoa}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarHistoricoTelefonesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HistoricoTelefoneResponse}
     */
    this.listarHistoricoTelefonesUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoTelefonesUsingGET";
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
      var returnType = HistoricoTelefoneResponse;

      return this.apiClient.callApi(
        '/api/pessoas/{id}/historico-telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarNacionalidadesUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarNacionalidadesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campo_codificado_resource_listar_nacionalidades}}}
     * {{{campo_codificado_resource_listar_nacionalidades_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarNacionalidadesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarNacionalidadesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/nacionalidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarNaturezasOcupacoesUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarNaturezasOcupacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campo_codificado_resource_listar_naturezas_ocupacoes}}}
     * {{{campo_codificado_resource_listar_naturezas_ocupacoes_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarNaturezasOcupacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarNaturezasOcupacoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/ocupacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarParentescosUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarParentescosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campo_codificado_resource_listar_parentescos}}}
     * {{{campo_codificado_resource_listar_parentescos_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarParentescosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarParentescosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/parentescos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarProfissoesUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarProfissoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campo_codificado_resource_listar_profissoes}}}
     * {{{campo_codificado_resource_listar_profissoes_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarProfissoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarProfissoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageCampoCodificadoDescricaoResponse;

      return this.apiClient.callApi(
        '/api/profissoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposCampanhasUsingGET operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarTiposCampanhasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoCampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_campanha_resource_listar_tipos_campanhas}}}
     * {{{tipo_campanha_resource_listar_tipos_campanhas_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarTiposCampanhasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoCampanhaResponse}
     */
    this.listarTiposCampanhasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageTipoCampanhaResponse;

      return this.apiClient.callApi(
        '/api/tipos-campanhas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET14 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRegistroCobrancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_registro_cobranca_resource_listar}}}
     * {{{configuracao_registro_cobranca_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRegistroCobrancaResponse}
     */
    this.listarUsingGET14 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = ConfiguracaoRegistroCobrancaResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-registro-cobranca', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET15 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageConfiguracaoRotativoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_rotativo_resource_listar}}}
     * {{{configuracao_rotativo_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idProduto {{{configuracao_rotativo_request_id_produto_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageConfiguracaoRotativoResponse}
     */
    this.listarUsingGET15 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idProduto': opts['idProduto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageConfiguracaoRotativoResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET41 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET41Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{portador_resource_listar}}}
     * {{{portador_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idConta {{{portador_request_id_conta_value}}}
     * @param {Integer} opts.idProduto {{{portador_request_id_produto_value}}}
     * @param {Integer} opts.idPessoa {{{portador_request_id_pessoa_value}}}
     * @param {Integer} opts.idParentesco {{{portador_request_id_parentesco_value}}}
     * @param {String} opts.tipoPortador {{{portador_request_tipo_portador_value}}}
     * @param {String} opts.nomeImpresso {{{portador_request_nome_impresso_value}}}
     * @param {Integer} opts.idTipoCartao {{{portador_request_id_tipo_cartao_value}}}
     * @param {Integer} opts.flagAtivo {{{portador_request_flag_ativo_value}}}
     * @param {String} opts.dataCadastroPortador {{{portador_request_data_cadastro_portador_value}}}
     * @param {String} opts.dataCancelamentoPortador {{{portador_request_data_cancelamento_portador_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET41Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePortadorResponse}
     */
    this.listarUsingGET41 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'idProduto': opts['idProduto'],
        'idPessoa': opts['idPessoa'],
        'idParentesco': opts['idParentesco'],
        'tipoPortador': opts['tipoPortador'],
        'nomeImpresso': opts['nomeImpresso'],
        'idTipoCartao': opts['idTipoCartao'],
        'flagAtivo': opts['flagAtivo'],
        'dataCadastroPortador': opts['dataCadastroPortador'],
        'dataCancelamentoPortador': opts['dataCancelamentoPortador']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePortadorResponse;

      return this.apiClient.callApi(
        '/api/portadores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET42 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET42Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{produto_resource_listar}}}
     * {{{produto_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{produto_request_nome_value}}}
     * @param {Integer} opts.status {{{produto_request_status_value}}}
     * @param {Integer} opts.idFantasiaBasica {{{produto_request_id_fantasia_basica_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET42Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageProdutoResponse}
     */
    this.listarUsingGET42 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'status': opts['status'],
        'idFantasiaBasica': opts['idFantasiaBasica']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET43 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET43Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePromotorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{promotor_resource_listar}}}
     * {{{promotor_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{promotor_request_id_value}}}
     * @param {String} opts.nome {{{promotor_request_nome_value}}}
     * @param {String} opts.dataCadastro {{{promotor_request_data_cadastro_value}}}
     * @param {Integer} opts.idEstabelecimento {{{promotor_request_id_estabelecimento_value}}}
     * @param {Integer} opts.idUsuario {{{promotor_request_id_usuario_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET43Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePromotorResponse}
     */
    this.listarUsingGET43 = function(opts, callback) {
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
        'dataCadastro': opts['dataCadastro'],
        'idEstabelecimento': opts['idEstabelecimento'],
        'idUsuario': opts['idUsuario']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePromotorResponse;

      return this.apiClient.callApi(
        '/api/promotores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET52 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET52Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoAjusteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_ajuste_resource_consultar}}}
     * {{{tipo_ajuste_resource_consultar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{tipo_ajuste_request_id_value}}}
     * @param {String} opts.descricao {{{tipo_ajuste_request_descricao_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET52Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoAjusteResponse}
     */
    this.listarUsingGET52 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoAjusteResponse;

      return this.apiClient.callApi(
        '/api/tipos-ajustes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET54 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET54Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_endereco_resource_listar}}}
     * {{{tipo_endereco_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{tipo_endereco_request_id_value}}}
     * @param {String} opts.nome {{{tipo_endereco_request_nome_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET54Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoEnderecoResponse}
     */
    this.listarUsingGET54 = function(opts, callback) {
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
      var returnType = PageTipoEnderecoResponse;

      return this.apiClient.callApi(
        '/api/tipos-enderecos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET56 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET56Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_telefone_resource_listar}}}
     * {{{tipo_telefone_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{tipo_telefone_request_id_value}}}
     * @param {String} opts.nome {{{tipo_telefone_request_nome_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET56Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTelefoneResponse}
     */
    this.listarUsingGET56 = function(opts, callback) {
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
      var returnType = PageTipoTelefoneResponse;

      return this.apiClient.callApi(
        '/api/tipos-telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET63 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET63Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageControleVencimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vencimento_resource_listar}}}
     * {{{vencimento_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataVencimento {{{controle_vencimento_request_data_vencimento_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET63Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageControleVencimentoResponse}
     */
    this.listarUsingGET63 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageControleVencimentoResponse;

      return this.apiClient.callApi(
        '/api/vencimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET7 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{atendimento_cliente_resource_listar}}}
     * {{{atendimento_cliente_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTipoAtendimento {{{atendimento_cliente_request_id_tipo_atendimento_value}}}
     * @param {Integer} opts.idConta {{{atendimento_cliente_request_id_conta_value}}}
     * @param {String} opts.nomeAtendente {{{atendimento_cliente_request_nome_atendente_value}}}
     * @param {String} opts.dataAtendimento {{{atendimento_cliente_request_data_atendimento_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAtendimentoClienteResponse}
     */
    this.listarUsingGET7 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoAtendimento': opts['idTipoAtendimento'],
        'idConta': opts['idConta'],
        'nomeAtendente': opts['nomeAtendente'],
        'dataAtendimento': opts['dataAtendimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAtendimentoClienteResponse;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET9 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~listarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBancoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{banco_resource_listar}}}
     * {{{banco_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastrogeralApi~listarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBancoResponse}
     */
    this.listarUsingGET9 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageBancoResponse;

      return this.apiClient.callApi(
        '/api/bancos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST2 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~salvarUsingPOST2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{atendimento_cliente_resource_salvar}}}
     * {{{atendimento_cliente_resource_salvar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta {{{atendimento_cliente_persist_id_conta_value}}}
     * @param {String} opts.conteudoAtendimento {{{atendimento_cliente_persist_conteudo_atendimento_value}}}
     * @param {String} opts.detalhesAtendimento {{{atendimento_cliente_persist_detalhes_atendimento_value}}}
     * @param {String} opts.nomeAtendente {{{atendimento_cliente_persist_nome_atendente_value}}}
     * @param {String} opts.dataAtendimento {{{atendimento_cliente_persist_data_atendimento_value}}}
     * @param {String} opts.dataAgendamento {{{atendimento_cliente_persist_data_agendamento_value}}}
     * @param {String} opts.dataHoraInicioAtendimento {{{atendimento_cliente_persist_data_hora_inicio_atendimento_value}}}
     * @param {String} opts.dataHoraFimAtendimento {{{atendimento_cliente_persist_data_hora_fim_atendimento_value}}}
     * @param {Integer} opts.flagFilaFraude {{{atendimento_cliente_persist_flag_fila_fraude_value}}}
     * @param {module:api/GlobaltagcadastrogeralApi~salvarUsingPOST2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoClienteResponse}
     */
    this.salvarUsingPOST2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idConta': opts['idConta'],
        'conteudoAtendimento': opts['conteudoAtendimento'],
        'detalhesAtendimento': opts['detalhesAtendimento'],
        'nomeAtendente': opts['nomeAtendente'],
        'dataAtendimento': opts['dataAtendimento'],
        'dataAgendamento': opts['dataAgendamento'],
        'dataHoraInicioAtendimento': opts['dataHoraInicioAtendimento'],
        'dataHoraFimAtendimento': opts['dataHoraFimAtendimento'],
        'flagFilaFraude': opts['flagFilaFraude']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AtendimentoClienteResponse;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST4 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~salvarUsingPOST4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CampanhaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{campanha_resource_salvar}}}
     * {{{campanha_resource_salvar_notes}}}
     * @param {module:model/CampanhaPersist} campanhaPersist campanhaPersist
     * @param {module:api/GlobaltagcadastrogeralApi~salvarUsingPOST4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CampanhaResponse}
     */
    this.salvarUsingPOST4 = function(campanhaPersist, callback) {
      var postBody = campanhaPersist;

      // verify the required parameter 'campanhaPersist' is set
      if (campanhaPersist == undefined || campanhaPersist == null) {
        throw "Missing the required parameter 'campanhaPersist' when calling salvarUsingPOST4";
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
      var returnType = CampanhaResponse;

      return this.apiClient.callApi(
        '/api/campanhas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST6 operation.
     * @callback module:api/GlobaltagcadastrogeralApi~salvarUsingPOST6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoRotativoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{configuracao_rotativo_resource_salvar}}}
     * {{{configuracao_rotativo_resource_salvar_notes}}}
     * @param {module:model/ConfiguracaoRotativoPersist} configuracaoRotativoPersist configuracaoRotativoPersist
     * @param {module:api/GlobaltagcadastrogeralApi~salvarUsingPOST6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoRotativoDetalheResponse}
     */
    this.salvarUsingPOST6 = function(configuracaoRotativoPersist, callback) {
      var postBody = configuracaoRotativoPersist;

      // verify the required parameter 'configuracaoRotativoPersist' is set
      if (configuracaoRotativoPersist == undefined || configuracaoRotativoPersist == null) {
        throw "Missing the required parameter 'configuracaoRotativoPersist' when calling salvarUsingPOST6";
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
      var returnType = ConfiguracaoRotativoDetalheResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-rotativos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
