# Pier.ServicoContaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarAnuidadeUsingPOST**](ServicoContaApi.md#ativarAnuidadeUsingPOST) | **POST** /api/contas/{id}/atribuir-anuidade | Atribuir Anuidade
[**ativarEnvioFaturaEmailUsingPOST**](ServicoContaApi.md#ativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/ativar-fatura-email |  Ativa o servi\u00E7o de envio de fatura por email
[**desativarEnvioFaturaEmailUsingPOST**](ServicoContaApi.md#desativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/desativar-fatura-email | Desativa o servi\u00E7o de envio de fatura por email
[**listarAnuidadesUsingGET**](ServicoContaApi.md#listarAnuidadesUsingGET) | **GET** /api/anuidades | Listar Anuidades
[**listarOperadorasTelefonicasUsingGET**](ServicoContaApi.md#listarOperadorasTelefonicasUsingGET) | **GET** /api/operadoras-telefonicas | Listar Operadoras


<a name="ativarAnuidadeUsingPOST"></a>
# **ativarAnuidadeUsingPOST**
> Object ativarAnuidadeUsingPOST(id, idAnuidade, opts)

Atribuir Anuidade

Esse recurso permite configurar qual a regra de Anuidade que ser\u00E1 atribu\u00EDda a uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ServicoContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var idAnuidade = 789; // {Integer} Identificador da anuidade

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'DDD': "DDD_example", // {String} DDD do celular
  'celular': "celular_example", // {String} N\u00FAmero do celular
  'idOperadora': 789, // {Integer} Identificador da operadora do celular
  'idOrigemComercial': 789 // {Integer} Identificador da origem comercial
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarAnuidadeUsingPOST(id, idAnuidade, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **idAnuidade** | **Integer**| Identificador da anuidade | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **DDD** | **String**| DDD do celular | [optional] 
 **celular** | **String**| N\u00FAmero do celular | [optional] 
 **idOperadora** | **Integer**| Identificador da operadora do celular | [optional] 
 **idOrigemComercial** | **Integer**| Identificador da origem comercial | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarEnvioFaturaEmailUsingPOST"></a>
# **ativarEnvioFaturaEmailUsingPOST**
> Object ativarEnvioFaturaEmailUsingPOST(id)

 Ativa o servi\u00E7o de envio de fatura por email

Este recurso ativa o servi\u00E7o de envio de fatura por email

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ServicoContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarEnvioFaturaEmailUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarEnvioFaturaEmailUsingPOST"></a>
# **desativarEnvioFaturaEmailUsingPOST**
> Object desativarEnvioFaturaEmailUsingPOST(id)

Desativa o servi\u00E7o de envio de fatura por email

Este recurso desativa o servi\u00E7o de envio de fatura por email

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ServicoContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarEnvioFaturaEmailUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarAnuidadesUsingGET"></a>
# **listarAnuidadesUsingGET**
> PageAnuidadeResponse listarAnuidadesUsingGET(opts)

Listar Anuidades

Lista as anuidades

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ServicoContaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
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
api.listarAnuidadesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageAnuidadeResponse**](PageAnuidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarOperadorasTelefonicasUsingGET"></a>
# **listarOperadorasTelefonicasUsingGET**
> PageOperadoraResponse listarOperadorasTelefonicasUsingGET(opts)

Listar Operadoras

Lista as operadoras.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ServicoContaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
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
api.listarOperadorasTelefonicasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageOperadoraResponse**](PageOperadoraResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

