# Pier.AntecipacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurarTaxaAntecipacaoUsingPOST**](AntecipacaoApi.md#configurarTaxaAntecipacaoUsingPOST) | **POST** /api/produtos/{id}/configurar-taxa-antecipacao | Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
[**consultarTaxaAntecipacaoUsingGET**](AntecipacaoApi.md#consultarTaxaAntecipacaoUsingGET) | **GET** /api/produtos/{id}/consultar-taxa-antecipacao | Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
[**efetivarAntecipacaoUsingPOST**](AntecipacaoApi.md#efetivarAntecipacaoUsingPOST) | **POST** /api/compras-antecipaveis/{id}/efetivar-antecipacao | Faz a efetiva\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o
[**listarUsingGET7**](AntecipacaoApi.md#listarUsingGET7) | **GET** /api/compras-antecipaveis | Listar compras com parcelas antecip\u00C3\u00A1veis
[**simularAntecipacaoUsingGET**](AntecipacaoApi.md#simularAntecipacaoUsingGET) | **GET** /api/compras-antecipaveis/{id}/simular-antecipacao | Simular antecipa\u00C3\u00A7\u00C3\u00A3o de parcelas


<a name="configurarTaxaAntecipacaoUsingPOST"></a>
# **configurarTaxaAntecipacaoUsingPOST**
> ParametroProdutoResponse configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest)

Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto

Este recurso permite configurar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var id = 789; // {Integer} Id Produto

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
 **id** | **Integer**| Id Produto | 
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

Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto

Este recurso permite consultar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var id = 789; // {Integer} Id Produto

var tipoTransacao = "tipoTransacao_example"; // {String} Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON-US ou OFF-US)


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
 **id** | **Integer**| Id Produto | 
 **tipoTransacao** | **String**| Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON-US ou OFF-US) | 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="efetivarAntecipacaoUsingPOST"></a>
# **efetivarAntecipacaoUsingPOST**
> AntecipacaoResponse efetivarAntecipacaoUsingPOST(idConta, id, quantidadeParcelas)

Faz a efetiva\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o

M\u00C3\u00A9todo responsavel pela efetiva\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o, cujo desconto \u00C3\u00A9 calculado baseado na data da \u00C3\u00BAltima parcela em aberto.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta.

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do evento.

var quantidadeParcelas = 789; // {Integer} Quantidade de parcelas para serem antecipadas.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.efetivarAntecipacaoUsingPOST(idConta, id, quantidadeParcelas, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta. | 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do evento. | 
 **quantidadeParcelas** | **Integer**| Quantidade de parcelas para serem antecipadas. | 

### Return type

[**AntecipacaoResponse**](AntecipacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET7"></a>
# **listarUsingGET7**
> PageCompraResponse listarUsingGET7(idConta, opts)

Listar compras com parcelas antecip\u00C3\u00A1veis

Lista as compras antecip\u00C3\u00A1veis de uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00C3\u00B3digo identificador da conta da Compra.

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idCompra': 789, // {Integer} C\u00C3\u00B3digo identificador da Compra.
  'parcelada': true, // {Boolean} Indica se a compra \u00C3\u00A9 parcelada.
  'juros': true, // {Boolean} Indica se a compra \u00C3\u00A9 com ou sem juros.
  'tipoOrigemTransacao': "tipoOrigemTransacao_example" // {String} Indica se a compra \u00C3\u00A9 ON-US ou OFF-US
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET7(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo identificador da conta da Compra. | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idCompra** | **Integer**| C\u00C3\u00B3digo identificador da Compra. | [optional] 
 **parcelada** | **Boolean**| Indica se a compra \u00C3\u00A9 parcelada. | [optional] 
 **juros** | **Boolean**| Indica se a compra \u00C3\u00A9 com ou sem juros. | [optional] 
 **tipoOrigemTransacao** | **String**| Indica se a compra \u00C3\u00A9 ON-US ou OFF-US | [optional] 

### Return type

[**PageCompraResponse**](PageCompraResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularAntecipacaoUsingGET"></a>
# **simularAntecipacaoUsingGET**
> AntecipacaoSimuladaResponse simularAntecipacaoUsingGET(idConta, id)

Simular antecipa\u00C3\u00A7\u00C3\u00A3o de parcelas

Simula a antecipa\u00C3\u00A7\u00C3\u00A3o de parcelas de um evento, listando todos os planos de parcelamento dispon\u00C3\u00ADveis, cujo desconto \u00C3\u00A9 calculado baseado na data da \u00C3\u00BAltima parcela em aberto.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta.

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do evento.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularAntecipacaoUsingGET(idConta, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta. | 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do evento. | 

### Return type

[**AntecipacaoSimuladaResponse**](AntecipacaoSimuladaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

