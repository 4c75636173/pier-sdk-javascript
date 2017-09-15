(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AlterarProdutoRequest', '../model/EmprestimoPessoalRequest', '../model/EmprestimoPessoalResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AlterarProdutoRequest'), require('../model/EmprestimoPessoalRequest'), require('../model/EmprestimoPessoalResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.MockApi = factory(root.Pier.ApiClient, root.Pier.AlterarProdutoRequest, root.Pier.EmprestimoPessoalRequest, root.Pier.EmprestimoPessoalResponse);
  }
}(this, function(ApiClient, AlterarProdutoRequest, EmprestimoPessoalRequest, EmprestimoPessoalResponse) {
  'use strict';

  /**
   * Mock service.
   * @module api/MockApi
   * @version 2.32.0
   */

  /**
   * Constructs a new MockApi. 
   * @alias module:api/MockApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarProdutoUsingPOST operation.
     * @callback module:api/MockApi~alterarProdutoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera o produto associado \u00C3\u00A0 conta.
     * O recurso permite fazer modifica\u00C3\u00A7\u00C3\u00A3o do produto associado \u00C3\u00A0 conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:model/AlterarProdutoRequest} request request
     * @param {module:api/MockApi~alterarProdutoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/alterar-produto', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the enviarFaturaEmailUsingPOST operation.
     * @callback module:api/MockApi~enviarFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Envia 2\u00C2\u00AA via de fatura por E-mail
     * Envia a segunda via da fatura para o e-mail informado/cadastrado.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {String} dataVencimento Data de Vencimento da fatura.
     * @param {Object} opts Optional parameters
     * @param {String} opts.email E-mail para envio da 2\u00C2\u00AA via da fatura, caso n\u00C3\u00A3o seja informado ser\u00C3\u00A1 usado o e-mail cadastrado.
     * @param {module:api/MockApi~enviarFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.enviarFaturaEmailUsingPOST = function(id, dataVencimento, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling enviarFaturaEmailUsingPOST";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling enviarFaturaEmailUsingPOST";
      }


      var pathParams = {
        'id': id,
        'dataVencimento': dataVencimento
      };
      var queryParams = {
        'email': opts['email']
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
        '/api/contas/{id}/faturas/{dataVencimento}/enviar-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the simularEmprestimoFinanciamentoUsingPOST operation.
     * @callback module:api/MockApi~simularEmprestimoFinanciamentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmprestimoPessoalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Simula valores de presta\u00C3\u00A7\u00C3\u00B5es de empr\u00C3\u00A9stimos/financiamentos
     * Esta opera\u00C3\u00A7\u00C3\u00A3o pode ser utilizada para simular opera\u00C3\u00A7\u00C3\u00B5es financeiras a partir de informa\u00C3\u00A7\u00C3\u00B5es fornecidas pelo usu\u00C3\u00A1rio. Os c\u00C3\u00A1lculos gerados devem ser considerados apenas como refer\u00C3\u00AAncia para as situa\u00C3\u00A7\u00C3\u00B5es reais e n\u00C3\u00A3o como valores oficiais.
     * @param {module:model/EmprestimoPessoalRequest} request request
     * @param {module:api/MockApi~simularEmprestimoFinanciamentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EmprestimoPessoalResponse}
     */
    this.simularEmprestimoFinanciamentoUsingPOST = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling simularEmprestimoFinanciamentoUsingPOST";
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
      var returnType = EmprestimoPessoalResponse;

      return this.apiClient.callApi(
        '/api/simular-emprestimos-financiamentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the visualizarDocumentoUsingPOST operation.
     * @callback module:api/MockApi~visualizarDocumentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite visualizar o extrato da fatura em formato PDF
     * Esta opera\u00C3\u00A7\u00C3\u00A3o permite visualizar o extrato da fatura de uma determinada conta, em formato PDF. Quando ela for a fatura ativa, ou seja, a do m\u00C3\u00AAs corrente, o pdf ser\u00C3\u00A1 composto pelo extrato de lan\u00C3\u00A7amentos e pela ficha de compensa\u00C3\u00A7\u00C3\u00A3o banc\u00C3\u00A1ria. Quando for de uma fatura do hist\u00C3\u00B3rico do cliente, o PDF ser\u00C3\u00A1 composto apenas pelo extrato de transa\u00C3\u00A7\u00C3\u00B5es.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {String} dataVencimento Data de Vencimento da fatura.
     * @param {module:api/MockApi~visualizarDocumentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'String'>}
     */
    this.visualizarDocumentoUsingPOST = function(id, dataVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling visualizarDocumentoUsingPOST";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling visualizarDocumentoUsingPOST";
      }


      var pathParams = {
        'id': id,
        'dataVencimento': dataVencimento
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/pdf', '*/*'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas/{dataVencimento}/arquivo.pdf', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
