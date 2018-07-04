# Pier.GlobaltagstatusparametroApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarEstagioCartaoUsingGET**](GlobaltagstatusparametroApi.md#consultarEstagioCartaoUsingGET) | **GET** /api/estagios-cartoes/{id} | {{{estagio_cartao_resource_consultar_estagio_cartao}}}
[**consultarStatusCartaoUsingGET**](GlobaltagstatusparametroApi.md#consultarStatusCartaoUsingGET) | **GET** /api/status-cartoes/{id} | {{{status_cartao_resource_consultar_status_cartao}}}
[**consultarUsingGET35**](GlobaltagstatusparametroApi.md#consultarUsingGET35) | **GET** /api/status-contas/{id} | {{{status_conta_resource_consultar}}}
[**consultarUsingGET36**](GlobaltagstatusparametroApi.md#consultarUsingGET36) | **GET** /api/status-impressoes/{id} | {{{status_impressao_resource_consultar}}}
[**listarEstagiosCartoesUsingGET**](GlobaltagstatusparametroApi.md#listarEstagiosCartoesUsingGET) | **GET** /api/estagios-cartoes | {{{estagio_cartao_resource_listar_estagios_cartoes}}}
[**listarStatusCartoesUsingGET**](GlobaltagstatusparametroApi.md#listarStatusCartoesUsingGET) | **GET** /api/status-cartoes | {{{status_cartao_resource_listar_status_cartoes}}}
[**listarTiposEventosTransacoesUsingGET**](GlobaltagstatusparametroApi.md#listarTiposEventosTransacoesUsingGET) | **GET** /api/tipos-eventos-transacoes | {{{enum_resource_listar_tipos_eventos_transacoes}}}
[**listarUsingGET47**](GlobaltagstatusparametroApi.md#listarUsingGET47) | **GET** /api/status-contas | {{{status_conta_resource_listar}}}
[**listarUsingGET48**](GlobaltagstatusparametroApi.md#listarUsingGET48) | **GET** /api/status-impressoes | {{{status_impressao_resource_listar}}}


<a name="consultarEstagioCartaoUsingGET"></a>
# **consultarEstagioCartaoUsingGET**
> EstagioCartaoResponse consultarEstagioCartaoUsingGET(id)

{{{estagio_cartao_resource_consultar_estagio_cartao}}}

{{{estagio_cartao_resource_consultar_estagio_cartao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var id = 789; // {Integer} {{{estagio_cartao_resource_consultar_estagio_cartao_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarEstagioCartaoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{estagio_cartao_resource_consultar_estagio_cartao_param_id}}} | 

### Return type

[**EstagioCartaoResponse**](EstagioCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarStatusCartaoUsingGET"></a>
# **consultarStatusCartaoUsingGET**
> StatusCartaoResponse consultarStatusCartaoUsingGET(id)

{{{status_cartao_resource_consultar_status_cartao}}}

{{{status_cartao_resource_consultar_status_cartao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var id = 789; // {Integer} {{{status_cartao_resource_consultar_status_cartao_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarStatusCartaoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{status_cartao_resource_consultar_status_cartao_param_id}}} | 

### Return type

[**StatusCartaoResponse**](StatusCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET35"></a>
# **consultarUsingGET35**
> StatusContaResponse consultarUsingGET35(id)

{{{status_conta_resource_consultar}}}

{{{status_conta_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var id = 789; // {Integer} {{{status_conta_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET35(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{status_conta_resource_consultar_param_id}}} | 

### Return type

[**StatusContaResponse**](StatusContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET36"></a>
# **consultarUsingGET36**
> StatusImpressaoResponse consultarUsingGET36(id)

{{{status_impressao_resource_consultar}}}

{{{status_impressao_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var id = 789; // {Integer} {{{status_impressao_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET36(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{status_impressao_resource_consultar_param_id}}} | 

### Return type

[**StatusImpressaoResponse**](StatusImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarEstagiosCartoesUsingGET"></a>
# **listarEstagiosCartoesUsingGET**
> PageEstagioCartaoResponse listarEstagiosCartoesUsingGET(opts)

{{{estagio_cartao_resource_listar_estagios_cartoes}}}

{{{estagio_cartao_resource_listar_estagios_cartoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{estagio_cartao_request_id_value}}}
  'nome': "nome_example" // {String} {{{estagio_cartao_request_nome_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarEstagiosCartoesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{estagio_cartao_request_id_value}}} | [optional] 
 **nome** | **String**| {{{estagio_cartao_request_nome_value}}} | [optional] 

### Return type

[**PageEstagioCartaoResponse**](PageEstagioCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarStatusCartoesUsingGET"></a>
# **listarStatusCartoesUsingGET**
> PageStatusCartaoResponse listarStatusCartoesUsingGET(opts)

{{{status_cartao_resource_listar_status_cartoes}}}

{{{status_cartao_resource_listar_status_cartoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{status_cartao_request_id_value}}}
  'nome': "nome_example", // {String} {{{status_cartao_request_nome_value}}}
  'permiteDesbloquear': 56, // {Integer} {{{status_cartao_request_permite_desbloquear_value}}}
  'permiteAtribuirComoBloqueio': 56, // {Integer} {{{status_cartao_request_permite_atribuir_como_bloqueio_value}}}
  'permiteAtribuirComoCancelamento': 56, // {Integer} {{{status_cartao_request_permite_atribuir_como_cancelamento_value}}}
  'cobrarTarifaAoEmitirNovaVia': 56 // {Integer} {{{status_cartao_request_cobrar_tarifa_ao_emitir_nova_via_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarStatusCartoesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{status_cartao_request_id_value}}} | [optional] 
 **nome** | **String**| {{{status_cartao_request_nome_value}}} | [optional] 
 **permiteDesbloquear** | **Integer**| {{{status_cartao_request_permite_desbloquear_value}}} | [optional] 
 **permiteAtribuirComoBloqueio** | **Integer**| {{{status_cartao_request_permite_atribuir_como_bloqueio_value}}} | [optional] 
 **permiteAtribuirComoCancelamento** | **Integer**| {{{status_cartao_request_permite_atribuir_como_cancelamento_value}}} | [optional] 
 **cobrarTarifaAoEmitirNovaVia** | **Integer**| {{{status_cartao_request_cobrar_tarifa_ao_emitir_nova_via_value}}} | [optional] 

### Return type

[**PageStatusCartaoResponse**](PageStatusCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposEventosTransacoesUsingGET"></a>
# **listarTiposEventosTransacoesUsingGET**
> [Object] listarTiposEventosTransacoesUsingGET

{{{enum_resource_listar_tipos_eventos_transacoes}}}

{{{enum_resource_listar_tipos_eventos_transacoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposEventosTransacoesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET47"></a>
# **listarUsingGET47**
> PageStatusContaResponse listarUsingGET47(opts)

{{{status_conta_resource_listar}}}

{{{status_conta_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{status_conta_request_id_value}}}
  'nome': "nome_example", // {String} {{{status_conta_request_nome_value}}}
  'permiteAlterarVencimento': 56, // {Integer} {{{status_conta_request_permite_alterar_vencimento_value}}}
  'permiteAlterarLimite': 56, // {Integer} {{{status_conta_request_permite_alterar_limite_value}}}
  'permiteEmitirNovaViaCartao': 56, // {Integer} {{{status_conta_request_permite_emitir_nova_via_cartao_value}}}
  'permiteFazerTransferencia': 56, // {Integer} {{{status_conta_request_permite_fazer_transferencia_value}}}
  'permiteReceberTransferencia': 56, // {Integer} {{{status_conta_request_permite_receber_transferencia_value}}}
  'permiteCriarAcordoCobranca': 56, // {Integer} {{{status_conta_request_permite_criar_acordo_cobranca_value}}}
  'permiteAtribuirComoBloqueio': 56, // {Integer} {{{status_conta_request_permite_atribuir_como_bloqueio_value}}}
  'permiteDesbloquear': 56, // {Integer} {{{status_conta_request_permite_desbloquear_value}}}
  'permiteAtribuirComoCancelamento': 56 // {Integer} {{{status_conta_request_permite_atribuir_como_cancelamento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET47(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{status_conta_request_id_value}}} | [optional] 
 **nome** | **String**| {{{status_conta_request_nome_value}}} | [optional] 
 **permiteAlterarVencimento** | **Integer**| {{{status_conta_request_permite_alterar_vencimento_value}}} | [optional] 
 **permiteAlterarLimite** | **Integer**| {{{status_conta_request_permite_alterar_limite_value}}} | [optional] 
 **permiteEmitirNovaViaCartao** | **Integer**| {{{status_conta_request_permite_emitir_nova_via_cartao_value}}} | [optional] 
 **permiteFazerTransferencia** | **Integer**| {{{status_conta_request_permite_fazer_transferencia_value}}} | [optional] 
 **permiteReceberTransferencia** | **Integer**| {{{status_conta_request_permite_receber_transferencia_value}}} | [optional] 
 **permiteCriarAcordoCobranca** | **Integer**| {{{status_conta_request_permite_criar_acordo_cobranca_value}}} | [optional] 
 **permiteAtribuirComoBloqueio** | **Integer**| {{{status_conta_request_permite_atribuir_como_bloqueio_value}}} | [optional] 
 **permiteDesbloquear** | **Integer**| {{{status_conta_request_permite_desbloquear_value}}} | [optional] 
 **permiteAtribuirComoCancelamento** | **Integer**| {{{status_conta_request_permite_atribuir_como_cancelamento_value}}} | [optional] 

### Return type

[**PageStatusContaResponse**](PageStatusContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET48"></a>
# **listarUsingGET48**
> PageStatusImpressaoResponse listarUsingGET48(opts)

{{{status_impressao_resource_listar}}}

{{{status_impressao_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagstatusparametroApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{status_impressao_request_id_value}}}
  'nome': "nome_example" // {String} {{{status_impressao_request_nome_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET48(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{status_impressao_request_id_value}}} | [optional] 
 **nome** | **String**| {{{status_impressao_request_nome_value}}} | [optional] 

### Return type

[**PageStatusImpressaoResponse**](PageStatusImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

