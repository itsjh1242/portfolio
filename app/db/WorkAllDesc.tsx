export interface WorkAllDescInterface {
  [key: string]: {
    pid: string;
    title: string;
    summary: string;
    stacks: string[];

    detail: {
      header: {
        [key: string]: { title: string; content: string[] };
      };
      long_summary: string[];
      func: {
        [key: string]: { ui: boolean; name: string; desc: string; func: string[] | null };
      };
      trouble: { [key: string]: { problem: string[]; solve: string[] | null; result: string[] | null } };
      review: string[];
      github: string | null;
      demo: string | null;
    };
  };
}

// title: {
//   pid: "",
//   title: "",
//   summary: "",
//   stacks: [""],
//   fontColor: "",
//   detail: {
//     header: {
//       category: { title: "카테고리", content: ["개인 프로젝트 (졸업 작품)"] },
//       period: { title: "기간", content: ["2000년 0 ~ 0월"] },
//       hc: { title: "인원", content: ["1명"] },
//       role: { title: "역할", content: [""] },
//       fe: { title: "프론트엔드", content: [""] },
//       be: { title: "백엔드", content: [""] },
//       db: { title: "데이터베이스", content: [""] },
//       scm: { title: "형상관리", content: [""] },
//       deploy: { title: "배포", content: ["-"] },
//       refer: { title: "관련 활동", content: [""] },
//     },
//     long_summary: [
//       "",
//     ],
//     func: {
//       base: { ui: true, name: "메인 화면", desc: "랜딩 화면입니다.", func: [""] },
//     },
//     trouble: {
//       "": [
//         "",

//       ],
//     },
//     review: [
//       "",
//     ],
//     github: "",
//     demo: "",
//   },
// },

