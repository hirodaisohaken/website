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

### `LICENSE`
このTheme のライセンスを決めているファイル。


### `README.md`
ここに記述されている文章が収められているファイル。
Theme を作った意図、使い方、例などを記述する大事な大事なファイル。

このファイル（およびサンプルコード）がしっかり記述されていなければ、ちょっと未来の自分も含めて誰もこのTheme を使い切れなくなる、あるいは維持管理できなくなる。


### `achetypes/`
各ウェブページを作成する際、実際に何度も作成・編集することになるMarkdown ファイル作成時のテンプレートを置く。
ただしこのファイル群をTheme として使う側にも`archetypes/` があればそちらが優先される。
そのためここに置かれている`archetypes/` は基本的に利用されないことが想定される。


### `static/`
`layouts/` は重要なので、先に`static/` について述べる。

`static/` 以下にCSS の設定ファイルとJavaScript の設定ファイルとを置く。
主にCSS で文字やそのまとまりの修飾を、JavaScript でデータの読み込みとその配置などを行う。


### `theme.toml`
基本構造とは関係ない、その時時で変更しうる個別具体的なパラメータを決める設定ファイル。

このファイルも`achetypes/` と同様に、Theme として使う側に`config.toml` があればそちらが優先的に読み込まれる。
したがってここに置いてある`config.toml` も基本的に利用されないことが想定される。


### `layouts/`
`layouts/` 以下は直接ウェブページのデザイン・レイアウトを決めるファイルを置く。

```
layouts/
├── 404.html
├── _default/
│     ├── _markup
│     │      └── render-link.html
│     ├── baseof.html
│     ├── list.html
│     └── single.html
├── index.html
├── members
│     └── _markup
│              └── render-image.html
├── partials
│     ├── footer.html
│     ├── head.html
│     ├── header.html
│     └── sidebar.html
└── shortcodes
         └── google-maps.html
```

`_default/` 以下にあるファイルに基づいてすべてのHTML ファイルが生成される。
とくに`baseof.html` で最も基本な構造を決める。
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
`{{- block "main" . }}{{- end }}` の箇所に各ウェブページのコンテンツに合わせたレイアウトの設定（HTML）ファイルが読み込まれる。
他の部分はすべてのウェブページに共通する部分で、`partials/`　以下に置いてある各HTML ファイル（`head.html` と`header.html` 、`sidebar.html` 、`footer.html`）の内容が読み込まれて表示される。

Theme 内で`{{- block "main" . }}{{- end }}` で読み込まれるファイルは`404.html` と`list.html` 、`single.html` 、`index.html` がある。
とくに`list.html` と`single.html` とは`_default/` にあるのでウェブサイト全体に影響がある。

* `404.html`:
リンクされたウェブページが存在しないときに表示される。

* `index.html`:
トップページとして表示される。
例として以下に示すと
``` html
{{ define "main" }}
<main class="globalmain">
  <article>
    <!-- Note that the content for index.html, as a sort of list page, will pull from content/_index.md -->
    {{.Content}}
  </article>

  <h1 class="textheading">News</h1>
  <!-- Ranges through all of content/ -->
  {{ range first 10 .Site.RegularPages }}
  <!-- {{ .Render "featured"}} <!-- builds result from _default/featured.html template -->
  <section tag="newstopic">
    <h2 class="textsubheading">
      <time>{{ dateFormat "2006-01-02" .Date }}</time>{{.Description}}</h2>
    <p>{{ .Summary }} <a href="{{ .RelPermalink }}">&hellip;</a></p>
  </section>
  {{ end }}
</main>
{{ end }}
```
基本的に変えないであろう部分がTheme で決めている。
変わりうる部分はTheme を使う側に存在する`index.ja.md` あるいは`index.en.md` の内容が`{{.Content}}` の箇所に表示される。

* `list.html`:
`config.toml` の`Menu.main` で決められたメニューアイテムからリンクされるページのデザイン・レイアウトを決める。
デフォルトではメニューアイテムからリンクされるページでは（例えば「セミナー」）に該当する記事の一覧を表示することになっている。

* `single.html`:
日々追加更新される個別の記事のデザイン・レイアウトを決める。
これも`baseof.html` に基づいて`{{- block "main" . }}{{- end }}` の箇所で読み込まれ、`{{.Content}}` の箇所に各々の`.md` ファイルの内容が表示される。

`shortcodes/` には1つの目的ごとに分けた短いHTML ファイルを置く。
基本的にコンテンツとなる部分、普段編集する部分はMarkdown(`.md`) ファイルであるため、HTML を使用した機能はかなり制限される。
ウェブサイト全体に関係する内容であれば、上記の`_default/` や`_partials` に置かれたHTML ファイルに記述すればいいが、単独ページのみに必要なHTML コードがある場合は機能別にHTML ファイルを分けてここに置く。
そしてMarkdown 側でそのHTML ファイル読み込ませる。
たとえば`shortcodes/google-maps.html` を作り、Markdown ファイルに`{{< google-maps >}}` を記述することで読み込ませる。

`_markup/` に関しても基本的には`shortcodes/` と似た気持ちのものだが、こちらは公式にサポートされた特定の用途に限定される。
画像やリンク、コードブロックのレンダリングが当てられる。

# English
