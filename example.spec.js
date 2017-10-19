import React, { Component } from 'react'
import { shallow } from 'enzyme'
import assert from 'assert'


describe('something', () => {
  it('should pass', () => {
    const wrapper = shallow(<div />)
    assert(wrapper.type() === 'div')
  })
})
