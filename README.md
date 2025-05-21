# GitHub Blog Editor

GitHub를 블로그로 활용하는 에디터 프로젝트입니다.

## 기능

* GitHub 저장소에 블로그 포스트 작성
* 제목과 내용 작성
* 파일 첨부 기능
* JSON 형식으로 포스트 저장

## 설치 방법

1. 저장소 클론

```bash
git clone https://github.com/Seokhyun0079/git-blog-editor.git
cd git-blog-editor
```

2. 의존성 설치

```bash
npm install
```

3. 환경 변수 설정
`.env` 파일을 프로젝트 루트에 생성하고 다음 내용을 입력하세요:

```
PORT=5000
GITHUB_TOKEN=your_github_token_here
GITHUB_OWNER=your_github_username
GITHUB_REPO=your_repository_name
```

## 실행 방법

개발 서버 실행:

```bash
npm run dev
```

프론트엔드와 백엔드 동시 실행:

```bash
npm run dev:full
```

## API 엔드포인트

### 포스트 작성

* POST `/api/posts`
* Content-Type: multipart/form-data
* Body:  
   * title: 포스트 제목  
   * content: 포스트 내용  
   * files: 첨부 파일 (선택사항)

### 포스트 목록 조회

* GET `/api/posts`

## 기술 스택

* Backend: Node.js, Express
* Frontend: React
* GitHub API: Octokit
* File Upload: Multer

---

# GitHub Blog Editor

GitHubをブログとして活用するエディタープロジェクトです。

## 機能

* GitHubリポジトリにブログポストを作成
* タイトルと内容の作成
* ファイル添付機能
* JSON形式でポストを保存

## インストール方法

1. リポジトリのクローン

```bash
git clone https://github.com/Seokhyun0079/git-blog-editor.git
cd git-blog-editor
```

2. 依存関係のインストール

```bash
npm install
```

3. 環境変数の設定
`.env`ファイルをプロジェクトのルートに作成し、以下の内容を入力してください：

```
PORT=5000
GITHUB_TOKEN=your_github_token_here
GITHUB_OWNER=your_github_username
GITHUB_REPO=your_repository_name
```

## 実行方法

開発サーバーの実行：

```bash
npm run dev
```

フロントエンドとバックエンドの同時実行：

```bash
npm run dev:full
```

## APIエンドポイント

### ポスト作成

* POST `/api/posts`
* Content-Type: multipart/form-data
* Body:  
   * title: ポストのタイトル  
   * content: ポストの内容  
   * files: 添付ファイル（オプション）

### ポスト一覧の取得

* GET `/api/posts`

## 技術スタック

* Backend: Node.js, Express
* Frontend: React
* GitHub API: Octokit
* File Upload: Multer

---

This project was created by [Seokhyun0079](https://github.com/Seokhyun0079/git-blog-editor)
