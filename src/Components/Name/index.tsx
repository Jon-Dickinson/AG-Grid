import styled from '@emotion/styled'

export const Title = styled.h1 `
  position: relative;
  display: inline-flex;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  text-transform: uppercase;
  color: #2164f3;
  margin-left: 65px;
`;

export default function AppName() {
  return (
    <Title>
      Override
    </Title>
  );
}

