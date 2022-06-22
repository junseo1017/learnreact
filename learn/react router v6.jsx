// Switch 대신 Routes 사용
<Routes>
  <Route></Route>
</Routes>;

// 컴포넌트 샌드위치 구조, component props 대신 element props 사용
<Route path='/login' element={<LoginForm />} />;

// useHistory 대신 useNavigate 사용
const navigate = useNavigate();
navigate('/login'); // 로그인 페이지로 이동
navigate("/login", {replace: true})

// Redirect 대신 path="*"사용
// SPA라우팅에 걸러지지 않는 링크의 경우 원래 Redirect를 사용했습니다.
<Route path='*' element={<NotFound />} />;

// v6 ex
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}
