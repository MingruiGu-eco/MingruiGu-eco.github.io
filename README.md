# 顾明瑞的个人主页

中山大学岭南学院经济学博士研究生顾明瑞（Mingrui Gu）的个人主页。内容依据 `简历.tex` 整理，包含教育经历、研究成果、学术经历和奖项。网页已移除照片区域，保留原模板背景图。

邮箱：<gumr3@mail2.sysu.edu.cn>  
ORCID：<https://orcid.org/0009-0000-8732-3010>

## 上传并发布到 GitHub Pages

1. 登录 GitHub，新建一个 **Public** 仓库。若希望网址为 `https://用户名.github.io/`，仓库命名为 `用户名.github.io`。也可以使用其他仓库名，网址将是 `https://用户名.github.io/仓库名/`。
2. 在仓库页面选择 **Add file → Upload files**。将本目录里的 `index.html`、`contents`、`static`、`README.md`、`LICENSE` 和 `.nojekyll` 上传到仓库根目录，再提交。不要把外层的“网页”文件夹整体上传成仓库中的子文件夹。
3. 打开 **Settings → Pages**，在 **Build and deployment** 中将 **Source** 设为 **Deploy from a branch**。
4. 将 **Branch** 设为 `main`，目录选 `/(root)`，点击 **Save**。若仓库默认分支名不同，选择存放上述文件的分支。
5. 等待 GitHub Pages 部署完成，在 Pages 设置中打开显示的网址。如果尚未生成，可在仓库的 **Actions** 中查看 Pages 部署状态。

本网页是静态站点，无须安装构建工具。所有站内资源都使用相对路径，同时兼容个人主页仓库和普通项目仓库。仓库根目录中的 `.nojekyll` 用于直接发布静态文件；若网页上传界面未显示此隐藏文件，可用 **Add file → Create new file** 创建，填入一行 `# Static site` 后提交。

## 修改内容

| 文件 | 内容 |
| --- | --- |
| `contents/config.yml` | 浏览器标题、导航姓名、顶部标题和副标题、页脚文字 |
| `contents/home.md` | 简介、邮箱、ORCID、教育经历、专业技能 |
| `contents/publications.md` | 发表与录用论文、有条件接收论文、工作论文 |
| `contents/experience.md` | 学术会议、助教经历、社会实践 |
| `contents/awards.md` | 奖项与荣誉 |
| `index.html` | 页面结构、导航、搜索摘要及页脚链接 |
| `static/css/main.css` | 颜色、字号、间距、手机布局 |
| `static/assets/img/background.jpeg` | 顶部背景图 |

论文 “The Effects of Talent Subsidy Policies on Low-Skilled Migrant Wages: Evidence from China” 在网页中标记为 *Economic Modelling* **有条件接收（Conditional acceptance）**，已替换简历中的 R&R 状态。

正文以中文为主，论文标题及期刊名称保留原文。网页不展示 GitHub 个人资料链接。简历中的手机号、出生年月、籍贯未放入网页。

## 本地预览

需要安装 Python。在 PowerShell 中运行以下命令，优先使用 D 盘目录，找不到时回落到 C 盘：

```powershell
$sitePath = 'D:\papers\Codex\简历\网页'
if (-not (Test-Path -LiteralPath $sitePath)) {
    $sitePath = 'C:\ShareFiles\papers\Codex\简历\网页'
}
Set-Location -LiteralPath $sitePath
python -m http.server 8000 --bind 127.0.0.1
```

在浏览器打开 <http://127.0.0.1:8000/>。结束预览时，在 PowerShell 中按 `Ctrl+C`。页面通过 JavaScript 读取 Markdown 和 YAML，需要通过本地服务器预览，直接双击 `index.html` 可能无法加载正文。

## 模板来源

页面基于 [Yixin0313/personal-homepage-template](https://github.com/Yixin0313/personal-homepage-template)，原模板改自 [Sen Li 的学术主页模板](https://github.com/senli1073/senli1073.github.io)。保留 MIT 许可证及模板来源说明。
