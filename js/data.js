/*
'탠저린 탱고 ENFP', 0
'피치에코 ESFP', 1
'스노클블루 ENTP', 2
'피에스타 ENTJ', 3
'칠리페퍼 ESTP', 4
'메이저브라운 ESTJ', 5
'루미너리 그린 ESFJ', 6
'아쿠아 스카이 ENFJ', 7
'울트라 바이올렛 INTJ', 8
'달리아 INFJ', 9
'허니 서클, infp', 10
'세룰리언 블루, istp', 11
'미모사 ISFP', 12
'래디언트 오키드 INTP', 13
'블러싱브릿지 ISFJ', 14
'라일락그레이 ISTJ', 15
*/

const qnaList = [
  {
    q: '1. 아무것도 없는 흰 도화지에 색을 칠하려고 한다. 칠하고 싶은 색은 ?', //좋아하는 색 정보
    a: [
      { answer: 'a. 빨강, 핑크', kategory: ['빨강, 핑크'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] },
      { answer: 'b. 노랑, 연두', kategory:  ['노랑, 연두'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]},
      { answer: 'c. 파랑, 하늘', kategory: ['파랑, 하늘'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] },
      { answer: 'd. 보라 ', kategory:['보라'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] },
      { answer: 'e. 무채색', kategory:['무채색'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] },
    ]
  },
 
  {
    q: '2. 나는 그림을 그리기 전에, ',
    a: [
      { answer: 'a. 일단 시작하고 보는 타입. 손이 가는 대로 ~ ', type: [0, 1, 2, 4, 10, 11, 12, 13],  kategory: [] }, // P
      { answer: 'b. 어떻게 그릴지 틀을 짠 후 시작한다.', type: [3, 5, 6, 7, 8, 9, 14, 15], kategory: [] }, //J
     
    ]
  },
  {
    q: '3. 그림을 그릴땐 ', 
    a: [
      { answer: 'a. 혼자서 하는 게 편해..', type: [1, 3, 2, 10, 8], kategory: [] }, // i
      { answer: 'b. "나랑 같이 그림 그릴래~?" 친구랑 같이 그리기"', type: [7, 9, 11], kategory: [] }, //E
    ]
  },
  {
  q: '4. 그림을 완성했다 ! 결과물을 보고 친구가 하는 말 중 더 듣고 싶은 것은 ?',
    a: [
      { answer: 'a. "오 완전 잘했다. 너 재능 있나봐 !" ', type: [2,3,4,5,8,11,13,15], kategory: [] }, //T
      { answer: 'b. "열심히 했네~! 넘 고생 많았어 ㅠㅠ" ', type: [0,1,6,7,9,10,12,14], kategory: [] }, //F
    ]
  },
  {
    q: '5. 그림을 친구에게 주기로 했다. 친구가 고맙다며 답례로 내게 준 것 중 더 감동받는 것은? ', //좋아하는 선물 유형
    a: [
      { answer: 'a. "고마워서 나도 그려봤어 어떄??" 친구의 정성이 담긴 편지와 그림', category: ['정성, 편지'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //정성
      { answer: 'b. "넘넘 고마워 이거라도 먹어 !" 음료 기프티콘', category: ['커피기프티콘'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //커피기프티콘
      { answer: 'c. "이거 유용하게 쓸 수 있을 거 같아서 " 내가 필요로 했던 실용적인 물건(ex) 자취템) ', category: ['실용적'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, //실용적
      { answer:  'd. "너랑 잘어울릴 것 같아" 향수나 디퓨저 ', category: ['향기템'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, //향기템]  },
    ]
  },
  {
    q: '6. 반대로 받았을 때 표정관리가 안되는 것은? ', 
    a: [
      { answer: 'a. 인형', category: ['인형x'],  type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, 
      { answer: 'b. 예쁜쓰레기', category: ['예쁜쓰레기x'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, 
      { answer: 'c. 현금', category: ['현금x'],  type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, 
      { answer:  'd. 무드등 ', category: ['무드등x'],  type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]},
    ]
  },
  {
    q: '7. 미술관에 간 당신 ! 사과가 그려진 그림을 봤다. 가장 먼저 드는 생각은? ',
    a: [
      { answer: 'a. 사과? 애플? 백설공주? 스티브잡스 ? 빨갛다 ? 어떻게 그린거지?  ', type: [0,2,3,7,8,9,10,13], category: [] }, //N
      { answer: 'b. 오~ 사과다..', type: [1,4,5,6,11,12,14,15] ,  category: []}, //S
      
    ]
  },
  {
    q: '8. 정말 정말 가고싶었던 팝업스토어에 들렸다. 하나만 산다면 어떤 것을 살 것인가?',
    a: [
      { answer: 'a. 옷이나 가방같은 패션소품', category: ['패션'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]  }, // 패션
      { answer: 'b. 자주 쓸 수 있는 노트와 펜',  category: ['실용적'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, // 실용성
      { answer: 'c. 해당 브랜드의 시그니처 디퓨저, 방향제, 인센스 스틱', category: ['향기템'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, //향기템
    ]
  },
  {
    q: '9. 친구가 "나 우울해서 먹을거 샀어" 라고 한다면?',
    a: [
      { answer: 'a. 우울해? 왜 우울해 무슨 일이야ㅠㅠㅠ', type: [0,1,6,7,9,10,12,14] ,  category: []}, // F
      { answer: 'b. 어떤 먹을 거 샀어??', type: [2,3,4,5,8,11,13,15],  category: [] }, //T
    ]
  },
  {
    q: '10. 내 성격을 표현하자면? ',
    a: [
      { answer: 'a. 귀여운, 온화한' , category:['귀여운'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //귀여운
      { answer: 'b. 깔끔한, 실용적', category:['깔끔한, 실용적'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //실용적, 깔끔
      { answer: 'c. 통통 튀는, 외향적인 ', category:['통통튀는, 외향적'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, // 외향적, 통통튀는
    ]
  },
  {
    q: '11. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. 손에는 먹고싶던 디저트를 들고.. ',
    a: [
      { answer: 'a. 아니 갑자기 오면 어떡해.. 나 준비도 안 했는데,,',  category: [], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, 
      { answer: 'b. 디저트?? 간식??! 디저트에 돈쓰는건 안아깝지', category:['간식'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //간식
      { answer: 'c. "뭐 3만원?? 디저트도 좋지만 이 돈이면 다른 걸 사지 ㅠ"', category:['간식x'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //간식x
    ]
  },
  {
    q: '12. 인터넷 쇼핑할 때 내 기준은? ',
    a: [
      { answer: 'a. 인기많은 상품!  다수에게 검증받은게 최고여~', kategory: ['인기템'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //인기템
      { answer: 'b. 신상! 신상인데 꼭 써봐야지',kategory: ['신상'] , type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, //신상
      { answer: 'c. 가성비! . 가성비 따져야지 암암', kategory: ['가성비좋은'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //가성비좋은
      { answer: 'd. 한정판. 흔하지 않은 나만의 개성템을 찾고싶어',kategory: ['개성적'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //개성
    ]
  },
  {
    q: '13. 평소에 시간이 남을 때 나는?',
    a: [
      { answer: 'a. 집에서 뒹굴 뒹굴..',  kategory: ['집돌집순이'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //집돌이, 집순이
      { answer: 'b. 운동하러가야지!', kategory: ['운동'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, //운동
      { answer: 'c. 친구 만나서 놀아야겠다~',  kategory: ['외향적'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15] }, //외향적
      { answer: 'd. 인터넷으로 옷이나 뷰티템 (아이)쇼핑 하기 ㅎㅎ ', kategory: ['패션'], type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15]}, //패션
    ]
  },
]

const infoList = [
  { //탠저린 탱고 , ENFP, 0 
    name: '상큼하고 명량한 충동적 에너지, 정렬적인 태양같은 <탠저린탱고>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  
  { //피치에코 ESFP
    name: '분위기를 사로잡는 부드러운 사람, 귀여운 복숭아같은 <피치에코>',
    desc: '센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  { //스노클블루 ENTP
    name: '똑 부러진 자유분방한 당신, 모두가 친해지고 싶어하는 <스노클블루>',
    desc: '지치고 힘들 때 분위기메이커인 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
 
  { // 피에스타 ENTJ
    name: '당당한 자신감과 솔직한 당신, 열정 1등 <피에스타>',
    desc: '어떤 일이든지 반드시 해내려하는 목표 지향적인 당신. 현실적이고,  총명하고 논리적이며 거침없이 일을 해내서 모두의 부러움을 사는 유형이에요. 어딜가나 유능한 편에 속해서 없어서는 안될 존재입니다. '
  }, 
  { //아드레날린러쉬 ESTP
    name: '강렬함에 아찔함 한 스푼, 마라맛 인간 <아드레날린러쉬>',
    desc: ''
  },
  { //메이저브라운 ESTJ
    name: '겉모습에 가려진 감수성, 혼자서도 척척 <메이저브라운>',
    desc: '한 번에 직진하는 스타일이랍니다. 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  { //루미너리 그린 ESFJ
    name: '따뜻하고 조화로운 치유의 아이콘 <루미너리 그린>',
    desc: ''
  },
  { //아쿠아 스카이 ENFJ
    name: '아낌없이 주는 따뜻한 당신, 포근한 하늘같은 <아쿠아 스카이>',
    desc: ''
  },
  { //울트라 바이올렛 INTJ
    name: '규칙에 얽매이지 않는 지적인 매력, 신비주의 <울트라 바이올렛>',
    desc: ''
  },
  { //달리아 INFJ
    name: '신중하고 너그러운 감성, 은은한 카리스마 <달리아>',
    desc: ''
  },
 
  { // 허니 서클, infp
    name: '순수한 상상력과 섬세함의 조화, 어딘가 챙겨주고 싶은 <허니서클>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  { //세룰리언 블루, istp
    name: '주관이 뚜렷한 다재다능한 매력 <세롤리언 블루>',
    desc: ''
  },
  { //미모사 ISFP
    name:  '게으름과 완벽함의 환상의 콜라보, <미모사>',
    desc:  '온화하며 따뜻한 마음을 가지고 있어요. '
  },
  { //래디언트 오키드 INTP
    name: '차분하고 반항적인 엘리트 감성, <래디언트 오키드>',
    desc: ''
  },
  { //블러싱브릿지 ISFJ
    name: '보는 사람마다 다르게 느끼는 미묘한 매력 <블러싱브릿지>',
    desc: ''
  },
   {//라일락그레이 ISTJ
    name: '신뢰감을 주는 솔직하고 편안한 매력 <라일락그레이>',
    desc: ''
   },
]
