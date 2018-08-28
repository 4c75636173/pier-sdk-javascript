(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrigemComercialUpdate', '../model/OrigemComercialResponse', '../model/MaquinetaResponse', '../model/MaquinetaUpdate', '../model/OperacaoCredorUpdate', '../model/OperacaoCredorResponse', '../model/TelefoneEstabelecimentoResponse', '../model/TelefoneEstabelecimentoUpdate', '../model/TerminalUpdateValue', '../model/TerminalResponse', '../model/EstabelecimentoUpdate', '../model/EstabelecimentoResponse', '../model/GrupoEconomicoDTO', '../model/GrupoEconomicoResponse', '../model/OrigemComercialPersist', '../model/EstabelecimentoPersist', '../model/DetalheOperacaoResponse', '../model/VinculoEstabelecimentoAdquirenteResponse', '../model/VinculoOperacaoPersist', '../model/PageOperacaoResponse', '../model/PageMCCResponse', '../model/PageOrigemComercialResponse', '../model/PageEntidadeResponse', '../model/PageTipoEstabelecimentoResponse', '../model/PageCampoCodificadoDescricaoResponse', '../model/PageTipoOrigemComercialResponse', '../model/PageTipoTerminalResponse', '../model/PageEstabelecimentoResponse', '../model/PageGrupoEconomicoResponse', '../model/PageGrupoOrigemComercialResponse', '../model/PageMaquinetaResponse', '../model/PageMoedaResponse', '../model/PageOperacaoCredorResponse', '../model/PageTelefoneEstabelecimentoResponse', '../model/PageTerminalResponse', '../model/PageVinculoEstabelecimentoAdquirenteResponse', '../model/PageVinculoOperacaoResponse', '../model/MaquinetaPersist', '../model/OperacaoCredorPersist', '../model/TelefoneEstabelecimentoPersist', '../model/TerminalPersist', '../model/VinculoEstabelecimentoAdquirentePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrigemComercialUpdate'), require('../model/OrigemComercialResponse'), require('../model/MaquinetaResponse'), require('../model/MaquinetaUpdate'), require('../model/OperacaoCredorUpdate'), require('../model/OperacaoCredorResponse'), require('../model/TelefoneEstabelecimentoResponse'), require('../model/TelefoneEstabelecimentoUpdate'), require('../model/TerminalUpdateValue'), require('../model/TerminalResponse'), require('../model/EstabelecimentoUpdate'), require('../model/EstabelecimentoResponse'), require('../model/GrupoEconomicoDTO'), require('../model/GrupoEconomicoResponse'), require('../model/OrigemComercialPersist'), require('../model/EstabelecimentoPersist'), require('../model/DetalheOperacaoResponse'), require('../model/VinculoEstabelecimentoAdquirenteResponse'), require('../model/VinculoOperacaoPersist'), require('../model/PageOperacaoResponse'), require('../model/PageMCCResponse'), require('../model/PageOrigemComercialResponse'), require('../model/PageEntidadeResponse'), require('../model/PageTipoEstabelecimentoResponse'), require('../model/PageCampoCodificadoDescricaoResponse'), require('../model/PageTipoOrigemComercialResponse'), require('../model/PageTipoTerminalResponse'), require('../model/PageEstabelecimentoResponse'), require('../model/PageGrupoEconomicoResponse'), require('../model/PageGrupoOrigemComercialResponse'), require('../model/PageMaquinetaResponse'), require('../model/PageMoedaResponse'), require('../model/PageOperacaoCredorResponse'), require('../model/PageTelefoneEstabelecimentoResponse'), require('../model/PageTerminalResponse'), require('../model/PageVinculoEstabelecimentoAdquirenteResponse'), require('../model/PageVinculoOperacaoResponse'), require('../model/MaquinetaPersist'), require('../model/OperacaoCredorPersist'), require('../model/TelefoneEstabelecimentoPersist'), require('../model/TerminalPersist'), require('../model/VinculoEstabelecimentoAdquirentePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagestabelecimentoApi = factory(root.Pier.ApiClient, root.Pier.OrigemComercialUpdate, root.Pier.OrigemComercialResponse, root.Pier.MaquinetaResponse, root.Pier.MaquinetaUpdate, root.Pier.OperacaoCredorUpdate, root.Pier.OperacaoCredorResponse, root.Pier.TelefoneEstabelecimentoResponse, root.Pier.TelefoneEstabelecimentoUpdate, root.Pier.TerminalUpdateValue, root.Pier.TerminalResponse, root.Pier.EstabelecimentoUpdate, root.Pier.EstabelecimentoResponse, root.Pier.GrupoEconomicoDTO, root.Pier.GrupoEconomicoResponse, root.Pier.OrigemComercialPersist, root.Pier.EstabelecimentoPersist, root.Pier.DetalheOperacaoResponse, root.Pier.VinculoEstabelecimentoAdquirenteResponse, root.Pier.VinculoOperacaoPersist, root.Pier.PageOperacaoResponse, root.Pier.PageMCCResponse, root.Pier.PageOrigemComercialResponse, root.Pier.PageEntidadeResponse, root.Pier.PageTipoEstabelecimentoResponse, root.Pier.PageCampoCodificadoDescricaoResponse, root.Pier.PageTipoOrigemComercialResponse, root.Pier.PageTipoTerminalResponse, root.Pier.PageEstabelecimentoResponse, root.Pier.PageGrupoEconomicoResponse, root.Pier.PageGrupoOrigemComercialResponse, root.Pier.PageMaquinetaResponse, root.Pier.PageMoedaResponse, root.Pier.PageOperacaoCredorResponse, root.Pier.PageTelefoneEstabelecimentoResponse, root.Pier.PageTerminalResponse, root.Pier.PageVinculoEstabelecimentoAdquirenteResponse, root.Pier.PageVinculoOperacaoResponse, root.Pier.MaquinetaPersist, root.Pier.OperacaoCredorPersist, root.Pier.TelefoneEstabelecimentoPersist, root.Pier.TerminalPersist, root.Pier.VinculoEstabelecimentoAdquirentePersist);
  }
}(this, function(ApiClient, OrigemComercialUpdate, OrigemComercialResponse, MaquinetaResponse, MaquinetaUpdate, OperacaoCredorUpdate, OperacaoCredorResponse, TelefoneEstabelecimentoResponse, TelefoneEstabelecimentoUpdate, TerminalUpdateValue, TerminalResponse, EstabelecimentoUpdate, EstabelecimentoResponse, GrupoEconomicoDTO, GrupoEconomicoResponse, OrigemComercialPersist, EstabelecimentoPersist, DetalheOperacaoResponse, VinculoEstabelecimentoAdquirenteResponse, VinculoOperacaoPersist, PageOperacaoResponse, PageMCCResponse, PageOrigemComercialResponse, PageEntidadeResponse, PageTipoEstabelecimentoResponse, PageCampoCodificadoDescricaoResponse, PageTipoOrigemComercialResponse, PageTipoTerminalResponse, PageEstabelecimentoResponse, PageGrupoEconomicoResponse, PageGrupoOrigemComercialResponse, PageMaquinetaResponse, PageMoedaResponse, PageOperacaoCredorResponse, PageTelefoneEstabelecimentoResponse, PageTerminalResponse, PageVinculoEstabelecimentoAdquirenteResponse, PageVinculoOperacaoResponse, MaquinetaPersist, OperacaoCredorPersist, TelefoneEstabelecimentoPersist, TerminalPersist, VinculoEstabelecimentoAdquirentePersist) {
  'use strict';

  /**
   * globaltagestabelecimento service.
   * @module api/GlobaltagestabelecimentoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagestabelecimentoApi. 
   * @alias module:api/GlobaltagestabelecimentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarOrigemComercialUsingPUT operation.
     * @callback module:api/GlobaltagestabelecimentoApi~alterarOrigemComercialUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{origem_comercial_resource_alterar_origem_comercial}}}
     * {{{origem_comercial_resource_alterar_origem_comercial_notes}}}
     * @param {Integer} id {{{origem_comercial_resource_alterar_origem_comercial_param_id}}}
     * @param {module:model/OrigemComercialUpdate} origemComercialUpdate origemComercialUpdate
     * @param {module:api/GlobaltagestabelecimentoApi~alterarOrigemComercialUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercialResponse}
     */
    this.alterarOrigemComercialUsingPUT = function(id, origemComercialUpdate, callback) {
      var postBody = origemComercialUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarOrigemComercialUsingPUT";
      }

      // verify the required parameter 'origemComercialUpdate' is set
      if (origemComercialUpdate == undefined || origemComercialUpdate == null) {
        throw "Missing the required parameter 'origemComercialUpdate' when calling alterarOrigemComercialUsingPUT";
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
      var returnType = OrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/origens-comerciais/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT10 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~alterarUsingPUT10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{maquineta_resource_alterar}}}
     * {{{maquineta_resource_alterar_notes}}}
     * @param {Integer} id {{{maquineta_resource_alterar_param_id}}}
     * @param {module:model/MaquinetaUpdate} maquinetaUpdate maquinetaUpdate
     * @param {module:api/GlobaltagestabelecimentoApi~alterarUsingPUT10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MaquinetaResponse}
     */
    this.alterarUsingPUT10 = function(id, maquinetaUpdate, callback) {
      var postBody = maquinetaUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT10";
      }

      // verify the required parameter 'maquinetaUpdate' is set
      if (maquinetaUpdate == undefined || maquinetaUpdate == null) {
        throw "Missing the required parameter 'maquinetaUpdate' when calling alterarUsingPUT10";
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
      var returnType = MaquinetaResponse;

      return this.apiClient.callApi(
        '/api/maquinetas/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT11 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~alterarUsingPUT11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{operacao_credor_resource_alterar}}}
     * {{{operacao_credor_resource_alterar_notes}}}
     * @param {Integer} id {{{operacao_credor_resource_alterar_param_id}}}
     * @param {module:model/OperacaoCredorUpdate} operacaoCredorUpdate operacaoCredorUpdate
     * @param {module:api/GlobaltagestabelecimentoApi~alterarUsingPUT11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OperacaoCredorResponse}
     */
    this.alterarUsingPUT11 = function(id, operacaoCredorUpdate, callback) {
      var postBody = operacaoCredorUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT11";
      }

      // verify the required parameter 'operacaoCredorUpdate' is set
      if (operacaoCredorUpdate == undefined || operacaoCredorUpdate == null) {
        throw "Missing the required parameter 'operacaoCredorUpdate' when calling alterarUsingPUT11";
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
      var returnType = OperacaoCredorResponse;

      return this.apiClient.callApi(
        '/api/regras-operacoes-estabelecimentos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT17 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~alterarUsingPUT17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_estabelecimento_resource_alterar}}}
     * {{{telefone_estabelecimento_resource_alterar_notes}}}
     * @param {Integer} id {{{telefone_estabelecimento_resource_alterar_param_id}}}
     * @param {module:model/TelefoneEstabelecimentoUpdate} telefoneEstabelecimentoUpdate telefoneEstabelecimentoUpdate
     * @param {module:api/GlobaltagestabelecimentoApi~alterarUsingPUT17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.alterarUsingPUT17 = function(id, telefoneEstabelecimentoUpdate, callback) {
      var postBody = telefoneEstabelecimentoUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT17";
      }

      // verify the required parameter 'telefoneEstabelecimentoUpdate' is set
      if (telefoneEstabelecimentoUpdate == undefined || telefoneEstabelecimentoUpdate == null) {
        throw "Missing the required parameter 'telefoneEstabelecimentoUpdate' when calling alterarUsingPUT17";
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
      var returnType = TelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT19 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~alterarUsingPUT19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{terminal_resource_alterar}}}
     * {{{terminal_resource_alterar_notes}}}
     * @param {Integer} id {{{terminal_resource_alterar_param_id}}}
     * @param {module:model/TerminalUpdateValue} terminalUpdate terminalUpdate
     * @param {module:api/GlobaltagestabelecimentoApi~alterarUsingPUT19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.alterarUsingPUT19 = function(id, terminalUpdate, callback) {
      var postBody = terminalUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT19";
      }

      // verify the required parameter 'terminalUpdate' is set
      if (terminalUpdate == undefined || terminalUpdate == null) {
        throw "Missing the required parameter 'terminalUpdate' when calling alterarUsingPUT19";
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
      var returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT6 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~alterarUsingPUT6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{estabelecimento_resource_alterar}}}
     * {{{estabelecimento_resource_alterar_notes}}}
     * @param {Integer} id {{{estabelecimento_resource_alterar_param_id_estabelecimento}}}
     * @param {module:model/EstabelecimentoUpdate} update update
     * @param {module:api/GlobaltagestabelecimentoApi~alterarUsingPUT6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstabelecimentoResponse}
     */
    this.alterarUsingPUT6 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT6";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPUT6";
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
      var returnType = EstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT8 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~alterarUsingPUT8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{grupo_economico_resource_alterar}}}
     * {{{grupo_economico_resource_alterar_notes}}}
     * @param {Integer} id {{{grupo_economico_resource_alterar_param_id}}}
     * @param {module:model/GrupoEconomicoDTO} grupoEconomicoDTO grupoEconomicoDTO
     * @param {module:api/GlobaltagestabelecimentoApi~alterarUsingPUT8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GrupoEconomicoResponse}
     */
    this.alterarUsingPUT8 = function(id, grupoEconomicoDTO, callback) {
      var postBody = grupoEconomicoDTO;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT8";
      }

      // verify the required parameter 'grupoEconomicoDTO' is set
      if (grupoEconomicoDTO == undefined || grupoEconomicoDTO == null) {
        throw "Missing the required parameter 'grupoEconomicoDTO' when calling alterarUsingPUT8";
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
      var returnType = GrupoEconomicoResponse;

      return this.apiClient.callApi(
        '/api/grupos-economicos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarOrigemComercialUsingPOST operation.
     * @callback module:api/GlobaltagestabelecimentoApi~cadastrarOrigemComercialUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{origem_comercial_resource_cadastrar_origem_comercial}}}
     * {{{origem_comercial_resource_cadastrar_origem_comercial_notes}}}
     * @param {module:model/OrigemComercialPersist} origemComercialPersist origemComercialPersist
     * @param {module:api/GlobaltagestabelecimentoApi~cadastrarOrigemComercialUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercialResponse}
     */
    this.cadastrarOrigemComercialUsingPOST = function(origemComercialPersist, callback) {
      var postBody = origemComercialPersist;

      // verify the required parameter 'origemComercialPersist' is set
      if (origemComercialPersist == undefined || origemComercialPersist == null) {
        throw "Missing the required parameter 'origemComercialPersist' when calling cadastrarOrigemComercialUsingPOST";
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
      var returnType = OrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/origens-comerciais', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST3 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~cadastrarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{estabelecimento_resource_cadastrar}}}
     * {{{estabelecimento_resource_cadastrar_notes}}}
     * @param {module:model/EstabelecimentoPersist} persist persist
     * @param {module:api/GlobaltagestabelecimentoApi~cadastrarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstabelecimentoResponse}
     */
    this.cadastrarUsingPOST3 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling cadastrarUsingPOST3";
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
      var returnType = EstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST4 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~cadastrarUsingPOST4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{grupo_economico_resource_cadastrar}}}
     * {{{grupo_economico_resource_cadastrar_notes}}}
     * @param {module:model/GrupoEconomicoDTO} grupoEconomicoDTO GrupoEconomicoDTO
     * @param {module:api/GlobaltagestabelecimentoApi~cadastrarUsingPOST4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GrupoEconomicoResponse}
     */
    this.cadastrarUsingPOST4 = function(grupoEconomicoDTO, callback) {
      var postBody = grupoEconomicoDTO;

      // verify the required parameter 'grupoEconomicoDTO' is set
      if (grupoEconomicoDTO == undefined || grupoEconomicoDTO == null) {
        throw "Missing the required parameter 'grupoEconomicoDTO' when calling cadastrarUsingPOST4";
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
      var returnType = GrupoEconomicoResponse;

      return this.apiClient.callApi(
        '/api/grupos-economicos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultaOperacaoUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultaOperacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetalheOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{operacao_resource_consulta_operacao}}}
     * {{{operacao_resource_consulta_operacao_notes}}}
     * @param {Integer} id {{{operacao_resource_consulta_operacao_param_id_operacao}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultaOperacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DetalheOperacaoResponse}
     */
    this.consultaOperacaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultaOperacaoUsingGET";
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
      var returnType = DetalheOperacaoResponse;

      return this.apiClient.callApi(
        '/api/tipos-operacoes-estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarOrigemComercialUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarOrigemComercialUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{origem_comercial_resource_consultar_origem_comercial}}}
     * {{{origem_comercial_resource_consultar_origem_comercial_notes}}}
     * @param {Integer} id {{{origem_comercial_resource_consultar_origem_comercial_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarOrigemComercialUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercialResponse}
     */
    this.consultarOrigemComercialUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarOrigemComercialUsingGET";
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
      var returnType = OrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/origens-comerciais/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET22 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarUsingGET22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{estabelecimento_resource_consultar}}}
     * {{{estabelecimento_resource_consultar_notes}}}
     * @param {Integer} id {{{estabelecimento_resource_consultar_param_id_estabelecimento}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarUsingGET22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstabelecimentoResponse}
     */
    this.consultarUsingGET22 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET22";
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
      var returnType = EstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET24 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarUsingGET24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{grupo_economico_resource_consultar}}}
     * {{{grupo_economico_resource_consultar_notes}}}
     * @param {Integer} id {{{grupo_economico_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarUsingGET24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GrupoEconomicoResponse}
     */
    this.consultarUsingGET24 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET24";
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
      var returnType = GrupoEconomicoResponse;

      return this.apiClient.callApi(
        '/api/grupos-economicos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET26 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{maquineta_resource_consultar}}}
     * {{{maquineta_resource_consultar_notes}}}
     * @param {Integer} id {{{maquineta_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MaquinetaResponse}
     */
    this.consultarUsingGET26 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET26";
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
      var returnType = MaquinetaResponse;

      return this.apiClient.callApi(
        '/api/maquinetas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET27 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarUsingGET27Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{operacao_credor_resource_consultar}}}
     * {{{operacao_credor_resource_consultar_notes}}}
     * @param {Integer} id {{{operacao_credor_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarUsingGET27Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OperacaoCredorResponse}
     */
    this.consultarUsingGET27 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET27";
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
      var returnType = OperacaoCredorResponse;

      return this.apiClient.callApi(
        '/api/regras-operacoes-estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET40 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarUsingGET40Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_estabelecimento_resource_consultar}}}
     * {{{telefone_estabelecimento_resource_consultar_notes}}}
     * @param {Integer} id {{{telefone_estabelecimento_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarUsingGET40Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
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
      var returnType = TelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET42 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarUsingGET42Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{terminal_resource_consultar}}}
     * {{{terminal_resource_consultar_notes}}}
     * @param {Integer} id {{{terminal_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarUsingGET42Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
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
      var returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET54 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~consultarUsingGET54Callback
     * @param {String} error Error message, if any.
     * @param {module:model/VinculoEstabelecimentoAdquirenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_estabelecimento_adquirente_resource_consultar}}}
     * {{{vinculo_estabelecimento_adquirente_resource_consultar_notes}}}
     * @param {Integer} id {{{vinculo_estabelecimento_adquirente_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~consultarUsingGET54Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VinculoEstabelecimentoAdquirenteResponse}
     */
    this.consultarUsingGET54 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET54";
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
      var returnType = VinculoEstabelecimentoAdquirenteResponse;

      return this.apiClient.callApi(
        '/api/adquirentes-estabelecimento/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desabilitarVinculoUsingPOST operation.
     * @callback module:api/GlobaltagestabelecimentoApi~desabilitarVinculoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo}}}
     * {{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo_notes}}}
     * @param {Integer} id {{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~desabilitarVinculoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.desabilitarVinculoUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desabilitarVinculoUsingPOST";
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
        '/api/adquirentes-estabelecimento/{id}/desabilitar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desabilitarVinculoUsingPOST1 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~desabilitarVinculoUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_operacao_resource_desabilitar_vinculo}}}
     * {{{vinculo_operacao_resource_desabilitar_vinculo_notes}}}
     * @param {Integer} id {{{vinculo_operacao_resource_desabilitar_vinculo_param_id}}}
     * @param {module:model/VinculoOperacaoPersist} vinculoOperacaoPersist vinculoOperacaoPersist
     * @param {module:api/GlobaltagestabelecimentoApi~desabilitarVinculoUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.desabilitarVinculoUsingPOST1 = function(id, vinculoOperacaoPersist, callback) {
      var postBody = vinculoOperacaoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desabilitarVinculoUsingPOST1";
      }

      // verify the required parameter 'vinculoOperacaoPersist' is set
      if (vinculoOperacaoPersist == undefined || vinculoOperacaoPersist == null) {
        throw "Missing the required parameter 'vinculoOperacaoPersist' when calling desabilitarVinculoUsingPOST1";
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
        '/api/estabelecimentos/{id}/desabilitar-operacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the habilitarVinculoUsingPOST operation.
     * @callback module:api/GlobaltagestabelecimentoApi~habilitarVinculoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo}}}
     * {{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo_notes}}}
     * @param {Integer} id {{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo_param_id}}}
     * @param {module:api/GlobaltagestabelecimentoApi~habilitarVinculoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.habilitarVinculoUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling habilitarVinculoUsingPOST";
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
        '/api/adquirentes-estabelecimento/{id}/habilitar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the habilitarVinculoUsingPOST1 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~habilitarVinculoUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_operacao_resource_habilitar_vinculo}}}
     * {{{vinculo_operacao_resource_habilitar_vinculo_notes}}}
     * @param {Integer} id {{{vinculo_operacao_resource_habilitar_vinculo_param_id}}}
     * @param {module:model/VinculoOperacaoPersist} vinculoOperacaoPersist vinculoOperacaoPersist
     * @param {module:api/GlobaltagestabelecimentoApi~habilitarVinculoUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.habilitarVinculoUsingPOST1 = function(id, vinculoOperacaoPersist, callback) {
      var postBody = vinculoOperacaoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling habilitarVinculoUsingPOST1";
      }

      // verify the required parameter 'vinculoOperacaoPersist' is set
      if (vinculoOperacaoPersist == undefined || vinculoOperacaoPersist == null) {
        throw "Missing the required parameter 'vinculoOperacaoPersist' when calling habilitarVinculoUsingPOST1";
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
        '/api/estabelecimentos/{id}/habilitar-operacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listaOperacaoUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listaOperacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{operacao_resource_lista_operacao}}}
     * {{{operacao_resource_lista_operacao_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idOperacao {{{operacao_request_id_operacao_value}}}
     * @param {String} opts.codigoProcessamento {{{operacao_request_codigo_processamento_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listaOperacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOperacaoResponse}
     */
    this.listaOperacaoUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idOperacao': opts['idOperacao'],
        'codigoProcessamento': opts['codigoProcessamento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOperacaoResponse;

      return this.apiClient.callApi(
        '/api/tipos-operacoes-estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarMCCUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarMCCUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageMCCResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{m_c_c_resource_listar_m_c_c}}}
     * {{{m_c_c_resource_listar_m_c_c_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarMCCUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageMCCResponse}
     */
    this.listarMCCUsingGET = function(opts, callback) {
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
      var returnType = PageMCCResponse;

      return this.apiClient.callApi(
        '/api/mcc-estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarOrigensComerciaisUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarOrigensComerciaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{origem_comercial_resource_listar_origens_comerciais}}}
     * {{{origem_comercial_resource_listar_origens_comerciais_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{origem_comercial_request_id_value}}}
     * @param {String} opts.nome {{{origem_comercial_request_nome_value}}}
     * @param {Integer} opts.status {{{origem_comercial_request_status_value}}}
     * @param {Integer} opts.idEstabelecimento {{{origem_comercial_request_id_estabelecimento_value}}}
     * @param {Integer} opts.idProduto {{{origem_comercial_request_id_produto_value}}}
     * @param {String} opts.descricao {{{origem_comercial_request_descricao_value}}}
     * @param {Integer} opts.idTipoOrigemComercial {{{origem_comercial_request_id_tipo_origem_comercial_value}}}
     * @param {Integer} opts.idGrupoOrigemComercial {{{origem_comercial_request_id_grupo_origem_comercial_value}}}
     * @param {Boolean} opts.flagPreAprovado {{{origem_comercial_request_flag_pre_aprovado_value}}}
     * @param {Boolean} opts.flagAprovacaoImediata {{{origem_comercial_request_flag_aprovacao_imediata_value}}}
     * @param {String} opts.nomeFantasiaPlastico {{{origem_comercial_request_nome_fantasia_plastico_value}}}
     * @param {Boolean} opts.flagCartaoProvisorio {{{origem_comercial_request_flag_cartao_provisorio_value}}}
     * @param {Boolean} opts.flagCartaoDefinitivo {{{origem_comercial_request_flag_cartao_definitivo_value}}}
     * @param {String} opts.usuario {{{origem_comercial_request_usuario_value}}}
     * @param {String} opts.senha {{{origem_comercial_request_senha_value}}}
     * @param {Boolean} opts.flagOrigemExterna {{{origem_comercial_request_flag_origem_externa_value}}}
     * @param {Boolean} opts.flagModificado {{{origem_comercial_request_flag_modificado_value}}}
     * @param {Boolean} opts.flagEnviaFaturaUsuario {{{origem_comercial_request_flag_envia_fatura_usuario_value}}}
     * @param {Boolean} opts.flagCreditoFaturamento {{{origem_comercial_request_flag_credito_faturamento_value}}}
     * @param {Boolean} opts.flagConcedeLimiteProvisorio {{{origem_comercial_request_flag_concede_limite_provisorio_value}}}
     * @param {Boolean} opts.flagDigitalizarDoc {{{origem_comercial_request_flag_digitalizar_doc_value}}}
     * @param {Boolean} opts.flagEmbossingLoja {{{origem_comercial_request_flag_embossing_loja_value}}}
     * @param {Boolean} opts.flagConsultaPrevia {{{origem_comercial_request_flag_consulta_previa_value}}}
     * @param {module:model/String} opts.tipoPessoa {{{origem_comercial_request_tipo_pessoa_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarOrigensComerciaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOrigemComercialResponse}
     */
    this.listarOrigensComerciaisUsingGET = function(opts, callback) {
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
        'status': opts['status'],
        'idEstabelecimento': opts['idEstabelecimento'],
        'idProduto': opts['idProduto'],
        'descricao': opts['descricao'],
        'idTipoOrigemComercial': opts['idTipoOrigemComercial'],
        'idGrupoOrigemComercial': opts['idGrupoOrigemComercial'],
        'flagPreAprovado': opts['flagPreAprovado'],
        'flagAprovacaoImediata': opts['flagAprovacaoImediata'],
        'nomeFantasiaPlastico': opts['nomeFantasiaPlastico'],
        'flagCartaoProvisorio': opts['flagCartaoProvisorio'],
        'flagCartaoDefinitivo': opts['flagCartaoDefinitivo'],
        'usuario': opts['usuario'],
        'senha': opts['senha'],
        'flagOrigemExterna': opts['flagOrigemExterna'],
        'flagModificado': opts['flagModificado'],
        'flagEnviaFaturaUsuario': opts['flagEnviaFaturaUsuario'],
        'flagCreditoFaturamento': opts['flagCreditoFaturamento'],
        'flagConcedeLimiteProvisorio': opts['flagConcedeLimiteProvisorio'],
        'flagDigitalizarDoc': opts['flagDigitalizarDoc'],
        'flagEmbossingLoja': opts['flagEmbossingLoja'],
        'flagConsultaPrevia': opts['flagConsultaPrevia'],
        'tipoPessoa': opts['tipoPessoa']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/origens-comerciais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposAdquirentesUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarTiposAdquirentesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEntidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_estabelecimento_adquirente_resource_listar_tipos_adquirentes}}}
     * {{{vinculo_estabelecimento_adquirente_resource_listar_tipos_adquirentes_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarTiposAdquirentesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEntidadeResponse}
     */
    this.listarTiposAdquirentesUsingGET = function(opts, callback) {
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
      var returnType = PageEntidadeResponse;

      return this.apiClient.callApi(
        '/api/tipos-adquirentes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposEstabelecimentosUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarTiposEstabelecimentosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_estabelecimento_resource_listar_tipos_estabelecimentos}}}
     * {{{tipo_estabelecimento_resource_listar_tipos_estabelecimentos_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.descricao {{{tipo_estabelecimento_request_descricao_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarTiposEstabelecimentosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoEstabelecimentoResponse}
     */
    this.listarTiposEstabelecimentosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposMaquinetasUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarTiposMaquinetasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{maquineta_resource_listar_tipos_maquinetas}}}
     * {{{maquineta_resource_listar_tipos_maquinetas_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarTiposMaquinetasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricaoResponse}
     */
    this.listarTiposMaquinetasUsingGET = function(opts, callback) {
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
        '/api/tipos-maquinetas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposOrigensComerciaisUsingGET operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarTiposOrigensComerciaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoOrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_origem_comercial_resource_listar_tipos_origens_comerciais}}}
     * {{{tipo_origem_comercial_resource_listar_tipos_origens_comerciais_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{tipo_origem_comercial_request_nome_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarTiposOrigensComerciaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoOrigemComercialResponse}
     */
    this.listarTiposOrigensComerciaisUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoOrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/tipos-origens-comerciais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposTerminaisUsingGET1 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarTiposTerminaisUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{terminal_resource_listar_tipos_terminais}}}
     * {{{terminal_resource_listar_tipos_terminais_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarTiposTerminaisUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTerminalResponse}
     */
    this.listarTiposTerminaisUsingGET1 = function(opts, callback) {
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
      var returnType = PageTipoTerminalResponse;

      return this.apiClient.callApi(
        '/api/tipos-terminais-estabelecimento', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET26 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{estabelecimento_resource_listar}}}
     * {{{estabelecimento_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{estabelecimento_request_id_value}}}
     * @param {Integer} opts.idGrupoEconomico {{{estabelecimento_request_id_grupo_economico_value}}}
     * @param {String} opts.numeroReceitaFederal {{{estabelecimento_request_numero_receita_federal_value}}}
     * @param {String} opts.nome {{{estabelecimento_request_nome_value}}}
     * @param {String} opts.descricao {{{estabelecimento_request_descricao_value}}}
     * @param {String} opts.nomeFantasia {{{estabelecimento_request_nome_fantasia_value}}}
     * @param {String} opts.cep {{{estabelecimento_request_cep_value}}}
     * @param {String} opts.nomeLogradouro {{{estabelecimento_request_nome_logradouro_value}}}
     * @param {Integer} opts.numeroEndereco {{{estabelecimento_request_numero_endereco_value}}}
     * @param {String} opts.complemento {{{estabelecimento_request_complemento_value}}}
     * @param {String} opts.bairro {{{estabelecimento_request_bairro_value}}}
     * @param {String} opts.cidade {{{estabelecimento_request_cidade_value}}}
     * @param {String} opts.uf {{{estabelecimento_request_uf_value}}}
     * @param {String} opts.pais {{{estabelecimento_request_pais_value}}}
     * @param {String} opts.dataCadastramento {{{estabelecimento_request_data_cadastramento_value}}}
     * @param {String} opts.contato {{{estabelecimento_request_contato_value}}}
     * @param {String} opts.email {{{estabelecimento_request_email_value}}}
     * @param {Integer} opts.flagArquivoSecrFazenda {{{estabelecimento_request_flag_arquivo_secr_fazenda_value}}}
     * @param {Integer} opts.flagCartaoDigitado {{{estabelecimento_request_flag_cartao_digitado_value}}}
     * @param {Integer} opts.inativo {{{estabelecimento_request_inativo_value}}}
     * @param {Integer} opts.idPais {{{estabelecimento_request_id_pais_value}}}
     * @param {Integer} opts.mcc {{{estabelecimento_request_mcc_value}}}
     * @param {Integer} opts.idTipoEstabelecimento {{{estabelecimento_request_id_tipo_estabelecimento_value}}}
     * @param {Integer} opts.correspondencia {{{estabelecimento_request_correspondencia_value}}}
     * @param {Integer} opts.idMoeda {{{estabelecimento_request_id_moeda_value}}}
     * @param {module:model/String} opts.tipoPagamento {{{estabelecimento_request_tipo_pagamento_value}}}
     * @param {String} opts.numeroEstabelecimento {{{estabelecimento_request_numero_estabelecimento_value}}}
     * @param {String} opts.cep2 {{{estabelecimento_request_cep2_value}}}
     * @param {String} opts.nomeLogradouro2 {{{estabelecimento_request_nome_logradouro2_value}}}
     * @param {Integer} opts.numeroEndereco2 {{{estabelecimento_request_numero_endereco2_value}}}
     * @param {String} opts.complemento2 {{{estabelecimento_request_complemento2_value}}}
     * @param {String} opts.bairro2 {{{estabelecimento_request_bairro2_value}}}
     * @param {String} opts.cidade2 {{{estabelecimento_request_cidade2_value}}}
     * @param {String} opts.uf2 {{{estabelecimento_request_uf2_value}}}
     * @param {Integer} opts.flagMatriz {{{estabelecimento_request_flag_matriz_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEstabelecimentoResponse}
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
        'idGrupoEconomico': opts['idGrupoEconomico'],
        'numeroReceitaFederal': opts['numeroReceitaFederal'],
        'nome': opts['nome'],
        'descricao': opts['descricao'],
        'nomeFantasia': opts['nomeFantasia'],
        'cep': opts['cep'],
        'nomeLogradouro': opts['nomeLogradouro'],
        'numeroEndereco': opts['numeroEndereco'],
        'complemento': opts['complemento'],
        'bairro': opts['bairro'],
        'cidade': opts['cidade'],
        'uf': opts['uf'],
        'pais': opts['pais'],
        'dataCadastramento': opts['dataCadastramento'],
        'contato': opts['contato'],
        'email': opts['email'],
        'flagArquivoSecrFazenda': opts['flagArquivoSecrFazenda'],
        'flagCartaoDigitado': opts['flagCartaoDigitado'],
        'inativo': opts['inativo'],
        'idPais': opts['idPais'],
        'mcc': opts['mcc'],
        'idTipoEstabelecimento': opts['idTipoEstabelecimento'],
        'correspondencia': opts['correspondencia'],
        'idMoeda': opts['idMoeda'],
        'tipoPagamento': opts['tipoPagamento'],
        'numeroEstabelecimento': opts['numeroEstabelecimento'],
        'cep2': opts['cep2'],
        'nomeLogradouro2': opts['nomeLogradouro2'],
        'numeroEndereco2': opts['numeroEndereco2'],
        'complemento2': opts['complemento2'],
        'bairro2': opts['bairro2'],
        'cidade2': opts['cidade2'],
        'uf2': opts['uf2'],
        'flagMatriz': opts['flagMatriz']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET29 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET29Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{grupo_economico_resource_listar}}}
     * {{{grupo_economico_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.razaoSocial {{{grupo_economico_request_razao_social_value}}}
     * @param {String} opts.nomeCredor {{{grupo_economico_request_nome_credor_value}}}
     * @param {String} opts.numeroReceitaFederal {{{grupo_economico_request_numero_receita_federal_value}}}
     * @param {String} opts.inscricaoEstadual {{{grupo_economico_request_inscricao_estadual_value}}}
     * @param {String} opts.contato {{{grupo_economico_request_contato_value}}}
     * @param {Integer} opts.banco {{{grupo_economico_request_banco_value}}}
     * @param {Integer} opts.agencia {{{grupo_economico_request_agencia_value}}}
     * @param {String} opts.digitoAgencia {{{grupo_economico_request_digito_agencia_value}}}
     * @param {String} opts.contaCorrente {{{grupo_economico_request_conta_corrente_value}}}
     * @param {String} opts.digitoContaCorrente {{{grupo_economico_request_digito_conta_corrente_value}}}
     * @param {module:model/String} opts.periodicidade {{{grupo_economico_request_periodicidade_value}}}
     * @param {module:model/String} opts.pagamentoSemanal {{{grupo_economico_request_pagamento_semanal_value}}}
     * @param {Integer} opts.pagamentoMensal {{{grupo_economico_request_pagamento_mensal_value}}}
     * @param {Integer} opts.pagamentoDecendialPrimeiro {{{grupo_economico_request_pagamento_decendial_primeiro_value}}}
     * @param {Integer} opts.pagamentoDecendialSegundo {{{grupo_economico_request_pagamento_decendial_segundo_value}}}
     * @param {Integer} opts.pagamentoDecendialTerceiro {{{grupo_economico_request_pagamento_decendial_terceiro_value}}}
     * @param {Integer} opts.pagamentoQuinzenalPrimeiro {{{grupo_economico_request_pagamento_quinzenal_primeiro_value}}}
     * @param {Integer} opts.pagamentoQuinzenalSegundo {{{grupo_economico_request_pagamento_quinzenal_segundo_value}}}
     * @param {Number} opts.percentualRAV {{{grupo_economico_request_percentual_r_a_v_value}}}
     * @param {module:model/String} opts.recebeRAV {{{grupo_economico_request_recebe_r_a_v_value}}}
     * @param {Number} opts.percentualMultiplica {{{grupo_economico_request_percentual_multiplica_value}}}
     * @param {Number} opts.taxaAdm {{{grupo_economico_request_taxa_adm_value}}}
     * @param {Number} opts.taxaBanco {{{grupo_economico_request_taxa_banco_value}}}
     * @param {Number} opts.limiteRAV {{{grupo_economico_request_limite_r_a_v_value}}}
     * @param {Integer} opts.idCredorRAV {{{grupo_economico_request_id_credor_r_a_v_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET29Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoEconomicoResponse}
     */
    this.listarUsingGET29 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'razaoSocial': opts['razaoSocial'],
        'nomeCredor': opts['nomeCredor'],
        'numeroReceitaFederal': opts['numeroReceitaFederal'],
        'inscricaoEstadual': opts['inscricaoEstadual'],
        'contato': opts['contato'],
        'banco': opts['banco'],
        'agencia': opts['agencia'],
        'digitoAgencia': opts['digitoAgencia'],
        'contaCorrente': opts['contaCorrente'],
        'digitoContaCorrente': opts['digitoContaCorrente'],
        'periodicidade': opts['periodicidade'],
        'pagamentoSemanal': opts['pagamentoSemanal'],
        'pagamentoMensal': opts['pagamentoMensal'],
        'pagamentoDecendialPrimeiro': opts['pagamentoDecendialPrimeiro'],
        'pagamentoDecendialSegundo': opts['pagamentoDecendialSegundo'],
        'pagamentoDecendialTerceiro': opts['pagamentoDecendialTerceiro'],
        'pagamentoQuinzenalPrimeiro': opts['pagamentoQuinzenalPrimeiro'],
        'pagamentoQuinzenalSegundo': opts['pagamentoQuinzenalSegundo'],
        'percentualRAV': opts['percentualRAV'],
        'recebeRAV': opts['recebeRAV'],
        'percentualMultiplica': opts['percentualMultiplica'],
        'taxaAdm': opts['taxaAdm'],
        'taxaBanco': opts['taxaBanco'],
        'limiteRAV': opts['limiteRAV'],
        'idCredorRAV': opts['idCredorRAV']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageGrupoEconomicoResponse;

      return this.apiClient.callApi(
        '/api/grupos-economicos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET30 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGrupoOrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{grupo_origem_comercial_resource_listar}}}
     * {{{grupo_origem_comercial_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{grupo_origem_comercial_request_nome_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoOrigemComercialResponse}
     */
    this.listarUsingGET30 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageGrupoOrigemComercialResponse;

      return this.apiClient.callApi(
        '/api/grupos-origens-comerciais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET33 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET33Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageMaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{maquineta_resource_listar}}}
     * {{{maquineta_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idEstabelecimento {{{maquineta_request_id_estabelecimento_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageMaquinetaResponse}
     */
    this.listarUsingGET33 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idEstabelecimento': opts['idEstabelecimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageMaquinetaResponse;

      return this.apiClient.callApi(
        '/api/maquinetas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET34 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET34Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageMoedaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{moeda_resource_listar}}}
     * {{{moeda_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.codigoMoeda {{{moeda_request_codigo_moeda_value}}}
     * @param {String} opts.simbolo {{{moeda_request_simbolo_value}}}
     * @param {String} opts.descricao {{{moeda_request_descricao_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET34Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageMoedaResponse}
     */
    this.listarUsingGET34 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'codigoMoeda': opts['codigoMoeda'],
        'simbolo': opts['simbolo'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageMoedaResponse;

      return this.apiClient.callApi(
        '/api/tipos-moedas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET35 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{operacao_credor_resource_listar}}}
     * {{{operacao_credor_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idOperacao {{{operacao_credor_request_id_operacao_value}}}
     * @param {Integer} opts.idCredor {{{operacao_credor_request_id_credor_value}}}
     * @param {Integer} opts.idProduto {{{operacao_credor_request_id_produto_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOperacaoCredorResponse}
     */
    this.listarUsingGET35 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idOperacao': opts['idOperacao'],
        'idCredor': opts['idCredor'],
        'idProduto': opts['idProduto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOperacaoCredorResponse;

      return this.apiClient.callApi(
        '/api/regras-operacoes-estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET52 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET52Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_estabelecimento_resource_listar}}}
     * {{{telefone_estabelecimento_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idEstabelecimento {{{telefone_estabelecimento_request_id_estabelecimento_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET52Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTelefoneEstabelecimentoResponse}
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
        'idEstabelecimento': opts['idEstabelecimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET54 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET54Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{terminal_resource_listar}}}
     * {{{terminal_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{terminal_request_id_value}}}
     * @param {String} opts.terminal {{{terminal_request_terminal_value}}}
     * @param {Integer} opts.numeroEstabelecimento {{{terminal_request_numero_estabelecimento_value}}}
     * @param {Integer} opts.idEstabelecimento {{{terminal_request_id_estabelecimento_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET54Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTerminalResponse}
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
        'terminal': opts['terminal'],
        'numeroEstabelecimento': opts['numeroEstabelecimento'],
        'idEstabelecimento': opts['idEstabelecimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET67 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET67Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageVinculoEstabelecimentoAdquirenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_estabelecimento_adquirente_resource_listar}}}
     * {{{vinculo_estabelecimento_adquirente_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idAdquirente {{{vinculo_estabelecimento_adquirente_request_id_adquirente_value}}}
     * @param {Integer} opts.idEstabelecimento {{{vinculo_estabelecimento_adquirente_request_id_estabelecimento_value}}}
     * @param {String} opts.codigoEstabelecimentoAdquirente {{{vinculo_estabelecimento_adquirente_request_codigo_estabelecimento_adquirente_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET67Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageVinculoEstabelecimentoAdquirenteResponse}
     */
    this.listarUsingGET67 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idAdquirente': opts['idAdquirente'],
        'idEstabelecimento': opts['idEstabelecimento'],
        'codigoEstabelecimentoAdquirente': opts['codigoEstabelecimentoAdquirente']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageVinculoEstabelecimentoAdquirenteResponse;

      return this.apiClient.callApi(
        '/api/adquirentes-estabelecimento', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET68 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~listarUsingGET68Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageVinculoOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_operacao_resource_listar}}}
     * {{{vinculo_operacao_resource_listar_notes}}}
     * @param {Integer} id {{{vinculo_operacao_resource_listar_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idProduto {{{vinculo_operacao_request_id_produto_value}}}
     * @param {Integer} opts.idOperacao {{{vinculo_operacao_request_id_operacao_value}}}
     * @param {Integer} opts.codigoMCC {{{vinculo_operacao_request_codigo_m_c_c_value}}}
     * @param {module:api/GlobaltagestabelecimentoApi~listarUsingGET68Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageVinculoOperacaoResponse}
     */
    this.listarUsingGET68 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET68";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idProduto': opts['idProduto'],
        'idOperacao': opts['idOperacao'],
        'codigoMCC': opts['codigoMCC']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageVinculoOperacaoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos/{id}/operacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST20 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~salvarUsingPOST20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{maquineta_resource_salvar}}}
     * {{{maquineta_resource_salvar_notes}}}
     * @param {module:model/MaquinetaPersist} maquinetaPersist maquinetaPersist
     * @param {module:api/GlobaltagestabelecimentoApi~salvarUsingPOST20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MaquinetaResponse}
     */
    this.salvarUsingPOST20 = function(maquinetaPersist, callback) {
      var postBody = maquinetaPersist;

      // verify the required parameter 'maquinetaPersist' is set
      if (maquinetaPersist == undefined || maquinetaPersist == null) {
        throw "Missing the required parameter 'maquinetaPersist' when calling salvarUsingPOST20";
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
      var returnType = MaquinetaResponse;

      return this.apiClient.callApi(
        '/api/maquinetas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST21 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~salvarUsingPOST21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{operacao_credor_resource_salvar}}}
     * {{{operacao_credor_resource_salvar_notes}}}
     * @param {module:model/OperacaoCredorPersist} operacaoCredorPersist operacaoCredorPersist
     * @param {module:api/GlobaltagestabelecimentoApi~salvarUsingPOST21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OperacaoCredorResponse}
     */
    this.salvarUsingPOST21 = function(operacaoCredorPersist, callback) {
      var postBody = operacaoCredorPersist;

      // verify the required parameter 'operacaoCredorPersist' is set
      if (operacaoCredorPersist == undefined || operacaoCredorPersist == null) {
        throw "Missing the required parameter 'operacaoCredorPersist' when calling salvarUsingPOST21";
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
      var returnType = OperacaoCredorResponse;

      return this.apiClient.callApi(
        '/api/regras-operacoes-estabelecimentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST28 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~salvarUsingPOST28Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_estabelecimento_resource_salvar}}}
     * {{{telefone_estabelecimento_resource_salvar_notes}}}
     * @param {module:model/TelefoneEstabelecimentoPersist} telefoneEstabelecimentoPersist telefoneEstabelecimentoPersist
     * @param {module:api/GlobaltagestabelecimentoApi~salvarUsingPOST28Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.salvarUsingPOST28 = function(telefoneEstabelecimentoPersist, callback) {
      var postBody = telefoneEstabelecimentoPersist;

      // verify the required parameter 'telefoneEstabelecimentoPersist' is set
      if (telefoneEstabelecimentoPersist == undefined || telefoneEstabelecimentoPersist == null) {
        throw "Missing the required parameter 'telefoneEstabelecimentoPersist' when calling salvarUsingPOST28";
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
      var returnType = TelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST30 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~salvarUsingPOST30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{terminal_resource_salvar}}}
     * {{{terminal_resource_salvar_notes}}}
     * @param {module:model/TerminalPersist} terminalPersist terminalPersist
     * @param {module:api/GlobaltagestabelecimentoApi~salvarUsingPOST30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.salvarUsingPOST30 = function(terminalPersist, callback) {
      var postBody = terminalPersist;

      // verify the required parameter 'terminalPersist' is set
      if (terminalPersist == undefined || terminalPersist == null) {
        throw "Missing the required parameter 'terminalPersist' when calling salvarUsingPOST30";
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
      var returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST35 operation.
     * @callback module:api/GlobaltagestabelecimentoApi~salvarUsingPOST35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/VinculoEstabelecimentoAdquirenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{vinculo_estabelecimento_adquirente_resource_salvar}}}
     * {{{vinculo_estabelecimento_adquirente_resource_salvar_notes}}}
     * @param {module:model/VinculoEstabelecimentoAdquirentePersist} vinculoEstabelecimentoAdquirentePersist vinculoEstabelecimentoAdquirentePersist
     * @param {module:api/GlobaltagestabelecimentoApi~salvarUsingPOST35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VinculoEstabelecimentoAdquirenteResponse}
     */
    this.salvarUsingPOST35 = function(vinculoEstabelecimentoAdquirentePersist, callback) {
      var postBody = vinculoEstabelecimentoAdquirentePersist;

      // verify the required parameter 'vinculoEstabelecimentoAdquirentePersist' is set
      if (vinculoEstabelecimentoAdquirentePersist == undefined || vinculoEstabelecimentoAdquirentePersist == null) {
        throw "Missing the required parameter 'vinculoEstabelecimentoAdquirentePersist' when calling salvarUsingPOST35";
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
      var returnType = VinculoEstabelecimentoAdquirenteResponse;

      return this.apiClient.callApi(
        '/api/adquirentes-estabelecimento', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
