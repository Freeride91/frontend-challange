import React from 'react'
import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledLoaderContainer>
      <SyncLoader />
    </StyledLoaderContainer>
  )
}

export default Loading

const StyledLoaderContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`