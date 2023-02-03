# Vimwiki + Jekyll + Github.io

## 시작하기

블로그 스켈레톤을 fork 하세요.

https://github.com/johngrib/johngrib-jekyll-skeleton

제 블로그를 fork하는 것보다 블로그 스켈레톤을 fork하는 것을 권합니다.
블로그를 그냥 fork 하면 제 자기소개와 일기, 에세이까지 당신의 블로그의 컨텐츠가 됩니다.

* 만약 그냥 fork 하신다면 제 자기소개와 일기를 포함한 _wiki의 모든 md 파일을 삭제하고 사용하세요.
* skeleton에 있는 문서들은 튜토리얼로 생각하고 읽어주시면 됩니다.

다음 글을 읽으며 블로그의 구조를 파악하시면 운영에 도움이 될 것입니다.

https://johngrib.github.io/wiki/my-wiki/

## 설치하기

루비가 설치되어 있지 않을 경우 루비를 설치해 주세요. 여기에서는 `rvm`으로
설치하는 방법을 소개해 드립니다. 다른 방법으로도 루비를 설치할 수 있으니, 다른
방법으로 하셔도 됩니다.  

루비 버전은 [GitHub Pages Dependency versions](https://pages.github.com/versions/)을 보면 GitHub Pages에서는 `2.7.4`버전을
사용하고 있으니 해당 버전을 설치해 줍니다.

```bash
# See also https://rvm.io/rvm/install
$ gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
$ curl -sSL https://get.rvm.io | bash
$ rvm install 2.7.4
$ rvm use 2.7.4
```

그다음 `bundle install`을 실행하여 의존성들을 설치합니다.

```bash
$ bundle install
```

### Git hooks 추가하기

새로운 글을 등록하면 메타 데이터를 업데이트해 주어야 합니다. 커밋하기 전에 이를
자동으로 될 수 있도록 Git Hooks를 추가해야 합니다.

```bash
$ cp tool/pre-commit ./.git/hooks
```

### 노드 모듈 설치하기

메타 데이터 생성을 위해서 `generateData.js`를 실행해야 합니다. 이를 실행하기
위해서 `yamljs` 의존성을 설치해야 합니다.

```bash
$ npm install
```

## 실행하기

```bash
$ jekyll serve
```

## 글 작성하기

### 새로운 카테고리 만들기

카테고리가 있는 글을 작성하고 싶을 때는 카테고리를 먼저 만들어야 합니다.
`/_wiki/category-name.md`같이 파일을 만들고 내용에는 다음을 추가해야 합니다.  

이때 `layout`속성은 `category`가 되어야 합니다.

```markdown
---
layout  : category
title   : 제목을 입력합니다.
summary : 
date    : 2022-10-06 00:00:00 +0900
updated : 2022-10-06 00:00:00 +0900
tag     : 
toc     : true
public  : true
parent  : index
latex   : false
---

* TOC
{:toc}
```

### 위키에 글 등록하기

위키를 작성할 때는 `/_wiki` 폴더 아래에 마크다운으로 파일을 작성합니다. 만약
카테고리 아래에 글을 작성하고 싶을 경우에는 카테고리 이름으로 폴더를 만들고
파일을 추가합니다. 예를 들어 `/_wiki/category-name/document.md`로 만들 수 있습니다.
`layout`은 `wiki`가 되어야 합니다. `parent`는 상위 카테고리 이름을 작성해야
합니다.  

만약 상위 카테고리가 없을 경우에는 `parent`에 `index`를 입력합니다.

```markdown
---
layout  : wiki
title   : 제목을 적습니다
date    : 2022-10-08 11:23:00 +0900
updated : 2022-10-08 11:23:00 +0900
tag     : 
toc     : true
public  : true
parent  : category-name
latex   : false
---

* TOC
{:toc}

내용을 적습니다.
```

__여기서부터 `koremp`가 추가__

## MD Examples

### _wiki/how-to.md

```md
---
layout  : category
title   : HOW TO
summary :
date    : 2017-12-23 18:17:02 +0900
updated : 2018-02-04 15:57:05 +0900
tag     : how-to
resource: 0F/DC51F7-C589-4684-B317-2A41C2212F67
toc     : true
public  : true
parent  : [[index]]
latex   : false
---
* TOC
{:toc}
```

### _wiki/index.md

```md
---
layout  : category
title   : ROOT
date    : 2017-11-26 12:42:03 +0900
toc     : true
public  : true
comment : false
updated : 2021-07-25 18:00:13 +0900
regenerate: true
---


```

### _wiki/mathjax-latex.md

```md
---
layout  : wiki
title   : MathJax로 LaTeX 사용하기
summary :
date    : 2017-11-28 22:56:29 +0900
updated : 2019-11-04 22:13:47 +0900
tag     : latex
resource: 7C/C3DE70-9283-43F3-BF44-0CD01F2D08B6
toc     : true
public  : true
parent  : [[how-to]]
latex   : true
---
* TOC
{:toc}

## 개요

자신의 웹 페이지에서 LaTeX를 사용하고 싶다면 MathJax에서 제공하는 자바스크립트 라이브러리를 쓰면 된다.

## 설치 방법

[MathJax.org](https://www.mathjax.org/)의 [Getting Started](https://www.mathjax.org/#gettingstarted) 페이지에서 제공하는 설명대로 다음의 코드를 자신의 웹 페이지에 추가하면 된다.

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>
```

그러면 해당 웹 페이지에 있는 텍스트 중, `$``$`로 좌우가 감싸인 문자열은 LaTeX 문법으로 인식해, 수식으로 변환해준다.

## 수식 사용 예제

* 간단한 제곱
```latex
$$( a^2 )$$
```
$$( a^2 )$$

* 이차방정식의 근의 공식
```latex
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
```
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

* 행렬
```latex
\begin{pmatrix}
 1 & a_1 & a_1^2 & \cdots & a_1^n \\
 1 & a_2 & a_2^2 & \cdots & a_2^n \\
 \vdots  & \vdots& \vdots & \ddots & \vdots \\
 1 & a_m & a_m^2 & \cdots & a_m^n    
 \end{pmatrix}
```
$$\begin{pmatrix}
 1 & a_1 & a_1^2 & \cdots & a_1^n \\
 1 & a_2 & a_2^2 & \cdots & a_2^n \\
 \vdots  & \vdots& \vdots & \ddots & \vdots \\
 1 & a_m & a_m^2 & \cdots & a_m^n    
 \end{pmatrix}$$

* 나눗셈
```latex
$$
\require{enclose}
\begin{array}{r}
                13  \\[-3pt]
4 \enclose{longdiv}{52} \\[-3pt]
     \underline{4}\phantom{2} \\[-3pt]
                12  \\[-3pt]
     \underline{12}
\end{array}
$$
```
$$
\require{enclose}
\begin{array}{r}
                13  \\[-3pt]
4 \enclose{longdiv}{52} \\[-3pt]
     \underline{4}\phantom{2} \\[-3pt]
                12  \\[-3pt]
     \underline{12}
\end{array}
$$

## 도구

* [detexify.kirelabs.org/classify.html](http://detexify.kirelabs.org/classify.html): 기호를 마우스로 그리면, 필기 인식으로 내가 찾는 기호와 유사한 기호의 목록과 latex 코드를 제안해준다. 매우 편리하다.

## Links

* [MathJax.org](https://www.mathjax.org/)
* [MathJax basic tutorial and quick reference](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference): 많은 예제가 있어 참고할 만하다.
* [jsbin.com/zimuxulawu](http://jsbin.com/zimuxulawu/edit?html,output): 여기서 연습해 볼 수 있다.
* [detexify.kirelabs.org/classify.html](http://detexify.kirelabs.org/classify.html): 내가 찾는 기호와 유사한 기호의 목록과 latex 코드를 제안해준다.

```
