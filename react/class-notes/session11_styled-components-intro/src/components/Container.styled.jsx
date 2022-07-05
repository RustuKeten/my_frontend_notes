import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ bg }) => bg || "white"}; //*aşağıdakinin aynısı
  /* background-color: ${(props) => props.bg || "white"}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;
`;

export default Container;
