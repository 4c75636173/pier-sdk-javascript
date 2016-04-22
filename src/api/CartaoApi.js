// require files in Node.js environment
var $, ConsultarCartaoResponse, CancelarCartaoResponse, DesbloquearCartaoResponse, ConsultarExtratoContaResponse, ConsultarSaldoLimitesResponse, ContaResponse;
if (typeof module === 'object' && module.exports) {
  $ = require('jquery');
  ConsultarCartaoResponse = require('../model/ConsultarCartaoResponse.js');
  CancelarCartaoResponse = require('../model/CancelarCartaoResponse.js');
  DesbloquearCartaoResponse = require('../model/DesbloquearCartaoResponse.js');
  ConsultarExtratoContaResponse = require('../model/ConsultarExtratoContaResponse.js');
  ConsultarSaldoLimitesResponse = require('../model/ConsultarSaldoLimitesResponse.js');
  ContaResponse = require('../model/ContaResponse.js');
}

// export module for AMD
if ( typeof define === "function" && define.amd ) {     
	define(['jquery', 'ConsultarCartaoResponse', 'CancelarCartaoResponse', 'DesbloquearCartaoResponse', 'ConsultarExtratoContaResponse', 'ConsultarSaldoLimitesResponse', 'ContaResponse'], function($, ConsultarCartaoResponse, CancelarCartaoResponse, DesbloquearCartaoResponse, ConsultarExtratoContaResponse, ConsultarSaldoLimitesResponse, ContaResponse) {
        return CartaoApi;
	 });
}

