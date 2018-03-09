// import { mount } from '@vue/test-utils'
import { mount, shallow, createLocalVue } from 'vue-test-utils'
import List from 'components/List.vue'
import expect from 'expect'

describe('List', () => {
  it('James is confused',  () => {
    
    const localVue = createLocalVue()
    var t = mount(List, {
      localVue,
      clone: false
    })
    
    // _.each([1,2,3], (x) => {console.log(x)});
    expect(t.html()).toBe('<ul class="t"></ul>');
  })
})