export const WorkAllDesc: WorkAllDescInterface = {
  ai_chatbot: {
    pid: "ai_chatbot",
    title: "긍정적 감정 유발을 위한 AI챗봇 기반 일기작성 시스템",
    summary: "챗봇과의 대화를 통한 감정분석 및 일기작성",
    stacks: ["python", "mysql", "html", "figma"],
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트 (졸업 작품)", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 6월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["아이디어 도출, 풀스택 개발, KoBERT 모델 학습 데이터 전처리"] },
        fe: { title: "프론트엔드", content: ["HTML", "CSS", "JQuery", "Figma"] },
        be: { title: "백엔드", content: ["Flask"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["-"] },
        refer: {
          title: "관련 활동",
          content: [
            "2024 한국전자통신학회(KIECS) 논문 게재",
            "2024 KCI 등재",
            "2023 한국컴퓨터정보학회(KSCI) 우수논문상",
            "특허 출원(10-2023-0178771)",
            "부산디지털혁신아카데미(BDIA 2023) 장려상",
            "동서대학교 쇼미더동서AI 경진대회 특별상",
          ],
        },
      },
      long_summary: [
        "본 프로젝트는 자연어 처리 분야에서 주목받고 있는 감정 분석 모델인 KoBERT와 GPT-3 Turbo 모델을 활용하여 사용자가 입력한 텍스트에서 감정을 추출하고, 이를 기반으로 긍정적인 감정을 유도하는 인공지능 챗봇 기반 일기 작성 시스템입니다.",
        "챗봇 시스템은 보다 자연스러운 대화를 유도하기 위해 GPT-3 Turbo API를 사용했습니다.",
        "프로젝트의 핵심 기능인 '감정 분석'은 KoBERT 모델을 사용했습니다.",
        "GPT-3 Turbo 모델에도 감정 분석 기능이 있지만, 분류된 감정 클래스를 기반으로 ChatGPT의 응답을 유도하기 위해 AI_Hub에서 제공한 대량의 텍스트 데이터를 KoBERT 모델에 학습시켜 사용했습니다.",
        "KoBERT 모델 데이터셋으로 활용된 '웰니스 대화 데이터셋'은 실제 세브란스 상담 데이터를 바탕으로 하며, 359가지 카테고리의 감정 클래스로 구성되어 있습니다.",
        "감정 분석 모델과 일기 생성 알고리즘을 활용하여 사용자가 텍스트를 입력하면 분류된 7가지 감정 카테고리를 기준으로 감정을 추출하고, 챗봇은 해당 감정을 고려하여 답변을 생성합니다. 또한, GPT-3 Turbo 모델이 연산을 수행할 수 있게 대화 데이터를 전처리하여 일기를 생성하는 방식을 제안했습니다.",
      ],
      func: {
        base: { ui: true, name: "메인 화면", desc: "랜딩 화면입니다.", func: [""] },
        chat: {
          ui: true,
          name: "채팅 화면",
          desc: "사용자와 챗봇이 대화를 주고받을 수 있는 화면입니다.",
          func: ["테스트 데이터 생성", "테스트 데이터 초기화", "채팅"],
        },
        "diary-list": {
          ui: true,
          name: "일기 목록 화면",
          desc: "생성한 일기의 목록을 보여주는 화면입니다.",
          func: ["채팅 데이터 기반 일기 생성"],
        },
        "diary-detail": {
          ui: true,
          name: "일기 상세 화면(감정 분포도)",
          desc: "생성한 일기의 감정 분포도를 보여주는 화면입니다.",
          func: null,
        },
        "diary-detail-foryou": {
          ui: true,
          name: "일기 상세 화면(당신에게 해주고 싶은 말)",
          desc: "생성한 일기를 기반으로 사용자에게 전하는 따뜻한 말을 보여주는 화면입니다.",
          func: null,
        },
        "diary-detail-quote": {
          ui: true,
          name: "일기 상세 화면(누군가 나에게 해주는 말)",
          desc: "생성한 일기를 기반으로 사용자에게 전하는 유명한 명언을 보여주는 화면입니다.",
          func: null,
        },
      },
      trouble: {
        "API 호출 응답 후 부분 갱신": {
          problem: [
            "GPT-3 Turbo API를 사용하여 사용자의 채팅 입력 값을 전송할 때, API로부터 반환된 데이터가 데이터베이스에 적재되기 전에 렌더링되어 데이터를 참조하지 못하는 문제를 겪었습니다.",
          ],
          solve: ["해당 문제는 API로부터 응답이 반환되면 전체 페이지가 아닌 일부분만 갱신하도록 Javascript의 AJAX 방식을 사용하여 해결했습니다."],
          result: ["데이터베이스에 저장된 사용자의 채팅 데이터를 전처리하고 GPT-3 API를 사용하여 일기 데이터를 반환할 때에도 같은 방법을 사용했습니다."],
        },
        "KoBERT 모델 학습": {
          problem: ["SKT Brain에서 개발한 KoBERT 오픈소스 코드를 참고하여 본 프로젝트에 적합하게 사용하는 과정에서, 메모리 부족 관련 오류가 발생했습니다."],
          solve: null,
          result: [
            "KoBERT 모델의 학습에 필요한 여러 파라미터 값(Epoch, Token, Lenght 등) 조정을 시도했지만 해결되지 않아, 고성능의 그래픽 카드와 메모리가 탑재된 데스크탑을 지원받아 해결했습니다.",
          ],
        },
      },
      review: [
        "'긍정적 감정 유발을 위한 AI 챗봇 기반 일기 작성 시스템'은 제가 졸업 작품으로 진행한 1인 개발 프로젝트입니다.",
        "이 프로젝트로 컴퓨터정보학회에서 구두 발표를 할 기회를 얻었고, 본 학회에서 우수 논문 상을 수상했습니다. 또한 한국전자통신학회 논문 게재 및 특허 출원을 경험했습니다.",
        "사람이 살아가면서 느끼는 감정에 관심을 가지게 되었고, 사람은 하루에도 수많은 감정을 느끼지만 모두 기억하기에는 너무 바쁜 하루를 보낸다는 생각에서 '우리에게 익숙한 채팅으로 편하게 대화하고 자기 전에 내가 느낀 감정이 무엇인지 알아보자'라는 아이디어를 도출하게 되었습니다.",
        "이 프로젝트를 개발하면서 기존 BERT의 한국어 성능 한계를 극복하기 위해 개발된 KoBERT 모델을 직접 학습시키고, 학습된 모델을 프로젝트에 적용했습니다.",
        "처음 경험하는 '모델 학습' 과정에서 오픈 소스로 공개된 코드만 참고하여 진행하는 데 많은 어려움이 있었습니다. 그래픽 카드 성능 문제로 인한 메모리 부족, 운영체제와 torch 드라이버의 호환성 문제 등으로 많은 시간을 소요했습니다.",
        "프로젝트를 정해진 시간 내에 개발하기 위해 전체 기능보다는 핵심 기술에 집중하여 부분적인 공부와 이해에 집중했습니다.",
        "또한, Python의 웹 프레임워크인 Flask를 사용하면서 함수나 메서드에 매핑할 수 있는 라우팅 메커니즘을 익혔습니다.",
        "프로젝트를 진행하면서 웹 애플리케이션 개발 시 비동기 데이터 통신에 대해 깊은 이해 없이 사용법만 익힌 채 개발했다는 것을 깨달았습니다. '이 코드에서 왜 Async를 사용하는가?'라는 질문에 '데이터를 요청하고 기다리는 동안 다른 작업을 하기 위해서'라고만 답할 수 있는 나를 발견하고, '왜 사용해야 하는지'에 대한 이해를 기반으로 코딩하자는 생각을 하게 되었습니다.",
      ],
      github: "https://github.com/itsjh1242/diary-writing-system/tree/main",
      demo: null,
    },
  },
  quiz_me: {
    pid: "quiz_me",
    title: "퀴즈 미",
    summary: "퀴즈를 만들어 친구들에게 공유하는 서비스",
    stacks: ["react", "tw", "next", "firebase", "ts", "figma"],

    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 애플리케이션 서비스"] },
        period: { title: "기간", content: ["2024년 5월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["UI 디자인, DB설계, FE개발"] },
        fe: { title: "프론트엔드", content: ["React(배포용)", "Tailwind CSS", "TypeScript", "Next.js(초기 개발)", "Figma"] },
        be: { title: "백엔드", content: ["-"] },
        db: { title: "데이터베이스", content: ["Firebase"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["gh-pages(Github)"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "이 프로젝트는 제가 개인적으로 개발한 퀴즈 공유 서비스입니다.",
        "사용자는 퀴즈를 생성하고, 해당 퀴즈의 링크를 친구들에게 공유할 수 있습니다.",
        "친구들은 링크를 통해 접속하여 퀴즈를 풀 수 있으며, 퀴즈를 푼 후에는 자신이 맞춘 정답과 틀린 오답을 확인할 수 있습니다.",
        "퀴즈를 만든 사람은 누가 퀴즈에 참여했는지, 참여자들이 어떤 답을 선택했는지 확인할 수 있습니다.",
        "처음에는 Next.js를 사용하여 프로젝트를 시작했으나, GitHub Pages에 배포할 때 새로 생성되는 uuid에 대한 동적 라우팅 문제로 React로 전환하였습니다.",
        "React Router를 활용하여 동적 라우팅을 구현하고, Firebase를 통해 데이터를 관리하며, Tailwind CSS로 스타일링을 적용하여 심플하고 직관적인 UI를 개발했습니다.",
      ],
      func: {
        base: { ui: true, name: "메인 화면", desc: "랜딩 화면입니다.", func: null },
        login: { ui: true, name: "로그인 화면", desc: "사용자 로그인 화면입니다.", func: ["Firebase Auth를 활용한 로그인 기능"] },
        not_user: {
          ui: true,
          name: "로그인 유효성 검사 화면",
          desc: "로그인 된 사용자가 아닐 때 표시되는 화면",
          func: ["로그인 유효성 검사 기능"],
        },
        create: {
          ui: true,
          name: "퀴즈 만들기 화면",
          desc: "로그인 된 사용자가 퀴즈를 만드는 화면입니다.",
          func: null,
        },
        edit: {
          ui: true,
          name: "퀴즈 만들기 수정 화면",
          desc: "로그인 된 사용자가 퀴즈를 만들 때, 내용을 수정하는 화면입니다.",
          func: null,
        },
        share: {
          ui: true,
          name: "퀴즈 공유 화면",
          desc: "로그인 된 사용자가 퀴즈를 만들고(퀴즈 항목 1개 이상, 10개 이하) 공유할 수 있는 링크를 제공하는 화면",
          func: ["uuid 생성을 활용한 동적 라우팅 기능", "퀴즈 생성 결과 Firebase에 저장"],
        },
        quiz: {
          ui: true,
          name: "퀴즈 풀기 화면",
          desc: "로그인 여부에 상관없이 퀴즈 링크가 있는 사용자가 퀴즈를 푸는 화면",
          func: ["uuid를 쿼리로하여 Firebase에서 해당 퀴즈 가져오기"],
        },
        result: {
          ui: true,
          name: "퀴즈 풀기 결과 화면",
          desc: "퀴즈를 풀고 자신이 맞춘 정답과 틀린 오답을 확인하는 화면",
          func: ["퀴즈 결과 Firebase에 저장"],
        },
        myquiz: {
          ui: true,
          name: "내가 만든 퀴즈 목록 화면",
          desc: "로그인 된 사용자가 만든 퀴즈 목록에 대한 화면",
          func: ["Firebase에서 현재 사용자가 만든 퀴즈 가져오기"],
        },
        myquiz_detail: {
          ui: true,
          name: "내가 만든 퀴즈 상세 화면",
          desc: "내가 만든 퀴즈에 대한 상세화면",
          func: ["내가 만든 퀴즈에 참가한 사람 확인", "참가자 점수 및 답안 확인", "퀴즈 활성화 및 비활성화 기능"],
        },
      },
      trouble: {
        "새로 생성되는 UUID에 대한 동적 라우팅": {
          problem: [
            "프로젝트 초기에는 Next.js를 사용하여 개발을 시작했습니다.",
            "Next.js는 SSR(Server-Side Rendering)과 SSG(Static Site Generation)를 제공하여 성능과 SEO에 유리하지만, 프로젝트를 GitHub Pages에 배포할 때 동적 라우팅에 문제가 발생했습니다.",
            "예를 들어, [uuid].js 파일을 만들어서 UUID에 따른 동적 페이지를 생성할 수 있지만, 생성된 동적 경로는 404Error를 반환하는 등 GitHub Pages에서 작동하지 않았습니다.",
          ],
          solve: [
            "[ Next.js 설정 변경 ]",
            "처음에는 next.config.js 파일에서 exportPathMap을 설정하여 정적 파일로 빌드하려고 시도했습니다.",
            "하지만, 새로운 UUID가 계속해서 생성되기 때문에 사용자가 퀴즈를 만들 때마다 매번 빌드를 다시 해야 한다면 정상적인 서비스를 제공하지 못한다고 판단했습니다.",
            "[ 라우팅 라이브러리 탐색 ]",
            "동적 라우팅을 지원하는 다른 라이브러리나 방법을 찾기 위해 조사를 했지만, GitHub Pages의 한계로 인해 적합한 해결책을 찾지 못했습니다.",
            "[ React로 전환 ]",
            "결국, 프로젝트의 프레임워크를 Next.js에서 React로 전환하기로 결정했습니다. React Router를 사용하면 클라이언트 사이드에서 동적 라우팅을 쉽게 구현할 수 있기 때문입니다.",
          ],
          result: [
            "React로 전환한 후, React Router를 사용하여 동적 라우팅을 설정했습니다.",
            "이를 통해 UUID를 포함한 퀴즈 링크를 생성하고, 사용자가 해당 링크로 접속할 때 정상적으로 라우팅 되었습니다.",
          ],
        },
        "배포 후 스타일링 깨짐": {
          problem: ["로컬 환경에서는 정상적으로 보이던 스타일이 GitHub Pages에 배포한 후 깨지는 문제가 발생했습니다."],
          solve: [
            "Tailwind CSS의 Purge 설정을 확인하고, 빌드 시 사용되지 않는 CSS 클래스가 제거되지 않도록 설정을 수정했습니다. 또한, 배포 후 캐시를 강제로 갱신하여 최신 스타일이 반영되도록 했습니다.",
          ],
          result: null,
        },
      },
      review: [
        "이번 프로젝트는 '퀴즈 미'라는 이름으로 진행된 퀴즈 생성 및 공유 서비스로, 개인 프로젝트로서 많은 것을 배울 수 있는 기회였습니다.",
        "처음에는 Next.js를 사용하여 프로젝트를 시작했습니다. Next.js는 SSR과 SSG 기능을 제공하여 성능 면에서 매우 유리했지만, GitHub Pages에 배포할 때 동적 라우팅 문제에 부딪히게 되었습니다. [uuid].js 파일을 통해 동적 페이지를 생성하려 했으나, GitHub Pages에서는 이 방식이 제대로 작동하지 않았습니다. 여러 가지 설정을 변경해 보았지만, 현존하는 Next.js의 한계로 사용자가 퀴즈를 생성할 때마다 빌드를 다시 해야 하는 방법밖에 없었습니다.",
        "결국 Next.js에서 React로 전환하기로 결정했습니다. React는 클라이언트 사이드에서 동적 라우팅을 쉽게 구현할 수 있는 React Router를 제공하며, 이 프로젝트의 요구사항에 더 적합하다고 판단했습니다. React로 전환한 후, React Router를 사용하여 UUID 기반의 동적 라우팅을 설정했고, 이로 인해 사용자가 생성한 퀴즈 링크의 라우팅 문제가 해결됐습니다.",
        "배포 후 스타일링이 깨지는 문제도 발생했습니다. 로컬 환경에서는 정상적으로 보이던 스타일이 GitHub Pages에 배포된 후에는 깨져 보였습니다. 이를 해결하기 위해 Tailwind CSS의 purge 배열 내용을 변경하여 현재 프로젝트 내에서 사용하고 있는 Tailwind CSS 속성만 해석해서 빌드할 수 있도록 했습니다.",
        "이번 프로젝트를 통해 프레임워크 전환의 중요성과 동적 라우팅의 구현 방법을 깊이 이해할 수 있었습니다. 또한, 배포 환경에서 발생할 수 있는 스타일링 문제를 해결하는 과정에서 많은 것을 배웠습니다. 이러한 문제들을 해결하면서 코드의 유지보수성과 가독성을 높이는 방법에 대해서도 고민해 볼 수 있었습니다.",
        "앞으로는 이번 프로젝트에서 얻은 경험을 바탕으로 더 나은 서비스를 개발하고 싶습니다. 이번 프로젝트는 제 개발 역량을 한 단계 더 발전시키는 계기가 되었으며, 앞으로의 프로젝트에서도 이와 같은 도전 정신을 잃지 않고 계속해서 성장해 나가고 싶습니다.",
      ],
      github: "https://github.com/itsjh1242/quiz-me",
      demo: "https://itsjh1242.github.io/quiz-me/",
    },
  },
  realtime_chat: {
    pid: "realtime_chat",
    title: "실시간 채팅 플랫폼",
    summary: "Next.js와 Firebase를 사용한 실시간 채팅 플랫폼",
    stacks: ["next", "firebase", "tw", "ts", "figma", "github"],
    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2024년 6월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["프로젝트 구상", "전체 개발"] },
        fe: { title: "프론트엔드", content: ["Next.js", "TailwindCSS", "Figma"] },
        be: { title: "백엔드", content: ["-"] },
        db: { title: "데이터베이스", content: ["Firebase"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["gh-pages"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "본 프로젝트는 실시간 데이터 통신 및 웹 애플리케이션에 대한 이해도를 높이고자 개발한 실시간 채팅 플랫폼입니다.",
        "개발하면서 사용자와의 실시간 상호작용을 가능하게 하고, 실시간 데이터를 효율적으로 처리하여 사용자 화면에 적절히 배치하는 것을 목표로 했습니다.",
        "프로젝트는 Next.js, Firebase, TailwindCSS, TypeScript를 활용하여 구현되었으며, 이는 최신 웹 개발 트렌드와 기술을 적용하고자 하는 목적을 포함하고 있습니다.",
        "Firebase Authentication을 이용하여 사용자의 로그인 및 회원가입 기능을 구현하였고, 사용자 데이터를 Firebase Firestore에 저장하였습니다.",
        "TailwindCSS를 사용하여 일관된 디자인과 반응형 UI를 구현했고, TypeScript를 사용하여 코드의 안정성과 유지보수성을 높였습니다.",
        "본 프로젝트는 모바일과 데스크톱 상호 호환 가능한 반응형 웹입니다.",
      ],
      func: {
        base: { ui: true, name: "랜딩 화면", desc: "프로젝트 랜딩 화면입니다.", func: null },
        login: {
          ui: true,
          name: "로그인 화면",
          desc: "Firebase Auth 기능을 통해 사용자를 관리합니다.",
          func: ["로그인"],
        },
        main: { ui: true, name: "메인 화면", desc: "로그인 한 사용자의 메인 화면입니다.", func: null },
        edit: {
          ui: true,
          name: "프로필 정보 수정 화면",
          desc: "사용자의 프로필 정보를 수정할 수 있는 화면입니다.",
          func: ["이름 및 태그로 구분", "유효성 검사", "무결성 검사"],
        },
        find: {
          ui: true,
          name: "친구 검색 성공 화면",
          desc: "찾고자하는 사용자의 이름과 태그를 정확히 입력했을 때, 사용자가 맞는지 확인하는 화면입니다.",
          func: ["유효성 검사"],
        },
        request: {
          ui: true,
          name: "친구 요청 후 화면",
          desc: "친구 요청을 보낸 후 화면입니다.",
          func: ["친구 요청 시 1대1 채팅방 생성"],
        },
        response: {
          ui: true,
          name: "상대방 사용자 화면",
          desc: "친구 요청을 받은 사용자의 화면입니다.",
          func: null,
        },
        response_ok: {
          ui: true,
          name: "수락 시 상대방 사용자 화면",
          desc: "친구 요청을 수락한 후 사용자 화면입니다.",
          func: ["친구 수락 시 상호 친구 등록"],
        },
        chat: {
          ui: true,
          name: "채팅 화면",
          desc: "친구인 사용자와 실시간으로 채팅을 할 수 있는 화면",
          func: ["실시간 채팅", "읽음/안읽음 표시 기능", "이모티콘 기능"],
        },
      },
      trouble: {
        "친구 및 채팅 데이터 실시간 동기화 시 참조 오류": {
          problem: [
            "친구 요청과 채팅 데이터를 실시간으로 동기화하기 위해서 Firebase Snapshot을 사용했습니다.",
            "실시간 데이터 더미가 동기화되기 전에 웹 페이지를 렌더링하여 없는 값에 대한 참조 오류가 발생했습니다.",
          ],
          solve: [
            "친구 및 채팅 데이터가 동기화되기 전 상태를 분기점으로 설정하여 데이터가 없더라도 웹 페이지가 렌더링 되게끔 Early Return Pattern을 사용했습니다.",
          ],
          result: ["결과적으로 데이터가 존재하는 상황과 대기 중인 상황을 분기하여 웹 페이지 렌더링에 문제가 없도록 하였습니다."],
        },
        "실시간 데이터 동기화 후 웹 페이지에 렌더링 되지 않는 문제": {
          problem: [
            "실시간 데이터 동기화가 이루어져도 웹 페이지에 업데이트가 되지 않는 문제가 발생했습니다.",
            "특히, Firebase Firestore의 실시간 데이터 동기화 기능을 사용할 때 이러한 문제가 두드러졌습니다.",
          ],
          solve: [
            "데이터 변경 및 동기화 시 발생하는 상태 변화를 추적하고, 필요할 때마다 React의 상태 관리 기능(useEffect, useState)을 통해 컴포넌트를 강제로 재렌더링하도록 했습니다.",
          ],
          result: ["데이터 변경 및 동기화 후에도 웹 페이지가 올바르게 업데이트되었으며, 사용자에게 실시간 변경 사항을 정확히 보여줄 수 있었습니다."],
        },
        "Snapshot을 사용한 실시간 동기화 시 무한 루프 발생 및 데이터 전송 초과 문제": {
          problem: [
            "Firebase Firestore의 Snapshot 리스너를 사용하여 실시간 동기화 시 무한 루프에 빠지는 문제가 발생했습니다.",
            "이로 인해 동일한 데이터가 반복적으로 전송되어 네트워크 사용량이 급증하고, 애플리케이션의 성능이 저하되었습니다.",
          ],
          solve: ["Snapshot 리스너 설정 시, 데이터 변경 이벤트의 중복 처리를 방지하기 위해 조건문을 추가하여 불필요한 데이터 업데이트를 막았습니다."],
          result: [
            "무한 루프 문제를 해결하고, 데이터 전송 효율을 높여 네트워크 사용량을 최적화했습니다.",
            "실시간 동기화 시 안정성이 향상되었으며, 애플리케이션의 성능이 개선되었습니다.",
          ],
        },
        "반응형 디자인 구현 시 UI 깨짐 현상": {
          problem: [
            "다양한 디바이스에서 반응형 디자인을 적용하는 과정에서 UI가 깨지는 문제가 발생했습니다.",
            "특히, 모바일 디바이스에서 특정 레이아웃이 의도한 대로 작동하지 않았습니다.",
          ],
          solve: [
            "TailwindCSS의 유틸리티 클래스를 활용하여 다양한 화면 크기에서 레이아웃이 정상적으로 작동하도록 수정했습니다.",
            "미디어 쿼리를 사용하여 디바이스 크기별로 레이아웃을 조정하고, 브라우저 개발자 도구를 통해 테스트를 진행했습니다.",
          ],
          result: ["모든 디바이스에서 일관된 사용자 경험을 제공할 수 있도록 반응형 디자인을 성공적으로 구현했습니다."],
        },
      },
      review: [
        "본 프로젝트를 통해 FE/BE 전반에 걸친 다양한 기술을 접하고, 이를 실질적으로 구현하는 과정을 경험할 수 있었습니다.",
        "특히 실시간 데이터 동기화의 복잡성을 이해하고 이를 효율적으로 처리하는 방법을 학습하였습니다.",
        "또한, Firebase와 같은 BaaS(Backend as a Service) 솔루션을 활용하여 서버 관리의 부담을 덜고, 빠르게 프로토타입을 개발할 수 있었습니다.",
        "사용자 경험을 향상시키기 위해 반응형 디자인을 구현하여 다양한 디바이스에서 최적의 사용자 인터페이스를 제공하였습니다.",
        "프로젝트의 모든 단계를 혼자서 수행하면서 문제 해결 능력과 자기 주도적인 학습 능력을 기를 수 있었습니다.",
        "본 프로젝트를 통해서 실시간 애플리케이션 개발에 대한 자신감을 얻었고, 향후 더욱 복잡한 웹 애플리케이션 개발에 도전할 준비가 되었다고 생각합니다.",
      ],
      github: "https://github.com/itsjh1242/nextjs-chat",
      demo: "https://itsjh1242.github.io/nextjs-chat/",
    },
  },
  portfolio: {
    pid: "portfolio",
    title: "직접 개발한 포트폴리오 웹 애플리케이션",
    summary: "개발자로서의 역량을 보여주는 개인 포트폴리오 웹 애플리케이션입니다.",
    stacks: ["next", "tw", "figma"],
    detail: {
      header: {
        category: { title: "카테고리", content: ["웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2024년 4월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["웹 디자인", "FE 개발"] },
        fe: { title: "프론트엔드", content: ["Next.js", "Tailwind CSS", "Figma"] },
        be: { title: "백엔드", content: ["-"] },
        db: { title: "데이터베이스", content: ["-"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["gh-pages(Github)"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "이 프로젝트는 제 개발 역량을 시각적으로 보여주기 위해 개발한 포트폴리오 웹 애플리케이션입니다.",
        "사용자는 메인 화면에서 제 간단한 소개와 사용할 수 있는 기술 스택 및 활용 가능한 정도, 프로젝트 페이지에서 상세한 프로젝트 정보를 볼 수 있습니다.",
        "Next.js를 사용하여 서버 사이드 렌더링과 정적 사이트 생성 기능을 활용했고, Tailwind CSS로 스타일링을 적용하여 일관성 있는 디자인을 구현했습니다.",
        "Figma를 사용하여 UI/UX 디자인을 설계하고, 실제 개발에 적용하였습니다.",
        "프로젝트의 모든 소스 코드는 Github에서 관리하고 있으며, Github Pages를 통해 배포하고 있습니다.",
      ],
      func: {
        base: { ui: true, name: "메인 화면", desc: "포트폴리오 메인 화면입니다.", func: ["개인 소개 및 사용 가능한 기술스택 표시"] },
        project: { ui: true, name: "프로젝트 화면", desc: "진행했던 프로젝트들이 모여져 있는 페이지입니다.", func: ["프로젝트 별 간단한 설명"] },
        detail: {
          ui: true,
          name: "프로젝트 상세 화면",
          desc: "프로젝트와 관련된 정보를 상세히 기술한 페이지입니다.",
          func: ["프로젝트 상세 설명, 사용 기술, 문제 해결 과정 및 결과"],
        },
      },
      trouble: {
        "스타일링 이슈": {
          problem: ["로컬 환경에서는 정상적으로 보이던 스타일이 Github Pages에 배포한 후 깨지는 문제가 발생했습니다."],
          solve: [
            "Tailwind CSS의 purge 설정을 확인하고, 빌드 시 사용되지 않는 CSS 클래스가 제거되지 않도록 설정을 수정했습니다. 또한, 배포 후 캐시를 강제로 갱신하여 최신 스타일이 반영되도록 했습니다.",
          ],
          result: ["스타일링 문제가 해결되어 모든 페이지가 예상대로 렌더링되었습니다."],
        },
        "빌드 시 동적 페이지 생성 불가 오류": {
          problem: [
            "배포 과정 중 프로젝트를 빌드할 때, Next.js의 특성상 동적 라우팅이 포함된 페이지는 정적으로 생성할 수 없어 빌드가 안되는 상황이 발생했습니다.",
          ],
          solve: [
            "Next.js의 generateStaticParams를 활용하여 동적 라우팅이 필요한 페이지의 경로를 미리 생성했습니다.",
            "필요한 모든 경로를 미리 정의하여 정적 파일로 생성되도록 설정함으로써 빌드 과정에서의 오류를 해결했습니다.",
          ],
          result: ["모든 동적 페이지가 정상적으로 생성되었고, 빌드 과정에서 발생하던 오류가 해결되었습니다."],
        },
      },
      review: [
        "이번 포트폴리오 프로젝트는 저의 개발 및 디자인 역량을 종합적으로 보여줄 수 있는 좋은 기회였습니다.",
        "Next.js와 Tailwind CSS를 활용하여 빠르고 일관성 있는 UI를 구현할 수 있었으며, Figma를 통해 웹 애플리케이션 디자인 레이아웃의 일관성을 유지했습니다.",
        "Github Pages를 통해 배포하면서 실제 배포 환경에서 발생할 수 있는 문제들을 해결하는 경험도 쌓을 수 있었습니다.",
        "이 프로젝트를 통해 얻은 경험을 바탕으로 앞으로 더 나은 웹 애플리케이션을 개발할 수 있을 것이라 확신합니다.",
      ],
      github: "https://github.com/itsjh1242/portfolio",
      demo: "https://itsjh1242.github.io/portfolio/",
    },
  },
  reddot_hair_catalog: {
    pid: "reddot_hair_catalog",
    title: "Touchable Hair Catalogue for the Blind",
    summary: "시각장애인을 위한 만질 수 있는 3D 헤어 카탈로그",
    stacks: ["reddot"],

    detail: {
      header: {
        category: { title: "카테고리", content: ["제품 디자인", "Design Award"] },
        period: { title: "기간", content: ["2022년 3월 ~ 7월"] },
        hc: { title: "인원", content: ["4명"] },
        role: { title: "역할", content: ["아이디어 도출", "프로토타입 제작", "판넬 디자인 및 영상 자료 서치"] },
        refer: {
          title: "관련 활동",
          content: ["2023 Young One Adc, Merit 수상", "2022 Red dot Award, Best of the Best 수상", "2022 Mad Stars, Crystal 수상"],
        },
      },
      long_summary: [
        "본 제품 디자인은 아이데이션 융합 실습 과목을 수강하면서 저를 포함한 팀원 네 명과 소프트웨어 전공 지도교수님, 디자인 전공 지도교수님의 노력을 통해 만들어졌습니다.",
        "본 디자인은 앞을 보지 못하는 시각장애인들을 고려하여, 촉각을 활용해 만질 수 있는 헤어 카탈로그를 만들면 어떨까?하는 생각에서 시작되었습니다.",
        "본 3D 카탈로그는 유행하는 헤어 디자인을 3D 프린터를 이용해 입체적으로 제작하고, 해당 모형을 카탈로그에 접목시켜 촉각으로 확인할 수 있습니다.",
      ],
      func: {
        base: { ui: true, name: "디자인 판넬", desc: "본 디자인 작품을 나타낸 판넬입니다.", func: null },
        news: {
          ui: true,
          name: "부산일보 기사",
          desc: "Best of the Best 수상 당시 기사입니다. (출처: 부산일보, https://www.busan.com/view/busan/view.php?code=2022091418321197983)",
          func: null,
        },
      },
      trouble: {
        "아이디어 의견 충돌": {
          problem: [
            "본 제품 디자인을 도출하기 까지 많은 아이디어가 나왔고, 팀원은 모두 각자 다른 전공을 공부했기에 제품을 바라보는 시각이 달랐습니다.",
            "소프트웨어 전공 팀원은 모든 문제에 소프트웨어를 접목시키길 원했고, 디자인 전공 팀원은 디자인 요소를 중점으로 문제를 바라보았습니다.",
          ],
          solve: null,
          result: [
            "이러한 의견 충돌이 있을 때, 자기의 주장만이 옳다는 방식의 대화 흐름은 아이디어 회의의 본질적인 역할을 방해한다고 생각하여 각자가 아이디어를 내고 아이디어에 대한 추가적인 자료 조사와 객관적인 피드백을 통해 잘한 점과 부족한 부분을 이야기하는 자유로운 회의 방식으로 해결했습니다. ",
          ],
        },
      },
      review: [
        "레드닷 디자인 어워드에 본 작품을 출품하기까지 팀원 각자의 엄청난 노력이 있었습니다.",
        "저를 포함한 두 명은 소프트웨어공학 전공 학생으로써, 대회 출품에 필요한 영상 및 디자인 자료들을 찾고 이해를 돕기 위해 3D 실제 프로토타입을 제작하였습니다.",
        "광고홍보 전공 학생은 출품 영상 제작을 맡았고, 디자인 전공 학생은 본 프로젝트의 대표 판넬 디자인을 제작했습니다.",
        "그 결과 본 디자인 작품은 출품작 중 상위 1%에만 수여하는 “베스트 오브 더 베스트”에 선정되었습니다.",
        "전 세계에서 가장 오랜 역사와 큰 규모를 가진 가장 권위 있는 대회이기에 입상만 하여도 좋다는 생각을 했는데, 명예상을 받았다는 소식은 저의 가능성을 무한대로 뻗어나가게끔 하는 계기가 되었습니다.",
        "각자 다른 전공을 가진 학생들이 모여 머리를 맞대고 아이디어를 도출하는 것이 쉽지만은 안았습니다.",
        "개인마다 보는 시각이 다를뿐더러 그동안 공부했던 전공의 시야까지 더해져 의견 조율이 정말 중요한 융합 실습이었습니다.",
        "각자의 전공을 살려 최고의 효율을 낼 수 있는 각자의 임무를 성공적으로 수행했으며 배려심과 이해심으로 팀원의 아이디어를 긍정적으로 받아들였기에 이러한 결과가 나왔다고 생각합니다.",
      ],
      github: null,
      demo: null,
    },
  },
  attendance: {
    pid: "attendance",
    title: "지문인식 센서를 활용한 연구실 근태 관리 시스템",
    summary: "연구실 입퇴실을 효율적으로 관리하기 위한 시스템",
    stacks: ["arduino", "c++", "mysql", "node", "figma"],

    detail: {
      header: {
        category: { title: "카테고리", content: ["팀 프로젝트", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2023년 5월"] },
        hc: { title: "인원", content: ["2명"] },
        role: { title: "역할", content: ["UI 디자인", "FE/BE", "데이터베이스 구축", "아두이노 모듈 개발"] },
        fe: { title: "프론트엔드", content: ["HTML(ejs)", "CSS", "JQuery", "Figma"] },
        be: { title: "백엔드", content: ["Node.js"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["AWS"] },
      },
      long_summary: [
        "본 프로젝트는 연구실 동기와 함께 연구실 인원들의 근태 관리를 하기 위한 목적으로 개발했습니다.",
        "기존의 연구실 출석 시스템은 연구실장이 모든 인원들의 근태를 수기로 기록하고 관리해야하는 불편함이 있었습니다.",
        "저와 연구실 동기는 '어떻게하면 더 편리하고 정확하게 연구실 인원들의 근태를 관리할 수 있을까?'라는 생각을 던지면서 시작하게 되었습니다.",
        "본 프로젝트의 아이디어를 구상할 때에, 입/퇴실에 있어서 중요한 한가지를 고려해야 했습니다.",
        "연구실 인원들이 반드시 연구실 내에서 입/퇴실을 등록하게 해야한다는 점입니다.",
        "처음에는 Node.js를 사용하여 근태 관리 웹 페이지를 개발할 생각이었습니다. 하지만, 이 방식을 사용하게 되면 입/퇴실을 본인이 했는지 안했는지 확인할 수 없는 문제가 있었습니다.",
        "이를 악용할 가능성이 있기 때문에 이를 중요하게 생각하여 지문 인식 센서를 사용했습니다.",
      ],
      func: {
        base: {
          ui: true,
          name: "메인 화면",
          desc: "사용자의 출석 현황과 공지사항 확인 및 유고결석을 신청할 수 있는 랜딩 화면입니다.",
          func: null,
        },
        admin: {
          ui: true,
          name: "관리자 화면",
          desc: "관리자 권한이 있는 사용자가 연구실 인원들의 출결을 조회, 관리할 수 있는 화면입니다.",
          func: ["출결 수정", "공지사항 관리", "유고결석 관리", "사용자 관리"],
        },
      },
      trouble: {
        "Wi-Fi 모듈 설정": {
          problem: [
            "아두이노에 Wi-Fi 모듈을 설정하고 연구실 내 공유기에 연결하는 과정에서 연결 불안정 문제가 발생했습니다.",
            "Wi-Fi 신호가 약하거나, 설정 오류로 인해 지속적으로 연결이 끊어졌습니다.",
          ],
          solve: [
            "Wi-Fi 모듈의 펌웨어를 최신 버전으로 업데이트하고, 신호 강도가 강한 위치로 아두이노를 이동하여 안정적인 연결을 확보했습니다.",
            "연결 설정을 재구성하고, 연결 실패 시 재시도하는 로직을 추가하여 연결 안정성을 높였습니다.",
          ],
          result: ["Wi-Fi 모듈의 펌웨어 업데이트와 설정 최적화를 통해 안정적으로 연결했습니다."],
        },
        "데이터 포맷": {
          problem: ["아두이노에서 서버로 전송되는 데이터의 포맷이 서버에서 예상한 포맷과 일치하지 않아 데이터 파싱 에러가 발생했습니다."],
          solve: [
            "아두이노에서 서버로 전송되는 데이터의 포맷을 일관되게 유지하기 위해 데이터 유효성 검사와 포맷팅 로직을 추가했습니다.",
            "서버 측에서도 수신된 데이터의 유효성을 확인하고, 필요한 경우 에러 핸들링을 통해 데이터 파싱 문제를 해결했습니다.",
          ],
          result: ["데이터 유효성 검사와 포맷팅 로직 추가로 아두이노와 서버 간의 데이터 일관성을 유지할 수 있었고 데이터 파싱 에러를 최소화했습니다."],
        },
      },
      review: [
        "이번 팀 프로젝트는 학기 중에 어떠한 요청을 받아 진행하거나 강의에서 과제로 받은 것이 아니었습니다.",
        "연구실 동기와 함께 눈에 보이는 프로젝트를 개발하고, 실제로 운용되는 것을 목표로 삼았습니다.",
        "프론트/백엔드를 모두 같이 개발했으며, 사용자/관리자 화면을 분할하여 각자 개발하고 Github을 통해 저장 및 병합했습니다.",
        "이번 프로젝트를 통해서 Github을 통한 협업을 익힐 수 있었습니다.",
        "주로 웹페이지나 모바일 애플리케이션을 개발하여 기능을 동작하게 하는 프로젝트를 많이 해봤지만, 실제 폼보드 등의 재료를 사용하여 모듈 틀을 만들어 아두이노 모듈을 사용하며 기능을 동작시키는 개발은 처음이어서 더욱 의미 있는 프로젝트였습니다.",
      ],
      github: "https://github.com/itsjh1242/Arduino_Attendance_Management",
      demo: null,
    },
  },
  motion: {
    pid: "motion",
    title: "모션인식 기반의 이중 암호 인증방안",
    summary: "행동패턴 기반 암호 인증",
    stacks: ["flutter", "node", "mysql", "aws", "figma"],

    detail: {
      header: {
        category: { title: "카테고리", content: ["팀 프로젝트", "애플리케이션 개발"] },
        period: { title: "기간", content: ["2023년 3월 ~ 11월"] },
        hc: { title: "인원", content: ["2명"] },
        role: { title: "역할", content: ["UI 디자인", "FE/BE 개발", "모션인식 기반 암호 알고리즘 설계"] },
        fe: { title: "프론트엔드", content: ["Flutter", "Figma"] },
        be: { title: "백엔드", content: ["Node.js"] },
        db: { title: "데이터베이스", content: ["MySQL"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["AWS"] },
        refer: { title: "관련 활동", content: ["동서대학교 쇼미더동서AI 경진대회 우수상"] },
      },
      long_summary: [
        "'모션인식 기반의 이중암호 인증방안'이라는 주제로 휴대 전화의 자이로센서를 사용한 이중 암호 알고리즘을 직접 설계했고, Flutter를 사용하여 애플리케이션을 개발하여 논문 작성과 발표까지 경험할 수 있었습니다.",
        "전통적인 암호 인증 방법의 취약점과 사이버 공격의 지속적인 진화 및 새로운 위협의 등장으로 보안 강화의 필요성이 증가함에따라 '더욱 안전한 암호 인증 방법이 없을까?'라는 생각에서 시작된 프로젝트입니다.",
        "사용자는 설정하고자 하는 정수 패스워드 6개를 입력하고, 모션 등록 단계에서는 가속도 센서(Gyro Sensor)를 이용하여 현재 휴대전화의 x, y, z의 값을 추출하여 6개 각각의 패스워드 정수형 숫자에 매핑시키는 방식을 사용했습니다.",
        "사용자가 모션 인식 기반의 이중암호 인증을 사용하고자 할 때에는, 사용자가 등록한 정수형 숫자 6개 암호와 각 암호마다의 모션 x, y, z 값이 일치해야합니다.",
        "본 프로젝트는 동서대학교의 AI+X 융합 연구로 진행습니다.",
      ],
      func: {
        system: { ui: true, name: "시스템 구성도", desc: "본 프로젝트의 전반적인 기능에 대한 시스템 구성도입니다.", func: [""] },
        main: { ui: true, name: "메인 화면", desc: "프로젝트의 메인 화면입니다.", func: [""] },
        add_number_password: {
          ui: true,
          name: "숫자암호 등록 화면",
          desc: "6개의 숫자 암호를 등록하는 화면입니다.",
          func: ["숫자 암호 등록"],
        },
        add_motion_password: {
          ui: true,
          name: "모션암호 등록 화면",
          desc: "6개의 모션 암호를 등록하는 화면입니다.",
          func: ["모션 암호 등록"],
        },
        add_motion_password_success: {
          ui: true,
          name: "모션암호 등록 성공 화면",
          desc: "자이로센서에서 반환된 값이 지정된 범위 내에 위치할 때 성공 메시지를 보내는 화면입니다.",
          func: null,
        },
        testing: {
          ui: true,
          name: "이중 암호 테스트 메인 화면",
          desc: "저장된 이중 암호를 테스트하기 위해서 Toss사의 송금 화면을 참고하여 개발된 화면입니다.",
          func: null,
        },
      },
      trouble: {
        "가속도 센서(Gyro)의 오차 범위": {
          problem: [
            "Flutter의 가속도 센서 라이브러리를 사용하여 얻은 x, y, z값은 -9부터 9까지의 정수 범위로, 실제 사용자 동작에 따른 데이터가 부정확하게 측정되는 문제가 발생했습니다.",
            "정수형 숫자 -9부터 9까지의 값은 너무 넓은 범위로 인해, 작은 움직임에도 큰 값의 변화가 발생하여 모션 인식 기반 암호 알고리즘의 정확도를 떨어뜨렸습니다.",
            "같은 동작을 반복해도 센서 값이 일관되지 않아, 동일한 모션을 여러 번 수행해도 다른 값이 기록되는 문제가 있었습니다.",
          ],
          solve: [
            "[ 센서 데이터 안정화 ]",
            "데이터를 안정적으로 얻기 위해 여러 번의 측정을 통해 평균값을 사용하여 값을 안정화시켰습니다.",
            "[ 오차 범위 축소 ]",
            "-9부터 9까지의 범위를 -1부터 1까지로 매핑하여 오차 범위를 줄였습니다.",
            "사용자 휴대전화의 각도가 바뀔 때마다 변하는 이동 거리 단위를 0.5로 설정하여, 센서 값의 변화를 더 유연하게 감지할 수 있도록 했습니다.",
            "[ 일관성 개선 ]",
            "특정 범위 내의 값들을 허용 범위로 설정하여, 약간의 오차가 있더라도 동일한 동작으로 인식되도록 알고리즘을 설계했습니다.",
          ],
          result: ["여러 번의 측정과 평균값 사용으로 센서 데이터의 안정성이 크게 향상되었습니다. 이로 인해 모션 인식의 정확도가 높아졌습니다."],
        },
      },
      review: [
        "본 프로젝트를 개발하면서 학술 대회 및 공모전에 참가할 수 있는 기회를 가졌고, 팀원과 프론트/백엔드를 나누어 개발하는 경험을 가졌습니다.",
        "얕게 경험해보았던 Dart언어 기반의 크로스 프레임워크 Flutter를 사용하여 프로젝트를 직접적으로 설계하고 개발하면서 컴포넌트 기반 레이아웃 구성 및 프론트 개발에 익숙해졌습니다.",
        "또한, 논문 작성과 발표를 하며 내가 개발한 프로젝트와 알고리즘에 대해 보완이 필요한 부분에 대한 피드백과 객관적인 평가를 받았고, 이러한 피드백을 수용하여 프로젝트의 방향성을 확실하게 정할 수 있었습니다.",
      ],
      github: "https://github.com/itsjh1242/motion-password",
      demo: null,
    },
  },
  github_battle: {
    pid: "github_battle",
    title: "Github Battle",
    summary: "Github API를 활용한 사용자 정보 분석 서비스",
    stacks: ["react", "redux", "sass", "figma"],

    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 서비스 개발"] },
        period: { title: "기간", content: ["2024년 3월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["풀스택 개발"] },
        fe: { title: "프론트엔드", content: ["React", "Figma"] },
        be: { title: "백엔드", content: ["-"] },
        db: { title: "데이터베이스", content: ["-"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["gh-pages(Github)"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "Github 두 사용자의 레포지토리 정보를 분석하여 성실함을 점수화하여 나타내고, 데이터 분석을 하기 위해 설정한 기준마다의 분석을 사용자에게 보여주는 서비스입니다",
        "프로젝트에 사용할 수 있는 API를 둘러보다가 Github API를 발견함과 동시에 깃헙배틀이라는 아이디어가 떠올라서, 아이디어 구체화 및 UI 설계를 하였고, React와 React-redux를 사용했습니다.",
        "본 프로젝트에서는 Github API를 통해 얻은 사용자의 전반적인 활동에 대한 데이터를 분석하여 0점부터 100점까지 점수로 수치화하여 보여주는 서비스를 목표로 개발했습니다.",
      ],
      func: {
        base: { ui: true, name: "메인 화면", desc: "프로젝트 랜딩 화면입니다.", func: [""] },
        analysis: {
          ui: true,
          name: "분석 점수 화면",
          desc: "두 사용자의 Github 정보를 기반으로 분석한 점수를 나타내는 화면입니다.",
          func: ["사용자 점수 총합 계산 및 부여"],
        },
        created_at: {
          ui: true,
          name: "분석 상세 화면 - created_at",
          desc: "두 사용자의 Github 가입일을 기반으로 점수를 비교하는 화면입니다.",
          func: ["Github 가입일 비교 분석"],
        },
        follower: {
          ui: true,
          name: "분석 상세 화면 - follower/following",
          desc: "두 사용자의 Github 팔로워/팔로우 수를 기반으로 점수를 비교하는 화면입니다.",
          func: ["Github 팔로워/팔로잉 개수 비교 분석"],
        },
        repo: {
          ui: true,
          name: "분석 상세 화면- repo",
          desc: "두 사용자의 Github 레포지토리 수를 기반으로 점수를 비교하는 화면입니다.",
          func: ["Github 레포지토리 개수 비교 분석"],
        },
        info: {
          ui: true,
          name: "분석 상세 화면 - information",
          desc: "두 사용자의 Github 기본정보를 기반으로 점수를 비교하는 화면입니다.",
          func: ["Github 기본정보 개수 비교 분석"],
        },
        recent_push: {
          ui: true,
          name: "분석 상세 화면 - recent_push",
          desc: "두 사용자의 Github 최근 Push를 기반으로 점수를 비교하는 화면입니다.",
          func: ["Github 최근 Push 비교 분석"],
        },
        total_push: {
          ui: true,
          name: "분석 상세 화면 - total_push",
          desc: "두 사용자의 Github 총 Push를 기반으로 점수를 비교하는 화면입니다.",
          func: ["Github 총 Push 비교 분석"],
        },
        result: {
          ui: true,
          name: "분석 상세 화면 - result",
          desc: "두 사용자의 Github을 기반으로 점수를 비교한 결과 화면입니다.",
          func: ["Github 비교 분석 결과"],
        },
      },
      trouble: {
        "전역 상태관리": {
          problem: [
            "[ 복잡한 데이터 관리 ]",
            "Github API를 사용하여 여러 사용자의 활동 데이터를 수집하고 분석하는 과정에서, 데이터를 모듈화하여 관리하려다 보니 상태 관리가 복잡해졌습니다.",
            "데이터 수집, 분석, 그리고 UI 업데이트 과정에서 여러 컴포넌트 간의 상태를 주고받아야 했습니다.",
            "[ Props 전달 문제 ]",
            "초기에는 React의 useState를 사용하여 각 컴포넌트 간에 Props를 전달하는 방식으로 상태를 관리했습니다.",
            "컴포넌트가 많아지면서 Props 전달이 중첩되어 코드의 가독성이 떨어지고 유지보수가 어려워졌습니다.",
            "[ 성능 문제 ]",
            "여러 개의 컴포넌트가 Props를 통해 상태를 주고받으면서, 불필요한 리렌더링이 발생하여 성능에 부하가 걸렸습니다.",
          ],
          solve: [
            "[ Redux 사용 ]",
            "전역 상태 관리 라이브러리인 Redux를 도입하여 상태 관리를 중앙집중식으로 관리했습니다.",
            "[ 모듈화된 상태 관리 ]",
            "각 기능별로 상태를 모듈화하여 Redux 스토어에 저장하고, 필요한 데이터만 컴포넌트에 전달했습니다.",
            "[ 성능 최적화 ]",
            "Redux의 미들웨어를 활용하여 불필요한 상태 업데이트를 방지하고, 필요한 경우에만 컴포넌트를 리렌더링하도록 최적화했습니다.",
          ],
          result: [
            "Redux를 사용한 중앙집중식 상태 관리로 인해 코드가 간결해지고 가독성이 향상되었습니다. Props 전달의 복잡성이 줄어들어 유지보수가 쉬워졌습니다.",
            "상태를 모듈화하여 관리함으로써 프로젝트의 구조가 체계적으로 정리되었습니다.",
          ],
        },
      },
      review: [
        "이번 프로젝트를 진행하면서 Raw 데이터를 분석하여 수치화 하는 작업을 해보았다는 것만으로도 엄청난 경험이 되었습니다.",
        "많은 양의 데이터를 분석하고 활용하는 과정인 아이디어 구체화 및 기획 단계에서 시간을 많이 쓴 것 같습니다.",
        "실제 개발하는 시간은 기획에 비해 적었으며 프로젝트에 대한 아이디어, 기능, 명세가 구체화 되어 있는 상태에서 개발을 하면 모듈이 충돌하는 경우가 현저히 낮아진다는 것을 몸소 느꼈습니다.",
        "이번 프로젝트를 계기로 앞으로의 프로젝트들은 아이디어를 구체화하고 기능을 모듈화하여 분리하는 습관을 가져야겠다고 몸소 느꼈습니다.",
        "또한, 개발된 서비스의 API 명세서 및 개요를 작성하는 습관을 길러야겠다고 생각했습니다.",
      ],
      github: "https://github.com/itsjh1242/github-battle",
      demo: "https://itsjh1242.github.io/github-battle/",
    },
  },
  streaming: {
    pid: "streaming",
    title: "스트리밍 서비스 웹 디자인",
    summary: "간단하게 디자인하고 개발한 스트리밍 웹 서비스",
    stacks: ["react", "css", "figma"],

    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 개발"] },
        period: { title: "기간", content: ["2024년 2월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["UI 디자인", "FE 개발"] },
        fe: { title: "프론트엔드", content: ["React", "CSS", "Figma"] },
        be: { title: "백엔드", content: ["-"] },
        db: { title: "데이터베이스", content: ["-"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["-"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "개인 프로젝트 아이디어를 구상하는 도중에 불현듯 “음악 스트리밍 서비스” 웹 사이트의 디자인이 떠올라 Figma를 활용하여 웹 디자인을 하고, React를 활용하여 개발한 웹 디자인 프로젝트입니다.",
        "본 디자인에서 강조할 부분과 아닌 부분을 폰트 크기/색상으로 구분하여 확실한 강조 포인트를 살리고자 했습니다.",
        "실제 음악 스트리밍 서비스를 하는 웹/앱은 사용자 편의성을 고려하여 개발되었지만, 여기서는 디자인만을 위한 웹개발을 했습니다.",
      ],
      func: {
        base: { ui: true, name: "메인 화면", desc: "프로젝트 랜딩 화면입니다.", func: null },
      },
      trouble: {
        "Chrome 브라우저 Audio 자동재생 차단": {
          problem: [
            "Chrome 브라우저는 사용자의 경험을 보호하기 위해 웹 페이지에서의 오디오 자동재생을 기본적으로 차단하는 정책을 시행하고 있습니다.",
            "프로젝트에서 사용자가 웹 페이지에 접속했을 때 배경 음악이 자동으로 재생되도록 설정했지만, 이 정책으로 인해 자동재생이 차단되었습니다.",
          ],
          solve: [
            "오디오를 음소거 상태로 자동재생되도록 설정하여 Chrome 브라우저의 차단 정책을 우회했습니다.",
            "사용자가 웹 페이지에 접속하면, 음소거 상태로 배경 음악이 재생되며, 사용자가 직접 음소거 해제 버튼을 클릭하여 소리를 들을 수 있도록 유도했습니다.",
          ],
          result: ["Chrome 브라우저의 자동재생 차단 정책을 준수하면서도, 배경 음악 기능을 유지할 수 있었습니다."],
        },
      },
      review: [
        "해당 프로젝트의 디자인과 웹 개발을 진행하는 것은 복잡하고 어려운 수준의 코딩은 아니었지만, Figma을 활용해 UI를 디자인하고 프로젝트화 하는 것에 의미를 두었습니다.",
        "기회가 된다면, 추후에는 Audio를 활용한 프로젝트를 진행해보고 싶습니다. 이번 프로젝트를 통해 UI 구성을 효과적으로 할 수있는 방법에 대해 많이 고민한 것 같습니다.",
      ],
      github: "https://github.com/itsjh1242/PORTFOLIO_/tree/main/client/src/views/streaming",
      demo: null,
    },
  },
  weather_search: {
    pid: "weather_search",
    title: "Naver Papago API를 활용한 날씨 검색 서비스",
    summary: "Axios활용 및 리액트 공부를 위한 미니 프로젝트",
    stacks: ["react", "node", "css", "figma"],

    detail: {
      header: {
        category: { title: "카테고리", content: ["개인 프로젝트", "웹 애플리케이션 개발"] },
        period: { title: "기간", content: ["2024년 1월"] },
        hc: { title: "인원", content: ["1명"] },
        role: { title: "역할", content: ["프로젝트 설계", "FE/BE 개발"] },
        fe: { title: "프론트엔드", content: ["React", "CSS", "Figma"] },
        be: { title: "백엔드", content: ["Node.js"] },
        db: { title: "데이터베이스", content: ["-"] },
        scm: { title: "형상관리", content: ["Github"] },
        deploy: { title: "배포", content: ["-"] },
        refer: { title: "관련 활동", content: ["-"] },
      },
      long_summary: [
        "날씨와 관련한 데이터를 제공하는 OpenWeatherAPI와 한영 번역 기능을 제공하는 Naver Papago API를 활용하여 결합하여 날씨 정보를 한국어로 제공해주는 미니 프로젝트입니다.",
        "한국뿐만 아니라 전 세계의 지역명을 입력하여 해당 지역의 날씨 관련 정보를 확인할 수 있으며, 날씨에 따라 오전/오후, 맑음/비 카테고리로 분류하여 해당하는 배경으로 변경되도록 하였습니다.",
      ],
      func: {
        system: { ui: true, name: "시스템 구성도", desc: "본 프로젝트의 전반적인 기능에 대한 시스템 구성도입니다.", func: [""] },
        base: {
          ui: true,
          name: "메인 화면",
          desc: "지역명을 입력하여 날씨를 검색할 수 있는 메인 화면입니다.",
          func: ["지역명으로 날씨 검색"],
        },
        modal: {
          ui: true,
          name: "검색 이후 모달 화면",
          desc: "검색한 지역의 날씨 정보를 보여주는 모달 화면입니다.",
          func: null,
        },
      },
      trouble: {
        "OpenWeatherAPI와 Papago API 통합": {
          problem: ["OpenWeatherAPI에서 받은 영어 데이터를 Papago API를 통해 한국어로 번역하는 과정에서 네트워크 지연과 데이터 동기화 문제가 발생했습니다."],
          solve: [
            "[ 비동기 처리와 데이터 동기화 ]",
            "React의 비동기 함수와 async/await를 활용하여 OpenWeatherAPI와 Papago API의 데이터를 순차적으로 처리했습니다.",
          ],
          result: ["비동기 처리를 통해 OpenWeatherAPI와 Papago API의 데이터를 효율적으로 동기화할 수 있었습니다."],
        },
      },
      review: [
        "어떠한 문제점을 해결하고자 고안한 아이디어를 바탕으로 구상한 프로젝트는 아니지만, React로 API 통신을 해봤다는 점에서 큰 의미가 있는 프로젝트였습니다.",
        "React와 Node.js 연동하여 데이터를 주고 받는 작업을 처음 해보았으며, 그 과정에서 JSON 형태로 파일을 처리함에 있어 유용성을 느낄 수 있었습니다.",
        "앞서 해왔던 프로젝트들은 Python(*Flask), Node.js(*ejs)를 활용하여 데이터를 통신하는 방법을 공부했다면, 이번에는 처음으로 Front-end와 Back-end를 구분지어 코드를 짜고 공부함으로써 앞으로의 제 가능성을 열어준 프로젝트입니다.",
      ],
      github: "https://github.com/itsjh1242/PORTFOLIO_/tree/main/client/src/views/weatherPicker",
      demo: null,
    },
  },
};
