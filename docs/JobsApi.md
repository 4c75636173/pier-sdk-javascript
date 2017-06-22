# Pier.JobsApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarJobUsingPOST**](JobsApi.md#ativarJobUsingPOST) | **POST** /api/jobs/{id}/ativar-job | Ativar Job
[**atualizarUsingPUT**](JobsApi.md#atualizarUsingPUT) | **PUT** /api/jobs/{id} | Atualizar Job
[**desativarJobUsingPOST**](JobsApi.md#desativarJobUsingPOST) | **POST** /api/jobs/{id}/desativar-job | Desativar Job
[**listarUsingGET12**](JobsApi.md#listarUsingGET12) | **GET** /api/jobs | Listar Jobs
[**salvarUsingPOST5**](JobsApi.md#salvarUsingPOST5) | **POST** /api/jobs | Cadastrar Job


<a name="ativarJobUsingPOST"></a>
# **ativarJobUsingPOST**
> JobResponse ativarJobUsingPOST(id)

Ativar Job

Este recurso adiciona o job ao agendador de tarefas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.JobsApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id). | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT"></a>
# **atualizarUsingPUT**
> JobResponse atualizarUsingPUT(id, descricao, cron, groovy)

Atualizar Job

Este recurso permite atualizar os dados de um job cadastrado.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.JobsApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id).

var descricao = "descricao_example"; // {String} descricao.

var cron = "cron_example"; // {String} Cron do Job.

var groovy = "groovy_example"; // {String} groovy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT(id, descricao, cron, groovy, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id). | 
 **descricao** | **String**| descricao. | 
 **cron** | **String**| Cron do Job. | 
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

Desativar Job

Este recurso retira o job do agendador de tarefas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.JobsApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id). | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET12"></a>
# **listarUsingGET12**
> PageJobResponse listarUsingGET12(opts)

Listar Jobs

Este recurso permite que sejam listados os jobs existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.JobsApi()

var opts = { 
  'groovy': "groovy_example", // {String} Script Groovy do Job
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do Job
  'cron': "cron_example", // {String} Cron do Job
  'status': "status_example", // {String} Status do Job
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET12(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groovy** | **String**| Script Groovy do Job | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do Job | [optional] 
 **cron** | **String**| Cron do Job | [optional] 
 **status** | **String**| Status do Job | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageJobResponse**](PageJobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST5"></a>
# **salvarUsingPOST5**
> JobResponse salvarUsingPOST5(descricao, cron, groovy)

Cadastrar Job

Esse recurso permite cadastrar jobs.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.JobsApi()

var descricao = "descricao_example"; // {String} descricao.

var cron = "cron_example"; // {String} Cron do Job.

var groovy = "groovy_example"; // {String} groovy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST5(descricao, cron, groovy, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **descricao** | **String**| descricao. | 
 **cron** | **String**| Cron do Job. | 
 **groovy** | **String**| groovy | 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

