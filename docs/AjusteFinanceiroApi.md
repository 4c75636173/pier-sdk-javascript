# Pier.AjusteFinanceiroApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ajustarContaUsingPOST**](AjusteFinanceiroApi.md#ajustarContaUsingPOST) | **POST** /api/ajustes-financeiros | Lan\u00E7a um ajuste para a conta informada
[**consultarUsingGET2**](AjusteFinanceiroApi.md#consultarUsingGET2) | **GET** /api/ajustes-financeiros/{id} | Apresenta dados de um determinado ajuste financeiro
[**listarUsingGET2**](AjusteFinanceiroApi.md#listarUsingGET2) | **GET** /api/ajustes-financeiros | Lista ajustes existentes na base de dados do Emissor


<a name="ajustarContaUsingPOST"></a>
# **ajustarContaUsingPOST**
> AjusteFinanceiroResponse ajustarContaUsingPOST(idTipoAjuste, dataAjuste, valorAjuste, idConta, opts)

Lan\u00E7a um ajuste para a conta informada

Este recurso insere um ajuste para a conta do id informado

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AjusteFinanceiroApi()

var idTipoAjuste = 789; // {Integer} C\u00F3digo identificador do tipo de ajuste.

var dataAjuste = "dataAjuste_example"; // {String} Data do ajuste no formato yyyy-MM-dd'T'HH:mm:ss.SSSZ.

var valorAjuste = 3.4; // {Number} Valor do ajuste

var idConta = 789; // {Integer} C\u00F3digo identificador da conta.

var opts = { 
  'identificadorExterno': "identificadorExterno_example" // {String} Codigo Hexadecimal
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ajustarContaUsingPOST(idTipoAjuste, dataAjuste, valorAjuste, idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTipoAjuste** | **Integer**| C\u00F3digo identificador do tipo de ajuste. | 
 **dataAjuste** | **String**| Data do ajuste no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ. | 
 **valorAjuste** | [**Number**](.md)| Valor do ajuste | 
 **idConta** | **Integer**| C\u00F3digo identificador da conta. | 
 **identificadorExterno** | **String**| Codigo Hexadecimal | [optional] 

### Return type

[**AjusteFinanceiroResponse**](AjusteFinanceiroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET2"></a>
# **consultarUsingGET2**
> AjusteFinanceiroResponse consultarUsingGET2(id)

Apresenta dados de um determinado ajuste financeiro

Este m\u00E9todo permite consultar dados de um determinado ajuste a partir de seu codigo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AjusteFinanceiroApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do ajuste (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET2(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do ajuste (id). | 

### Return type

[**AjusteFinanceiroResponse**](AjusteFinanceiroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET2"></a>
# **listarUsingGET2**
> PageAjusteResponse listarUsingGET2(opts)

Lista ajustes existentes na base de dados do Emissor

Este recurso permite listar ajustes existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AjusteFinanceiroApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idTipoAjuste': 789, // {Integer} C\u00F3digo identificador do tipo de ajuste.
  'dataAjuste': "dataAjuste_example", // {String} Data do ajuste no formato yyyy-MM-dd'T'HH:mm:ss.SSSZ.
  'valorAjuste': 3.4, // {Number} Valor do ajuste
  'identificadorExterno': "identificadorExterno_example", // {String} Codigo Hexadecimal
  'idConta': 789 // {Integer} C\u00F3digo identificador da conta.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idTipoAjuste** | **Integer**| C\u00F3digo identificador do tipo de ajuste. | [optional] 
 **dataAjuste** | **String**| Data do ajuste no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ. | [optional] 
 **valorAjuste** | [**Number**](.md)| Valor do ajuste | [optional] 
 **identificadorExterno** | **String**| Codigo Hexadecimal | [optional] 
 **idConta** | **Integer**| C\u00F3digo identificador da conta. | [optional] 

### Return type

[**PageAjusteResponse**](PageAjusteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

