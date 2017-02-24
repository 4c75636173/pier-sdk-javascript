# Pier.UsuariosApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarSenhaUsingPUT**](UsuariosApi.md#alterarSenhaUsingPUT) | **PUT** /api/usuarios/{id}/alterar-senha | Alterar senha do usu\u00C3\u00A1rio
[**alterarUsingPUT6**](UsuariosApi.md#alterarUsingPUT6) | **PUT** /api/usuarios/{id} | Alterar os usu\u00C3\u00A1rios cadastrados na base do PIER
[**consultarUsingGET16**](UsuariosApi.md#consultarUsingGET16) | **GET** /api/usuarios/{id} | Apresenta os dados de um determinado Usu\u00C3\u00A1rio
[**listarUsingGET16**](UsuariosApi.md#listarUsingGET16) | **GET** /api/usuarios | Lista os Usu\u00C3\u00A1rios cadastrados na base do PIER
[**recuperarSenhaUsingPOST**](UsuariosApi.md#recuperarSenhaUsingPOST) | **POST** /api/usuarios/{id}/recuperar-senha | Recuperar senha do usu\u00C3\u00A1rio
[**salvarUsingPOST6**](UsuariosApi.md#salvarUsingPOST6) | **POST** /api/usuarios | Cadastrar Usu\u00C3\u00A1rio na base do PIER
[**validarSenhaUsingGET1**](UsuariosApi.md#validarSenhaUsingGET1) | **GET** /api/usuarios/{id}/validar-senha | Validar a senha do usu\u00C3\u00A1rio


<a name="alterarSenhaUsingPUT"></a>
# **alterarSenhaUsingPUT**
> &#39;String&#39; alterarSenhaUsingPUT(id, senhaAtual, senhaNova)

Alterar senha do usu\u00C3\u00A1rio

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha do usu\u00C3\u00A1rio.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.UsuariosApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).

var senhaAtual = "senhaAtual_example"; // {String} Senha Atual

var senhaNova = "senhaNova_example"; // {String} Senha Nova


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarSenhaUsingPUT(id, senhaAtual, senhaNova, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 
 **senhaAtual** | **String**| Senha Atual | 
 **senhaNova** | **String**| Senha Nova | 

### Return type

**&#39;String&#39;**

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT6"></a>
# **alterarUsingPUT6**
> Usuario alterarUsingPUT6(id, update)

Alterar os usu\u00C3\u00A1rios cadastrados na base do PIER

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos usu\u00C3\u00A1rios.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.UsuariosApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).

var update = new Pier.Usuario(); // {Usuario} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT6(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 
 **update** | [**Usuario**](Usuario.md)| update | 

### Return type

[**Usuario**](Usuario.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET16"></a>
# **consultarUsingGET16**
> Usuario consultarUsingGET16(id)

Apresenta os dados de um determinado Usu\u00C3\u00A1rio

Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado Usu\u00C3\u00A1rio a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.UsuariosApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET16(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 

### Return type

[**Usuario**](Usuario.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET16"></a>
# **listarUsingGET16**
> PageUsuarios listarUsingGET16(opts)

Lista os Usu\u00C3\u00A1rios cadastrados na base do PIER

Este m\u00C3\u00A9todo permite que sejam listados os usu\u00C3\u00A1rios existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.UsuariosApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
  'id': 789, // {Integer} Id do Usuario
  'nome': "nome_example", // {String} Nome do Usuario
  'cpf': "cpf_example", // {String} CPF do Usuario
  'email': "email_example", // {String} Email do Usuario
  'status': "status_example" // {String} Status do Usuario
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET16(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 
 **id** | **Integer**| Id do Usuario | [optional] 
 **nome** | **String**| Nome do Usuario | [optional] 
 **cpf** | **String**| CPF do Usuario | [optional] 
 **email** | **String**| Email do Usuario | [optional] 
 **status** | **String**| Status do Usuario | [optional] 

### Return type

[**PageUsuarios**](PageUsuarios.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recuperarSenhaUsingPOST"></a>
# **recuperarSenhaUsingPOST**
> &#39;String&#39; recuperarSenhaUsingPOST(id)

Recuperar senha do usu\u00C3\u00A1rio

Esse recurso permite recuperar a senha do usu\u00C3\u00A1rio.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.UsuariosApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.recuperarSenhaUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 

### Return type

**&#39;String&#39;**

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST6"></a>
# **salvarUsingPOST6**
> Usuario salvarUsingPOST6(persist)

Cadastrar Usu\u00C3\u00A1rio na base do PIER

Esse recurso permite cadastrar usu\u00C3\u00A1rios na base do PIER.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.UsuariosApi()

var persist = new Pier.Usuario(); // {Usuario} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST6(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**Usuario**](Usuario.md)| persist | 

### Return type

[**Usuario**](Usuario.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarSenhaUsingGET1"></a>
# **validarSenhaUsingGET1**
> &#39;String&#39; validarSenhaUsingGET1(senha, id)

Validar a senha do usu\u00C3\u00A1rio

Este m\u00C3\u00A9todo permite validar a senha do usu\u00C3\u00A1rio).

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.UsuariosApi()

var senha = "senha_example"; // {String} Senha do usu\u00C3\u00A1rio

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarSenhaUsingGET1(senha, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senha** | **String**| Senha do usu\u00C3\u00A1rio | 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 

### Return type

**&#39;String&#39;**

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

