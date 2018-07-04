# Pier.GlobaltagantecipacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurarTaxaAntecipacaoUsingPOST**](GlobaltagantecipacaoApi.md#configurarTaxaAntecipacaoUsingPOST) | **POST** /api/produtos/{id}/configurar-taxa-antecipacao | {{{produto_resource_configurar_taxa_antecipacao}}}
[**consultarTaxaAntecipacaoUsingGET**](GlobaltagantecipacaoApi.md#consultarTaxaAntecipacaoUsingGET) | **GET** /api/produtos/{id}/consultar-taxa-antecipacao | {{{produto_resource_consultar_taxa_antecipacao}}}
[**efetivarAntecipacaoUsingPOST**](GlobaltagantecipacaoApi.md#efetivarAntecipacaoUsingPOST) | **POST** /api/compras-antecipaveis/{id}/efetivar-antecipacao | {{{compra_antecipavel_resource_efetivar_antecipacao}}}
[**efetivarAntecipacoesUsingPOST**](GlobaltagantecipacaoApi.md#efetivarAntecipacoesUsingPOST) | **POST** /api/compras-antecipaveis/efetivar-antecipacao | {{{compra_antecipavel_resource_efetivar_antecipacoes}}}
[**listarUsingGET13**](GlobaltagantecipacaoApi.md#listarUsingGET13) | **GET** /api/compras-antecipaveis | {{{compra_antecipavel_resource_listar}}}
[**simularAntecipacaoUsingGET**](GlobaltagantecipacaoApi.md#simularAntecipacaoUsingGET) | **GET** /api/compras-antecipaveis/{id}/simular-antecipacao | {{{compra_antecipavel_resource_simular_antecipacao}}}
[**simularAntecipacoesUsingGET**](GlobaltagantecipacaoApi.md#simularAntecipacoesUsingGET) | **GET** /api/compras-antecipaveis/simular-antecipacao | {{{compra_antecipavel_resource_simular_antecipacoes}}}


<a name="configurarTaxaAntecipacaoUsingPOST"></a>
# **configurarTaxaAntecipacaoUsingPOST**
> ParametroProdutoResponse configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest)

{{{produto_resource_configurar_taxa_antecipacao}}}

{{{produto_resource_configurar_taxa_antecipacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagantecipacaoApi()

var id = 789; // {Integer} {{{produto_resource_configurar_taxa_antecipacao_param_id}}}

var taxaAntecipacaoRequest = new Pier.TaxaAntecipacaoRequest(); // {TaxaAntecipacaoRequest} taxaAntecipacaoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{produto_resource_configurar_taxa_antecipacao_param_id}}} | 
 **taxaAntecipacaoRequest** | [**TaxaAntecipacaoRequest**](TaxaAntecipacaoRequest.md)| taxaAntecipacaoRequest | 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTaxaAntecipacaoUsingGET"></a>
# **consultarTaxaAntecipacaoUsingGET**
> ParametroProdutoResponse consultarTaxaAntecipacaoUsingGET(id, tipoTransacao)

{{{produto_resource_consultar_taxa_antecipacao}}}

{{{produto_resource_consultar_taxa_antecipacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagantecipacaoApi()

var id = 789; // {Integer} {{{produto_resource_consultar_taxa_antecipacao_param_id}}}

var tipoTransacao = "tipoTransacao_example"; // {String} {{{produto_resource_consultar_taxa_antecipacao_param_tipo_transacao}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTaxaAntecipacaoUsingGET(id, tipoTransacao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{produto_resource_consultar_taxa_antecipacao_param_id}}} | 
 **tipoTransacao** | **String**| {{{produto_resource_consultar_taxa_antecipacao_param_tipo_transacao}}} | 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="efetivarAntecipacaoUsingPOST"></a>
# **efetivarAntecipacaoUsingPOST**
> AntecipacaoResponse efetivarAntecipacaoUsingPOST(idConta, id, quantidadeParcelas, opts)

{{{compra_antecipavel_resource_efetivar_antecipacao}}}

{{{compra_antecipavel_resource_efetivar_antecipacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagantecipacaoApi()

var idConta = 789; // {Integer} {{{compra_antecipavel_resource_efetivar_antecipacao_param_id_conta}}}

var id = 789; // {Integer} {{{compra_antecipavel_resource_efetivar_antecipacao_param_id_compra}}}

var quantidadeParcelas = 789; // {Integer} {{{compra_antecipavel_resource_efetivar_antecipacao_param_quantidade_parcelas}}}

var opts = { 
  'complemento': "complemento_example" // {String} {{{compra_antecipavel_resource_efetivar_antecipacao_param_complemento}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.efetivarAntecipacaoUsingPOST(idConta, id, quantidadeParcelas, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{compra_antecipavel_resource_efetivar_antecipacao_param_id_conta}}} | 
 **id** | **Integer**| {{{compra_antecipavel_resource_efetivar_antecipacao_param_id_compra}}} | 
 **quantidadeParcelas** | **Integer**| {{{compra_antecipavel_resource_efetivar_antecipacao_param_quantidade_parcelas}}} | 
 **complemento** | **String**| {{{compra_antecipavel_resource_efetivar_antecipacao_param_complemento}}} | [optional] 

### Return type

[**AntecipacaoResponse**](AntecipacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="efetivarAntecipacoesUsingPOST"></a>
# **efetivarAntecipacoesUsingPOST**
> AntecipacaoResponse efetivarAntecipacoesUsingPOST(idConta, opts)

{{{compra_antecipavel_resource_efetivar_antecipacoes}}}

{{{compra_antecipavel_resource_efetivar_antecipacoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagantecipacaoApi()

var idConta = 789; // {Integer} {{{compra_antecipavel_resource_efetivar_antecipacoes_param_id_conta}}}

var opts = { 
  'complemento': "complemento_example" // {String} {{{compra_antecipavel_resource_efetivar_antecipacoes_param_complemento}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.efetivarAntecipacoesUsingPOST(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{compra_antecipavel_resource_efetivar_antecipacoes_param_id_conta}}} | 
 **complemento** | **String**| {{{compra_antecipavel_resource_efetivar_antecipacoes_param_complemento}}} | [optional] 

### Return type

[**AntecipacaoResponse**](AntecipacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET13"></a>
# **listarUsingGET13**
> PageCompraResponse listarUsingGET13(idConta, opts)

{{{compra_antecipavel_resource_listar}}}

{{{compra_antecipavel_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagantecipacaoApi()

var idConta = 789; // {Integer} {{{compra_d_t_o_id_conta_value}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idCompra': 789, // {Integer} {{{compra_d_t_o_id_compra_value}}}
  'parcelada': true, // {Boolean} {{{compra_d_t_o_parcelada_value}}}
  'juros': true, // {Boolean} {{{compra_d_t_o_juros_value}}}
  'tipoOrigemTransacao': "tipoOrigemTransacao_example" // {String} {{{compra_d_t_o_tipo_origem_transacao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET13(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{compra_d_t_o_id_conta_value}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idCompra** | **Integer**| {{{compra_d_t_o_id_compra_value}}} | [optional] 
 **parcelada** | **Boolean**| {{{compra_d_t_o_parcelada_value}}} | [optional] 
 **juros** | **Boolean**| {{{compra_d_t_o_juros_value}}} | [optional] 
 **tipoOrigemTransacao** | **String**| {{{compra_d_t_o_tipo_origem_transacao_value}}} | [optional] 

### Return type

[**PageCompraResponse**](PageCompraResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularAntecipacaoUsingGET"></a>
# **simularAntecipacaoUsingGET**
> AntecipacaoSimuladaResponse simularAntecipacaoUsingGET(idConta, id, opts)

{{{compra_antecipavel_resource_simular_antecipacao}}}

{{{compra_antecipavel_resource_simular_antecipacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagantecipacaoApi()

var idConta = 789; // {Integer} {{{compra_antecipavel_resource_simular_antecipacao_param_id_conta}}}

var id = 789; // {Integer} {{{compra_antecipavel_resource_simular_antecipacao_param_id_evento}}}

var opts = { 
  'complemento': "complemento_example" // {String} {{{compra_antecipavel_resource_simular_antecipacao_param_complemento}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularAntecipacaoUsingGET(idConta, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{compra_antecipavel_resource_simular_antecipacao_param_id_conta}}} | 
 **id** | **Integer**| {{{compra_antecipavel_resource_simular_antecipacao_param_id_evento}}} | 
 **complemento** | **String**| {{{compra_antecipavel_resource_simular_antecipacao_param_complemento}}} | [optional] 

### Return type

[**AntecipacaoSimuladaResponse**](AntecipacaoSimuladaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularAntecipacoesUsingGET"></a>
# **simularAntecipacoesUsingGET**
> AntecipacaoSimuladaLoteResponse simularAntecipacoesUsingGET(idConta, opts)

{{{compra_antecipavel_resource_simular_antecipacoes}}}

{{{compra_antecipavel_resource_simular_antecipacoes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagantecipacaoApi()

var idConta = 789; // {Integer} {{{compra_antecipavel_resource_simular_antecipacoes_param_id_conta}}}

var opts = { 
  'complemento': "complemento_example" // {String} {{{compra_antecipavel_resource_simular_antecipacoes_param_complemento}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularAntecipacoesUsingGET(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{compra_antecipavel_resource_simular_antecipacoes_param_id_conta}}} | 
 **complemento** | **String**| {{{compra_antecipavel_resource_simular_antecipacoes_param_complemento}}} | [optional] 

### Return type

[**AntecipacaoSimuladaLoteResponse**](AntecipacaoSimuladaLoteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

