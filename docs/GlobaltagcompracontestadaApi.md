# Pier.GlobaltagcompracontestadaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contestarUsingPOST**](GlobaltagcompracontestadaApi.md#contestarUsingPOST) | **POST** /api/cartoes-com-contestacoes/{idCartao}/contestar | {{{compra_contestada_transacoes_resource_contestar}}}
[**detalheCartaoUsingGET**](GlobaltagcompracontestadaApi.md#detalheCartaoUsingGET) | **GET** /api/cartoes-com-contestacoes/{idCartao} | {{{compra_contestada_detalhe_cartao_resource_listar}}}
[**listarUsingGET13**](GlobaltagcompracontestadaApi.md#listarUsingGET13) | **GET** /api/cartoes-com-contestacoes | {{{cartao_com_compra_contestada_resource_listar}}}
[**transacaoUsingGET**](GlobaltagcompracontestadaApi.md#transacaoUsingGET) | **GET** /api/cartoes-com-contestacoes/{idCartao}/transacoes | {{{compra_contestada_transacoes_resource_listar}}}


<a name="contestarUsingPOST"></a>
# **contestarUsingPOST**
> Object contestarUsingPOST(idCartao, request, opts)

{{{compra_contestada_transacoes_resource_contestar}}}

{{{compra_contestada_transacoes_resource_contestar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcompracontestadaApi()

var idCartao = 789; // {Integer} idCartao

var request = new Pier.ContestarCompraRequest(); // {ContestarCompraRequest} request

var opts = { 
  'login': "login_example" // {String} login
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.contestarUsingPOST(idCartao, request, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| idCartao | 
 **request** | [**ContestarCompraRequest**](ContestarCompraRequest.md)| request | 
 **login** | **String**| login | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="detalheCartaoUsingGET"></a>
# **detalheCartaoUsingGET**
> PageGrupoChargebackResponse detalheCartaoUsingGET(idCartao)

{{{compra_contestada_detalhe_cartao_resource_listar}}}

{{{compra_contestada_detalhe_cartao_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcompracontestadaApi()

var idCartao = 789; // {Integer} idCartao


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.detalheCartaoUsingGET(idCartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| idCartao | 

### Return type

[**PageGrupoChargebackResponse**](PageGrupoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET13"></a>
# **listarUsingGET13**
> PageGrupoChargebackResponse listarUsingGET13(opts)

{{{cartao_com_compra_contestada_resource_listar}}}

{{{cartao_com_compra_contestada_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcompracontestadaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'agingContestacao': 789, // {Integer} 
  'nome': "nome_example", // {String} 
  'bandeira': "bandeira_example", // {String} 
  'cartao': "cartao_example", // {String} 
  'cpf': "cpf_example", // {String} 
  'conta': "conta_example", // {String} 
  'statusCartao': 789, // {Integer} 
  'statusContestacao': 789, // {Integer} 
  'dataContestacao': "dataContestacao_example", // {String} 
  'dataAlteracao': "dataAlteracao_example", // {String} 
  'dataReapresentacao': "dataReapresentacao_example", // {String} 
  'diasContestacao': 789, // {Integer} 
  'diasCompra': 789, // {Integer} 
  'modoEntrada': "modoEntrada_example", // {String} 
  'motivo': "motivo_example", // {String} 
  'valorCompra': 3.4 // {Number} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET13(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **agingContestacao** | **Integer**|  | [optional] 
 **nome** | **String**|  | [optional] 
 **bandeira** | **String**|  | [optional] 
 **cartao** | **String**|  | [optional] 
 **cpf** | **String**|  | [optional] 
 **conta** | **String**|  | [optional] 
 **statusCartao** | **Integer**|  | [optional] 
 **statusContestacao** | **Integer**|  | [optional] 
 **dataContestacao** | **String**|  | [optional] 
 **dataAlteracao** | **String**|  | [optional] 
 **dataReapresentacao** | **String**|  | [optional] 
 **diasContestacao** | **Integer**|  | [optional] 
 **diasCompra** | **Integer**|  | [optional] 
 **modoEntrada** | **String**|  | [optional] 
 **motivo** | **String**|  | [optional] 
 **valorCompra** | [**Number**](.md)|  | [optional] 

### Return type

[**PageGrupoChargebackResponse**](PageGrupoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transacaoUsingGET"></a>
# **transacaoUsingGET**
> PageGrupoChargebackResponse transacaoUsingGET(idCartao, opts)

{{{compra_contestada_transacoes_resource_listar}}}

{{{compra_contestada_transacoes_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcompracontestadaApi()

var idCartao = 789; // {Integer} idCartao

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'agingContestacao': 789, // {Integer} 
  'nome': "nome_example", // {String} 
  'bandeira': "bandeira_example", // {String} 
  'cartao': "cartao_example", // {String} 
  'cpf': "cpf_example", // {String} 
  'conta': "conta_example", // {String} 
  'statusCartao': 789, // {Integer} 
  'statusContestacao': 789, // {Integer} 
  'dataContestacao': "dataContestacao_example", // {String} 
  'dataAlteracao': "dataAlteracao_example", // {String} 
  'dataReapresentacao': "dataReapresentacao_example", // {String} 
  'diasContestacao': 789, // {Integer} 
  'diasCompra': 789, // {Integer} 
  'modoEntrada': "modoEntrada_example", // {String} 
  'motivo': "motivo_example", // {String} 
  'valorCompra': 3.4 // {Number} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transacaoUsingGET(idCartao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| idCartao | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **agingContestacao** | **Integer**|  | [optional] 
 **nome** | **String**|  | [optional] 
 **bandeira** | **String**|  | [optional] 
 **cartao** | **String**|  | [optional] 
 **cpf** | **String**|  | [optional] 
 **conta** | **String**|  | [optional] 
 **statusCartao** | **Integer**|  | [optional] 
 **statusContestacao** | **Integer**|  | [optional] 
 **dataContestacao** | **String**|  | [optional] 
 **dataAlteracao** | **String**|  | [optional] 
 **dataReapresentacao** | **String**|  | [optional] 
 **diasContestacao** | **Integer**|  | [optional] 
 **diasCompra** | **Integer**|  | [optional] 
 **modoEntrada** | **String**|  | [optional] 
 **motivo** | **String**|  | [optional] 
 **valorCompra** | [**Number**](.md)|  | [optional] 

### Return type

[**PageGrupoChargebackResponse**](PageGrupoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

