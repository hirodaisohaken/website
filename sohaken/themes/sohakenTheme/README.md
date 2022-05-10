# sohakenTheme
これは素粒子ハドロン理論研究室のウェブページのためのHugo のテーマです。
Hugo は静的サイトジェネレータのひとつで、テーマはウェブページを作成するテンプレートです。

This is a Hugo theme for the web pages of _Theoretical Particle and Hadron Physics Group_.

English version is below.

# 日本語
## 基本構成
```
├── LICENSE
├── README.md
├── archetypes/
├── layouts/
│     ├── 404.html
│     ├── _default/
│     ├── index.html
│     └── partials/
├── static/
│     ├── css/
│     └── js/
└── theme.toml
```

### `achetypes/`
各ウェブページを作成する際、実際に何度も作成・編集することになるMarkdown ファイル作成時のテンプレートを置く。
ただしこのファイル群をTheme として使う側にも`archetypes/` があればそちらが優先される。
そのためここに置かれている`archetypes/` は基本的に利用されないことが想定される。

また`theme.toml` も同様に、Theme として使う側に`.toml` ファイルがあればそちらが優先的に読み込まれる。
したがってここに置いてある`.toml` も基本的に利用されないことが想定される。

### `static/`
`layouts/` は重要なので、先に`static/` について述べる。
`static/` 以下にCSS の設定ファイルとJavaScript の設定ファイルとを置く。

### `layouts/`
`layouts/` 以下は直接ウェブページのデザイン・レイアウトを決めるファイルを置く。

```
layouts/
├── 404.html
├── _default/
│     ├── baseof.html
│     ├── list.html
│     └── single.html
├── index.html
└── partials/
         ├── footer.html
         ├── head.html
         ├── header.html
         └── sidebar.html
```

`_default/` 以下に置いてある`baseof.html` が最も基本な雛形として各HTML ファイルは生成される。
```baseof.html
<!DOCTYPE html>
<html  lang="{{ .Site.LanguageCode }}" >
  {{- partial "head.html" . -}}
  <body class="globalbody" >
    {{- partial "header.html" . -}}

    {{- partial "sidebar.html" . -}}

    {{- block "main" . }}{{- end }}

    {{- partial "footer.html" . -}}
  </body>
</html>
```
`{{- block "main" . }}{{- end }}` の箇所に各ウェブページのコンテンツが表示され、他の部分は`partials/`　以下に置いてある各HTML ファイルの内容が表示される。
すべてのウェブページに共通する部分はまとまり毎に`partials/` 以下にHTML ファイルとして置いておいて、`_default/baseof.html` にそのHTML ファイルを読み込むようにしておく。


# English
