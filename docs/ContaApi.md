# Pier.ContaApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buscarContaUsingGET**](ContaApi.md#buscarContaUsingGET) | **GET** /v1/contas/buscar | /contas/buscar
[**consultarContaUsingGET**](ContaApi.md#consultarContaUsingGET) | **GET** /v1/contas/{idConta} | /contas/{idConta}
[**consultarExtratoFaturasUsingGET**](ContaApi.md#consultarExtratoFaturasUsingGET) | **GET** /v1/contas/{idConta}/faturas | /contas/{idConta}/faturas
[**consultarSaldosLimitesUsingGET**](ContaApi.md#consultarSaldosLimitesUsingGET) | **GET** /v1/contas/{idConta}/limites | /contas/{idConta}/limites


<a name="buscarContaUsingGET"></a>
# **buscarContaUsingGET**
> ConsultarContaResponse buscarContaUsingGET(opts)

/contas/buscar

Consulte contas filtrando pelos campos id do emissor, n\u00C3\u00BAmero do cart\u00C3\u00A3o, nome ou CPF/CNPJ 

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.ContaApi()

var opts = { 
  'nome': "nome_example", // {String} Nome
  'cpf': "cpf_example", // {String} CPF (opcional caso nao informe o n\u00C3\u00BAmero do cart\u00C3\u00A3o ou id da conta)
  'numeroCartao': "numeroCartao_example", // {String} N\u00C3\u00BAmero do cart\u00C3\u00A3o (opcional caso n\u00C3\u00A3o informa o cpf ou id da conta)
  'idConta': 789 // {Integer} ID da Conta (opcional caso n\u00C3\u00A3o informe o n\u00C3\u00BAmero do cart\u00C3\u00A3o ou cpf)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.buscarContaUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nome** | **String**| Nome | [optional] 
 **cpf** | **String**| CPF (opcional caso nao informe o n\u00C3\u00BAmero do cart\u00C3\u00A3o ou id da conta) | [optional] 
 **numeroCartao** | **String**| N\u00C3\u00BAmero do cart\u00C3\u00A3o (opcional caso n\u00C3\u00A3o informa o cpf ou id da conta) | [optional] 
 **idConta** | **Integer**| ID da Conta (opcional caso n\u00C3\u00A3o informe o n\u00C3\u00BAmero do cart\u00C3\u00A3o ou cpf) | [optional] 

### Return type

[**ConsultarContaResponse**](ConsultarContaResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarContaUsingGET"></a>
# **consultarContaUsingGET**
> ContaResponse consultarContaUsingGET(idConta)

/contas/{idConta}

Consulte informa\u00C3\u00A7\u00C3\u00B5es de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.ContaApi()

var idConta = 56; // {Integer} ID da Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarContaUsingGET(idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarExtratoFaturasUsingGET"></a>
# **consultarExtratoFaturasUsingGET**
> ConsultarExtratoContaResponse consultarExtratoFaturasUsingGET(idConta, dataVencimento)

/contas/{idConta}/faturas

Consulte os extratos/faturas de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.ContaApi()

var idConta = 56; // {Integer} ID da Conta

var dataVencimento = "dataVencimento_example"; // {String} Data limite para o vencimento das transa\u00C3\u00A7\u00C3\u00B5es


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarExtratoFaturasUsingGET(idConta, dataVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 
 **dataVencimento** | **String**| Data limite para o vencimento das transa\u00C3\u00A7\u00C3\u00B5es | 

### Return type

[**ConsultarExtratoContaResponse**](ConsultarExtratoContaResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarSaldosLimitesUsingGET"></a>
# **consultarSaldosLimitesUsingGET**
> ConsultarSaldoLimitesResponse consultarSaldosLimitesUsingGET(idConta)

/contas/{idConta}/limites

Consulte os limites de uma determinada conta

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.ContaApi()

var idConta = 56; // {Integer} ID da Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarSaldosLimitesUsingGET(idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| ID da Conta | 

### Return type

[**ConsultarSaldoLimitesResponse**](ConsultarSaldoLimitesResponse.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

