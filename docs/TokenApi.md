# Pier.TokenApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT5**](TokenApi.md#alterarUsingPUT5) | **PUT** /api/tokens | Alterar token
[**callbackUsingPOST**](TokenApi.md#callbackUsingPOST) | **POST** /api/tokens/callback | /api/tokens/callback
[**consultarUsingGET14**](TokenApi.md#consultarUsingGET14) | **GET** /api/tokens/{id} | Consultar token
[**listarUsingGET14**](TokenApi.md#listarUsingGET14) | **GET** /api/tokens | Listar tokens
[**salvarUsingPOST5**](TokenApi.md#salvarUsingPOST5) | **POST** /api/tokens | Salvar token
[**validarUsingPOST**](TokenApi.md#validarUsingPOST) | **POST** /api/tokens/validar | /api/tokens/validar


<a name="alterarUsingPUT5"></a>
# **alterarUsingPUT5**
> Token alterarUsingPUT5(id, opts)

Alterar token

Este recurso permite que seja modificado um token j\u00C3\u00A1 cadastrado

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TokenApi()

var id = 789; // {Integer} C\u00C3\u00B3digo identificador do token

var opts = { 
  'token': "token_example", // {String} Token
  'base': 789, // {Integer} C\u00C3\u00B3digo identificador da base
  'owner': "owner_example", // {String} Owner do token
  'status': "status_example", // {String} Status do token
  'criadoPor': "criadoPor_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token
  'alteradoPor': "alteradoPor_example" // {String} Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT5(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo identificador do token | 
 **token** | **String**| Token | [optional] 
 **base** | **Integer**| C\u00C3\u00B3digo identificador da base | [optional] 
 **owner** | **String**| Owner do token | [optional] 
 **status** | **String**| Status do token | [optional] 
 **criadoPor** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token | [optional] 
 **alteradoPor** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="callbackUsingPOST"></a>
# **callbackUsingPOST**
> BodyAccessToken callbackUsingPOST(bodyAccessToken)

/api/tokens/callback

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TokenApi()

var bodyAccessToken = new Pier.BodyAccessToken(); // {BodyAccessToken} bodyAccessToken


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.callbackUsingPOST(bodyAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAccessToken** | [**BodyAccessToken**](BodyAccessToken.md)| bodyAccessToken | 

### Return type

[**BodyAccessToken**](BodyAccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET14"></a>
# **consultarUsingGET14**
> Token consultarUsingGET14(id)

Consultar token

Este recurso permite que seja consultado um token do emissor atrav\u00C3\u00A9s de um id especifico

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TokenApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do token (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET14(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do token (id). | 

### Return type

[**Token**](Token.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET14"></a>
# **listarUsingGET14**
> PageBases listarUsingGET14(opts)

Listar tokens

Este recurso permite que sejam listados os tokens existentes

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TokenApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'id': 789, // {Integer} C\u00C3\u00B3digo identificador do token
  'token': "token_example", // {String} Token
  'base': 789, // {Integer} C\u00C3\u00B3digo identificador da base
  'owner': "owner_example", // {String} Owner do token
  'status': "status_example", // {String} Status do token
  'criadoPor': "criadoPor_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token
  'dataCriacao': new Date("2013-10-20T19:20:30+01:00"), // {Date} Data de cria\u00C3\u00A7\u00C3\u00A3o do token
  'alteradoPor': "alteradoPor_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token
  'dataModificacao': new Date("2013-10-20T19:20:30+01:00") // {Date} Data de modifica\u00C3\u00A7\u00C3\u00A3o do token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET14(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador do token | [optional] 
 **token** | **String**| Token | [optional] 
 **base** | **Integer**| C\u00C3\u00B3digo identificador da base | [optional] 
 **owner** | **String**| Owner do token | [optional] 
 **status** | **String**| Status do token | [optional] 
 **criadoPor** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token | [optional] 
 **dataCriacao** | **Date**| Data de cria\u00C3\u00A7\u00C3\u00A3o do token | [optional] 
 **alteradoPor** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token | [optional] 
 **dataModificacao** | **Date**| Data de modifica\u00C3\u00A7\u00C3\u00A3o do token | [optional] 

### Return type

[**PageBases**](PageBases.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> Token salvarUsingPOST5(opts)

Salvar token

Este recurso permite que seja adicionado um novo token

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TokenApi()

var opts = { 
  'token': "token_example", // {String} Token
  'base': 789, // {Integer} C\u00C3\u00B3digo identificador da base
  'owner': "owner_example", // {String} Owner do token
  'status': "status_example", // {String} Status do token
  'criadoPor': "criadoPor_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token
  'alteradoPor': "alteradoPor_example" // {String} Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST5(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Token | [optional] 
 **base** | **Integer**| C\u00C3\u00B3digo identificador da base | [optional] 
 **owner** | **String**| Owner do token | [optional] 
 **status** | **String**| Status do token | [optional] 
 **criadoPor** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o de quem criou o token | [optional] 
 **alteradoPor** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o de quem alterou o token | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarUsingPOST"></a>
# **validarUsingPOST**
> Object validarUsingPOST(bodyAccessToken)

/api/tokens/validar

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.TokenApi()

var bodyAccessToken = new Pier.BodyAccessToken(); // {BodyAccessToken} bodyAccessToken


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarUsingPOST(bodyAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyAccessToken** | [**BodyAccessToken**](BodyAccessToken.md)| bodyAccessToken | 

### Return type

**Object**

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

