import { mount, createLocalVue } from 'vue-test-utils'
import Message from 'components/Message.vue'
import { expect } from 'chai';

describe('Message', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'

    const vue = createLocalVue();
    
    const wrapper = mount(Message, {
      localVue: vue,    
      propsData: { msg }
    })
    expect(wrapper.text()).to.eq(msg)
    
  })

  it('renders default message if not passed a prop', () => {
    const defaultMessage = 'default message'
    const wrapper = mount(Message, {
      
    })
    expect(wrapper.text()).to.eq(defaultMessage)
  })
})
