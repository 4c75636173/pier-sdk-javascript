# Pier.CartaoOldApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bloquearCartaoUsingPOST**](CartaoOldApi.md#bloquearCartaoUsingPOST) | **POST** /api/contas/{idConta}/cartoes/{idCartao}/bloquear | Bloqueia um cart\u00C3\u00A3o
[**consultarCartaoUsingGET**](CartaoOldApi.md#consultarCartaoUsingGET) | **GET** /api/contas/{idConta}/cartoes/{idCartao} | Retorna um cart\u00C3\u00A3o
[**consultarCartoesUsingGET**](CartaoOldApi.md#consultarCartoesUsingGET) | **GET** /api/contas/{idConta}/cartoes | Retorna todos os cart\u00C3\u00B5es
[**desbloquearCartaoUsingPOST**](CartaoOldApi.md#desbloquearCartaoUsingPOST) | **POST** /api/contas/{idConta}/cartoes/{idCartao}/desbloquear | Desbloqueia um cart\u00C3\u00A3o
[**embossadoCartaoUsingPUT**](CartaoOldApi.md#embossadoCartaoUsingPUT) | **PUT** /api/contas/{idConta}/cartoes/{idCartao}/embossado | Embossado


<a name="bloquearCartaoUsingPOST"></a>
# **bloquearCartaoUsingPOST**
> CancelarCartaoResponse bloquearCartaoUsingPOST(idConta, idCartao, motivo, opts)

Bloqueia um cart\u00C3\u00A3o

Bloquear um determinado cart\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoOldApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja cancelar

var motivo = 56; // {Integer} Motivo do bloqueio

var opts = { 
  'observacao': "observacao_example" // {String} Alguma observa\u00C3\u00A7\u00C3\u00A3o para o bloqueio
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bloquearCartaoUsingPOST(idConta, idCartao, motivo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja cancelar | 
 **motivo** | **Integer**| Motivo do bloqueio | 
 **observacao** | **String**| Alguma observa\u00C3\u00A7\u00C3\u00A3o para o bloqueio | [optional] 

### Return type

[**CancelarCartaoResponse**](CancelarCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarCartaoUsingGET"></a>
# **consultarCartaoUsingGET**
> ConsultarCartaoResponse consultarCartaoUsingGET(idConta, idCartao, opts)

Retorna um cart\u00C3\u00A3o

Consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado cart\u00C3\u00A3o de uma conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoOldApi()

var idConta = 56; // {Integer} ID da Conta que pertence o cart\u00C3\u00A3o

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja consultar

var opts = { 
  'numeroCartao': "numeroCartao_example" // {String} N\u00C3\u00BAmero do Cart\u00C3\u00A3o que deseja consultar (opcional)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarCartaoUsingGET(idConta, idCartao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta que pertence o cart\u00C3\u00A3o | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja consultar | 
 **numeroCartao** | **String**| N\u00C3\u00BAmero do Cart\u00C3\u00A3o que deseja consultar (opcional) | [optional] 

### Return type

[**ConsultarCartaoResponse**](ConsultarCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarCartoesUsingGET"></a>
# **consultarCartoesUsingGET**
> ConsultarCartaoResponse consultarCartoesUsingGET(idConta)

Retorna todos os cart\u00C3\u00B5es

Consultar todos os cart\u00C3\u00B5es de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoOldApi()

var idConta = 56; // {Integer} ID da Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarCartoesUsingGET(idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 

### Return type

[**ConsultarCartaoResponse**](ConsultarCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desbloquearCartaoUsingPOST"></a>
# **desbloquearCartaoUsingPOST**
> DesbloquearCartaoResponse desbloquearCartaoUsingPOST(idConta, idCartao, opts)

Desbloqueia um cart\u00C3\u00A3o

Desbloquear cart\u00C3\u00A3o de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoOldApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite

var opts = { 
  'codigoSegurancao': "codigoSegurancao_example" // {String} C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desbloquearCartaoUsingPOST(idConta, idCartao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite | 
 **codigoSegurancao** | **String**| C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o | [optional] 

### Return type

[**DesbloquearCartaoResponse**](DesbloquearCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="embossadoCartaoUsingPUT"></a>
# **embossadoCartaoUsingPUT**
> EmbossadoCartaoResponse embossadoCartaoUsingPUT(idConta, idCartao)

Embossado

N\u00C3\u00B3s informe caso tenha embossado algum cart\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.CartaoOldApi()

var idConta = 56; // {Integer} ID da Conta

var idCartao = 56; // {Integer} ID do Cart\u00C3\u00A3o que deseja cancelar


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.embossadoCartaoUsingPUT(idConta, idCartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **idCartao** | **Integer**| ID do Cart\u00C3\u00A3o que deseja cancelar | 

### Return type

[**EmbossadoCartaoResponse**](EmbossadoCartaoResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

