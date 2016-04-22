// require files in Node.js environment
var $, ContaResponse;
if (typeof module === 'object' && module.exports) {
  $ = require('jquery');
  ContaResponse = require('../model/ContaResponse.js');
}

// export module for AMD
if ( typeof define === "function" && define.amd ) {     
	define(['jquery', 'ContaResponse'], function($, ContaResponse) {
        return ContaApi;
	 });
}

var ContaApi = function ContaApi() {
	var self = this;
  
  
  /**
   * /contas/{idConta}
   * Consulte informaÃ§Ãµes de uma determinada conta
   * @param {Integer}  idEmissor ID do Emissor
   * @param {Integer}  idConta ID da Conta
   * @param {function} callback the callback function
   * @return ContaResponse
   */
  self.consultarContaUsingGET1 = function(idEmissor, idConta, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'idEmissor' is set
     if (idEmissor == null) {
        //throw new ApiException(400, "Missing the required parameter 'idEmissor' when calling consultarContaUsingGET1");
        var errorRequiredMsg = "Missing the required parameter 'idEmissor' when calling consultarContaUsingGET1";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'idConta' is set
     if (idConta == null) {
        //throw new ApiException(400, "Missing the required parameter 'idConta' when calling consultarContaUsingGET1");
        var errorRequiredMsg = "Missing the required parameter 'idConta' when calling consultarContaUsingGET1";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://localhost/';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/api/v1/contas/{idConta}", "\\{format\\}","json")
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
  module.exports = ContaApi;
}
