import styled from '@emotion/styled';
  
export const BaseWrapperVertical = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const BaseWrapperHorizontal = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const WrapperCenter = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  flex-direction: column;
`;

export const Row = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  flex-direction: row;
`;

export const RowBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`;