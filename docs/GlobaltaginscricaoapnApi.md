# Pier.GlobaltaginscricaoapnApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**desativarUsingPUT**](GlobaltaginscricaoapnApi.md#desativarUsingPUT) | **PUT** /api/inscricoes-apn/{id}/desativar | {{{inscricao_apn_recurso_desativar}}}
[**listarUsingGET31**](GlobaltaginscricaoapnApi.md#listarUsingGET31) | **GET** /api/inscricoes-apn | {{{inscricao_apn_recurso_listar}}}
[**salvarUsingPOST15**](GlobaltaginscricaoapnApi.md#salvarUsingPOST15) | **POST** /api/inscricoes-apn | {{{inscricao_apn_recurso_salvar}}}


<a name="desativarUsingPUT"></a>
# **desativarUsingPUT**
> InscricaoAPNResponse desativarUsingPUT(id)

{{{inscricao_apn_recurso_desativar}}}

{{{inscricao_apn_recurso_desativar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaginscricaoapnApi()

var id = 789; // {Integer} id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarUsingPUT(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 

### Return type

[**InscricaoAPNResponse**](InscricaoAPNResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET31"></a>
# **listarUsingGET31**
> PageInscricaoAPNResponse listarUsingGET31(opts)

{{{inscricao_apn_recurso_listar}}}

{{{inscricao_apn_recurso_listar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaginscricaoapnApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'idCartoes': [56], // {[Integer]} {{{inscricao_apn_requisicao_id_cartoes_descricao}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'deviceToken': "deviceToken_example", // {String} {{{inscricao_apn_requisicao_device_token_descricao}}}
  'dataCriacao': "dataCriacao_example", // {String} {{{inscricao_apn_requisicao_data_criacao_descricao}}}
  'dataDesativacao': "dataDesativacao_example", // {String} {{{inscricao_apn_requisicao_data_desativacao_descricao}}}
  'ativo': true, // {Boolean} {{{inscricao_apn_requisicao_ativo_descricao}}}
  'idAplicacaoMobile': 789 // {Integer} {{{inscricao_apn_requisicao_id_aplicacao_mobile_descricao}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **idCartoes** | [**[Integer]**](Integer.md)| {{{inscricao_apn_requisicao_id_cartoes_descricao}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **deviceToken** | **String**| {{{inscricao_apn_requisicao_device_token_descricao}}} | [optional] 
 **dataCriacao** | **String**| {{{inscricao_apn_requisicao_data_criacao_descricao}}} | [optional] 
 **dataDesativacao** | **String**| {{{inscricao_apn_requisicao_data_desativacao_descricao}}} | [optional] 
 **ativo** | **Boolean**| {{{inscricao_apn_requisicao_ativo_descricao}}} | [optional] 
 **idAplicacaoMobile** | **Integer**| {{{inscricao_apn_requisicao_id_aplicacao_mobile_descricao}}} | [optional] 

### Return type

[**PageInscricaoAPNResponse**](PageInscricaoAPNResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST15"></a>
# **salvarUsingPOST15**
> [InscricaoAPNResponse] salvarUsingPOST15(inscricaoPersist)

{{{inscricao_apn_recurso_salvar}}}

{{{inscricao_apn_recurso_salvar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaginscricaoapnApi()

var inscricaoPersist = new Pier.InscricaoApnPersistencia(); // {InscricaoApnPersistencia} inscricaoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST15(inscricaoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inscricaoPersist** | [**InscricaoApnPersistencia**](InscricaoApnPersistencia.md)| inscricaoPersist | 

### Return type

[**[InscricaoAPNResponse]**](InscricaoAPNResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

