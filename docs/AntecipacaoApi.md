# Pier.AntecipacaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurarTaxaAntecipacaoUsingPOST**](AntecipacaoApi.md#configurarTaxaAntecipacaoUsingPOST) | **POST** /api/produtos/{id}/configurar-taxa-antecipacao | Configura a Taxa de Antecipa\u00E7\u00E3o de um Produto
[**consultarTaxaAntecipacaoUsingGET**](AntecipacaoApi.md#consultarTaxaAntecipacaoUsingGET) | **GET** /api/produtos/{id}/consultar-taxa-antecipacao | Consulta a Taxa de Antecipa\u00E7\u00E3o de um Produto
[**efetivarAntecipacaoUsingPOST**](AntecipacaoApi.md#efetivarAntecipacaoUsingPOST) | **POST** /api/compras-antecipaveis/{id}/efetivar-antecipacao | Faz a efetiva\u00E7\u00E3o da antecipa\u00E7\u00E3o
[**efetivarAntecipacoesUsingPOST**](AntecipacaoApi.md#efetivarAntecipacoesUsingPOST) | **POST** /api/compras-antecipaveis/efetivar-antecipacao | Faz a efetiva\u00E7\u00E3o da antecipa\u00E7\u00E3o
[**listarUsingGET12**](AntecipacaoApi.md#listarUsingGET12) | **GET** /api/compras-antecipaveis | Listar compras com parcelas antecip\u00E1veis
[**simularAntecipacaoUsingGET**](AntecipacaoApi.md#simularAntecipacaoUsingGET) | **GET** /api/compras-antecipaveis/{id}/simular-antecipacao | Simular antecipa\u00E7\u00E3o de parcelas
[**simularAntecipacoesUsingGET**](AntecipacaoApi.md#simularAntecipacoesUsingGET) | **GET** /api/compras-antecipaveis/simular-antecipacao | Simular antecipa\u00E7\u00E3o de todas as parcelas antecip\u00E1veis


<a name="configurarTaxaAntecipacaoUsingPOST"></a>
# **configurarTaxaAntecipacaoUsingPOST**
> ParametroProdutoResponse configurarTaxaAntecipacaoUsingPOST(id, taxaAntecipacaoRequest)

Configura a Taxa de Antecipa\u00E7\u00E3o de um Produto

Este recurso permite configurar a Taxa de Antecipa\u00E7\u00E3o de um Produto, a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

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

Consulta a Taxa de Antecipa\u00E7\u00E3o de um Produto

Este recurso permite consultar a Taxa de Antecipa\u00E7\u00E3o de um Produto, a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var id = 789; // {Integer} Id Produto

var tipoTransacao = "tipoTransacao_example"; // {String} Tipo da Transa\u00E7\u00E3o (ON-US ou OFF-US)


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
 **tipoTransacao** | **String**| Tipo da Transa\u00E7\u00E3o (ON-US ou OFF-US) | 

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

Faz a efetiva\u00E7\u00E3o da antecipa\u00E7\u00E3o

M\u00E9todo responsavel pela efetiva\u00E7\u00E3o da antecipa\u00E7\u00E3o, cujo desconto \u00E9 calculado baseado na data da \u00FAltima parcela em aberto.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Conta.

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do evento.

var quantidadeParcelas = 789; // {Integer} Quantidade de parcelas para serem antecipadas.

var opts = { 
  'complemento': "complemento_example" // {String} Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o.
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
 **idConta** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Conta. | 
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do evento. | 
 **quantidadeParcelas** | **Integer**| Quantidade de parcelas para serem antecipadas. | 
 **complemento** | **String**| Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o. | [optional] 

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

Faz a efetiva\u00E7\u00E3o da antecipa\u00E7\u00E3o

M\u00E9todo responsavel pela efetiva\u00E7\u00E3o de todas as compras antecip\u00E1veis com todas as parcelas de uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Conta.

var opts = { 
  'complemento': "complemento_example" // {String} Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o.
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
 **idConta** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Conta. | 
 **complemento** | **String**| Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o. | [optional] 

### Return type

[**AntecipacaoResponse**](AntecipacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET12"></a>
# **listarUsingGET12**
> PageCompraResponse listarUsingGET12(idConta, opts)

Listar compras com parcelas antecip\u00E1veis

Lista as compras antecip\u00E1veis de uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00F3digo identificador da conta da Compra.

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idCompra': 789, // {Integer} C\u00F3digo identificador da Compra.
  'parcelada': true, // {Boolean} Indica se a compra \u00E9 parcelada.
  'juros': true, // {Boolean} Indica se a compra \u00E9 com ou sem juros.
  'tipoOrigemTransacao': "tipoOrigemTransacao_example" // {String} Indica se a compra \u00E9 ON-US ou OFF-US
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET12(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00F3digo identificador da conta da Compra. | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idCompra** | **Integer**| C\u00F3digo identificador da Compra. | [optional] 
 **parcelada** | **Boolean**| Indica se a compra \u00E9 parcelada. | [optional] 
 **juros** | **Boolean**| Indica se a compra \u00E9 com ou sem juros. | [optional] 
 **tipoOrigemTransacao** | **String**| Indica se a compra \u00E9 ON-US ou OFF-US | [optional] 

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

Simular antecipa\u00E7\u00E3o de parcelas

Simula a antecipa\u00E7\u00E3o de parcelas de um evento, listando todos os planos de parcelamento dispon\u00EDveis, cujo desconto \u00E9 calculado baseado na data da \u00FAltima parcela em aberto.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta.

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do evento.

var opts = { 
  'complemento': "complemento_example" // {String} Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o.
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
 **idConta** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta. | 
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do evento. | 
 **complemento** | **String**| Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o. | [optional] 

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

Simular antecipa\u00E7\u00E3o de todas as parcelas antecip\u00E1veis

O recurso permite realizar a simula\u00E7\u00E3o da antecipa\u00E7\u00E3o de todas as compras antecip\u00E1veis de todas as parcelas de uma determinada conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AntecipacaoApi()

var idConta = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta.

var opts = { 
  'complemento': "complemento_example" // {String} Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o.
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
 **idConta** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta. | 
 **complemento** | **String**| Dados complementares sobre a realiza\u00E7\u00E3o da transa\u00E7\u00E3o. | [optional] 

### Return type

[**AntecipacaoSimuladaLoteResponse**](AntecipacaoSimuladaLoteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

