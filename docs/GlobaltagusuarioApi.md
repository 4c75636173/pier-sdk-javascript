# Pier.GlobaltagusuarioApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarSenhaLoginUsingPOST**](GlobaltagusuarioApi.md#alterarSenhaLoginUsingPOST) | **POST** /api/usuarios/{login}/alterar-senha | {{{usuario_resource_alterar_senha_login}}}
[**alterarSenhaUsingPUT**](GlobaltagusuarioApi.md#alterarSenhaUsingPUT) | **PUT** /api/usuarios/{id}/alterar-senha | {{{usuario_resource_alterar_senha}}}
[**alterarUsingPUT23**](GlobaltagusuarioApi.md#alterarUsingPUT23) | **PUT** /api/usuarios/{id} | {{{usuario_resource_alterar}}}
[**ativarUsuarioUsingPOST1**](GlobaltagusuarioApi.md#ativarUsuarioUsingPOST1) | **POST** /api/usuarios/{id}/ativar-usuario | {{{usuario_resource_ativar_usuario}}}
[**atualizarUsingPUT3**](GlobaltagusuarioApi.md#atualizarUsingPUT3) | **PUT** /api/controles-seguranca-dispositivos | {{{controle_seguranca_dispositivo_atualizar}}}
[**consultarContasVinculadasUsingGET**](GlobaltagusuarioApi.md#consultarContasVinculadasUsingGET) | **GET** /api/usuarios/{id}/vincular-contas | {{{usuario_recurso_listar_por_id_usuario}}}
[**consultarUsingGET17**](GlobaltagusuarioApi.md#consultarUsingGET17) | **GET** /api/controles-seguranca-dispositivos | {{{controle_seguranca_dispositivo_consultar}}}
[**consultarUsingGET53**](GlobaltagusuarioApi.md#consultarUsingGET53) | **GET** /api/usuarios/{id} | {{{usuario_resource_consultar}}}
[**desativarUsuarioUsingPOST1**](GlobaltagusuarioApi.md#desativarUsuarioUsingPOST1) | **POST** /api/usuarios/{id}/desativar-usuario | {{{usuario_resource_desativar_usuario}}}
[**listarUsingGET65**](GlobaltagusuarioApi.md#listarUsingGET65) | **GET** /api/usuarios | {{{usuario_resource_listar}}}
[**recuperarSenhaUsingPOST**](GlobaltagusuarioApi.md#recuperarSenhaUsingPOST) | **POST** /api/usuarios/{id}/recuperar-senha | {{{usuario_resource_recuperar_senha}}}
[**salvarUsingPOST10**](GlobaltagusuarioApi.md#salvarUsingPOST10) | **POST** /api/controles-seguranca-dispositivos | {{{controle_seguranca_dispositivo_salvar}}}
[**salvarUsingPOST34**](GlobaltagusuarioApi.md#salvarUsingPOST34) | **POST** /api/usuarios | {{{usuario_resource_salvar}}}
[**validarSenhaForteUsingPOST**](GlobaltagusuarioApi.md#validarSenhaForteUsingPOST) | **POST** /api/usuarios/validar-senha-forte | {{{usuario_resource_validar_senha_forte}}}
[**validarSenhaLoginUsingPOST**](GlobaltagusuarioApi.md#validarSenhaLoginUsingPOST) | **POST** /api/usuarios/{login}/validar-senha | {{{usuario_resource_validar_senha_login}}}
[**validarSenhaUsingGET1**](GlobaltagusuarioApi.md#validarSenhaUsingGET1) | **GET** /api/usuarios/{id}/validar-senha | {{{usuario_resource_validar_senha}}}
[**vincularContasUsingPOST**](GlobaltagusuarioApi.md#vincularContasUsingPOST) | **POST** /api/usuarios/{id}/vincular-usuarios | {{{usuario_recurso_vincular_usuarios}}}


<a name="alterarSenhaLoginUsingPOST"></a>
# **alterarSenhaLoginUsingPOST**
> &#39;String&#39; alterarSenhaLoginUsingPOST(login, senhaNova)

{{{usuario_resource_alterar_senha_login}}}

{{{usuario_resource_alterar_senha_login_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var login = "login_example"; // {String} {{{usuario_resource_alterar_senha_login_param_login}}}

var senhaNova = "senhaNova_example"; // {String} {{{usuario_resource_alterar_senha_login_param_senha_nova}}}


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
 **login** | **String**| {{{usuario_resource_alterar_senha_login_param_login}}} | 
 **senhaNova** | **String**| {{{usuario_resource_alterar_senha_login_param_senha_nova}}} | 

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

{{{usuario_resource_alterar_senha}}}

{{{usuario_resource_alterar_senha_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_resource_alterar_senha_param_id}}}

var senhaAtual = "senhaAtual_example"; // {String} {{{usuario_resource_alterar_senha_param_senha_atual}}}

var senhaNova = "senhaNova_example"; // {String} {{{usuario_resource_alterar_senha_param_senha_nova}}}


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
 **id** | **Integer**| {{{usuario_resource_alterar_senha_param_id}}} | 
 **senhaAtual** | **String**| {{{usuario_resource_alterar_senha_param_senha_atual}}} | 
 **senhaNova** | **String**| {{{usuario_resource_alterar_senha_param_senha_nova}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT23"></a>
# **alterarUsingPUT23**
> UsuarioResponse alterarUsingPUT23(id, update)

{{{usuario_resource_alterar}}}

{{{usuario_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_resource_alterar_param_id}}}

var update = new Pier.UsuarioUpdateValue(); // {UsuarioUpdateValue} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT23(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{usuario_resource_alterar_param_id}}} | 
 **update** | [**UsuarioUpdateValue**](UsuarioUpdateValue.md)| update | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarUsuarioUsingPOST1"></a>
# **ativarUsuarioUsingPOST1**
> UsuarioResponse ativarUsuarioUsingPOST1(id)

{{{usuario_resource_ativar_usuario}}}

{{{usuario_resource_ativar_usuario_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_resource_ativar_usuario_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarUsuarioUsingPOST1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{usuario_resource_ativar_usuario_param_id}}} | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT3"></a>
# **atualizarUsingPUT3**
> ControleSegurancaDispositivoResponse atualizarUsingPUT3(update)

{{{controle_seguranca_dispositivo_atualizar}}}

{{{controle_seguranca_dispositivo_atualizar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var update = new Pier.ControleSegurancaDispositivoUpdateValor(); // {ControleSegurancaDispositivoUpdateValor} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT3(update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update** | [**ControleSegurancaDispositivoUpdateValor**](ControleSegurancaDispositivoUpdateValor.md)| update | 

### Return type

[**ControleSegurancaDispositivoResponse**](ControleSegurancaDispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarContasVinculadasUsingGET"></a>
# **consultarContasVinculadasUsingGET**
> PageUsuarioContasResponse consultarContasVinculadasUsingGET(id, opts)

{{{usuario_recurso_listar_por_id_usuario}}}

{{{usuario_recurso_listar_por_id_usuario_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_recurso_listar_por_id_param_id_usuario}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarContasVinculadasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{usuario_recurso_listar_por_id_param_id_usuario}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageUsuarioContasResponse**](PageUsuarioContasResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET17"></a>
# **consultarUsingGET17**
> PageControleSegurancaDispositivoResponse consultarUsingGET17(idUsuario, opts)

{{{controle_seguranca_dispositivo_consultar}}}

{{{controle_seguranca_dispositivo_consultar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var idUsuario = 789; // {Integer} {{{usuario_resource_consultar_param_idUsuario}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET17(idUsuario, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idUsuario** | **Integer**| {{{usuario_resource_consultar_param_idUsuario}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageControleSegurancaDispositivoResponse**](PageControleSegurancaDispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET53"></a>
# **consultarUsingGET53**
> UsuarioResponse consultarUsingGET53(id)

{{{usuario_resource_consultar}}}

{{{usuario_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET53(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{usuario_resource_consultar_param_id}}} | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarUsuarioUsingPOST1"></a>
# **desativarUsuarioUsingPOST1**
> UsuarioResponse desativarUsuarioUsingPOST1(id)

{{{usuario_resource_desativar_usuario}}}

{{{usuario_resource_desativar_usuario_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_resource_desativar_usuario_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarUsuarioUsingPOST1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{usuario_resource_desativar_usuario_param_id}}} | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET65"></a>
# **listarUsingGET65**
> PageUsuarioResponse listarUsingGET65(opts)

{{{usuario_resource_listar}}}

{{{usuario_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example", // {String} {{{usuario_request_nome_value}}}
  'cpf': "cpf_example", // {String} {{{usuario_request_cpf_value}}}
  'email': "email_example", // {String} {{{usuario_request_email_value}}}
  'status': "status_example" // {String} {{{usuario_request_status_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET65(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{usuario_request_nome_value}}} | [optional] 
 **cpf** | **String**| {{{usuario_request_cpf_value}}} | [optional] 
 **email** | **String**| {{{usuario_request_email_value}}} | [optional] 
 **status** | **String**| {{{usuario_request_status_value}}} | [optional] 

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

{{{usuario_resource_recuperar_senha}}}

{{{usuario_resource_recuperar_senha_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_resource_recuperar_senha_param_id}}}


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
 **id** | **Integer**| {{{usuario_resource_recuperar_senha_param_id}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST10"></a>
# **salvarUsingPOST10**
> ControleSegurancaDispositivoResponse salvarUsingPOST10(persist)

{{{controle_seguranca_dispositivo_salvar}}}

{{{controle_seguranca_dispositivo_salvar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var persist = new Pier.ControleSegurancaDispositivoPersistencia(); // {ControleSegurancaDispositivoPersistencia} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST10(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**ControleSegurancaDispositivoPersistencia**](ControleSegurancaDispositivoPersistencia.md)| persist | 

### Return type

[**ControleSegurancaDispositivoResponse**](ControleSegurancaDispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST34"></a>
# **salvarUsingPOST34**
> UsuarioResponse salvarUsingPOST34(persist)

{{{usuario_resource_salvar}}}

{{{usuario_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var persist = new Pier.UsuarioPersistencia(); // {UsuarioPersistencia} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST34(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**UsuarioPersistencia**](UsuarioPersistencia.md)| persist | 

### Return type

[**UsuarioResponse**](UsuarioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarSenhaForteUsingPOST"></a>
# **validarSenhaForteUsingPOST**
> &#39;String&#39; validarSenhaForteUsingPOST(senha, usuarioSenhaFortePersist)

{{{usuario_resource_validar_senha_forte}}}

{{{usuario_resource_validar_senha_forte_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var senha = "senha_example"; // {String} {{{usuario_resource_validar_senha_forte_param_senha}}}

var usuarioSenhaFortePersist = new Pier.UsuarioSenhaFortePersistencia(); // {UsuarioSenhaFortePersistencia} {{{usuario_resource_validar_senha_forte_param_id_plataforma}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarSenhaForteUsingPOST(senha, usuarioSenhaFortePersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senha** | **String**| {{{usuario_resource_validar_senha_forte_param_senha}}} | 
 **usuarioSenhaFortePersist** | [**UsuarioSenhaFortePersistencia**](UsuarioSenhaFortePersistencia.md)| {{{usuario_resource_validar_senha_forte_param_id_plataforma}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarSenhaLoginUsingPOST"></a>
# **validarSenhaLoginUsingPOST**
> Object validarSenhaLoginUsingPOST(login, senha)

{{{usuario_resource_validar_senha_login}}}

{{{usuario_resource_validar_senha_login_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var login = "login_example"; // {String} {{{usuario_resource_validar_senha_login_param_login}}}

var senha = "senha_example"; // {String} {{{usuario_resource_validar_senha_login_param_senha}}}


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
 **login** | **String**| {{{usuario_resource_validar_senha_login_param_login}}} | 
 **senha** | **String**| {{{usuario_resource_validar_senha_login_param_senha}}} | 

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

{{{usuario_resource_validar_senha}}}

{{{usuario_resource_validar_senha_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var senha = "senha_example"; // {String} {{{usuario_resource_validar_senha_param_senha}}}

var id = 789; // {Integer} {{{usuario_resource_validar_senha_param_id}}}


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
 **senha** | **String**| {{{usuario_resource_validar_senha_param_senha}}} | 
 **id** | **Integer**| {{{usuario_resource_validar_senha_param_id}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vincularContasUsingPOST"></a>
# **vincularContasUsingPOST**
> &#39;String&#39; vincularContasUsingPOST(id)

{{{usuario_recurso_vincular_usuarios}}}

{{{usuario_recurso_vincular_usuarios_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuarioApi()

var id = 789; // {Integer} {{{usuario_recurso_vincular_usuarios_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.vincularContasUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{usuario_recurso_vincular_usuarios_param_id}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

