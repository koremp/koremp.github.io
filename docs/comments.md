# GitHub 댓글 설정

댓글은 Giscus만 사용합니다. Giscus 식별자가 설정되지 않으면 댓글 영역을 표시하지 않습니다.
Utterances 자동 대체 기능은 제거했으며, 기존 GitHub Issues의 댓글 데이터는 삭제하지 않습니다.

## Giscus 활성화

1. 저장소 Settings → General → Features에서 Discussions를 활성화합니다.
2. [Giscus 앱](https://github.com/apps/giscus)을 `koremp.github.io` 저장소에 설치합니다.
3. [Giscus 설정](https://giscus.app/ko)에서 `koremp/koremp.github.io`를 입력하고 카테고리를 선택합니다.
4. 생성된 스크립트의 `data-repo-id`, `data-category`, `data-category-id`를 `astro-paper.config.ts`의 `features.comments.giscus`에 입력합니다.

```ts
comments: {
  repo: "koremp/koremp.github.io",
  giscus: {
    repoId: "생성된 data-repo-id",
    category: "Announcements",
    categoryId: "생성된 data-category-id",
  },
},
```

실제 식별자를 입력한 후 배포하고 댓글 작성을 확인합니다. 별도 서버나 비밀 API 키는 필요하지 않습니다.
한국어 UI, 글 경로별 댓글 연결, 리액션, 입력창 상단 배치, 라이트/다크 모드 연동을 사용합니다.
댓글을 끄려면 `features.comments`를 `false`로 설정합니다.

기존 Utterances 앱의 GitHub 접근 권한까지 해제하려면 GitHub의 설치된 앱 설정에서 해당 저장소 접근을 제거하거나 앱을 삭제하세요.
