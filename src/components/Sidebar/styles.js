import styled from  'styled-components';

export const Container = styled.div`
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
    
 
  
    > svg {
        position: fixed;
        color: #CEDEEB;
        width: 25px;
        height: 25px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
      }
      
      @keyframes showSidebar {
        from {
          opacity: 0;
          width: 0;
        }
        to {
          opacity: 3;
          width: 300px;
        }
      }
    `;
    
    export const Content = styled.div`
      background-color: #074598;
      height:100%;
      padding-top:100px;
      
      `;
      export const Div = styled.div`
        margin-top:95px;
        
      `;
    

    
      
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
