(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrigemComercialUpdate', '../model/OrigemComercialResponse', '../model/MaquinetaResponse', '../model/MaquinetaUpdate', '../model/OperacaoCredorUpdate', '../model/OperacaoCredorResponse', '../model/TelefoneEstabelecimentoResponse', '../model/TerminalUpdate', '../model/TerminalResponse', '../model/EstabelecimentoUpdate', '../model/EstabelecimentoResponse', '../model/GrupoEconomicoDTO', '../model/GrupoEconomicoResponse', '../model/OrigemComercialPersist', '../model/EstabelecimentoPersist', '../model/DetalheOperacaoResponse', '../model/VinculoEstabelecimentoAdquirenteResponse', '../model/VinculoOperacaoPersist', '../model/PageOperacaoResponse', '../model/PageMCCResponse', '../model/PageOrigemComercialResponse', '../model/PageEntidadeResponse', '../model/PageCampoCodificadoDescricaoResponse', '../model/PageTipoTerminalResponse', '../model/PageEstabelecimentoResponse', '../model/PageGrupoEconomicoResponse', '../model/PageMaquinetaResponse', '../model/PageMoedaResponse', '../model/PageOperacaoCredorResponse', '../model/PageTelefoneEstabelecimentoResponse', '../model/PageTerminalResponse', '../model/PageVinculoEstabelecimentoAdquirenteResponse', '../model/PageVinculoOperacaoResponse', '../model/MaquinetaPersist', '../model/OperacaoCredorPersist', '../model/TerminalPersist', '../model/VinculoEstabelecimentoAdquirentePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrigemComercialUpdate'), require('../model/OrigemComercialResponse'), require('../model/MaquinetaResponse'), require('../model/MaquinetaUpdate'), require('../model/OperacaoCredorUpdate'), require('../model/OperacaoCredorResponse'), require('../model/TelefoneEstabelecimentoResponse'), require('../model/TerminalUpdate'), require('../model/TerminalResponse'), require('../model/EstabelecimentoUpdate'), require('../model/EstabelecimentoResponse'), require('../model/GrupoEconomicoDTO'), require('../model/GrupoEconomicoResponse'), require('../model/OrigemComercialPersist'), require('../model/EstabelecimentoPersist'), require('../model/DetalheOperacaoResponse'), require('../model/VinculoEstabelecimentoAdquirenteResponse'), require('../model/VinculoOperacaoPersist'), require('../model/PageOperacaoResponse'), require('../model/PageMCCResponse'), require('../model/PageOrigemComercialResponse'), require('../model/PageEntidadeResponse'), require('../model/PageCampoCodificadoDescricaoResponse'), require('../model/PageTipoTerminalResponse'), require('../model/PageEstabelecimentoResponse'), require('../model/PageGrupoEconomicoResponse'), require('../model/PageMaquinetaResponse'), require('../model/PageMoedaResponse'), require('../model/PageOperacaoCredorResponse'), require('../model/PageTelefoneEstabelecimentoResponse'), require('../model/PageTerminalResponse'), require('../model/PageVinculoEstabelecimentoAdquirenteResponse'), require('../model/PageVinculoOperacaoResponse'), require('../model/MaquinetaPersist'), require('../model/OperacaoCredorPersist'), require('../model/TerminalPersist'), require('../model/VinculoEstabelecimentoAdquirentePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EstabelecimentoApi = factory(root.Pier.ApiClient, root.Pier.OrigemComercialUpdate, root.Pier.OrigemComercialResponse, root.Pier.MaquinetaResponse, root.Pier.MaquinetaUpdate, root.Pier.OperacaoCredorUpdate, root.Pier.OperacaoCredorResponse, root.Pier.TelefoneEstabelecimentoResponse, root.Pier.TerminalUpdate, root.Pier.TerminalResponse, root.Pier.EstabelecimentoUpdate, root.Pier.EstabelecimentoResponse, root.Pier.GrupoEconomicoDTO, root.Pier.GrupoEconomicoResponse, root.Pier.OrigemComercialPersist, root.Pier.EstabelecimentoPersist, root.Pier.DetalheOperacaoResponse, root.Pier.VinculoEstabelecimentoAdquirenteResponse, root.Pier.VinculoOperacaoPersist, root.Pier.PageOperacaoResponse, root.Pier.PageMCCResponse, root.Pier.PageOrigemComercialResponse, root.Pier.PageEntidadeResponse, root.Pier.PageCampoCodificadoDescricaoResponse, root.Pier.PageTipoTerminalResponse, root.Pier.PageEstabelecimentoResponse, root.Pier.PageGrupoEconomicoResponse, root.Pier.PageMaquinetaResponse, root.Pier.PageMoedaResponse, root.Pier.PageOperacaoCredorResponse, root.Pier.PageTelefoneEstabelecimentoResponse, root.Pier.PageTerminalResponse, root.Pier.PageVinculoEstabelecimentoAdquirenteResponse, root.Pier.PageVinculoOperacaoResponse, root.Pier.MaquinetaPersist, root.Pier.OperacaoCredorPersist, root.Pier.TerminalPersist, root.Pier.VinculoEstabelecimentoAdquirentePersist);
  }
}(this, function(ApiClient, OrigemComercialUpdate, OrigemComercialResponse, MaquinetaResponse, MaquinetaUpdate, OperacaoCredorUpdate, OperacaoCredorResponse, TelefoneEstabelecimentoResponse, TerminalUpdate, TerminalResponse, EstabelecimentoUpdate, EstabelecimentoResponse, GrupoEconomicoDTO, GrupoEconomicoResponse, OrigemComercialPersist, EstabelecimentoPersist, DetalheOperacaoResponse, VinculoEstabelecimentoAdquirenteResponse, VinculoOperacaoPersist, PageOperacaoResponse, PageMCCResponse, PageOrigemComercialResponse, PageEntidadeResponse, PageCampoCodificadoDescricaoResponse, PageTipoTerminalResponse, PageEstabelecimentoResponse, PageGrupoEconomicoResponse, PageMaquinetaResponse, PageMoedaResponse, PageOperacaoCredorResponse, PageTelefoneEstabelecimentoResponse, PageTerminalResponse, PageVinculoEstabelecimentoAdquirenteResponse, PageVinculoOperacaoResponse, MaquinetaPersist, OperacaoCredorPersist, TerminalPersist, VinculoEstabelecimentoAdquirentePersist) {
  'use strict';

  /**
   * Estabelecimento service.
   * @module api/EstabelecimentoApi
   * @version 2.54.1
   */

  /**
   * Constructs a new EstabelecimentoApi. 
   * @alias module:api/EstabelecimentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarOrigemComercialUsingPUT operation.
     * @callback module:api/EstabelecimentoApi~alterarOrigemComercialUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Origem Comercial
     * Altera uma origem comercial.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da origem comercial
     * @param {module:model/OrigemComercialUpdate} origemComercialUpdate origemComercialUpdate
     * @param {module:api/EstabelecimentoApi~alterarOrigemComercialUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera uma Maquineta
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o das maquinetas dos estabelecimentos.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Maquineta (id).
     * @param {module:model/MaquinetaUpdate} maquinetaUpdate maquinetaUpdate
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT10Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera uma Regra Opera\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o de uma regra opera\u00C3\u00A7\u00C3\u00A3o.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Regra Opera\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {module:model/OperacaoCredorUpdate} operacaoCredorUpdate operacaoCredorUpdate
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT11Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the alterarUsingPUT15 operation.
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera um Telefone do estabelecimento
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos telefones dos estabelecimentos.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).
     * @param {String} ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} telefone N\u00C3\u00BAmero do telefone.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.alterarUsingPUT15 = function(id, ddd, telefone, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT15";
      }

      // verify the required parameter 'ddd' is set
      if (ddd == undefined || ddd == null) {
        throw "Missing the required parameter 'ddd' when calling alterarUsingPUT15";
      }

      // verify the required parameter 'telefone' is set
      if (telefone == undefined || telefone == null) {
        throw "Missing the required parameter 'telefone' when calling alterarUsingPUT15";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'ddd': ddd,
        'telefone': telefone,
        'ramal': opts['ramal']
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
     * Callback function to receive the result of the alterarUsingPUT17 operation.
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera um Terminal
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos Terminais.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal (id).
     * @param {module:model/TerminalUpdate} terminalUpdate terminalUpdate
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.alterarUsingPUT17 = function(id, terminalUpdate, callback) {
      var postBody = terminalUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT17";
      }

      // verify the required parameter 'terminalUpdate' is set
      if (terminalUpdate == undefined || terminalUpdate == null) {
        throw "Missing the required parameter 'terminalUpdate' when calling alterarUsingPUT17";
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
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar um estabelecimento
     * Altera um estabelecimento
     * @param {Integer} id Id
     * @param {module:model/EstabelecimentoUpdate} update update
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT6Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Grupo Econ\u00C3\u00B4mico
     * Altera um grupo econ\u00C3\u00B4mico.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do grupo econ\u00C3\u00B4mico
     * @param {module:model/GrupoEconomicoDTO} grupoEconomicoDTO grupoEconomicoDTO
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT8Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~cadastrarOrigemComercialUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar Origem Comercial
     * Cadastra uma origem comercial.
     * @param {module:model/OrigemComercialPersist} origemComercialPersist origemComercialPersist
     * @param {module:api/EstabelecimentoApi~cadastrarOrigemComercialUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the cadastrarUsingPOST2 operation.
     * @callback module:api/EstabelecimentoApi~cadastrarUsingPOST2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar um estabelecimento
     * Cadastra um novo estabelecimento
     * @param {module:model/EstabelecimentoPersist} persist persist
     * @param {module:api/EstabelecimentoApi~cadastrarUsingPOST2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstabelecimentoResponse}
     */
    this.cadastrarUsingPOST2 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling cadastrarUsingPOST2";
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
     * Callback function to receive the result of the cadastrarUsingPOST3 operation.
     * @callback module:api/EstabelecimentoApi~cadastrarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar Grupo Econ\u00C3\u00B4mico
     * Cadastra um grupo econ\u00C3\u00B4mico.
     * @param {module:model/GrupoEconomicoDTO} grupoEconomicoDTO GrupoEconomicoDTO
     * @param {module:api/EstabelecimentoApi~cadastrarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GrupoEconomicoResponse}
     */
    this.cadastrarUsingPOST3 = function(grupoEconomicoDTO, callback) {
      var postBody = grupoEconomicoDTO;

      // verify the required parameter 'grupoEconomicoDTO' is set
      if (grupoEconomicoDTO == undefined || grupoEconomicoDTO == null) {
        throw "Missing the required parameter 'grupoEconomicoDTO' when calling cadastrarUsingPOST3";
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
     * @callback module:api/EstabelecimentoApi~consultaOperacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetalheOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado tipo de opera\u00C3\u00A7\u00C3\u00A3o
     * Este recurso permite consultar dados de um determinado tipo opera\u00C3\u00A7\u00C3\u00A3o a partir do idoperacao
     * @param {Integer} id C\u00C3\u00B3digo de processamento da opera\u00C3\u00A7\u00C3\u00A3o (idOperacao).
     * @param {module:api/EstabelecimentoApi~consultaOperacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~consultarOrigemComercialUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Origem Comercial
     * Consulta uma origem comercial atrav\u00C3\u00A9s do seu identificador.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da origem comercial
     * @param {module:api/EstabelecimentoApi~consultarOrigemComercialUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the consultarUsingGET16 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar estabelecimento por id
     * Consulta os detalhes de um determinado estabelecimento
     * @param {Integer} id Id
     * @param {module:api/EstabelecimentoApi~consultarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstabelecimentoResponse}
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
      var returnType = EstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET18 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar grupo econ\u00C3\u00B4mico
     * Consulta um grupo econ\u00C3\u00B4mico atrav\u00C3\u00A9s do seu identificador.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do grupo econ\u00C3\u00B4mico
     * @param {module:api/EstabelecimentoApi~consultarUsingGET18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GrupoEconomicoResponse}
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
      var returnType = GrupoEconomicoResponse;

      return this.apiClient.callApi(
        '/api/grupos-economicos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET20 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de uma determinada maquineta
     * Este m\u00C3\u00A9todo permite consultar uma determinada maquineta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Maquineta (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MaquinetaResponse}
     */
    this.consultarUsingGET20 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET20";
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
     * Callback function to receive the result of the consultarUsingGET21 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de uma determinada Regra Opera\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar uma determinada regra opera\u00C3\u00A7\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Regra Opera\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OperacaoCredorResponse}
     */
    this.consultarUsingGET21 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET21";
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
     * Callback function to receive the result of the consultarUsingGET29 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET29Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado telefone de um estabelecimento
     * Este m\u00C3\u00A9todo permite consultar um determinado telefone de um estabelecimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET29Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.consultarUsingGET29 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET29";
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
     * Callback function to receive the result of the consultarUsingGET31 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET31Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Terminal
     * Este m\u00C3\u00A9todo permite consultar um determinado Terminal a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET31Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
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
      var returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET43 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET43Callback
     * @param {String} error Error message, if any.
     * @param {module:model/VinculoEstabelecimentoAdquirenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado V\u00C3\u00ADnculo
     * Este m\u00C3\u00A9todo permite consultar um determinado V\u00C3\u00ADnculo a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u008Dnculo (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET43Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VinculoEstabelecimentoAdquirenteResponse}
     */
    this.consultarUsingGET43 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET43";
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
     * @callback module:api/EstabelecimentoApi~desabilitarVinculoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desabilitar um V\u00C3\u00ADnculo
     * Este m\u00C3\u00A9todo realiza a desativa\u00C3\u00A7\u00C3\u00A3o de um v\u00C3\u00ADnculo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u00ADnculo (id).
     * @param {module:api/EstabelecimentoApi~desabilitarVinculoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~desabilitarVinculoUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desabilitar um v\u00C3\u00ADnculo opera\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite desabilitar um v\u00C3\u00ADnculo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
     * @param {module:model/VinculoOperacaoPersist} vinculoOperacaoPersist vinculoOperacaoPersist
     * @param {module:api/EstabelecimentoApi~desabilitarVinculoUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~habilitarVinculoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Habilitar um V\u00C3\u00ADnculo
     * Este m\u00C3\u00A9todo realiza a ativa\u00C3\u00A7\u00C3\u00A3o de um v\u00C3\u00ADnculo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u00ADnculo (id).
     * @param {module:api/EstabelecimentoApi~habilitarVinculoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~habilitarVinculoUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Habilitar um v\u00C3\u00ADnculo opera\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite habilitar um v\u00C3\u00ADnculo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
     * @param {module:model/VinculoOperacaoPersist} vinculoOperacaoPersist vinculoOperacaoPersist
     * @param {module:api/EstabelecimentoApi~habilitarVinculoUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~listaOperacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de opera\u00C3\u00A7\u00C3\u00B5es em uma lista
     * Este recurso permite listar as opera\u00C3\u00A7\u00C3\u00A3o
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idOperacao C\u00C3\u00B3digo que identifica a opera\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.codigoProcessamento C\u00C3\u00B3digo de processamento usado em transa\u00C3\u00A7\u00C3\u00B5es com o autorizador
     * @param {module:api/EstabelecimentoApi~listaOperacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~listarMCCUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageMCCResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os MCCs
     * Este m\u00C3\u00A9todo permite que sejam listados os MCCs existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/EstabelecimentoApi~listarMCCUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~listarOrigensComerciaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOrigemComercialResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Origens Comerciais
     * Lista origens comerciais cadastradas.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id Id da origem comercial
     * @param {String} opts.nome Nome da origem comercial
     * @param {Integer} opts.status Indica o status da origem comercial
     * @param {Integer} opts.idEstabelecimento Identificador do estabelecimento
     * @param {Integer} opts.idProduto Identificador do produto
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o da origem comercial
     * @param {Integer} opts.idTipoOrigemComercial Identificador do tipo de origem comercial
     * @param {Integer} opts.idGrupoOrigemComercial Identificador do grupo de origem comercial
     * @param {Boolean} opts.flagPreAprovado Indica se permite pr\u00C3\u00A9 aprova\u00C3\u00A7\u00C3\u00A3o
     * @param {Boolean} opts.flagAprovacaoImediata Indica se permite aprova\u00C3\u00A7\u00C3\u00A3o imediata
     * @param {String} opts.nomeFantasiaPlastico Nome fantasia impresso no pl\u00C3\u00A1stico
     * @param {Boolean} opts.flagCartaoProvisorio Indica se permite cart\u00C3\u00A3o provis\u00C3\u00B3rio
     * @param {Boolean} opts.flagCartaoDefinitivo Indica se permite cart\u00C3\u00A3o definitivo
     * @param {String} opts.usuario Usu\u00C3\u00A1rio para autentica\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.senha Senha para autentica\u00C3\u00A7\u00C3\u00A3o
     * @param {Boolean} opts.flagOrigemExterna Indica se \u00C3\u00A9 origem externa
     * @param {Boolean} opts.flagModificado Indica se h\u00C3\u00A1 modifica\u00C3\u00A7\u00C3\u00A3o
     * @param {Boolean} opts.flagEnviaFaturaUsuario Indica se envia fatura
     * @param {Boolean} opts.flagCreditoFaturamento Indica se permite cr\u00C3\u00A9dito de faturamento
     * @param {Boolean} opts.flagConcedeLimiteProvisorio Indica se concede limite provis\u00C3\u00B3rio
     * @param {Boolean} opts.flagDigitalizarDoc Indica se digitaliza documento
     * @param {Boolean} opts.flagEmbossingLoja Indica se realiza embossing em loja
     * @param {Boolean} opts.flagConsultaPrevia Indica se realiza consulta pr\u00C3\u00A9via
     * @param {module:model/String} opts.tipoPessoa Tipo de pessoa
     * @param {module:api/EstabelecimentoApi~listarOrigensComerciaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/EstabelecimentoApi~listarTiposAdquirentesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEntidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos de adquirentes
     * Este m\u00C3\u00A9todo permite que sejam listados os tipos de adquirentes.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/EstabelecimentoApi~listarTiposAdquirentesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarTiposMaquinetasUsingGET operation.
     * @callback module:api/EstabelecimentoApi~listarTiposMaquinetasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos de  Maquinetas
     * Este m\u00C3\u00A9todo permite que sejam listadas os Tipos de maquinetas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/EstabelecimentoApi~listarTiposMaquinetasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarTiposTerminaisUsingGET1 operation.
     * @callback module:api/EstabelecimentoApi~listarTiposTerminaisUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos Terminais
     * Este m\u00C3\u00A9todo permite que sejam listados os tipos de terminais existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/EstabelecimentoApi~listarTiposTerminaisUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET21 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista Estabelecimentos
     * Lista todas os Estabelecimentos
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
     * @param {Integer} opts.idCredor Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Credor.
     * @param {String} opts.numeroReceitaFederal Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal.
     * @param {String} opts.nome Nome do Estabelecimento.
     * @param {String} opts.descricao Raz\u00C3\u00A3o Social do Estabelecimento.
     * @param {String} opts.nomeFantasia T\u00C3\u00ADtulo Comercial do Estabelecimento.
     * @param {String} opts.cep C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
     * @param {String} opts.nomeLogradouro Nome do Logradouro.
     * @param {Integer} opts.numeroEndereco N\u00C3\u00BAmero do endere\u00C3\u00A7o.
     * @param {String} opts.complemento Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
     * @param {String} opts.bairro Nome do bairro do endere\u00C3\u00A7o.
     * @param {String} opts.cidade Nome da cidade do endere\u00C3\u00A7o.
     * @param {String} opts.uf Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
     * @param {String} opts.pais Nome do pa\u00C3\u00ADs.
     * @param {String} opts.dataCadastramento Data de Cadastro do Estabelecimento, no formato yyyy-MM-dd.
     * @param {String} opts.contato Nome da pessoa para contato com o Estabelecimento.
     * @param {String} opts.email E-mail da pessoa para contato com o Estabelecimento.
     * @param {Integer} opts.flagArquivoSecrFazenda Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual.
     * @param {Integer} opts.flagCartaoDigitado Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o.
     * @param {Integer} opts.inativo Indica se o estabelecimento est\u00C3\u00A1 inativo.
     * @param {Integer} opts.idPais Identificador de Pa\u00C3\u00ADs.
     * @param {Integer} opts.mcc C\u00C3\u00B3digo de Categoria de Mercado
     * @param {Integer} opts.idTipoEstabelecimento C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento.
     * @param {Integer} opts.correspondencia Indicador para qual endere\u00C3\u00A7o as correspond\u00C3\u00AAncias ser\u00C3\u00A3o enviadas, onde 1 \u00C3\u00A9 ORIGEM e 2 ENDERE\u00C3\u0087O DE CORRESPOND\u00C3\u008ANCIA.
     * @param {Integer} opts.idMoeda C\u00C3\u00B3digo identificador da moeda.
     * @param {module:model/String} opts.tipoPagamento Tipo do regime de pagamento do estabelecimento.
     * @param {String} opts.numeroEstabelecimento N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Conductor.
     * @param {String} opts.cep2 C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
     * @param {String} opts.nomeLogradouro2 Nome do Logradouro.
     * @param {Integer} opts.numeroEndereco2 N\u00C3\u00BAmero do endere\u00C3\u00A7o.
     * @param {String} opts.complemento2 Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
     * @param {String} opts.bairro2 Nome do bairro do endere\u00C3\u00A7o.
     * @param {String} opts.cidade2 Nome da cidade do endere\u00C3\u00A7o.
     * @param {String} opts.uf2 Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
     * @param {Integer} opts.flagMatriz Indica se \u00C3\u00A9 matriz ou filial.
     * @param {module:api/EstabelecimentoApi~listarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEstabelecimentoResponse}
     */
    this.listarUsingGET21 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'idCredor': opts['idCredor'],
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
     * Callback function to receive the result of the listarUsingGET23 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGrupoEconomicoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar grupos econ\u00C3\u00B4micos
     * Lista grupos econ\u00C3\u00B4micos cadastrados. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.razaoSocial Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} opts.nomeCredor Nome do credor
     * @param {String} opts.numeroReceitaFederal N\u00C3\u00BAmero da Receita Federal
     * @param {String} opts.inscricaoEstadual N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
     * @param {String} opts.contato Nome da pessoa para entrar em contato
     * @param {Integer} opts.banco C\u00C3\u00B3digo do banco
     * @param {Integer} opts.agencia Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} opts.digitoAgencia D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
     * @param {String} opts.contaCorrente C\u00C3\u00B3digo da Conta Corrente
     * @param {String} opts.digitoContaCorrente D\u00C3\u00ADgito Verificador da Conta Corrente
     * @param {module:model/String} opts.periodicidade Periodicidade do pagamento
     * @param {module:model/String} opts.pagamentoSemanal Dia para pagamento semanal
     * @param {Integer} opts.pagamentoMensal Dia da data para o pagamento mensal
     * @param {Integer} opts.pagamentoDecendialPrimeiro Dia da data para o primeiro pagamento decendial
     * @param {Integer} opts.pagamentoDecendialSegundo Dia da data para o segundo pagamento decendial
     * @param {Integer} opts.pagamentoDecendialTerceiro Dia da data para o terceiro pagamento decendial
     * @param {Integer} opts.pagamentoQuinzenalPrimeiro Dia da data para o primeiro pagamento quinzenal
     * @param {Integer} opts.pagamentoQuinzenalSegundo Dia da data para o segundo pagamento quinzenal
     * @param {Number} opts.percentualRAV Valor percentual do RAV do credor
     * @param {module:model/String} opts.recebeRAV Indica se o credor recebe RAV e o tipo
     * @param {Number} opts.percentualMultiplica Percentual Multiplica
     * @param {Number} opts.taxaAdm Taxa Administrativa
     * @param {Number} opts.taxaBanco Taxa do Banco
     * @param {Number} opts.limiteRAV Valor limite do RAV
     * @param {Integer} opts.idCredorRAV C\u00C3\u00B3digo identificador do credor RAV
     * @param {module:api/EstabelecimentoApi~listarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoEconomicoResponse}
     */
    this.listarUsingGET23 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET25 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageMaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Maquinetas
     * Este m\u00C3\u00A9todo permite que sejam listadas as maquinetas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id).
     * @param {module:api/EstabelecimentoApi~listarUsingGET25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageMaquinetaResponse}
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
     * Callback function to receive the result of the listarUsingGET26 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageMoedaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de moedas do emissor 
     * Este recurso permite que sejam listados os tipos de moedas existentes na base de dados do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.codigoMoeda C\u00C3\u00B3digo identificador do tipo de moeda.
     * @param {String} opts.simbolo S\u00C3\u00ADmbolo da Moeda.
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo da moeda.
     * @param {module:api/EstabelecimentoApi~listarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageMoedaResponse}
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
     * Callback function to receive the result of the listarUsingGET27 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET27Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Regras Opera\u00C3\u00A7\u00C3\u00B5es
     * Este m\u00C3\u00A9todo permite que sejam listados as Regras opera\u00C3\u00A7\u00C3\u00B5es existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idOperacao Apresenta o id da Opera\u00C3\u00A7\u00C3\u00A3o.
     * @param {Integer} opts.idCredor Apresenta o id do Credor.
     * @param {Integer} opts.idProduto Apresenta o id do produto que vai ser alterado.
     * @param {module:api/EstabelecimentoApi~listarUsingGET27Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOperacaoCredorResponse}
     */
    this.listarUsingGET27 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET38 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET38Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Telefones Estabelecimentos
     * Este m\u00C3\u00A9todo permite que sejam listados os telefones dos estabelecimentos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id).
     * @param {module:api/EstabelecimentoApi~listarUsingGET38Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTelefoneEstabelecimentoResponse}
     */
    this.listarUsingGET38 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET40 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET40Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Terminais cadastrados no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os terminais existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
     * @param {String} opts.terminal C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal.
     * @param {Integer} opts.numeroEstabelecimento N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence.
     * @param {Integer} opts.idEstabelecimento N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence.
     * @param {module:api/EstabelecimentoApi~listarUsingGET40Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTerminalResponse}
     */
    this.listarUsingGET40 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET51 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET51Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageVinculoEstabelecimentoAdquirenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os V\u00C3\u00ADnculos dos estabelecimento com os adquirentes
     * Este m\u00C3\u00A9todo permite que sejam listados os V\u00C3\u00ADnculos dos estabelecimento com os adquirentes.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idAdquirente C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do adquirente (id).
     * @param {Integer} opts.idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento.
     * @param {String} opts.codigoEstabelecimentoAdquirente C\u00C3\u00B3digo do v\u00C3\u00ADnculo entre o estabelecimento e o adquirente.
     * @param {module:api/EstabelecimentoApi~listarUsingGET51Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageVinculoEstabelecimentoAdquirenteResponse}
     */
    this.listarUsingGET51 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET52 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET52Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageVinculoOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os v\u00C3\u00ADnculos cadastrados no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os v\u00C3\u00ADnculos opera\u00C3\u00A7\u00C3\u00B5es existentes na base de dados do Emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {Integer} opts.idOperacao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Opera\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} opts.codigoMCC C\u00C3\u00B3digo MCC.
     * @param {module:api/EstabelecimentoApi~listarUsingGET52Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageVinculoOperacaoResponse}
     */
    this.listarUsingGET52 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET52";
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
     * Callback function to receive the result of the salvarUsingPOST16 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/MaquinetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de uma nova maquineta para um estabelecimento 
     * Este m\u00C3\u00A9todo permite que seja cadastrada uma nova maquineta para um estabelecimento.
     * @param {module:model/MaquinetaPersist} maquinetaPersist maquinetaPersist
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/MaquinetaResponse}
     */
    this.salvarUsingPOST16 = function(maquinetaPersist, callback) {
      var postBody = maquinetaPersist;

      // verify the required parameter 'maquinetaPersist' is set
      if (maquinetaPersist == undefined || maquinetaPersist == null) {
        throw "Missing the required parameter 'maquinetaPersist' when calling salvarUsingPOST16";
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
     * Callback function to receive the result of the salvarUsingPOST17 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/OperacaoCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de uma nova Regra Opera\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que seja cadastrada uma nova Regra Opera\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:model/OperacaoCredorPersist} oprecaoCredorPersist oprecaoCredorPersist
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OperacaoCredorResponse}
     */
    this.salvarUsingPOST17 = function(oprecaoCredorPersist, callback) {
      var postBody = oprecaoCredorPersist;

      // verify the required parameter 'oprecaoCredorPersist' is set
      if (oprecaoCredorPersist == undefined || oprecaoCredorPersist == null) {
        throw "Missing the required parameter 'oprecaoCredorPersist' when calling salvarUsingPOST17";
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
     * Callback function to receive the result of the salvarUsingPOST22 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo telefone para um estabelecimento 
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo telefone para um estabelecimento.
     * @param {Integer} idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id).
     * @param {String} ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} telefone N\u00C3\u00BAmero do telefone.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.salvarUsingPOST22 = function(idEstabelecimento, ddd, telefone, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idEstabelecimento' is set
      if (idEstabelecimento == undefined || idEstabelecimento == null) {
        throw "Missing the required parameter 'idEstabelecimento' when calling salvarUsingPOST22";
      }

      // verify the required parameter 'ddd' is set
      if (ddd == undefined || ddd == null) {
        throw "Missing the required parameter 'ddd' when calling salvarUsingPOST22";
      }

      // verify the required parameter 'telefone' is set
      if (telefone == undefined || telefone == null) {
        throw "Missing the required parameter 'telefone' when calling salvarUsingPOST22";
      }


      var pathParams = {
      };
      var queryParams = {
        'idEstabelecimento': idEstabelecimento,
        'ddd': ddd,
        'telefone': telefone,
        'ramal': opts['ramal']
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
     * Callback function to receive the result of the salvarUsingPOST24 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo Terminal
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo Terminal.
     * @param {module:model/TerminalPersist} terminalPersist terminalPersist
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.salvarUsingPOST24 = function(terminalPersist, callback) {
      var postBody = terminalPersist;

      // verify the required parameter 'terminalPersist' is set
      if (terminalPersist == undefined || terminalPersist == null) {
        throw "Missing the required parameter 'terminalPersist' when calling salvarUsingPOST24";
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
     * Callback function to receive the result of the salvarUsingPOST29 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST29Callback
     * @param {String} error Error message, if any.
     * @param {module:model/VinculoEstabelecimentoAdquirenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo VinculoEstabelecimentoAdquirente
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo VinculoEstabelecimentoAdquirente.
     * @param {module:model/VinculoEstabelecimentoAdquirentePersist} vinculoEstabelecimentoAdquirentePersist vinculoEstabelecimentoAdquirentePersist
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST29Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VinculoEstabelecimentoAdquirenteResponse}
     */
    this.salvarUsingPOST29 = function(vinculoEstabelecimentoAdquirentePersist, callback) {
      var postBody = vinculoEstabelecimentoAdquirentePersist;

      // verify the required parameter 'vinculoEstabelecimentoAdquirentePersist' is set
      if (vinculoEstabelecimentoAdquirentePersist == undefined || vinculoEstabelecimentoAdquirentePersist == null) {
        throw "Missing the required parameter 'vinculoEstabelecimentoAdquirentePersist' when calling salvarUsingPOST29";
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
