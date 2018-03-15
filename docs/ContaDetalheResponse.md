# Pier.ContaDetalheResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o de conta (id). | [optional] 
**idPessoa** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa Titular da Conta (id). | [optional] 
**nome** | **String** | Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00E3o Social (Nome Empresarial)&#39;. | [optional] 
**idProduto** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o do produto ao qual a conta faz parte. (id). | [optional] 
**idOrigemComercial** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da Origem Comercial (id) que deu origem a Conta. | [optional] 
**nomeOrigemComercial** | **String** | Nome da origem comercial | [optional] 
**idFantasiaBasica** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da Fantasia Basica (id). | [optional] 
**nomeFantasiaBasica** | **String** | Nome da Fantasia Basica | [optional] 
**idStatusConta** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o do status atribuido a conta. | [optional] 
**statusConta** | **String** | Descri\u00E7\u00E3o do status da conta | [optional] 
**diaVencimento** | **Integer** | Apresenta o dia de vencimento. | [optional] 
**melhorDiaCompra** | **Integer** | Apresenta o melhor dia de compra. | [optional] 
**dataStatusConta** | **String** | Apresenta a data em que o idStatusConta atual fora atribu\u00EDdo para ela. | [optional] 
**valorRenda** | **Number** | Valor da renda comprovada. | [optional] 
**dataCadastro** | **String** | Apresenta a data em que o cart\u00E3o foi gerado. | [optional] 
**dataUltimaAlteracaoVencimento** | **String** | Apresenta a data da ultima altera\u00E7\u00E3o de vencimento. | [optional] 
**dataHoraUltimaCompra** | **String** | Apresenta a data da ultima altera\u00E7\u00E3o de vencimento. | [optional] 
**numeroAgencia** | **Integer** | N\u00FAmero da ag\u00EAncia. | [optional] 
**numeroContaCorrente** | **String** | N\u00FAmero da conta corrente. | [optional] 
**formaEnvioFatura** | **String** | Forma de envio da fatura. | [optional] 
**titular** | **Boolean** | Apresenta se a pessoa \u00E9 titular da conta. | [optional] 
**limiteGlobal** | **Number** | Apresenta o valor do limite de cr\u00E9dito que o portador do cart\u00E3o possui. | [optional] 
**limiteSaqueGlobal** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional. | [optional] 
**saldoDisponivelGlobal** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para uso exclusivo em Compras Nacionais. | [optional] 
**saldoDisponivelSaque** | **Number** | Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional dentro de cada ciclo de faturamento. | [optional] 
**diasAtraso** | **Integer** | Apresenta a quantidade de dias que a conta esta em atraso | [optional] 


