import React from "react";
import DarkModeComponent from "./Components/DarkMode/DarkModeComponent";
import Dashboard from "./Components/Dashboard";
import { BaseWrapperVertical, Row } from "./styles";
import styled from "@emotion/styled";
import AppName from "./Components/Name";
import NavColumn from "./Components/NavColumn";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: inline-flex;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid rgba(36, 41, 46, 0.25) !important;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1500;
  display: inline-flex;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 0;
`;

export const Block = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export default function App() {
  return (
    <div className="App">
      <BaseWrapperVertical className="min-h-100">
        <Header>
          <HeaderContent>
            <AppName />
            <Block>
              <DarkModeComponent />
            </Block>
          </HeaderContent>
        </Header>
        <Row className="h-100">
          <NavColumn />
          <BaseWrapperVertical className="overflow-y-scroll margin-t-50">
            <Dashboard />
          </BaseWrapperVertical>
        </Row>
      </BaseWrapperVertical>
    </div>
  );
}
