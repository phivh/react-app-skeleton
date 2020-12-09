import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const FilterContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const FilterTitle = styled.div`
  font-size: 16px;
  margin-right: 20px;
  font-weight: bold;
  min-width: 70px;
`;

export const FilterContent = styled.div`
  font-size: 14px;
`;

interface IPillProps {
  active?: boolean;
}

export const Pill = styled.span<IPillProps>`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid ${colors.grey200};
  border-radius: 15px;
  &:hover {
    background: var(--link-hover);
    color: var(--pill-hover);
  }
  margin-bottom: 5px;
  ${({ active }) => active && `background: ${colors.grey200};`}
  cursor: pointer;
`;
