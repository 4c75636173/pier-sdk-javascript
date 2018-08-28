# Pier.UsuarioldapresourceApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT22**](UsuarioldapresourceApi.md#alterarUsingPUT22) | **PUT** /api/usuarios-ldap/{id} | alterar
[**ativarUsuarioUsingPOST**](UsuarioldapresourceApi.md#ativarUsuarioUsingPOST) | **POST** /api/usuarios-ldap/{id}/ativar-usuario | ativarUsuario
[**consultarUsingGET52**](UsuarioldapresourceApi.md#consultarUsingGET52) | **GET** /api/usuarios-ldap/{id} | consultar
[**desativarUsuarioUsingPOST**](UsuarioldapresourceApi.md#desativarUsuarioUsingPOST) | **POST** /api/usuarios-ldap/{id}/desativar-usuario | desativarUsuario
[**listarUsingGET64**](UsuarioldapresourceApi.md#listarUsingGET64) | **GET** /api/usuarios-ldap | listar
[**perfisUsingGET**](UsuarioldapresourceApi.md#perfisUsingGET) | **GET** /api/usuarios-ldap/{id}/perfis | perfis
[**salvarUsingPOST33**](UsuarioldapresourceApi.md#salvarUsingPOST33) | **POST** /api/usuarios-ldap | salvar


<a name="alterarUsingPUT22"></a>
# **alterarUsingPUT22**
> Object alterarUsingPUT22(id, update)

alterar

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioldapresourceApi()

var id = 789; // {Integer} id

var update = new Pier.UsuarioLdapUpdate(); // {UsuarioLdapUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT22(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 
 **update** | [**UsuarioLdapUpdate**](UsuarioLdapUpdate.md)| update | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarUsuarioUsingPOST"></a>
# **ativarUsuarioUsingPOST**
> Object ativarUsuarioUsingPOST(id)

ativarUsuario

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioldapresourceApi()

var id = 789; // {Integer} id


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
 **id** | **Integer**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET52"></a>
# **consultarUsingGET52**
> Object consultarUsingGET52(id)

consultar

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioldapresourceApi()

var id = 789; // {Integer} id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET52(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarUsuarioUsingPOST"></a>
# **desativarUsuarioUsingPOST**
> Object desativarUsuarioUsingPOST(id)

desativarUsuario

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioldapresourceApi()

var id = 789; // {Integer} id


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
 **id** | **Integer**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET64"></a>
# **listarUsingGET64**
> Object listarUsingGET64(opts)

listar

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioldapresourceApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example", // {String} 
  'cpf': "cpf_example", // {String} 
  'email': "email_example", // {String} 
  'status': "status_example", // {String} 
  'idEmissor': 789 // {Integer} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET64(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**|  | [optional] 
 **cpf** | **String**|  | [optional] 
 **email** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **idEmissor** | **Integer**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perfisUsingGET"></a>
# **perfisUsingGET**
> Object perfisUsingGET(id)

perfis

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioldapresourceApi()

var id = 789; // {Integer} id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.perfisUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST33"></a>
# **salvarUsingPOST33**
> Object salvarUsingPOST33(persist)

salvar

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.UsuarioldapresourceApi()

var persist = new Pier.UsuarioLdapPersist(); // {UsuarioLdapPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST33(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**UsuarioLdapPersist**](UsuarioLdapPersist.md)| persist | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

