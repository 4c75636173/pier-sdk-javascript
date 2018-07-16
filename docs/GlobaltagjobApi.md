# Pier.GlobaltagjobApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarJobUsingPOST**](GlobaltagjobApi.md#ativarJobUsingPOST) | **POST** /api/jobs/{id}/ativar-job | {{{job_resource_ativar_job}}}
[**atualizarUsingPUT4**](GlobaltagjobApi.md#atualizarUsingPUT4) | **PUT** /api/jobs/{id} | {{{job_resource_atualizar}}}
[**desativarJobUsingPOST**](GlobaltagjobApi.md#desativarJobUsingPOST) | **POST** /api/jobs/{id}/desativar-job | {{{job_resource_desativar_job}}}
[**listarUsingGET31**](GlobaltagjobApi.md#listarUsingGET31) | **GET** /api/jobs | {{{job_resource_listar}}}
[**salvarUsingPOST17**](GlobaltagjobApi.md#salvarUsingPOST17) | **POST** /api/jobs | {{{job_resource_salvar}}}


<a name="ativarJobUsingPOST"></a>
# **ativarJobUsingPOST**
> JobResponse ativarJobUsingPOST(id)

{{{job_resource_ativar_job}}}

{{{job_resource_ativar_job_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagjobApi()

var id = 789; // {Integer} {{{job_resource_ativar_job_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarJobUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{job_resource_ativar_job_param_id}}} | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT4"></a>
# **atualizarUsingPUT4**
> JobResponse atualizarUsingPUT4(id, descricao, cron, groovy)

{{{job_resource_atualizar}}}

{{{job_resource_atualizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagjobApi()

var id = 789; // {Integer} {{{job_resource_atualizar_param_id}}}

var descricao = "descricao_example"; // {String} {{{job_resource_atualizar_param_descricao}}}

var cron = "cron_example"; // {String} {{{job_resource_atualizar_param_cron}}}

var groovy = "groovy_example"; // {String} groovy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT4(id, descricao, cron, groovy, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{job_resource_atualizar_param_id}}} | 
 **descricao** | **String**| {{{job_resource_atualizar_param_descricao}}} | 
 **cron** | **String**| {{{job_resource_atualizar_param_cron}}} | 
 **groovy** | **String**| groovy | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

<a name="desativarJobUsingPOST"></a>
# **desativarJobUsingPOST**
> JobResponse desativarJobUsingPOST(id)

{{{job_resource_desativar_job}}}

{{{job_resource_desativar_job_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagjobApi()

var id = 789; // {Integer} {{{job_resource_desativar_job_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarJobUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{job_resource_desativar_job_param_id}}} | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET31"></a>
# **listarUsingGET31**
> PageJobResponse listarUsingGET31(opts)

{{{job_resource_listar}}}

{{{job_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagjobApi()

var opts = { 
  'groovy': "groovy_example", // {String} {{{job_d_t_o_groovy_value}}}
  'descricao': "descricao_example", // {String} {{{job_d_t_o_descricao_value}}}
  'cron': "cron_example", // {String} {{{job_d_t_o_cron_value}}}
  'status': "status_example", // {String} {{{job_d_t_o_status_value}}}
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
api.listarUsingGET31(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groovy** | **String**| {{{job_d_t_o_groovy_value}}} | [optional] 
 **descricao** | **String**| {{{job_d_t_o_descricao_value}}} | [optional] 
 **cron** | **String**| {{{job_d_t_o_cron_value}}} | [optional] 
 **status** | **String**| {{{job_d_t_o_status_value}}} | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageJobResponse**](PageJobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST17"></a>
# **salvarUsingPOST17**
> JobResponse salvarUsingPOST17(descricao, cron, groovy)

{{{job_resource_salvar}}}

{{{job_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagjobApi()

var descricao = "descricao_example"; // {String} {{{job_resource_salvar_param_descricao}}}

var cron = "cron_example"; // {String} {{{job_resource_salvar_param_cron}}}

var groovy = "groovy_example"; // {String} groovy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST17(descricao, cron, groovy, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descricao** | **String**| {{{job_resource_salvar_param_descricao}}} | 
 **cron** | **String**| {{{job_resource_salvar_param_cron}}} | 
 **groovy** | **String**| groovy | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

