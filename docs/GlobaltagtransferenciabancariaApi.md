# Pier.GlobaltagtransferenciabancariaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarTaxasJurosContasUsingPUT**](GlobaltagtransferenciabancariaApi.md#atualizarTaxasJurosContasUsingPUT) | **PUT** /api/contas/{id}/taxas-transferencias | {{{transferencia_bancaria_resource_atualizar_taxas_juros_contas}}}
[**atualizarUsingPUT2**](GlobaltagtransferenciabancariaApi.md#atualizarUsingPUT2) | **PUT** /api/contas-bancarias-portador/{id} | {{{conta_bancaria_resource_atualizar}}}
[**cancelarTransferenciaCreditoContaBancariaUsingPOST**](GlobaltagtransferenciabancariaApi.md#cancelarTransferenciaCreditoContaBancariaUsingPOST) | **POST** /api/transferencias-creditos-contas-bancarias/{idTransferencia}/cancelar | {{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria}}}
[**confirmarTransferenciaCreditoContaBancariaUsingPOST**](GlobaltagtransferenciabancariaApi.md#confirmarTransferenciaCreditoContaBancariaUsingPOST) | **POST** /api/transferencias-creditos-contas-bancarias/{idTransferencia}/confirmar | {{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria}}}
[**consultarTaxasJurosContasUsingGET**](GlobaltagtransferenciabancariaApi.md#consultarTaxasJurosContasUsingGET) | **GET** /api/contas/{id}/taxas-transferencias | {{{transferencia_bancaria_resource_consultar_taxas_juros_contas}}}
[**consultarTransferenciaBancariaUsingGET**](GlobaltagtransferenciabancariaApi.md#consultarTransferenciaBancariaUsingGET) | **GET** /api/transferencias-creditos-contas-bancarias/{idTransferencia} | {{{transferencia_bancaria_resource_consultar_transferencia_bancaria}}}
[**consultarUsingGET15**](GlobaltagtransferenciabancariaApi.md#consultarUsingGET15) | **GET** /api/contas-bancarias-portador/{id} | {{{conta_bancaria_resource_consultar}}}
[**consultarUsingGET50**](GlobaltagtransferenciabancariaApi.md#consultarUsingGET50) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias/{id_transferencia} | {{{transferencia_bancaria_resource_consultar}}}
[**listarTransferenciaBancariaUsingGET**](GlobaltagtransferenciabancariaApi.md#listarTransferenciaBancariaUsingGET) | **GET** /api/transferencias-creditos-contas-bancarias | {{{transferencia_bancaria_resource_listar_transferencia_bancaria}}}
[**listarUsingGET17**](GlobaltagtransferenciabancariaApi.md#listarUsingGET17) | **GET** /api/contas-bancarias-portador | {{{conta_bancaria_resource_listar}}}
[**listarUsingGET62**](GlobaltagtransferenciabancariaApi.md#listarUsingGET62) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias | {{{transferencia_bancaria_resource_listar}}}
[**salvarTaxasJurosContasUsingPOST**](GlobaltagtransferenciabancariaApi.md#salvarTaxasJurosContasUsingPOST) | **POST** /api/contas/{id}/taxas-transferencias | {{{transferencia_bancaria_resource_salvar_taxas_juros_contas}}}
[**salvarUsingPOST8**](GlobaltagtransferenciabancariaApi.md#salvarUsingPOST8) | **POST** /api/contas-bancarias-portador | {{{conta_bancaria_resource_salvar}}}
[**simularTransferenciaBancariaUsingPOST**](GlobaltagtransferenciabancariaApi.md#simularTransferenciaBancariaUsingPOST) | **POST** /api/simular-transferencias-creditos-contas-bancarias | {{{transferencia_bancaria_resource_simular_transferencia_bancaria}}}
[**transferenciaCreditoContaBancariaUsingPOST**](GlobaltagtransferenciabancariaApi.md#transferenciaCreditoContaBancariaUsingPOST) | **POST** /api/transferencias-creditos-contas-bancarias | {{{transferencia_bancaria_resource_transferencia_credito_conta_bancaria}}}
[**transferirUsingPOST**](GlobaltagtransferenciabancariaApi.md#transferirUsingPOST) | **POST** /api/contas/{id}/transferencias-creditos-contas-bancarias | {{{transferencia_bancaria_resource_transferir}}}


<a name="atualizarTaxasJurosContasUsingPUT"></a>
# **atualizarTaxasJurosContasUsingPUT**
> TaxaJurosContaResponse atualizarTaxasJurosContasUsingPUT(id, update)

{{{transferencia_bancaria_resource_atualizar_taxas_juros_contas}}}

{{{transferencia_bancaria_resource_atualizar_taxas_juros_contas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{transferencia_bancaria_resource_salvar_taxas_juros_contas_param_id}}}

var update = new Pier.TaxaJurosContaPersistValue(); // {TaxaJurosContaPersistValue} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarTaxasJurosContasUsingPUT(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_bancaria_resource_salvar_taxas_juros_contas_param_id}}} | 
 **update** | [**TaxaJurosContaPersistValue**](TaxaJurosContaPersistValue.md)| update | 

### Return type

[**TaxaJurosContaResponse**](TaxaJurosContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT2"></a>
# **atualizarUsingPUT2**
> ContaBancariaPortadorResponse atualizarUsingPUT2(id, update)

{{{conta_bancaria_resource_atualizar}}}

{{{conta_bancaria_resource_atualizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{conta_bancaria_resource_atualizar_param_id}}}

var update = new Pier.ContaBancariaPortadorUpdateValue(); // {ContaBancariaPortadorUpdateValue} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT2(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_bancaria_resource_atualizar_param_id}}} | 
 **update** | [**ContaBancariaPortadorUpdateValue**](ContaBancariaPortadorUpdateValue.md)| update | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarTransferenciaCreditoContaBancariaUsingPOST"></a>
# **cancelarTransferenciaCreditoContaBancariaUsingPOST**
> &#39;String&#39; cancelarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia)

{{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria}}}

{{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var idTransferencia = 789; // {Integer} {{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria_param_id_transferencia}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTransferencia** | **Integer**| {{{transferencia_bancaria_resource_cancelar_transferencia_credito_conta_bancaria_param_id_transferencia}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmarTransferenciaCreditoContaBancariaUsingPOST"></a>
# **confirmarTransferenciaCreditoContaBancariaUsingPOST**
> &#39;String&#39; confirmarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia)

{{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria}}}

{{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var idTransferencia = 789; // {Integer} {{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria_param_id_transferencia}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.confirmarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTransferencia** | **Integer**| {{{transferencia_bancaria_resource_confirmar_transferencia_credito_conta_bancaria_param_id_transferencia}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTaxasJurosContasUsingGET"></a>
# **consultarTaxasJurosContasUsingGET**
> TaxaJurosContaResponse consultarTaxasJurosContasUsingGET(id, numeroMesesCarencia)

{{{transferencia_bancaria_resource_consultar_taxas_juros_contas}}}

{{{transferencia_bancaria_resource_consultar_taxas_juros_contas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{transferencia_bancaria_resource_salvar_taxas_juros_contas_param_id}}}

var numeroMesesCarencia = 56; // {Integer} numeroMesesCarencia


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTaxasJurosContasUsingGET(id, numeroMesesCarencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_bancaria_resource_salvar_taxas_juros_contas_param_id}}} | 
 **numeroMesesCarencia** | **Integer**| numeroMesesCarencia | 

### Return type

[**TaxaJurosContaResponse**](TaxaJurosContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTransferenciaBancariaUsingGET"></a>
# **consultarTransferenciaBancariaUsingGET**
> TransferenciaCreditoContaBancariaResponse consultarTransferenciaBancariaUsingGET(idTransferencia)

{{{transferencia_bancaria_resource_consultar_transferencia_bancaria}}}

{{{transferencia_bancaria_resource_consultar_transferencia_bancaria_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var idTransferencia = 789; // {Integer} {{{transferencia_bancaria_resource_consultar_transferencia_bancaria_param_id_transferencia}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTransferenciaBancariaUsingGET(idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTransferencia** | **Integer**| {{{transferencia_bancaria_resource_consultar_transferencia_bancaria_param_id_transferencia}}} | 

### Return type

[**TransferenciaCreditoContaBancariaResponse**](TransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET15"></a>
# **consultarUsingGET15**
> ContaBancariaPortadorResponse consultarUsingGET15(id)

{{{conta_bancaria_resource_consultar}}}

{{{conta_bancaria_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{conta_bancaria_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET15(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_bancaria_resource_consultar_param_id}}} | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET50"></a>
# **consultarUsingGET50**
> TransferenciaBancariaResponse consultarUsingGET50(id, idTransferencia, opts)

{{{transferencia_bancaria_resource_consultar}}}

{{{transferencia_bancaria_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{transferencia_bancaria_resource_consultar_param_id}}}

var idTransferencia = 789; // {Integer} {{{transferencia_bancaria_resource_consultar_param_id_evento}}}

var opts = { 
  'idContaBancariaDestino': 789 // {Integer} {{{transferencia_bancaria_resource_consultar_param_id_conta_portador}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET50(id, idTransferencia, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_bancaria_resource_consultar_param_id}}} | 
 **idTransferencia** | **Integer**| {{{transferencia_bancaria_resource_consultar_param_id_evento}}} | 
 **idContaBancariaDestino** | **Integer**| {{{transferencia_bancaria_resource_consultar_param_id_conta_portador}}} | [optional] 

### Return type

[**TransferenciaBancariaResponse**](TransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTransferenciaBancariaUsingGET"></a>
# **listarTransferenciaBancariaUsingGET**
> PageTransferenciaCreditoContaBancariaResponse listarTransferenciaBancariaUsingGET(opts)

{{{transferencia_bancaria_resource_listar_transferencia_bancaria}}}

{{{transferencia_bancaria_resource_listar_transferencia_bancaria_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idConta': 789, // {Integer} {{{transferencia_credito_conta_bancaria_request_id_conta_value}}}
  'dataSolicitacaoInicial': "dataSolicitacaoInicial_example", // {String} {{{transferencia_credito_conta_bancaria_request_data_solicitacao_inicial_value}}}
  'dataSolicitacaoFinal': "dataSolicitacaoFinal_example", // {String} {{{transferencia_credito_conta_bancaria_request_data_solicitacao_final_value}}}
  'status': 56 // {Integer} {{{transferencia_credito_conta_bancaria_request_status_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTransferenciaBancariaUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idConta** | **Integer**| {{{transferencia_credito_conta_bancaria_request_id_conta_value}}} | [optional] 
 **dataSolicitacaoInicial** | **String**| {{{transferencia_credito_conta_bancaria_request_data_solicitacao_inicial_value}}} | [optional] 
 **dataSolicitacaoFinal** | **String**| {{{transferencia_credito_conta_bancaria_request_data_solicitacao_final_value}}} | [optional] 
 **status** | **Integer**| {{{transferencia_credito_conta_bancaria_request_status_value}}} | [optional] 

### Return type

[**PageTransferenciaCreditoContaBancariaResponse**](PageTransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET17"></a>
# **listarUsingGET17**
> PageContaBancariaPortadorResponse listarUsingGET17(opts)

{{{conta_bancaria_resource_listar}}}

{{{conta_bancaria_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var opts = { 
  'idConta': 789, // {Integer} {{{conta_bancaria_portador_listar_request_id_conta_value}}}
  'nomeAgencia': "nomeAgencia_example", // {String} {{{conta_bancaria_portador_listar_request_nome_agencia_value}}}
  'banco': 789, // {Integer} {{{conta_bancaria_portador_listar_request_codigo_banco_value}}}
  'numeroAgencia': "numeroAgencia_example", // {String} {{{conta_bancaria_portador_listar_request_numero_agencia_value}}}
  'numeroConta': "numeroConta_example", // {String} {{{conta_bancaria_portador_listar_request_numero_conta_value}}}
  'flagAtivo': 56, // {Integer} {{{conta_bancaria_portador_listar_request_flag_ativo_value}}}
  'flagContaOrigemDoc': 56, // {Integer} {{{conta_bancaria_portador_listar_request_flag_conta_origem_doc_value}}}
  'idPessoaFisica': 789, // {Integer} {{{conta_bancaria_portador_listar_request_id_pessoa_fisica_value}}}
  'favorecido': "favorecido_example", // {String} {{{conta_bancaria_portador_listar_request_favorecido_value}}}
  'numeroReceiraFederal': "numeroReceiraFederal_example", // {String} {{{conta_bancaria_portador_listar_request_numero_receira_federal_value}}}
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
api.listarUsingGET17(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{conta_bancaria_portador_listar_request_id_conta_value}}} | [optional] 
 **nomeAgencia** | **String**| {{{conta_bancaria_portador_listar_request_nome_agencia_value}}} | [optional] 
 **banco** | **Integer**| {{{conta_bancaria_portador_listar_request_codigo_banco_value}}} | [optional] 
 **numeroAgencia** | **String**| {{{conta_bancaria_portador_listar_request_numero_agencia_value}}} | [optional] 
 **numeroConta** | **String**| {{{conta_bancaria_portador_listar_request_numero_conta_value}}} | [optional] 
 **flagAtivo** | **Integer**| {{{conta_bancaria_portador_listar_request_flag_ativo_value}}} | [optional] 
 **flagContaOrigemDoc** | **Integer**| {{{conta_bancaria_portador_listar_request_flag_conta_origem_doc_value}}} | [optional] 
 **idPessoaFisica** | **Integer**| {{{conta_bancaria_portador_listar_request_id_pessoa_fisica_value}}} | [optional] 
 **favorecido** | **String**| {{{conta_bancaria_portador_listar_request_favorecido_value}}} | [optional] 
 **numeroReceiraFederal** | **String**| {{{conta_bancaria_portador_listar_request_numero_receira_federal_value}}} | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageContaBancariaPortadorResponse**](PageContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET62"></a>
# **listarUsingGET62**
> PageTransferenciaBancariaResponse listarUsingGET62(id, opts)

{{{transferencia_bancaria_resource_listar}}}

{{{transferencia_bancaria_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{transferencia_bancaria_resource_listar_param_id}}}

var opts = { 
  'idContaBancariaDestino': 789, // {Integer} {{{transferencia_bancaria_resource_listar_param_id_conta_portador}}}
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
api.listarUsingGET62(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_bancaria_resource_listar_param_id}}} | 
 **idContaBancariaDestino** | **Integer**| {{{transferencia_bancaria_resource_listar_param_id_conta_portador}}} | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageTransferenciaBancariaResponse**](PageTransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarTaxasJurosContasUsingPOST"></a>
# **salvarTaxasJurosContasUsingPOST**
> TaxaJurosContaResponse salvarTaxasJurosContasUsingPOST(id, persist)

{{{transferencia_bancaria_resource_salvar_taxas_juros_contas}}}

{{{transferencia_bancaria_resource_salvar_taxas_juros_contas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{transferencia_bancaria_resource_salvar_taxas_juros_contas_param_id}}}

var persist = new Pier.TaxaJurosContaPersistValue(); // {TaxaJurosContaPersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarTaxasJurosContasUsingPOST(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_bancaria_resource_salvar_taxas_juros_contas_param_id}}} | 
 **persist** | [**TaxaJurosContaPersistValue**](TaxaJurosContaPersistValue.md)| persist | 

### Return type

[**TaxaJurosContaResponse**](TaxaJurosContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST8"></a>
# **salvarUsingPOST8**
> ContaBancariaPortadorResponse salvarUsingPOST8(persist)

{{{conta_bancaria_resource_salvar}}}

{{{conta_bancaria_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var persist = new Pier.ContaBancariaPortadorPersistValue(); // {ContaBancariaPortadorPersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST8(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**ContaBancariaPortadorPersistValue**](ContaBancariaPortadorPersistValue.md)| persist | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularTransferenciaBancariaUsingPOST"></a>
# **simularTransferenciaBancariaUsingPOST**
> PlanoParcelamentoTransferenciaCreditoContaBancariaResponse simularTransferenciaBancariaUsingPOST(request)

{{{transferencia_bancaria_resource_simular_transferencia_bancaria}}}

{{{transferencia_bancaria_resource_simular_transferencia_bancaria_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var request = new Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaRequest(); // {PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularTransferenciaBancariaUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**PlanoParcelamentoTransferenciaCreditoContaBancariaRequest**](PlanoParcelamentoTransferenciaCreditoContaBancariaRequest.md)| request | 

### Return type

[**PlanoParcelamentoTransferenciaCreditoContaBancariaResponse**](PlanoParcelamentoTransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferenciaCreditoContaBancariaUsingPOST"></a>
# **transferenciaCreditoContaBancariaUsingPOST**
> TransferenciaCreditoContaBancariaResponse transferenciaCreditoContaBancariaUsingPOST(persist)

{{{transferencia_bancaria_resource_transferencia_credito_conta_bancaria}}}

{{{transferencia_bancaria_resource_transferencia_credito_conta_bancaria_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var persist = new Pier.TransferenciaCreditoContaBancariaPersistValue(); // {TransferenciaCreditoContaBancariaPersistValue} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transferenciaCreditoContaBancariaUsingPOST(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**TransferenciaCreditoContaBancariaPersistValue**](TransferenciaCreditoContaBancariaPersistValue.md)| persist | 

### Return type

[**TransferenciaCreditoContaBancariaResponse**](TransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferirUsingPOST"></a>
# **transferirUsingPOST**
> TransferenciaBancariaResponse transferirUsingPOST(id, transferenciaBancariaPersist)

{{{transferencia_bancaria_resource_transferir}}}

{{{transferencia_bancaria_resource_transferir_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtransferenciabancariaApi()

var id = 789; // {Integer} {{{transferencia_bancaria_resource_transferir_param_id}}}

var transferenciaBancariaPersist = new Pier.TransferenciaBancariaPersistValue(); // {TransferenciaBancariaPersistValue} transferenciaBancariaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transferirUsingPOST(id, transferenciaBancariaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{transferencia_bancaria_resource_transferir_param_id}}} | 
 **transferenciaBancariaPersist** | [**TransferenciaBancariaPersistValue**](TransferenciaBancariaPersistValue.md)| transferenciaBancariaPersist | 

### Return type

[**TransferenciaBancariaResponse**](TransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

