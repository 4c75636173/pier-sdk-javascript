# Pier.UsuarioApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarSenhaLoginUsingPOST**](UsuarioApi.md#alterarSenhaLoginUsingPOST) | **POST** /api/usuarios/{login}/alterar-senha | Alterar senha do usu\u00C3\u00A1rio.
[**alterarSenhaUsingPUT**](UsuarioApi.md#alterarSenhaUsingPUT) | **PUT** /api/usuarios/{id}/alterar-senha | Alterar senha do usu\u00C3\u00A1rio na base do PIER ou WS.
[**alterarUsingPUT10**](UsuarioApi.md#alterarUsingPUT10) | **PUT** /api/usuarios/{id} | Altera os usu\u00C3\u00A1rios cadastrados na base.
[**ativarUsuarioUsingPOST**](UsuarioApi.md#ativarUsuarioUsingPOST) | **POST** /api/usuarios/{id}/ativar-usuario | Ativa os usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.
[**consultarUsingGET29**](UsuarioApi.md#consultarUsingGET29) | **GET** /api/usuarios/{id} | Apresenta os dados de um determinado Usu\u00C3\u00A1rio na base do PIER ou WS.
[**desativarUsuarioUsingPOST**](UsuarioApi.md#desativarUsuarioUsingPOST) | **POST** /api/usuarios/{id}/desativar-usuario | Desativa os usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.
[**listarUsingGET33**](UsuarioApi.md#listarUsingGET33) | **GET** /api/usuarios | Lista os Usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.
[**recuperarSenhaUsingPOST**](UsuarioApi.md#recuperarSenhaUsingPOST) | **POST** /api/usuarios/{id}/recuperar-senha | Recuperar senha do usu\u00C3\u00A1rio na base do PIER ou WS.
[**salvarUsingPOST19**](UsuarioApi.md#salvarUsingPOST19) | **POST** /api/usuarios | Cadastra Usu\u00C3\u00A1rio na base.
[**validarSenhaLoginUsingPOST**](UsuarioApi.md#validarSenhaLoginUsingPOST) | **POST** /api/usuarios/{login}/validar-senha | Realiza login com valida\u00C3\u00A7\u00C3\u00A3o de senha dos usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.
[**validarSenhaUsingGET1**](UsuarioApi.md#validarSenhaUsingGET1) | **GET** /api/usuarios/{id}/validar-senha | Validar a senha do usu\u00C3\u00A1rio na base do PIER ou WS.


<a name="alterarSenhaLoginUsingPOST"></a>
# **alterarSenhaLoginUsingPOST**
> &#39;String&#39; alterarSenhaLoginUsingPOST(login, senhaNova)

Alterar senha do usu\u00C3\u00A1rio.

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha do usu\u00C3\u00A1rio.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var login = "login_example"; // {String} Login do usu\u00C3\u00A1rio.

var senhaNova = "senhaNova_example"; // {String} Senha Nova


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarSenhaLoginUsingPOST(login, senhaNova, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| Login do usu\u00C3\u00A1rio. | 
 **senhaNova** | **String**| Senha Nova | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarSenhaUsingPUT"></a>
# **alterarSenhaUsingPUT**
> &#39;String&#39; alterarSenhaUsingPUT(id, senhaAtual, senhaNova)

Alterar senha do usu\u00C3\u00A1rio na base do PIER ou WS.

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha do usu\u00C3\u00A1rio.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

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

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT10"></a>
# **alterarUsingPUT10**
> UsuarioResponse alterarUsingPUT10(id, update)

Altera os usu\u00C3\u00A1rios cadastrados na base.

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos usu\u00C3\u00A1rios.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).

var update = new Pier.UsuarioUpdate(); // {UsuarioUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT10(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 
 **update** | [**UsuarioUpdate**](UsuarioUpdate.md)| update | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarUsuarioUsingPOST"></a>
# **ativarUsuarioUsingPOST**
> UsuarioResponse ativarUsuarioUsingPOST(id)

Ativa os usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.

Este m\u00C3\u00A9todo realiza a ativa\u00C3\u00A7\u00C3\u00A3o dos usu\u00C3\u00A1rios.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarUsuarioUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET29"></a>
# **consultarUsingGET29**
> UsuarioResponse consultarUsingGET29(id)

Apresenta os dados de um determinado Usu\u00C3\u00A1rio na base do PIER ou WS.

Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado Usu\u00C3\u00A1rio a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET29(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarUsuarioUsingPOST"></a>
# **desativarUsuarioUsingPOST**
> UsuarioResponse desativarUsuarioUsingPOST(id)

Desativa os usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.

Este m\u00C3\u00A9todo realiza a desativa\u00C3\u00A7\u00C3\u00A3o dos usu\u00C3\u00A1rios.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarUsuarioUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Usu\u00C3\u00A1rio (id). | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET33"></a>
# **listarUsingGET33**
> PageUsuarioResponse listarUsingGET33(opts)

Lista os Usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.

Este m\u00C3\u00A9todo permite que sejam listados os usu\u00C3\u00A1rios existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
api.listarUsingGET33(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Nome do Usuario | [optional] 
 **cpf** | **String**| CPF do Usuario | [optional] 
 **email** | **String**| Email do Usuario | [optional] 
 **status** | **String**| Status do Usuario | [optional] 

### Return type

[**PageUsuarioResponse**](PageUsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recuperarSenhaUsingPOST"></a>
# **recuperarSenhaUsingPOST**
> &#39;String&#39; recuperarSenhaUsingPOST(id)

Recuperar senha do usu\u00C3\u00A1rio na base do PIER ou WS.

Esse recurso permite recuperar a senha do usu\u00C3\u00A1rio.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

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

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST19"></a>
# **salvarUsingPOST19**
> UsuarioResponse salvarUsingPOST19(persist)

Cadastra Usu\u00C3\u00A1rio na base.

Esse recurso permite cadastrar usu\u00C3\u00A1rios.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var persist = new Pier.UsuarioPersist(); // {UsuarioPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST19(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**UsuarioPersist**](UsuarioPersist.md)| persist | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarSenhaLoginUsingPOST"></a>
# **validarSenhaLoginUsingPOST**
> Object validarSenhaLoginUsingPOST(login, senha)

Realiza login com valida\u00C3\u00A7\u00C3\u00A3o de senha dos usu\u00C3\u00A1rios cadastrados na base do PIER ou WS.

O recurso permite fazer login do usu\u00C3\u00A1rio atrav\u00C3\u00A9s da senha definida pelo emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

var login = "login_example"; // {String} Login identificador do usu\u00C3\u00A1rio (login).

var senha = "senha_example"; // {String} Senha do usu\u00C3\u00A1rio


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarSenhaLoginUsingPOST(login, senha, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| Login identificador do usu\u00C3\u00A1rio (login). | 
 **senha** | **String**| Senha do usu\u00C3\u00A1rio | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarSenhaUsingGET1"></a>
# **validarSenhaUsingGET1**
> &#39;String&#39; validarSenhaUsingGET1(senha, id)

Validar a senha do usu\u00C3\u00A1rio na base do PIER ou WS.

Este m\u00C3\u00A9todo permite validar a senha do usu\u00C3\u00A1rio).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioApi()

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

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

