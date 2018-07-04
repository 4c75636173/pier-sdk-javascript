# Pier.GlobaltagfaturamentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarTipoFaturamentoUsingPUT**](GlobaltagfaturamentoApi.md#alterarTipoFaturamentoUsingPUT) | **PUT** /api/tipos-faturamento/{id} | {{{faturamento_resource_alterar_tipo_faturamento}}}
[**cadastrarFaturamentoPorContaUsingPOST**](GlobaltagfaturamentoApi.md#cadastrarFaturamentoPorContaUsingPOST) | **POST** /api/tipos-faturamento-conta | {{{faturamento_resource_cadastrar_faturamento_por_conta}}}
[**cadastrarTipoFaturamentoUsingPOST**](GlobaltagfaturamentoApi.md#cadastrarTipoFaturamentoUsingPOST) | **POST** /api/tipos-faturamento | {{{faturamento_resource_cadastrar_tipo_faturamento}}}
[**consultarTipoFaturamentoUsingGET**](GlobaltagfaturamentoApi.md#consultarTipoFaturamentoUsingGET) | **GET** /api/tipos-faturamento/{id} | {{{faturamento_resource_consultar_tipo_faturamento}}}
[**desativarFaturamentoPorContaUsingPOST**](GlobaltagfaturamentoApi.md#desativarFaturamentoPorContaUsingPOST) | **POST** /api/tipos-faturamento-conta/{id}/desativar | {{{faturamento_resource_desativar_faturamento_por_conta}}}
[**desativarTipoFaturamentoUsingPOST**](GlobaltagfaturamentoApi.md#desativarTipoFaturamentoUsingPOST) | **POST** /api/tipos-faturamento/{id}/desativar | {{{faturamento_resource_desativar_tipo_faturamento}}}
[**listarFaturamentoPorContaUsingGET**](GlobaltagfaturamentoApi.md#listarFaturamentoPorContaUsingGET) | **GET** /api/tipos-faturamento-conta | {{{faturamento_resource_listar_faturamento_por_conta}}}
[**listarTipoFaturamentoUsingGET**](GlobaltagfaturamentoApi.md#listarTipoFaturamentoUsingGET) | **GET** /api/tipos-faturamento | {{{faturamento_resource_listar_tipo_faturamento}}}


<a name="alterarTipoFaturamentoUsingPUT"></a>
# **alterarTipoFaturamentoUsingPUT**
> TipoFaturamentoResponse alterarTipoFaturamentoUsingPUT(id, tipoFaturamentoPersist)

{{{faturamento_resource_alterar_tipo_faturamento}}}

{{{faturamento_resource_alterar_tipo_faturamento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var id = 789; // {Integer} {{{faturamento_resource_alterar_tipo_faturamento_param_id_tipo_faturamento}}}

var tipoFaturamentoPersist = new Pier.TipoFaturamentoPersistValue(); // {TipoFaturamentoPersistValue} tipoFaturamentoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarTipoFaturamentoUsingPUT(id, tipoFaturamentoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{faturamento_resource_alterar_tipo_faturamento_param_id_tipo_faturamento}}} | 
 **tipoFaturamentoPersist** | [**TipoFaturamentoPersistValue**](TipoFaturamentoPersistValue.md)| tipoFaturamentoPersist | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarFaturamentoPorContaUsingPOST"></a>
# **cadastrarFaturamentoPorContaUsingPOST**
> TipoFaturamentoPorContaResponse cadastrarFaturamentoPorContaUsingPOST(tipoFaturamentoPorContaPersist)

{{{faturamento_resource_cadastrar_faturamento_por_conta}}}

{{{faturamento_resource_cadastrar_faturamento_por_conta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var tipoFaturamentoPorContaPersist = new Pier.TipoFaturamentoPorContaPersistValue(); // {TipoFaturamentoPorContaPersistValue} tipoFaturamentoPorContaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarFaturamentoPorContaUsingPOST(tipoFaturamentoPorContaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoFaturamentoPorContaPersist** | [**TipoFaturamentoPorContaPersistValue**](TipoFaturamentoPorContaPersistValue.md)| tipoFaturamentoPorContaPersist | 

### Return type

[**TipoFaturamentoPorContaResponse**](TipoFaturamentoPorContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarTipoFaturamentoUsingPOST"></a>
# **cadastrarTipoFaturamentoUsingPOST**
> TipoFaturamentoResponse cadastrarTipoFaturamentoUsingPOST(tipoFaturamentoPersist)

{{{faturamento_resource_cadastrar_tipo_faturamento}}}

{{{faturamento_resource_cadastrar_tipo_faturamento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var tipoFaturamentoPersist = new Pier.TipoFaturamentoPersistValue(); // {TipoFaturamentoPersistValue} tipoFaturamentoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarTipoFaturamentoUsingPOST(tipoFaturamentoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tipoFaturamentoPersist** | [**TipoFaturamentoPersistValue**](TipoFaturamentoPersistValue.md)| tipoFaturamentoPersist | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTipoFaturamentoUsingGET"></a>
# **consultarTipoFaturamentoUsingGET**
> TipoFaturamentoResponse consultarTipoFaturamentoUsingGET(id)

{{{faturamento_resource_consultar_tipo_faturamento}}}

{{{faturamento_resource_consultar_tipo_faturamento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var id = 789; // {Integer} {{{faturamento_resource_consultar_tipo_faturamento_param_id_tipo_faturamento}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTipoFaturamentoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{faturamento_resource_consultar_tipo_faturamento_param_id_tipo_faturamento}}} | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarFaturamentoPorContaUsingPOST"></a>
# **desativarFaturamentoPorContaUsingPOST**
> TipoFaturamentoPorContaResponse desativarFaturamentoPorContaUsingPOST(id)

{{{faturamento_resource_desativar_faturamento_por_conta}}}

{{{faturamento_resource_desativar_faturamento_por_conta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var id = 789; // {Integer} {{{faturamento_resource_desativar_faturamento_por_conta_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarFaturamentoPorContaUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{faturamento_resource_desativar_faturamento_por_conta_param_id}}} | 

### Return type

[**TipoFaturamentoPorContaResponse**](TipoFaturamentoPorContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarTipoFaturamentoUsingPOST"></a>
# **desativarTipoFaturamentoUsingPOST**
> TipoFaturamentoResponse desativarTipoFaturamentoUsingPOST(id)

{{{faturamento_resource_desativar_tipo_faturamento}}}

{{{faturamento_resource_desativar_tipo_faturamento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var id = 789; // {Integer} {{{faturamento_resource_desativar_tipo_faturamento_param_id_tipo_faturamento}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarTipoFaturamentoUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{faturamento_resource_desativar_tipo_faturamento_param_id_tipo_faturamento}}} | 

### Return type

[**TipoFaturamentoResponse**](TipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFaturamentoPorContaUsingGET"></a>
# **listarFaturamentoPorContaUsingGET**
> PageTipoFaturamentoPorContaResponse listarFaturamentoPorContaUsingGET(opts)

{{{faturamento_resource_listar_faturamento_por_conta}}}

{{{faturamento_resource_listar_faturamento_por_conta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTipoFaturamentoPorConta': 789, // {Integer} {{{tipo_faturamento_por_conta_request_id_tipo_faturamento_por_conta_value}}}
  'ativo': true, // {Boolean} {{{tipo_faturamento_por_conta_request_status_value}}}
  'idConta': 789, // {Integer} {{{tipo_faturamento_por_conta_request_id_conta_value}}}
  'idTipoFaturamento': 789, // {Integer} {{{tipo_faturamento_por_conta_request_id_tipo_faturamento_value}}}
  'dataHoraInclusao': "dataHoraInclusao_example", // {String} {{{tipo_faturamento_por_conta_request_data_hora_inclusao_value}}}
  'dataHoraCancelamento': "dataHoraCancelamento_example", // {String} {{{tipo_faturamento_por_conta_request_data_hora_cancelamento_value}}}
  'modificadoPor': "modificadoPor_example" // {String} {{{tipo_faturamento_por_conta_request_modificado_por_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarFaturamentoPorContaUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTipoFaturamentoPorConta** | **Integer**| {{{tipo_faturamento_por_conta_request_id_tipo_faturamento_por_conta_value}}} | [optional] 
 **ativo** | **Boolean**| {{{tipo_faturamento_por_conta_request_status_value}}} | [optional] 
 **idConta** | **Integer**| {{{tipo_faturamento_por_conta_request_id_conta_value}}} | [optional] 
 **idTipoFaturamento** | **Integer**| {{{tipo_faturamento_por_conta_request_id_tipo_faturamento_value}}} | [optional] 
 **dataHoraInclusao** | **String**| {{{tipo_faturamento_por_conta_request_data_hora_inclusao_value}}} | [optional] 
 **dataHoraCancelamento** | **String**| {{{tipo_faturamento_por_conta_request_data_hora_cancelamento_value}}} | [optional] 
 **modificadoPor** | **String**| {{{tipo_faturamento_por_conta_request_modificado_por_value}}} | [optional] 

### Return type

[**PageTipoFaturamentoPorContaResponse**](PageTipoFaturamentoPorContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTipoFaturamentoUsingGET"></a>
# **listarTipoFaturamentoUsingGET**
> PageTipoFaturamentoResponse listarTipoFaturamentoUsingGET(opts)

{{{faturamento_resource_listar_tipo_faturamento}}}

{{{faturamento_resource_listar_tipo_faturamento_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagfaturamentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTipoFaturamento': 789, // {Integer} {{{tipo_faturamento_request_id_tipo_faturamento_value}}}
  'descricao': "descricao_example", // {String} {{{tipo_faturamento_request_descricao_value}}}
  'flagApenasDemonstrativo': true, // {Boolean} {{{tipo_faturamento_request_flag_apenas_demonstrativo_value}}}
  'idConvenio': 789 // {Integer} {{{tipo_faturamento_request_id_convenio_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTipoFaturamentoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTipoFaturamento** | **Integer**| {{{tipo_faturamento_request_id_tipo_faturamento_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_faturamento_request_descricao_value}}} | [optional] 
 **flagApenasDemonstrativo** | **Boolean**| {{{tipo_faturamento_request_flag_apenas_demonstrativo_value}}} | [optional] 
 **idConvenio** | **Integer**| {{{tipo_faturamento_request_id_convenio_value}}} | [optional] 

### Return type

[**PageTipoFaturamentoResponse**](PageTipoFaturamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

