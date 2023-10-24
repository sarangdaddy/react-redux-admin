import { useEffect } from 'react';
import styled from 'styled-components';

const TestDiv = styled.div`
  background-color: ${(props) => props.theme.colors.lightBlue};
  color: ${(props) => props.theme.colors.red};
  font-size: 100px;
`;

const App = () => {
  function getData() {
    fetch('http://localhost:9000/user_data')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    getData();
  });

  return <TestDiv>스타일 적용 테스트 style TEST !@#$%^</TestDiv>;
};

export default App;
