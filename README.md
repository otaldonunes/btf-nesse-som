## Project Name

## Figma

1. `figma link`

## GDrive

1. `gdrive link`

## Git Clone

1.  `git clone -b devel ssh-here`.

## Git Flow

1.  `git checkout -B prefix/assunto`.
2.  `git fetch origin devel`.
3.  `git merge origin/devel`.

## Prefix

- **Feature**: Novas funções.
- **Chore**: Melhoria/refatoração no código.
- **Hotfix**: Para corrigir urgências em produção.
- **Bug**: Resolução de bugs.

## Subir

1.  `git add .` _ou_ `git add nome_do_arquivo`.
2.  `git commit -m "prefix: assunto"`.
3.  `git push -u origin branch_criada` _(Após a primeira vez, apenas `git push`)_.

## GitHub

1.  Pull Request da **branch_criada** para **develop**. _(Sempre colocar comentário descrevendo solução e ligar à **issue**)_
    _Exemplo: "Resolução Bug - Botão sair - Pull Request ligada à issue #23."_
2.  **Sempre** solicitar review do código através das Tags.
3.  Ao finalizar, **delete** sua branch localmente `git branch -d branch_criada`.
