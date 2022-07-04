import React from 'react';
import styled from '@emotion/styled'
import svg from './logo.svg'

export const VerticalStack = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 50px;
  height: 100%;
  flex-direction: column;
`;

export const NavSlot = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justigy-content: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
`;

export const DiscBlue = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justigy-content: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  flex-direction: column;
  background: #2164f3;
`;

export const OverrideIcon = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  max-width: 32px;
  max-height: 32px;
  padding: 5px;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
`;

export const NavIcon = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  width: 36px;
  height: 36px;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IconSlot = styled.div`
  position: relative;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-direction: column;
`;

export default function NavColumn() {
  return (
    <VerticalStack>
      <IconSlot>
        <DiscBlue>
          <OverrideIcon>
            <img 
              src={svg}
              width="46px"
              height="46px"
              alt="Override App" 
            />
          </OverrideIcon>
        </DiscBlue>
      </IconSlot>
      <NavSlot>

      </NavSlot>

      {/* <NavSlot>
        <NavIcon>
        <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 50 50"><path d="M19.35 32Q20.9 32 21.95 30.925Q23 29.85 23 28.35Q23 26.85 21.95 25.775Q20.9 24.7 19.4 24.7Q17.85 24.7 16.775 25.775Q15.7 26.85 15.7 28.35Q15.7 29.85 16.775 30.925Q17.85 32 19.35 32ZM24 22.65Q25.5 22.65 26.575 21.6Q27.65 20.55 27.65 19Q27.65 17.5 26.575 16.425Q25.5 15.35 24 15.35Q22.5 15.35 21.425 16.425Q20.35 17.5 20.35 19Q20.35 20.55 21.425 21.6Q22.5 22.65 24 22.65ZM28.65 32Q30.15 32 31.225 30.925Q32.3 29.85 32.3 28.35Q32.3 26.85 31.225 25.775Q30.15 24.7 28.65 24.7Q27.15 24.7 26.075 25.775Q25 26.85 25 28.35Q25 29.85 26.075 30.925Q27.15 32 28.65 32ZM24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 24Q4 19.9 5.575 16.25Q7.15 12.6 9.875 9.875Q12.6 7.15 16.25 5.575Q19.9 4 24 4Q28.1 4 31.75 5.575Q35.4 7.15 38.125 9.875Q40.85 12.6 42.425 16.25Q44 19.9 44 24Q44 28.1 42.425 31.75Q40.85 35.4 38.125 38.125Q35.4 40.85 31.75 42.425Q28.1 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z"/></svg>
        </NavIcon>
      </NavSlot>
      <NavSlot>
        <NavIcon>
        <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 50 50"><path d="M14.2 34.15H17.2V20.4H14.2ZM22.5 34.15H25.5V13.85H22.5ZM30.8 34.15H33.8V26.75H30.8ZM9 42Q7.8 42 6.9 41.1Q6 40.2 6 39V9Q6 7.8 6.9 6.9Q7.8 6 9 6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM9 39Q9 39 9 39Q9 39 9 39V9Q9 9 9 9Q9 9 9 9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39Z"/></svg>
        </NavIcon>
      </NavSlot> */}
    </VerticalStack>
  );
}
