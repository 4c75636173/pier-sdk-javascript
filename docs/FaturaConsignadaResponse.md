# Pier.FaturaConsignadaResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo identificador da fatura. | [optional] 
**idConta** | **Integer** | C\u00F3digo identificador da conta (id). | [optional] 
**flagEmiteFatura** | **Integer** | C\u00F3digo identificador da conta a qual a fatura se refere. | [optional] 
**dataVencimentoFatura** | **String** | Data de vencimento da fatura. | [optional] 
**valorTotalFatura** | **Number** | Valor para pagamento total da fatura. | [optional] 
**valorFaturaAnterior** | **Number** | Valor total da fatura anterior. | [optional] 
**valorPagamentoMinimo** | **Number** | Valor m\u00EDnimo para pagamento da fatura. | [optional] 
**valorPagamentoConsignado** | **Number** | Valor da fatura pago atrav\u00E9s de desconto em folha. | [optional] 
**valorPagamentoComplementar** | **Number** | Valor complementar para considerar o pagamento m\u00EDnimo da fatura. | [optional] 
**totalComprasNacionais** | **Number** | Valor total das compras nacionais lan\u00E7adas na fatura. | [optional] 
**totalComprasInternacionas** | **Number** | Valor total das compras internacionais lan\u00E7adas na fatura. | [optional] 
**totalSaquesNacionais** | **Number** | Valor total dos saques nacionais lan\u00E7ados na fatura. | [optional] 
**totalSaquesInternacionais** | **Number** | Valor total dos saques internacionais lan\u00E7ados na fatura. | [optional] 
**totalDebitosNacionais** | **Number** | Valor total dos d\u00E9bitos nacionais lan\u00E7ados na fatura. | [optional] 
**totalDebitosRecorrentes** | **Number** | Valor total dos d\u00E9bitos recorrentes lan\u00E7ados na fatura. | [optional] 
**totalDebitosInternacionais** | **Number** | Valor total dos d\u00E9bitos internacionais lan\u00E7ados na fatura. | [optional] 
**totalDebitosDiversosNacionais** | **Number** | Valor total dos d\u00E9bitos diversos nacionais lan\u00E7ados na fatura. | [optional] 
**totalDebitosOpcionais** | **Number** | Valor total dos d\u00E9bitos diversos opcionais lan\u00E7ados na fatura. | [optional] 
**totalPagamentos** | **Number** | Valor total dos pagamentos lan\u00E7ados na fatura. | [optional] 
**totalCreditosNacionais** | **Number** | Valor total dos cr\u00E9ditos nacionais lan\u00E7ados na fatura. | [optional] 
**totalAjustes** | **Number** | Valor total dos ajustes lan\u00E7ados na fatura. | [optional] 
**totalTarifas** | **Number** | Valor total das tarifas lan\u00E7adas na fatura. | [optional] 
**totalMulta** | **Number** | Valor total da multa lan\u00E7ada na fatura. | [optional] 
**totalJuros** | **Number** | Valor total dos juros de mora lan\u00E7ados na fatura. | [optional] 
**taxaRotativo** | **Number** | Valor percentual da taxa de juros rotativos. | [optional] 
**taxaSaque** | **Number** | Valor percentual da taxa de saque. | [optional] 
**taxaMaximaProximoPeriodo** | **Number** | Valor m\u00E1ximo percentual da taxa de encargos para o pr\u00F3ximo per\u00EDodo. | [optional] 
**totalServicos** | **Number** | Apresenta a soma de todos os seguros cobrados na fatura do cliente. | 


