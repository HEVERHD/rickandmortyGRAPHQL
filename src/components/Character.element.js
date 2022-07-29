import styled from "styled-components";

export const Headers = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 2.5rem;
  font-weight: bold;
  font-size: 1.5rem;
`
export const Headersb = styled(Headers)`
  color: ${({ theme }) => theme.light};
  font-size: 4rem;
  font-weight: bold;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  font-size: 2.2rem;
  width: auto;
  

`
export const Title = styled.h2`
  color:${({ theme }) => theme.light};
  font-size: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
`
export const Icon = styled.i`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
`
export const Estado = styled.div`
     background: ${({ theme }) => theme.light};
    padding: 2rem;
    text-align: right;
  
 & span{
  display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
  &estado{
    background: var(--color-secondary);
    display: inline-flex;
    color: var(--color-light);
    padding: 0.5rem 1rem;
    border-radius: 2.5rem;
    font-size: 1.2rem;
    width: auto;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }
  & estado span{
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
  & Alive{
    background: ${({ theme }) => theme.green};
  }
  & Dead{
    background: ${({ theme }) => theme.red};
  }
  & unknown{
    background: ${({ theme }) => theme.orange};
  }

`
  