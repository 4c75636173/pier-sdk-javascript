# Pier.RiscoFraudeApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET27**](RiscoFraudeApi.md#consultarUsingGET27) | **GET** /api/riscos-fraudes/{id} | Consultar uma transa\u00E7\u00E3o classificada com risco de fraude
[**listarTiposResolucaoUsingGET**](RiscoFraudeApi.md#listarTiposResolucaoUsingGET) | **GET** /api/tipos-resolucao | Listar os tipos de resolu\u00E7\u00E3o de fraude
[**negarUsingPOST**](RiscoFraudeApi.md#negarUsingPOST) | **POST** /api/riscos-fraudes/{id}/negar | Negar autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude
[**reconhecerUsingPOST**](RiscoFraudeApi.md#reconhecerUsingPOST) | **POST** /api/riscos-fraudes/{id}/reconhecer | Reconhecer autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude
[**validarDadosPortadorUsingPOST**](RiscoFraudeApi.md#validarDadosPortadorUsingPOST) | **POST** /api/riscos-fraudes/validar-dados-portador | Val\u00EDda os dados informados, consultando as informa\u00E7\u00F5es na base do emissor


<a name="consultarUsingGET27"></a>
# **consultarUsingGET27**
> RiscoFraudeDetalhadoResponse consultarUsingGET27(id)

Consultar uma transa\u00E7\u00E3o classificada com risco de fraude

Consulta os detalhes de uma transa\u00E7\u00E3o classificada como risco de fraude.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET27(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude | 

### Return type

[**RiscoFraudeDetalhadoResponse**](RiscoFraudeDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposResolucaoUsingGET"></a>
# **listarTiposResolucaoUsingGET**
> TipoResolucaoResponse listarTiposResolucaoUsingGET(opts)

Listar os tipos de resolu\u00E7\u00E3o de fraude

Este recurso permite que sejam listados os tipos de resolu\u00E7\u00E3o de fraude, cadastrados para um emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var opts = { 
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposResolucaoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**TipoResolucaoResponse**](TipoResolucaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="negarUsingPOST"></a>
# **negarUsingPOST**
> Object negarUsingPOST(id)

Negar autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude

Nega a realiza\u00E7\u00E3o de uma transa\u00E7\u00E3o classificada como risco de fraude.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.negarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reconhecerUsingPOST"></a>
# **reconhecerUsingPOST**
> Object reconhecerUsingPOST(id)

Reconhecer autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude

Confirma a autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reconhecerUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDadosPortadorUsingPOST"></a>
# **validarDadosPortadorUsingPOST**
> Object validarDadosPortadorUsingPOST(request)

Val\u00EDda os dados informados, consultando as informa\u00E7\u00F5es na base do emissor

Verif\u00EDca a exist\u00EAncias das informa\u00E7\u00F5es na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var request = new Pier.DadosPortadorRequest(); // {DadosPortadorRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDadosPortadorUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DadosPortadorRequest**](DadosPortadorRequest.md)| request | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

