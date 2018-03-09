
import { mount } from 'vue-test-utils'
import List from 'components/List.vue'
 
import * as _ from 'lodash'
import 'mocha';
import { expect } from 'chai';

describe('Awesome', () => {
  it('James is good', async () => {
    const wrapper = mount(List, {
    });

    
    // console.log(wrapper.text())
    // _.each([1,2,3], (x) => {console.log(x)});
    expect(wrapper.html()).to.equal('<ul class="t"></ul>');
  })

  it('Elliot is cool', async () => {
    
    // _.each([1,2,3], (x) => {console.log(x)});
    expect(3).to.equal(3);
  })

  it('Jez is awesome', async () => {
    
    // _.each([1,2,3], (x) => {console.log(x)});
    expect(3).to.equal(3);
  })
})
