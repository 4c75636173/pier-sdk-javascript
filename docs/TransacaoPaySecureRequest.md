# Pier.TransacaoPaySecureRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataHoraTransacao** | **String** | Data e hora utilizado na gera\u00E7\u00E3o do criptograma em GMT - 0 | [optional] 
**numeroCartao** | **String** | Numero do cartao (criptografado) | [optional] 
**idCartao** | **Integer** | Id do cart\u00E3o | [optional] 
**valor** | **Number** | Valor da transa\u00E7\u00E3o em moeda local | [optional] 
**nsuOrigem** | **String** | N\u00FAmero Sequencial \u00DAnico que identifica a transa\u00E7\u00E3o no sistema que a originou (critografado). | [optional] 
**nomePortadorCartao** | **String** | Nome do Portador do Cart\u00E3o que originou a transa\u00E7\u00E3o (criptografado). | [optional] 
**origem** | **String** | Origem da transa\u00E7\u00E3o | [optional] 
**terminalRequisitante** | **String** | Apresenta a identifica\u00E7\u00E3o do terminal requisitante | 
**codigoProcessamento** | **String** | C\u00F3digo de Processamento que identifica o Tipo da Transa\u00E7\u00E3o. | 
**dataValidadeCartao** | **String** | Data de Validade do Cart\u00E3o. Ex: AAMM | 
**numeroEstabelecimento** | **String** | N\u00FAmero do Estabelecimento (N\u00FAmero+DV). | 
**numeroParcelas** | **Integer** | N\u00FAmero de Parcelas. | 
**codigoSegurancaCartao** | **String** | C\u00F3digo de Seguran\u00E7a do Cart\u00E3o (criptografado). | 
**sort** | **[String]** | Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 


