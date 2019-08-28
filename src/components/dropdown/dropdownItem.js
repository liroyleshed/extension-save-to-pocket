import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { COLORS } from 'common/styles/colors'
const { $snow, $overcast, $teal, $white } = COLORS

const ListItem = styled.li`
  display: block;
  text-align: left;
  ${props =>
    props.divider
      ? `
    &::before {
      background-color: ${$snow};
      content: ' ';
      display: block;
      height: 1px;
      margin: 5px auto;
      width: 90%;
    }
  `
      : ''}

  button {
    all: unset;
    color: ${$overcast};
    cursor: pointer;

    box-sizing: border-box;
    font-size: 14px;
    line-height: 16px;
    padding: 5px 30px 5px 18px;
    width: 100%;

    &:hover {
      background-color: ${$teal};
      color: ${$white};
    }
  }
`

DropdownItem.propTypes = {
  entryObject: PropTypes.object
}
export default function DropdownItem({ entryObject }) {
  return (
    <ListItem divider={entryObject.divider}>
      <button onClick={entryObject.method}>
        {entryObject.icon()} {entryObject.copy}
      </button>
    </ListItem>
  )
}
