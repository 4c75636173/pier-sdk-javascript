(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/EstgioCarto', '../model/ListaDeStatusCartes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EstgioCarto'), require('../model/ListaDeStatusCartes'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.StatusCartoApi = factory(root.Pier.ApiClient, root.Pier.EstgioCarto, root.Pier.ListaDeStatusCartes);
  }
}(this, function(ApiClient, EstgioCarto, ListaDeStatusCartes) {
  'use strict';

  /**
   * StatusCarto service.
   * @module api/StatusCartoApi
   * @version 1.1.0
   */

  /**
   * Constructs a new StatusCartoApi. 
   * @alias module:api/StatusCartoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarStatusCartaoUsingGET operation.
     * @callback module:api/StatusCartoApi~consultarStatusCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstgioCarto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Status Cart\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Status de Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).  
     * @param {Integer} idStatusCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Entrega do Cart\u00C3\u00A3o (id).
     * @param {module:api/StatusCartoApi~consultarStatusCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstgioCarto}
     */
    this.consultarStatusCartaoUsingGET = function(idStatusCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idStatusCartao' is set
      if (idStatusCartao == undefined || idStatusCartao == null) {
        throw "Missing the required parameter 'idStatusCartao' when calling consultarStatusCartaoUsingGET";
      }


      var pathParams = {
        'id_status_cartao': idStatusCartao
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EstgioCarto;

      return this.apiClient.callApi(
        '/api/status-cartoes/{id_status_cartao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusCartoesUsingGET operation.
     * @callback module:api/StatusCartoApi~listarStatusCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListaDeStatusCartes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00A7\u00C3\u00B5es de Status do Cart\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite que sejam listadas as possibilidades de Status que podem ser atribu\u00C3\u00ADdas aos Cart\u00C3\u00B5es.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idStatusCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id).
     * @param {String} opts.nome Nome atribu\u00C3\u00ADdo ao Status de Entrega do Cart\u00C3\u00A3o.
     * @param {Integer} opts.idStatusDestinoDesbloqueio Indica qual o idStatusCartao que deve ser atribu\u00C3\u00ADdo a um idCartao quando ele for desbloqueado.
     * @param {String} opts.cancelaConta Indica que Cart\u00C3\u00B5es com este idStatusCartao podem ter a sua conta Cancelada.
     * @param {String} opts.permiteDesbloqueio Indica que Cart\u00C3\u00B5es com este idStatusCartao podem ser Desbloqueados.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/StatusCartoApi~listarStatusCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ListaDeStatusCartes}
     */
    this.listarStatusCartoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id_status_cartao': opts['idStatusCartao'],
        'nome': opts['nome'],
        'id_status_destino_desbloqueio': opts['idStatusDestinoDesbloqueio'],
        'cancela_conta': opts['cancelaConta'],
        'permite_desbloqueio': opts['permiteDesbloqueio'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ListaDeStatusCartes;

      return this.apiClient.callApi(
        '/api/status-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
