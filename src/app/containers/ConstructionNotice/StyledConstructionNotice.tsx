import styled from 'styled-components/macro';

export const ConstructionContainer = styled.div<{ display: string }>`
  display: ${props => (props.display === 'true' ? 'flex' : 'none')};
  position: fixed;
  width: 100vw;
  height: 65vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 10;
`;

export const ConstructionBox = styled.div`
  position: relative;
  background: rgba(157, 157, 157, 1);
  width: 380px;
  height: 200px;
  border: 0.1px solid rgba(14, 14, 14, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: center;
  box-shadow: 0px 0px 20px 5px rgba(55, 55, 55, 1);
`;

export const ConstructionImage = styled.div`
  border-top: 0.1px solid rgba(14, 14, 14, 1);
  border-bottom: 0.1px solid rgba(14, 14, 14, 1);
  display: flex;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  overflow: hidden;
  width: 160px;
  height: 200px;
  img {
    max-height: 100%;
  }
`;

export const ConstructionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const ConstructionTitle = styled.div`
  text-align: left;
  font-size: 25px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
`;

export const ConstructionText = styled.div`
  text-align: left;
  width: 220px;
  font-size: 12px;
  margin-bottom: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DemoButton = styled.a`
  padding: 8px 12px;
  margin: 0px 5px;
  font-size: 12px;
  text-decoration: none;
  border: 0.5px solid rgba(14, 14, 14, 1);
  cursor: pointer;
  border-radius: 10px;
  color: rgba(255, 255, 255, 1);
  background: rgba(55, 55, 55, 1);
  :hover {
    padding: 7px 11px;
    border: 0.25px solid rgba(237, 237, 237, 1);
  }
`;

export const ConstructionClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(32, 32, 32, 1);
  border-radius: 10px;
  width: 18px;
  height: 18px;
  :hover {
    border: 1px solid rgba(237, 237, 237, 1);
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
