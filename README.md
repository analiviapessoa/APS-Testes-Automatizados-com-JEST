# Scholarship Eligibility Evaluator - Suíte de Testes
Este projeto contém uma suíte de testes automatizados para o sistema Scholarship Eligibility Evaluator, desenvolvida como parte da atividade de APS sobre Testes Automatizados e Adequação de Testes.

## 📋 Descrição do Projeto
O objetivo desta suíte é aplicar técnicas funcionais (Classes de Equivalência e Valor Limite) e estruturais (Cobertura de Decisão) para garantir a integridade da lógica de concessão de bolsas de estudo.
O sistema avalia candidatos nos seguintes status:
- APPROVED: Candidato atende a todos os requisitos.
- REJECTED: Candidato não atende a um ou mais requisitos mínimos.
- MANUAL_REVIEW: Candidato está em uma zona limítrofe e requer análise humana.

## 🛠️ Tecnologias Utilizadas
- Linguagem: JavaScript (Node.js)
- Framework de Testes: Jest

## 🚀 Como Executar os Testes
### Pré-requisitos
- Node.js instalado
- Gerenciador de pacotes npm
### Passos para Execução
1. Clonar ou baixar o projeto: Os arquivos ScholarshipEligibilityEvaluator.js e ScholarshipEligibilityEvaluator.test.js devem estar no mesmo diretório.
2. Instalar as dependências:
  `npm install`
3. Executar o comando principal:
   `npm test`

## 📊 Cobertura de Testes
A suíte de testes cobre os seguintes cenários exigidos:
- Casos de APPROVED: Validação do "caminho feliz" e valores de borda.
- Casos de MANUAL_REVIEW: Testes para idade, GPA e frequência em faixas de revisão.
- Casos de REJECTED: Testes para cada um dos 5 motivos de reprovação (Idade, GPA, Presença, Cursos e Disciplina).
- Entradas Inválidas: Testes para valores fora da escala permitida (GPA < 0 ou > 10; Presença < 0 ou > 100).
- Valores Limite: Testes aplicados rigorosamente nas fronteiras de decisão (ex: 5.9, 6.0, 15, 16 anos).
