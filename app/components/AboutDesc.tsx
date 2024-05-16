export interface AboutDescInterface {
  [key: string]: { header: string | undefined; content: string[]; isRight: boolean };
}
export const ABOUT_DESC: AboutDescInterface = {
  intro: {
    header: "intro",
    content: [
      "안녕하세요, 주니어 개발자 김준현입니다.",
      "동서대학교 컴퓨터공학부에서 소프트웨어공학을 전공했습니다.",
      "",
      "소프트웨어 공학과 데이터베이스 구축을 집중적으로 깊이있게 공부할 수 있었고,",
      "API 구축을 통해 사용자와 시스템간의 상호작용이 가능한 서비스 기반의 다양한 웹/앱 개발을 했습니다.",
    ],
    isRight: true,
  },
  motto: {
    header: "motto",
    content: [
      "높은 완성도의 서비스 기반의 프로젝트를 개발하는 것은 효율적이고 클린한 코드를 적는 것 뿐만 아니라 나타내고자하는 핵심 내용을 직관적이고 유연성있게 표현하는 것도 중요한 가치로 생각하고 있습니다.",

      "",
      "제게 코드는 붓과 물감이고, 웹/앱은 캔버스입니다.",
      "평소에 보고 듣는 모든 경험을 디자인 요소로 가공하여 다양한 프로젝트에 녹여냈습니다.",
    ],
    isRight: false,
  },
  lab: {
    header: "lab",
    content: [
      "학부생 때, UbSE(Ubiquitous SW Engineering) 연구실에서 AI+X 연구원으로 활동하며",
      "개발 역량을 키우기 위해 선후배들과의 멘토링에 집중했고, 다양한 프로젝트와 공모전 경험을 쌓을 수 있었습니다.",
      "",
      "특히, 주간 업무 보고 세미나를 하면서 한 주간 수행한 개인 공부 및 프로젝트 진행상황 등을 보고하는 경험을 통해 업무 수행 능력을 자가진단하고 자기 객관화하며 나를 성장시켰습니다.",

      "",
      "또한, 팀 프로젝트에서 팀원 상호간의 배려를 통한 원활한 의사소통이 정해진 시간 내에 프로젝트를 완성시킬 수 있는 중요한 부분이라는 것을 깨달았습니다.",
    ],
    isRight: true,
  },
  strength: {
    header: "strength",
    content: [
      "성공과 실패는 다른 것 같으면서도 동일한 의미라고 생각합니다.",
      "저에게 있어서 실패란 도전하지 않는 것입니다.",
      "긍정적인 사고를 통해 동료와 함께 시너지를 발휘하는 것을 좋아합니다.",
      "",
      "끊임없이 생각하며 지치지 않는 열정으로 상승불패하며",
      "함께 하고싶은 동료 개발자가 되겠습니다.",
    ],
    isRight: false,
  },
  certificate: {
    header: "정보처리기사",
    content: ["2024년 4월 취득"],
    isRight: true,
  },
};
