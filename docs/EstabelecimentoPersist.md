# Pier.EstabelecimentoPersist

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flagMatriz** | **Integer** | Indica se \u00E9 matriz ou filial. | [optional] 
**idGrupoEconomico** | **Integer** | Apresenta o n\u00FAmero de identifica\u00E7\u00E3o do Grupo Econ\u00F4mico. | [optional] 
**numeroReceitaFederal** | **String** | Apresenta o n\u00FAmero de identifica\u00E7\u00E3o do Estabelecimento na Receita Federal. | [optional] 
**nome** | **String** | Nome do Estabelecimento. | [optional] 
**descricao** | **String** | Raz\u00E3o Social do Estabelecimento. | [optional] 
**nomeFantasia** | **String** | T\u00EDtulo Comercial do Estabelecimento. | [optional] 
**cep** | **String** | C\u00F3digo de Endere\u00E7amento Postal (CEP). | [optional] 
**nomeLogradouro** | **String** | Nome do Logradouro. | [optional] 
**numeroEndereco** | **Integer** | N\u00FAmero do endere\u00E7o. | [optional] 
**bairro** | **String** | Nome do bairro do endere\u00E7o. | [optional] 
**cidade** | **String** | Nome da cidade do endere\u00E7o. | [optional] 
**complemento** | **String** | Descri\u00E7\u00F5es complementares referente ao endere\u00E7o. | [optional] 
**uf** | **String** | Sigla de identifica\u00E7\u00E3o da Unidade Federativa do endere\u00E7o. | [optional] 
**cep2** | **String** | C\u00F3digo de Endere\u00E7amento Postal (CEP). | [optional] 
**nomeLogradouro2** | **String** | Nome do Logradouro . | [optional] 
**numeroEndereco2** | **Integer** | N\u00FAmero do endere\u00E7o. | [optional] 
**bairro2** | **String** | Nome do bairro do endere\u00E7o. | [optional] 
**cidade2** | **String** | Nome da cidade do endere\u00E7o. | [optional] 
**complemento2** | **String** | Descri\u00E7\u00F5es complementares referente ao endere\u00E7o. | [optional] 
**uf2** | **String** | Sigla de identifica\u00E7\u00E3o da Unidade Federativa do endere\u00E7o. | [optional] 
**obs** | **String** | Detalhes espec\u00EDficos quanto ao Cadastro do Estabelecimento. | [optional] 
**contato** | **String** | Nome da pessoa para contato com o Estabelecimento. | [optional] 
**email** | **String** | E-mail da pessoa para contato com o Estabelecimento. | [optional] 
**flagArquivoSecrFazenda** | **Integer** | Indica se o estabelecimento ser\u00E1 inclu\u00EDdo no arquivo de registro para a Secretaria da Fazenda Estadual. | [optional] 
**flagCartaoDigitado** | **Integer** | Indica se o estabelecimento poder\u00E1 originar transa\u00E7\u00F5es sem a leitura da tarja ou do chip do cart\u00E3o. | [optional] 
**inativo** | **Integer** | Indica se o estabelecimento est\u00E1 inativo. | [optional] 
**idMoeda** | **Integer** | C\u00F3digo identificador da moeda. | [optional] 
**idPais** | **Integer** | Identificador de Pa\u00EDs. | [optional] 
**associadoSPCBrasil** | **Integer** | N\u00FAmero do associado ao SPCBrasil. | [optional] 
**mcc** | **Integer** | C\u00F3digo de Categoria de Mercado. | [optional] 
**idTipoEstabelecimento** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o do tipo de Estabelecimento. | [optional] 
**correspondencia** | **Integer** | Indicador para qual endere\u00E7o as correspond\u00EAncias ser\u00E3o enviadas, onde 1 \u00E9 ORIGEM e 2 ENDERE\u00C7O DE CORRESPOND\u00CANCIA. | [optional] 
**cargoContato** | **String** | Cargo do contato do estabelecimento. | [optional] 
**tipoPagamento** | **String** | Tipo do regime de pagamento do estabelecimento. | [optional] 
**consulta** | [**ConsultaCadastroEstabelecimentoDTO**](ConsultaCadastroEstabelecimentoDTO.md) | Consulta de cadastro n\u00FAmero um. | [optional] 
**consulta2** | [**ConsultaCadastroEstabelecimentoDTO**](ConsultaCadastroEstabelecimentoDTO.md) | Consulta de cadastro n\u00FAmero dois. | [optional] 
**consulta3** | [**ConsultaCadastroEstabelecimentoDTO**](ConsultaCadastroEstabelecimentoDTO.md) | Consulta de cadastro n\u00FAmero tr\u00EAs. | [optional] 
**flagTerminalVirtual** | **Boolean** | Flag indicando se o terminal \u00E9 f\u00EDsico ou virtual, sendo: (true: Sim), (false: N\u00E3o)). | 
**flagConsultaExtrato** | **Boolean** | Flag indicando se o terminal permite consultar extrato, sendo: (true: Sim), (false: N\u00E3o)). | 


