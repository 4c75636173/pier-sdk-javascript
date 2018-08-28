# Pier.GlobaltagservicocontaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarAnuidadeUsingPOST**](GlobaltagservicocontaApi.md#ativarAnuidadeUsingPOST) | **POST** /api/contas/{id}/atribuir-anuidade | {{{conta_resource_ativar_anuidade}}}
[**ativarEnvioFaturaEmailUsingPOST**](GlobaltagservicocontaApi.md#ativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/ativar-fatura-email | {{{conta_resource_ativar_envio_fatura_email}}}
[**desativarEnvioFaturaEmailUsingPOST**](GlobaltagservicocontaApi.md#desativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/desativar-fatura-email | {{{conta_resource_desativar_envio_fatura_email}}}
[**listarAnuidadesUsingGET**](GlobaltagservicocontaApi.md#listarAnuidadesUsingGET) | **GET** /api/anuidades | {{{anuidade_resource_listar_anuidades}}}
[**listarOperadorasTelefonicasUsingGET**](GlobaltagservicocontaApi.md#listarOperadorasTelefonicasUsingGET) | **GET** /api/operadoras-telefonicas | {{{operadora_resource_listar_operadoras_telefonicas}}}


<a name="ativarAnuidadeUsingPOST"></a>
# **ativarAnuidadeUsingPOST**
> Object ativarAnuidadeUsingPOST(id, idAnuidade, opts)

{{{conta_resource_ativar_anuidade}}}

{{{conta_resource_ativar_anuidade_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagservicocontaApi()

var id = 789; // {Integer} {{{conta_resource_ativar_anuidade_param_id}}}

var idAnuidade = 789; // {Integer} {{{anuidade_request_id_anuidade_value}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'DDD': "DDD_example", // {String} {{{anuidade_request_d_d_d_value}}}
  'celular': "celular_example", // {String} {{{anuidade_request_celular_value}}}
  'idOperadora': 789, // {Integer} {{{anuidade_request_id_operadora_value}}}
  'idOrigemComercial': 789 // {Integer} {{{anuidade_request_id_origem_comercial_value}}}
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
 **id** | **Integer**| {{{conta_resource_ativar_anuidade_param_id}}} | 
 **idAnuidade** | **Integer**| {{{anuidade_request_id_anuidade_value}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **DDD** | **String**| {{{anuidade_request_d_d_d_value}}} | [optional] 
 **celular** | **String**| {{{anuidade_request_celular_value}}} | [optional] 
 **idOperadora** | **Integer**| {{{anuidade_request_id_operadora_value}}} | [optional] 
 **idOrigemComercial** | **Integer**| {{{anuidade_request_id_origem_comercial_value}}} | [optional] 

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

{{{conta_resource_ativar_envio_fatura_email}}}

{{{conta_resource_ativar_envio_fatura_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagservicocontaApi()

var id = 789; // {Integer} {{{conta_resource_ativar_envio_fatura_email_param_id}}}


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
 **id** | **Integer**| {{{conta_resource_ativar_envio_fatura_email_param_id}}} | 

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

{{{conta_resource_desativar_envio_fatura_email}}}

{{{conta_resource_desativar_envio_fatura_email_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagservicocontaApi()

var id = 789; // {Integer} {{{conta_resource_desativar_envio_fatura_email_param_id}}}


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
 **id** | **Integer**| {{{conta_resource_desativar_envio_fatura_email_param_id}}} | 

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

{{{anuidade_resource_listar_anuidades}}}

{{{anuidade_resource_listar_anuidades_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagservicocontaApi()

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
api.listarAnuidadesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

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

{{{operadora_resource_listar_operadoras_telefonicas}}}

{{{operadora_resource_listar_operadoras_telefonicas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagservicocontaApi()

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
api.listarOperadorasTelefonicasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageOperadoraResponse**](PageOperadoraResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

