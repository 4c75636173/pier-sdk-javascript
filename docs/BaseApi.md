# Pier.BaseApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT**](BaseApi.md#alterarUsingPUT) | **PUT** /api/bases | Alterar base
[**clearUsingGET**](BaseApi.md#clearUsingGET) | **GET** /api/bases/clear | Limpar mapa de bases
[**consultarUsingGET1**](BaseApi.md#consultarUsingGET1) | **GET** /api/bases/{id} | Consultar base
[**listarUsingGET1**](BaseApi.md#listarUsingGET1) | **GET** /api/bases | Listar bases
[**salvarUsingPOST1**](BaseApi.md#salvarUsingPOST1) | **POST** /api/bases | Salvar base


<a name="alterarUsingPUT"></a>
# **alterarUsingPUT**
> Base alterarUsingPUT(id, servidor, usuario, senha, nomeBase, senhaCriptografada, domain, nomeBaseControleAcesso, servidorControleAcesso, opts)

Alterar base

Este recurso permite que seja modificado uma base j\u00C3\u00A1 cadastrada

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.BaseApi()

var id = 789; // {Integer} C\u00C3\u00B3digo identificador da base

var servidor = "servidor_example"; // {String} IP do servidor

var usuario = "usuario_example"; // {String} Nome do usu\u00C3\u00A1rio

var senha = "senha_example"; // {String} Senha

var nomeBase = "nomeBase_example"; // {String} Nome da base

var senhaCriptografada = true; // {Boolean} senha Criptografada

var domain = "domain_example"; // {String} Dom\u00C3\u00ADnio da base

var nomeBaseControleAcesso = "nomeBaseControleAcesso_example"; // {String} Nome da base de controle acesso

var servidorControleAcesso = "servidorControleAcesso_example"; // {String} Servidor do controle de acesso

var opts = { 
  'idEmissor': 789 // {Integer} C\u00C3\u00B3digo do identificador do emissor
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT(id, servidor, usuario, senha, nomeBase, senhaCriptografada, domain, nomeBaseControleAcesso, servidorControleAcesso, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo identificador da base | 
 **servidor** | **String**| IP do servidor | 
 **usuario** | **String**| Nome do usu\u00C3\u00A1rio | 
 **senha** | **String**| Senha | 
 **nomeBase** | **String**| Nome da base | 
 **senhaCriptografada** | **Boolean**| senha Criptografada | 
 **domain** | **String**| Dom\u00C3\u00ADnio da base | 
 **nomeBaseControleAcesso** | **String**| Nome da base de controle acesso | 
 **servidorControleAcesso** | **String**| Servidor do controle de acesso | 
 **idEmissor** | **Integer**| C\u00C3\u00B3digo do identificador do emissor | [optional] 

### Return type

[**Base**](Base.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clearUsingGET"></a>
# **clearUsingGET**
> BodyAccessToken clearUsingGET

Limpar mapa de bases

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.BaseApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.clearUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BodyAccessToken**](BodyAccessToken.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET1"></a>
# **consultarUsingGET1**
> Base consultarUsingGET1(id)

Consultar base

Este recurso permite que seja consultada uma base do emissor atrav\u00C3\u00A9s de um id especifico

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.BaseApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da base (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da base (id). | 

### Return type

[**Base**](Base.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET1"></a>
# **listarUsingGET1**
> PageBases listarUsingGET1(opts)

Listar bases

Este recurso permite que sejam listadas as bases existentes

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.BaseApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'id': 789, // {Integer} C\u00C3\u00B3digo identificador da base
  'servidor': "servidor_example", // {String} IP do servidor
  'usuario': "usuario_example", // {String} Nome do usu\u00C3\u00A1rio
  'senha': "senha_example", // {String} Senha
  'nomeBase': "nomeBase_example", // {String} Nome da base
  'senhaCriptografada': true, // {Boolean} senha Criptografada
  'domain': "domain_example", // {String} Dom\u00C3\u00ADnio da base
  'nomeBaseControleAcesso': "nomeBaseControleAcesso_example", // {String} Nome da base de controle acesso
  'idEmissor': 789, // {Integer} C\u00C3\u00B3digo do identificador do emissor
  'servidorControleAcesso': "servidorControleAcesso_example" // {String} Servidor do controle de acesso
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo identificador da base | [optional] 
 **servidor** | **String**| IP do servidor | [optional] 
 **usuario** | **String**| Nome do usu\u00C3\u00A1rio | [optional] 
 **senha** | **String**| Senha | [optional] 
 **nomeBase** | **String**| Nome da base | [optional] 
 **senhaCriptografada** | **Boolean**| senha Criptografada | [optional] 
 **domain** | **String**| Dom\u00C3\u00ADnio da base | [optional] 
 **nomeBaseControleAcesso** | **String**| Nome da base de controle acesso | [optional] 
 **idEmissor** | **Integer**| C\u00C3\u00B3digo do identificador do emissor | [optional] 
 **servidorControleAcesso** | **String**| Servidor do controle de acesso | [optional] 

### Return type

[**PageBases**](PageBases.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST1"></a>
# **salvarUsingPOST1**
> Base salvarUsingPOST1(servidor, usuario, senha, nomeBase, senhaCriptografada, domain, nomeBaseControleAcesso, servidorControleAcesso, opts)

Salvar base

Este recurso permite que seja adicionado uma nova base

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.BaseApi()

var servidor = "servidor_example"; // {String} IP do servidor

var usuario = "usuario_example"; // {String} Nome do usu\u00C3\u00A1rio

var senha = "senha_example"; // {String} Senha

var nomeBase = "nomeBase_example"; // {String} Nome da base

var senhaCriptografada = true; // {Boolean} senha Criptografada

var domain = "domain_example"; // {String} Dom\u00C3\u00ADnio da base

var nomeBaseControleAcesso = "nomeBaseControleAcesso_example"; // {String} Nome da base de controle acesso

var servidorControleAcesso = "servidorControleAcesso_example"; // {String} Servidor do controle de acesso

var opts = { 
  'idEmissor': 789 // {Integer} C\u00C3\u00B3digo do identificador do emissor
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST1(servidor, usuario, senha, nomeBase, senhaCriptografada, domain, nomeBaseControleAcesso, servidorControleAcesso, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **servidor** | **String**| IP do servidor | 
 **usuario** | **String**| Nome do usu\u00C3\u00A1rio | 
 **senha** | **String**| Senha | 
 **nomeBase** | **String**| Nome da base | 
 **senhaCriptografada** | **Boolean**| senha Criptografada | 
 **domain** | **String**| Dom\u00C3\u00ADnio da base | 
 **nomeBaseControleAcesso** | **String**| Nome da base de controle acesso | 
 **servidorControleAcesso** | **String**| Servidor do controle de acesso | 
 **idEmissor** | **Integer**| C\u00C3\u00B3digo do identificador do emissor | [optional] 

### Return type

[**Base**](Base.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