var CartaoApi = function CartaoApi() {
	var self = this;
  
  
  /**
   * /contas/{idConta}/cartoes/{idCartao}
   * Consultar as informaÃ§Ãµes de um determinado cartÃ£o de uma conta
   * @param {Integer}  idEmissor ID do Emissor
   * @param {String}  numeroCartao NÃºmero do CartÃ£o que deseja consultar
   * @param {Integer}  idConta ID da Conta que pertence o cartÃ£o
   * @param {Integer}  idCartao ID do CartÃ£o que deseja consultar
   * @param {function} callback the callback function
   * @return ConsultarCartaoResponse
   */
  self.consultarCartaoUsingGET = function(idEmissor, numeroCartao, idConta, idCartao, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'idEmissor' is set
     if (idEmissor == null) {
        //throw new ApiException(400, "Missing the required parameter 'idEmissor' when calling consultarCartaoUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idEmissor' when calling consultarCartaoUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'numeroCartao' is set
     if (numeroCartao == null) {
        //throw new ApiException(400, "Missing the required parameter 'numeroCartao' when calling consultarCartaoUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'numeroCartao' when calling consultarCartaoUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idConta' is set
     if (idConta == null) {
        //throw new ApiException(400, "Missing the required parameter 'idConta' when calling consultarCartaoUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idConta' when calling consultarCartaoUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idCartao' is set
     if (idCartao == null) {
        //throw new ApiException(400, "Missing the required parameter 'idCartao' when calling consultarCartaoUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idCartao' when calling consultarCartaoUsingGET";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://localhost/';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/api/v1/contas/{idConta}/cartoes/cartoes/{idCartao}", "\\{format\\}","json")
, "\\{" + "idConta" + "\\}", encodeURIComponent(idConta.toString())
, "\\{" + "idCartao" + "\\}", encodeURIComponent(idCartao.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    if (idEmissor != null)
    headerParams.put("idEmissor", idEmissor);
    if (numeroCartao != null)
    headerParams.put("numeroCartao", numeroCartao);
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns ConsultarCartaoResponse
        */
      
      var myResponse = new ConsultarCartaoResponse();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * /contas/{idConta}/cartoes/{idCartao}/cancelar
   * Cancelar um determinado cartÃ£o
   * @param {Integer}  idEmissor ID do Emissor
   * @param {Integer}  idConta ID da Conta
   * @param {Integer}  idCartao ID do CartÃ£o que deseja cancelar
   * @param {Integer}  motivo Motivo do cancelamento
   * @param {String}  observacao Alguma observaÃ§Ã£o para o cancelamento
   * @param {function} callback the callback function
   * @return CancelarCartaoResponse
   */
  self.cancelarCartaoUsingPOST = function(idEmissor, idConta, idCartao, motivo, observacao, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'idEmissor' is set
     if (idEmissor == null) {
        //throw new ApiException(400, "Missing the required parameter 'idEmissor' when calling cancelarCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'idEmissor' when calling cancelarCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idConta' is set
     if (idConta == null) {
        //throw new ApiException(400, "Missing the required parameter 'idConta' when calling cancelarCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'idConta' when calling cancelarCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idCartao' is set
     if (idCartao == null) {
        //throw new ApiException(400, "Missing the required parameter 'idCartao' when calling cancelarCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'idCartao' when calling cancelarCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'motivo' is set
     if (motivo == null) {
        //throw new ApiException(400, "Missing the required parameter 'motivo' when calling cancelarCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'motivo' when calling cancelarCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'observacao' is set
     if (observacao == null) {
        //throw new ApiException(400, "Missing the required parameter 'observacao' when calling cancelarCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'observacao' when calling cancelarCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://localhost/';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/api/v1/contas/{idConta}/cartoes/cartoes/{idCartao}/cancelar", "\\{format\\}","json")
, "\\{" + "idConta" + "\\}", encodeURIComponent(idConta.toString())
, "\\{" + "idCartao" + "\\}", encodeURIComponent(idCartao.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    queryParams.motivo = motivo;
    
    queryParams.observacao = observacao;
    
    if (idEmissor != null)
    headerParams.put("idEmissor", idEmissor);
    
    

    path += createQueryString(queryParams);

    var options = {type: "POST", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns CancelarCartaoResponse
        */
      
      var myResponse = new CancelarCartaoResponse();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * /contas/{idConta}/cartoes/{idCartao}/desbloquear
   * Desbloquear cartÃ£o de uma determinada conta
   * @param {Integer}  idEmissor ID do Emissor
   * @param {Integer}  idConta ID da Conta
   * @param {Integer}  idCartao ID do CartÃ£o que deseja consultar o saldo/limite
   * @param {String}  codigoSegurancao CÃ³digo seguranÃ§a do cartÃ£o
   * @param {function} callback the callback function
   * @return DesbloquearCartaoResponse
   */
  self.desbloquearCartaoUsingPOST = function(idEmissor, idConta, idCartao, codigoSegurancao, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'idEmissor' is set
     if (idEmissor == null) {
        //throw new ApiException(400, "Missing the required parameter 'idEmissor' when calling desbloquearCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'idEmissor' when calling desbloquearCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idConta' is set
     if (idConta == null) {
        //throw new ApiException(400, "Missing the required parameter 'idConta' when calling desbloquearCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'idConta' when calling desbloquearCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idCartao' is set
     if (idCartao == null) {
        //throw new ApiException(400, "Missing the required parameter 'idCartao' when calling desbloquearCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'idCartao' when calling desbloquearCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'codigoSegurancao' is set
     if (codigoSegurancao == null) {
        //throw new ApiException(400, "Missing the required parameter 'codigoSegurancao' when calling desbloquearCartaoUsingPOST");
        var errorRequiredMsg = "Missing the required parameter 'codigoSegurancao' when calling desbloquearCartaoUsingPOST";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://localhost/';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/api/v1/contas/{idConta}/cartoes/cartoes/{idCartao}/desbloquear", "\\{format\\}","json")
, "\\{" + "idConta" + "\\}", encodeURIComponent(idConta.toString())
, "\\{" + "idCartao" + "\\}", encodeURIComponent(idCartao.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    if (idEmissor != null)
    headerParams.put("idEmissor", idEmissor);
    if (codigoSegurancao != null)
    headerParams.put("codigoSegurancao", codigoSegurancao);
    
    

    path += createQueryString(queryParams);

    var options = {type: "POST", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns DesbloquearCartaoResponse
        */
      
      var myResponse = new DesbloquearCartaoResponse();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * /contas/{idConta}/cartoes/{idCartao}/faturas
   * Consulte os extratos/faturas do cartÃ£o de uma determinada conta
   * @param {Integer}  idEmissor ID do Emissor
   * @param {Integer}  idConta ID da Conta
   * @param {Integer}  idCartao ID do CartÃ£o que deseja consultar o extrato
   * @param {String}  dataVencimento Data limite para o vencimento das transaÃ§Ãµes
   * @param {function} callback the callback function
   * @return ConsultarExtratoContaResponse
   */
  self.consultarExtratoFaturasUsingGET = function(idEmissor, idConta, idCartao, dataVencimento, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'idEmissor' is set
     if (idEmissor == null) {
        //throw new ApiException(400, "Missing the required parameter 'idEmissor' when calling consultarExtratoFaturasUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idEmissor' when calling consultarExtratoFaturasUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idConta' is set
     if (idConta == null) {
        //throw new ApiException(400, "Missing the required parameter 'idConta' when calling consultarExtratoFaturasUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idConta' when calling consultarExtratoFaturasUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idCartao' is set
     if (idCartao == null) {
        //throw new ApiException(400, "Missing the required parameter 'idCartao' when calling consultarExtratoFaturasUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idCartao' when calling consultarExtratoFaturasUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'dataVencimento' is set
     if (dataVencimento == null) {
        //throw new ApiException(400, "Missing the required parameter 'dataVencimento' when calling consultarExtratoFaturasUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'dataVencimento' when calling consultarExtratoFaturasUsingGET";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://localhost/';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/api/v1/contas/{idConta}/cartoes/cartoes/{idCartao}/faturas", "\\{format\\}","json")
, "\\{" + "idConta" + "\\}", encodeURIComponent(idConta.toString())
, "\\{" + "idCartao" + "\\}", encodeURIComponent(idCartao.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    queryParams.dataVencimento = dataVencimento;
    
    if (idEmissor != null)
    headerParams.put("idEmissor", idEmissor);
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns ConsultarExtratoContaResponse
        */
      
      var myResponse = new ConsultarExtratoContaResponse();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * /contas/{idConta}/cartoes/{idCartao}/saldos
   * Consulte o saldo do cartÃ£o de uma determinada conta
   * @param {Integer}  idEmissor ID do Emissor
   * @param {Integer}  idConta ID da Conta
   * @param {Integer}  idCartao ID do CartÃ£o que deseja consultar o saldo/limite
   * @param {function} callback the callback function
   * @return ConsultarSaldoLimitesResponse
   */
  self.consultarSaldosLimitesUsingGET = function(idEmissor, idConta, idCartao, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'idEmissor' is set
     if (idEmissor == null) {
        //throw new ApiException(400, "Missing the required parameter 'idEmissor' when calling consultarSaldosLimitesUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idEmissor' when calling consultarSaldosLimitesUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idConta' is set
     if (idConta == null) {
        //throw new ApiException(400, "Missing the required parameter 'idConta' when calling consultarSaldosLimitesUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idConta' when calling consultarSaldosLimitesUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idCartao' is set
     if (idCartao == null) {
        //throw new ApiException(400, "Missing the required parameter 'idCartao' when calling consultarSaldosLimitesUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idCartao' when calling consultarSaldosLimitesUsingGET";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://localhost/';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/api/v1/contas/{idConta}/cartoes/cartoes/{idCartao}/saldos", "\\{format\\}","json")
, "\\{" + "idConta" + "\\}", encodeURIComponent(idConta.toString())
, "\\{" + "idCartao" + "\\}", encodeURIComponent(idCartao.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    if (idEmissor != null)
    headerParams.put("idEmissor", idEmissor);
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns ConsultarSaldoLimitesResponse
        */
      
      var myResponse = new ConsultarSaldoLimitesResponse();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  /**
   * /contas/{idConta}
   * Consulte informaÃ§Ãµes de uma determinada conta
   * @param {Integer}  idEmissor ID do Emissor
   * @param {Integer}  idConta ID da Conta
   * @param {function} callback the callback function
   * @return ContaResponse
   */
  self.consultarContaUsingGET = function(idEmissor, idConta, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'idEmissor' is set
     if (idEmissor == null) {
        //throw new ApiException(400, "Missing the required parameter 'idEmissor' when calling consultarContaUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idEmissor' when calling consultarContaUsingGET";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idConta' is set
     if (idConta == null) {
        //throw new ApiException(400, "Missing the required parameter 'idConta' when calling consultarContaUsingGET");
        var errorRequiredMsg = "Missing the required parameter 'idConta' when calling consultarContaUsingGET";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://localhost/';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/api/v1/contas/{idConta}/cartoes/{idConta}", "\\{format\\}","json")
, "\\{" + "idConta" + "\\}", encodeURIComponent(idConta.toString()));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    if (idEmissor != null)
    headerParams.put("idEmissor", idEmissor);
    
    

    path += createQueryString(queryParams);

    var options = {type: "GET", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns ContaResponse
        */
      
      var myResponse = new ContaResponse();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  

 	function replaceAll (haystack, needle, replace) {
		var result= haystack;
		if (needle !=null && replace!=null) {
			result= haystack.replace(new RegExp(needle, 'g'), replace);
		}
		return result;
	}

 	function createQueryString (queryParams) {
		var queryString ='';
		var i = 0;
		for (var queryParamName in queryParams) {
			if (i==0) {
				queryString += '?' ;
			} else {
				queryString += '&' ;
			}
			
			queryString +=  queryParamName + '=' + encodeURIComponent(queryParams[queryParamName]);
			i++;
		}
		
		return queryString;
	}
}

// export module for Node.js
if (typeof module === 'object' && module.exports) {
  module.exports = CartaoApi;
}
