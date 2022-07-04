import useDarkMode from "./useDarkMode"
import styled from '@emotion/styled'

export const IconBlock = styled.div `
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-direction: column;
  margin-right: 15px;
`;

export const Icon = styled.div `
  position: absolute;
  display: inline-flex;
  align-items: center;
  width: 24px;
  height: 24px;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function DarkModeComponent() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <IconBlock>
      <Icon>
        <svg
          onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
          className="contrast-button"
          xmlns="http://www.w3.org/2000/svg"
          height="32" 
          width="32"
          viewBox="0 0 46 46"
          >
          <path d="M24 44Q19.85 44 16.2 42.425Q12.55 40.85 9.85 38.15Q7.15 35.45 5.575 31.8Q4 28.15 4 24Q4 19.85 5.575 16.2Q7.15 12.55 9.85 9.85Q12.55 7.15 16.2 5.575Q19.85 4 24 4Q28.15 4 31.8 5.575Q35.45 7.15 38.15 9.85Q40.85 12.55 42.425 16.2Q44 19.85 44 24Q44 28.15 42.425 31.8Q40.85 35.45 38.15 38.15Q35.45 40.85 31.8 42.425Q28.15 44 24 44ZM25 41Q31.85 40.5 36.425 35.7Q41 30.9 41 24Q41 17.1 36.425 12.3Q31.85 7.5 25 7Z"/>
        </svg>
      </Icon>
    </IconBlock>
   
    
  )
}
