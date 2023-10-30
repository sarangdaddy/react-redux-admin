# 🛰️ 번외 - 보완점

- Nara Space의 입사 지원 과제로 제출된 프로젝트의 코드 개선 내용을 담고 있습니다.
- 제출된 과제로 끝내기 아쉬워 추가로 문제점을 진단하고 개선 방안을 적용하여 코드를 재설계하였습니다.
- 이 내용은 체점에 영향을 주지 않도록 별도의 브랜치에서 관리합니다.

</br>

# 1. 잘못된 반응형 설계

## 기존 반응형 웹 설계 (❌)

- css media 작성에 mobile, tablet, desktop 이라는 변수를 활용하고 싶었습니다.
- styled-component에게 props를 전달함을 이용할 수 있다고 판단
- 웹 전체에서 디바이스 사이즈 상태를 컴포넌트에게 전달하면 활용할 수 있겠다고 판단이 되었습니다.
- 그래서 전역 상태로 현재 디바이스 상태를 관리하고 디아비스 사이즈가 변하면 상태가 변경되도록 Redux에서 관리했습니다.

```tsx
export const CalendarBox = styled.div<{ $isMobile: boolean }>`
  width: ${(props) => (props.$isMobile ? '290px' : '330px')};
}
`;
```

- 디아비스 상태에 따라 반응형으로 css가 잘 작동 되기에 문제가 없다고 생각하고 적용했습니다.

## 문제점 (😱)

- 디바이스 크기가 변경되면 `상태`도 변경되기에 그 상태에 의존하는 모든 컴포넌트의 리렌더링이 일어납니다.
- 프로젝트 규모가 커진다면 디바이스 크기가 변경될 때마다 일어나는 렌더링은 성능과 사용자 경험에 부정적인 영향을 줍니다.

## 해결 방안 (👌)

- css의 @media 쿼리는 렌더링 문제 없이 반응형 디자인을 구현하는 표준 방법입니다.
- styled-components의 theme를 사용하여 mobile, tablet, desktop 변수 활용이 가능함이 떠올랐습니다.
- 상태 대신 변수를 사용하여 디바이스 사이즈에 따른 스타일을 적용했습니다.
- 불필요한 리렌더링 없이 기존과 동일한 반응형 동작을 수행하는 웹으로 개선되었습니다.

```ts
// styles/theme
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  media: {
    mobile: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px)',
  },
};
```

```ts
// styles-component
export const Container = styled.div`
  width: 935px;
  height: 630px;

  ${(props) => props.theme.media.mobile} {
    width: 350px;
    height: 500px;
  }

  ${(props) => props.theme.media.tablet} {
    width: 688px;
    height: 500px;
  }
`;
```
