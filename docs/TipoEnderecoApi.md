# Pier.TipoEnderecoApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET7**](TipoEnderecoApi.md#consultarUsingGET7) | **GET** /api/tipos-endereco/{id_tipo_endereco} | Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
[**listarUsingGET8**](TipoEnderecoApi.md#listarUsingGET8) | **GET** /api/tipos-endereco | Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 


<a name="consultarUsingGET7"></a>
# **consultarUsingGET7**
> TipoEndereco consultarUsingGET7(idTipoEndereco)

Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TipoEnderecoApi()

var idTipoEndereco = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET7(idTipoEndereco, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTipoEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id) | 

### Return type

[**TipoEndereco**](TipoEndereco.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET8"></a>
# **listarUsingGET8**
> PageTiposEndereco listarUsingGET8(opts)

Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 

Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Endere\u00C3\u00A7os existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TipoEnderecoApi()

var opts = { 
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
  'nome': "nome_example", // {String} Nome do Tipo do Endere\u00C3\u00A7o
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET8(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id) | [optional] 
 **nome** | **String**| Nome do Tipo do Endere\u00C3\u00A7o | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 

### Return type

[**PageTiposEndereco**](PageTiposEndereco.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

