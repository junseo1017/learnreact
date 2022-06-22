// props
// 기본적으로 Component에 원하는 값을 넘겨줄 때 사용
// 넘겨줄 수 있는 값은 변수,함수,객체,배열 등 Javascript의 요소라면 제한이 없음.
// 주로 Component의 재사용을 위해 사용

// ---

// props는 읽기 전용
// 변경하고 싶다면 새로운 변수를 생성해야함.

// ---

// html의 attribute와 다른 이름을 가지는 attribute가 있음
// class > className
// for > htmlFor

// ---

// html의 attribute와 다른 동작 방식을 가진 attribute가 있음
// checked(defaultChecked),
// value(defaultValue), // value로 설정하면 그 값으로 고정돼버림, 기본값을 설정하고 변경하고 싶다면 defaultValue로 설정해야함.
// style(string x, object로 작성해야함) 등

// ---

// React에서만 쓰이는 새로운 attribute
// key, (array를 표현할 때 react가 감지하기 용이하도록)
// dangerouslySetInnerHTML (string을 html로 변경)

// KEY
// : react가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도움.
// : 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 element에 지정해야 함
// : 배열 내의 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없음.
// : 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있음.

// ----

// State
// Copmonent 내에서 유동적으로 변할 수 있는 값을 저장
// 개발자가 의도한 동작에 의해 변할 수도 있고 사용자의 입력에 따라 새로운 값으로 변경될 수도 있음
// State값이 변경되고 재렌더링이 필요한 경우에 React가 자동으로 계산하여 변경된 부분을 재렌더링함

// 유의점
// state값을 직접 변경하게 되면 REACT가 Component를 다시 렌더릴할 타이밍을 알아차리지 못함.
// 반드시 setState함수를 이용해 값을 변경
// setState함수를 호출할 때 React에게 다시 렌더링 해달라는 명령이 내려짐

// ---

// State 변경하기
// 1. 변경할 값을 직접 넣는 방법
// 2. 함수를 넣는 방법
//  - 현재 값을 기반으로 state를 변경하는 경우, 함수를 넣는 방법을 권장
//  - return하는 값으로 값이 변경됨.

//  ---

//  Objext를 갖는 State
const [user, setUser] = useState({name: '민수', grade: 1});
setUser((current) => {
  current.grade = 2;
  return current;
});
// 위와 같은 경우, grade가 변경되었지만 react는 state의 변경을 감지하지 못함. (렌더링 발생 x)
// user 자체가 변경되지 않았기 때문

// 값을 바꾸기 위해선 새로운 object에 담고 grade를 변경
const [user1, setUser1] = useState({name: '민수', grade: 1});
setUser((current) => {
  const newUser = {...current};
  newUser.grade = 2;
  return newUser;
});
