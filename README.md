Notes to be shared. Feel free to write down. （共有すべきメモなど）

# Website Image & Policies
- Simple structure （単純な構造）
- Readable code （読みやすいコード）
- Easy to maintain website （維持しやすい）

We plan to use Hugo a static site generator to accomplish those policies.  The focus for the future is on Frontend and Content Management in markdown files. 
Whereas, we place little focus on the backend HTML/CSS/JS and Hugo policies.

# How to generate/edit sohaken web page
- git command is used.
- generate local repository: git clone https://github.com/hirodaisohaken/website
- commit modifications on the local repository:  git commit -m "message"
- reflect local modifications on the GitHub master repository:  git push
- If you want to use an SSH connection to GitHub, you need to change the access method.
  - Prepare your SSH account on GitHub and upload your ssh-key. You can check the ssh connection with: ssh -T git@github.com
  - Check the access method: git remote -v
  - Change the access method to ss mode:  git remote set-url origin git@github.com:hirodaisohaken/website
  - Verify your access method: git remote -v

# Translation Notes
i18n folder holds general translations for English and Japanese.  Content in different languages is driven by markdown file extensions `_index.en.md` and `_index.ja.md` for example.

---
# 日本語
## 参考
- [Hugoのホームページ](https://gohugo.io)
- [Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet)
- [Git-Flow](https://githubflow.github.io/)
- [HTML/CSS/JSの参考](https://developer.mozilla.org/en-US/)

---
# English
## Learning References
- [Hugo Homepage](https://gohugo.io)
- [Markdown cheatsheet](https://www.markdownguide.org/cheat-sheet)
- [Git-Flow Process](https://githubflow.github.io/)
- [HTML/CSS/JS References](https://developer.mozilla.org/en-US/)
