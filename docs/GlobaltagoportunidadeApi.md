# Pier.GlobaltagoportunidadeApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarStatusUsingPUT**](GlobaltagoportunidadeApi.md#alterarStatusUsingPUT) | **PUT** /api/tipos-oportunidades/{id}/status/{idStatus} | {{{tipo_oportunidade_resource_alterar_status}}}
[**alterarUsingPUT12**](GlobaltagoportunidadeApi.md#alterarUsingPUT12) | **PUT** /api/oportunidades/{id} | {{{oportunidade_resource_alterar}}}
[**alterarUsingPUT20**](GlobaltagoportunidadeApi.md#alterarUsingPUT20) | **PUT** /api/tipos-oportunidades/{id} | {{{tipo_oportunidade_resource_alterar}}}
[**consultarStatusUsingGET**](GlobaltagoportunidadeApi.md#consultarStatusUsingGET) | **GET** /api/tipos-oportunidades/{id}/status/{idStatus} | {{{tipo_oportunidade_resource_consultar_status}}}
[**consultarUsingGET26**](GlobaltagoportunidadeApi.md#consultarUsingGET26) | **GET** /api/oportunidades/{id} | {{{oportunidade_resource_consultar}}}
[**consultarUsingGET45**](GlobaltagoportunidadeApi.md#consultarUsingGET45) | **GET** /api/tipos-oportunidades/{id} | {{{tipo_oportunidade_resource_consultar}}}
[**listarAuditoriasStatusUsingGET**](GlobaltagoportunidadeApi.md#listarAuditoriasStatusUsingGET) | **GET** /api/auditorias-status-oportunidades | {{{tipo_oportunidade_resource_listar_auditorias_status}}}
[**listarAuditoriasUsingGET**](GlobaltagoportunidadeApi.md#listarAuditoriasUsingGET) | **GET** /api/auditorias-oportunidades | {{{oportunidade_resource_listar_auditorias}}}
[**listarAuditoriasUsingGET1**](GlobaltagoportunidadeApi.md#listarAuditoriasUsingGET1) | **GET** /api/auditorias-tipos-oportunidades | {{{tipo_oportunidade_resource_listar_auditorias}}}
[**listarStatusUsingGET**](GlobaltagoportunidadeApi.md#listarStatusUsingGET) | **GET** /api/tipos-oportunidades/{id}/status | {{{tipo_oportunidade_resource_listar_status}}}
[**listarUsingGET35**](GlobaltagoportunidadeApi.md#listarUsingGET35) | **GET** /api/oportunidades | {{{oportunidade_resource_listar}}}
[**listarUsingGET55**](GlobaltagoportunidadeApi.md#listarUsingGET55) | **GET** /api/tipos-oportunidades | {{{tipo_oportunidade_resource_listar}}}
[**salvarStatusUsingPOST**](GlobaltagoportunidadeApi.md#salvarStatusUsingPOST) | **POST** /api/tipos-oportunidades/{id}/status | {{{tipo_oportunidade_resource_salvar_status}}}
[**salvarUsingPOST21**](GlobaltagoportunidadeApi.md#salvarUsingPOST21) | **POST** /api/oportunidades | {{{oportunidade_resource_salvar}}}
[**salvarUsingPOST30**](GlobaltagoportunidadeApi.md#salvarUsingPOST30) | **POST** /api/tipos-oportunidades | {{{tipo_oportunidade_resource_salvar}}}


<a name="alterarStatusUsingPUT"></a>
# **alterarStatusUsingPUT**
> StatusOportunidadeResponse alterarStatusUsingPUT(id, idStatus, persist)

{{{tipo_oportunidade_resource_alterar_status}}}

{{{tipo_oportunidade_resource_alterar_status_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{tipo_oportunidade_resource_alterar_status_param_id}}}

var idStatus = 789; // {Integer} {{{tipo_oportunidade_resource_alterar_status_param_id_status}}}

var persist = new Pier.StatusOportunidadePersistValue(); // {StatusOportunidadePersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarStatusUsingPUT(id, idStatus, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_oportunidade_resource_alterar_status_param_id}}} | 
 **idStatus** | **Integer**| {{{tipo_oportunidade_resource_alterar_status_param_id_status}}} | 
 **persist** | [**StatusOportunidadePersistValue**](StatusOportunidadePersistValue.md)| persist | 

### Return type

[**StatusOportunidadeResponse**](StatusOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT12"></a>
# **alterarUsingPUT12**
> OportunidadeResponse alterarUsingPUT12(id, update)

{{{oportunidade_resource_alterar}}}

{{{oportunidade_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{oportunidade_resource_alterar_param_id}}}

var update = new Pier.OportunidadeUpdateValue(); // {OportunidadeUpdateValue} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT12(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{oportunidade_resource_alterar_param_id}}} | 
 **update** | [**OportunidadeUpdateValue**](OportunidadeUpdateValue.md)| update | 

### Return type

[**OportunidadeResponse**](OportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT20"></a>
# **alterarUsingPUT20**
> TipoOportunidadeResponse alterarUsingPUT20(id, persist)

{{{tipo_oportunidade_resource_alterar}}}

{{{tipo_oportunidade_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{tipo_oportunidade_resource_alterar_param_id}}}

var persist = new Pier.TipoOportunidadePersistValue(); // {TipoOportunidadePersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT20(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_oportunidade_resource_alterar_param_id}}} | 
 **persist** | [**TipoOportunidadePersistValue**](TipoOportunidadePersistValue.md)| persist | 

### Return type

[**TipoOportunidadeResponse**](TipoOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarStatusUsingGET"></a>
# **consultarStatusUsingGET**
> StatusOportunidadeResponse consultarStatusUsingGET(id, idStatus)

{{{tipo_oportunidade_resource_consultar_status}}}

{{{tipo_oportunidade_resource_consultar_status_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{tipo_oportunidade_resource_consultar_status_param_id}}}

var idStatus = 789; // {Integer} {{{tipo_oportunidade_resource_consultar_status_param_id_status}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarStatusUsingGET(id, idStatus, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_oportunidade_resource_consultar_status_param_id}}} | 
 **idStatus** | **Integer**| {{{tipo_oportunidade_resource_consultar_status_param_id_status}}} | 

### Return type

[**StatusOportunidadeResponse**](StatusOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET26"></a>
# **consultarUsingGET26**
> OportunidadeResponse consultarUsingGET26(id)

{{{oportunidade_resource_consultar}}}

{{{oportunidade_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{oportunidade_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET26(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{oportunidade_resource_consultar_param_id}}} | 

### Return type

[**OportunidadeResponse**](OportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET45"></a>
# **consultarUsingGET45**
> TipoOportunidadeResponse consultarUsingGET45(id)

{{{tipo_oportunidade_resource_consultar}}}

{{{tipo_oportunidade_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{tipo_oportunidade_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET45(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_oportunidade_resource_consultar_param_id}}} | 

### Return type

[**TipoOportunidadeResponse**](TipoOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarAuditoriasStatusUsingGET"></a>
# **listarAuditoriasStatusUsingGET**
> PageStatusOportunidadeAUDResponse listarAuditoriasStatusUsingGET(opts)

{{{tipo_oportunidade_resource_listar_auditorias_status}}}

{{{tipo_oportunidade_resource_listar_auditorias_status_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'revType': 789, // {Integer} {{{status_oportunidade_a_u_d_request_rev_type_value}}}
  'revDate': "revDate_example", // {String} {{{status_oportunidade_a_u_d_request_rev_date_value}}}
  'id': 789, // {Integer} {{{status_oportunidade_a_u_d_request_id_value}}}
  'idTipoOportunidade': 789, // {Integer} {{{status_oportunidade_a_u_d_request_id_tipo_oportunidade_value}}}
  'nome': "nome_example", // {String} {{{status_oportunidade_a_u_d_request_nome_value}}}
  'descricao': "descricao_example", // {String} {{{status_oportunidade_a_u_d_request_descricao_value}}}
  'flagAtivo': true, // {Boolean} {{{status_oportunidade_a_u_d_request_flag_ativo_value}}}
  'revUser': "revUser_example" // {String} {{{status_oportunidade_a_u_d_request_rev_user_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarAuditoriasStatusUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **revType** | **Integer**| {{{status_oportunidade_a_u_d_request_rev_type_value}}} | [optional] 
 **revDate** | **String**| {{{status_oportunidade_a_u_d_request_rev_date_value}}} | [optional] 
 **id** | **Integer**| {{{status_oportunidade_a_u_d_request_id_value}}} | [optional] 
 **idTipoOportunidade** | **Integer**| {{{status_oportunidade_a_u_d_request_id_tipo_oportunidade_value}}} | [optional] 
 **nome** | **String**| {{{status_oportunidade_a_u_d_request_nome_value}}} | [optional] 
 **descricao** | **String**| {{{status_oportunidade_a_u_d_request_descricao_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{status_oportunidade_a_u_d_request_flag_ativo_value}}} | [optional] 
 **revUser** | **String**| {{{status_oportunidade_a_u_d_request_rev_user_value}}} | [optional] 

### Return type

[**PageStatusOportunidadeAUDResponse**](PageStatusOportunidadeAUDResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarAuditoriasUsingGET"></a>
# **listarAuditoriasUsingGET**
> PageOportunidadeAUDResponse listarAuditoriasUsingGET(opts)

{{{oportunidade_resource_listar_auditorias}}}

{{{oportunidade_resource_listar_auditorias_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idStatusOportunidade': 789, // {Integer} {{{oportunidade_a_u_d_request_id_status_oportunidade_value}}}
  'dataCadastro': "dataCadastro_example", // {String} {{{oportunidade_a_u_d_request_data_cadastro_value}}}
  'dataAtualizacao': "dataAtualizacao_example", // {String} {{{oportunidade_a_u_d_request_data_atualizacao_value}}}
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} {{{oportunidade_a_u_d_request_numero_receita_federal_value}}}
  'dataInicioVigencia': "dataInicioVigencia_example", // {String} {{{oportunidade_a_u_d_request_data_inicio_vigencia_value}}}
  'datatFimVigencia': "datatFimVigencia_example", // {String} {{{oportunidade_a_u_d_request_datat_fim_vigencia_value}}}
  'flagAtivo': true, // {Boolean} {{{oportunidade_a_u_d_request_flag_ativo_value}}}
  'revDate': "revDate_example", // {String} {{{oportunidade_a_u_d_request_rev_date_value}}}
  'revType': "revType_example", // {String} {{{oportunidade_a_u_d_request_rev_type_value}}}
  'revUser': "revUser_example" // {String} {{{oportunidade_a_u_d_request_rev_user_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarAuditoriasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idStatusOportunidade** | **Integer**| {{{oportunidade_a_u_d_request_id_status_oportunidade_value}}} | [optional] 
 **dataCadastro** | **String**| {{{oportunidade_a_u_d_request_data_cadastro_value}}} | [optional] 
 **dataAtualizacao** | **String**| {{{oportunidade_a_u_d_request_data_atualizacao_value}}} | [optional] 
 **numeroReceitaFederal** | **String**| {{{oportunidade_a_u_d_request_numero_receita_federal_value}}} | [optional] 
 **dataInicioVigencia** | **String**| {{{oportunidade_a_u_d_request_data_inicio_vigencia_value}}} | [optional] 
 **datatFimVigencia** | **String**| {{{oportunidade_a_u_d_request_datat_fim_vigencia_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{oportunidade_a_u_d_request_flag_ativo_value}}} | [optional] 
 **revDate** | **String**| {{{oportunidade_a_u_d_request_rev_date_value}}} | [optional] 
 **revType** | **String**| {{{oportunidade_a_u_d_request_rev_type_value}}} | [optional] 
 **revUser** | **String**| {{{oportunidade_a_u_d_request_rev_user_value}}} | [optional] 

### Return type

[**PageOportunidadeAUDResponse**](PageOportunidadeAUDResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarAuditoriasUsingGET1"></a>
# **listarAuditoriasUsingGET1**
> PageTipoOportunidadeAUDResponse listarAuditoriasUsingGET1(opts)

{{{tipo_oportunidade_resource_listar_auditorias}}}

{{{tipo_oportunidade_resource_listar_auditorias_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'revType': 789, // {Integer} {{{tipo_oportunidade_a_u_d_request_rev_type_value}}}
  'revDate': "revDate_example", // {String} {{{tipo_oportunidade_a_u_d_request_rev_date_value}}}
  'id': 789, // {Integer} {{{tipo_oportunidade_a_u_d_request_id_value}}}
  'descricao': "descricao_example", // {String} {{{tipo_oportunidade_a_u_d_request_descricao_value}}}
  'flagAtivo': true, // {Boolean} {{{tipo_oportunidade_a_u_d_request_flag_ativo_value}}}
  'revUser': "revUser_example" // {String} {{{tipo_oportunidade_a_u_d_request_rev_user_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarAuditoriasUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **revType** | **Integer**| {{{tipo_oportunidade_a_u_d_request_rev_type_value}}} | [optional] 
 **revDate** | **String**| {{{tipo_oportunidade_a_u_d_request_rev_date_value}}} | [optional] 
 **id** | **Integer**| {{{tipo_oportunidade_a_u_d_request_id_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_oportunidade_a_u_d_request_descricao_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{tipo_oportunidade_a_u_d_request_flag_ativo_value}}} | [optional] 
 **revUser** | **String**| {{{tipo_oportunidade_a_u_d_request_rev_user_value}}} | [optional] 

### Return type

[**PageTipoOportunidadeAUDResponse**](PageTipoOportunidadeAUDResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarStatusUsingGET"></a>
# **listarStatusUsingGET**
> PageStatusOportunidadeResponse listarStatusUsingGET(id, opts)

{{{tipo_oportunidade_resource_listar_status}}}

{{{tipo_oportunidade_resource_listar_status_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{tipo_oportunidade_resource_listar_status_param_id}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example", // {String} {{{status_oportunidade_request_nome_value}}}
  'descricao': "descricao_example", // {String} {{{status_oportunidade_request_descricao_value}}}
  'flagAtivo': true // {Boolean} {{{status_oportunidade_request_flag_ativo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarStatusUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_oportunidade_resource_listar_status_param_id}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{status_oportunidade_request_nome_value}}} | [optional] 
 **descricao** | **String**| {{{status_oportunidade_request_descricao_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{status_oportunidade_request_flag_ativo_value}}} | [optional] 

### Return type

[**PageStatusOportunidadeResponse**](PageStatusOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET35"></a>
# **listarUsingGET35**
> PageOportunidadeResponse listarUsingGET35(opts)

{{{oportunidade_resource_listar}}}

{{{oportunidade_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idStatusOportunidade': 789, // {Integer} {{{oportunidade_request_id_status_oportunidade_value}}}
  'dataCadastro': "dataCadastro_example", // {String} {{{oportunidade_request_data_cadastro_value}}}
  'dataAtualizacao': "dataAtualizacao_example", // {String} {{{oportunidade_request_data_atualizacao_value}}}
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} {{{oportunidade_request_numero_receita_federal_value}}}
  'dataInicioVigencia': "dataInicioVigencia_example", // {String} {{{oportunidade_request_data_inicio_vigencia_value}}}
  'dataFimVigencia': "dataFimVigencia_example", // {String} {{{oportunidade_request_data_fim_vigencia_value}}}
  'flagAtivo': true // {Boolean} {{{oportunidade_request_flag_ativo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET35(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idStatusOportunidade** | **Integer**| {{{oportunidade_request_id_status_oportunidade_value}}} | [optional] 
 **dataCadastro** | **String**| {{{oportunidade_request_data_cadastro_value}}} | [optional] 
 **dataAtualizacao** | **String**| {{{oportunidade_request_data_atualizacao_value}}} | [optional] 
 **numeroReceitaFederal** | **String**| {{{oportunidade_request_numero_receita_federal_value}}} | [optional] 
 **dataInicioVigencia** | **String**| {{{oportunidade_request_data_inicio_vigencia_value}}} | [optional] 
 **dataFimVigencia** | **String**| {{{oportunidade_request_data_fim_vigencia_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{oportunidade_request_flag_ativo_value}}} | [optional] 

### Return type

[**PageOportunidadeResponse**](PageOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET55"></a>
# **listarUsingGET55**
> PageTipoOportunidadeResponse listarUsingGET55(opts)

{{{tipo_oportunidade_resource_listar}}}

{{{tipo_oportunidade_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'descricao': "descricao_example", // {String} {{{tipo_oportunidade_request_descricao_value}}}
  'flagAtivo': true // {Boolean} {{{tipo_oportunidade_request_flag_ativo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET55(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **descricao** | **String**| {{{tipo_oportunidade_request_descricao_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{tipo_oportunidade_request_flag_ativo_value}}} | [optional] 

### Return type

[**PageTipoOportunidadeResponse**](PageTipoOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarStatusUsingPOST"></a>
# **salvarStatusUsingPOST**
> StatusOportunidadeResponse salvarStatusUsingPOST(id, persist)

{{{tipo_oportunidade_resource_salvar_status}}}

{{{tipo_oportunidade_resource_salvar_status_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var id = 789; // {Integer} {{{tipo_oportunidade_resource_salvar_status_param_id}}}

var persist = new Pier.StatusOportunidadePersistValue(); // {StatusOportunidadePersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarStatusUsingPOST(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_oportunidade_resource_salvar_status_param_id}}} | 
 **persist** | [**StatusOportunidadePersistValue**](StatusOportunidadePersistValue.md)| persist | 

### Return type

[**StatusOportunidadeResponse**](StatusOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST21"></a>
# **salvarUsingPOST21**
> OportunidadeResponse salvarUsingPOST21(persist)

{{{oportunidade_resource_salvar}}}

{{{oportunidade_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var persist = new Pier.OportunidadePersistValue(); // {OportunidadePersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST21(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**OportunidadePersistValue**](OportunidadePersistValue.md)| persist | 

### Return type

[**OportunidadeResponse**](OportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST30"></a>
# **salvarUsingPOST30**
> TipoOportunidadeResponse salvarUsingPOST30(persist)

{{{tipo_oportunidade_resource_salvar}}}

{{{tipo_oportunidade_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagoportunidadeApi()

var persist = new Pier.TipoOportunidadePersistValue(); // {TipoOportunidadePersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST30(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**TipoOportunidadePersistValue**](TipoOportunidadePersistValue.md)| persist | 

### Return type

[**TipoOportunidadeResponse**](TipoOportunidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

