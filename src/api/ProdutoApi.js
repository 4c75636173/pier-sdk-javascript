(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/OrigemComercial', '../model/ListaProdutos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrigemComercial'), require('../model/ListaProdutos'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ProdutoApi = factory(root.Pier.ApiClient, root.Pier.OrigemComercial, root.Pier.ListaProdutos);
  }
}(this, function(ApiClient, OrigemComercial, ListaProdutos) {
  'use strict';

  /**
   * Produto service.
   * @module api/ProdutoApi
   * @version 1.1.0
   */

  /**
   * Constructs a new ProdutoApi. 
   * @alias module:api/ProdutoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarProdutoUsingGET operation.
     * @callback module:api/ProdutoApi~consultarProdutoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial 
     * Este m\u00C3\u00A9todo permite que sejam listados os registros de uma determinada Origem Comercial existente na base do emissor. Para isso, \u00C3\u00A9 preciso informar o seu respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id). 
     * @param {Integer} idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/ProdutoApi~consultarProdutoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercial}
     */
    this.consultarProdutoUsingGET = function(idProduto, callback) {
      var postBody = null;

      // verify the required parameter 'idProduto' is set
      if (idProduto == undefined || idProduto == null) {
        throw "Missing the required parameter 'idProduto' when calling consultarProdutoUsingGET";
      }


      var pathParams = {
        'id_produto': idProduto
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
      var returnType = OrigemComercial;

      return this.apiClient.callApi(
        '/api/produtos/{id_origem_comercial}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarProdutosUsingGET operation.
     * @callback module:api/ProdutoApi~listarProdutosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListaProdutos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Produtos do Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Produtos existentes na base de dados do Emissor. 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {String} opts.nome Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto.
     * @param {String} opts.status Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo).
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/ProdutoApi~listarProdutosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ListaProdutos}
     */
    this.listarProdutosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
        'status': opts['status'],
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
      var returnType = ListaProdutos;

      return this.apiClient.callApi(
        '/api/produtos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
