# Pier.ProdutoApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarProdutoUsingGET**](ProdutoApi.md#consultarProdutoUsingGET) | **GET** /api/produtos/{id_produto} | Apresenta os dados de um determinado Produto
[**listarProdutosUsingGET**](ProdutoApi.md#listarProdutosUsingGET) | **GET** /api/produtos | Lista os Produtos do Emissor


<a name="consultarProdutoUsingGET"></a>
# **consultarProdutoUsingGET**
> Produto consultarProdutoUsingGET(idProduto)

Apresenta os dados de um determinado Produto

Este m\u00C3\u00A9todo permite consultar um determinado Produto a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.ProdutoApi()

var idProduto = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarProdutoUsingGET(idProduto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idProduto** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id) | 

### Return type

[**Produto**](Produto.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarProdutosUsingGET"></a>
# **listarProdutosUsingGET**
> ListaProdutos listarProdutosUsingGET(opts)

Lista os Produtos do Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Produtos existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.ProdutoApi()

var opts = { 
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
  'nome': "nome_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto.
  'status': 56, // {Integer} Representa o Status do Produto, onde: (\"0\": Inativo), (\"1\": Ativo).
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarProdutosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id). | [optional] 
 **nome** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto. | [optional] 
 **status** | **Integer**| Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo). | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 

### Return type

[**ListaProdutos**](ListaProdutos.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

