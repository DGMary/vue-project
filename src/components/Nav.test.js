import { mount } from '@vue/test-utils'
import Nav from './Nav'

let wrapper;

const tabsInfo = [
  {title: 'User details', component: 'Details'},
  {title: 'User list', component: 'Users'},
]

describe('Tabs navigation', () => {

  const wrapper = mount(Nav, {
    props: {
      selected: 0,
      tabs: tabsInfo
    }
  })


  it('render tabs navigation' , () => {

    const activeTab = wrapper.get('.tabs-nav__item.active')
    const tab = wrapper.get('.tabs-nav__item:nth-child(2)')
  
    expect(activeTab.text()).toBe('User details')
    expect(tab.text()).toBe('User list')

  })
  
  it('add active class after change selected item' , async () => {

      const $btnDiscard = wrapper.findAll('.tabs-nav__item').at(1);

      await wrapper.setProps({ selected: 1 })
     
      expect($btnDiscard.classes()).toContain('active')       
  
  })
});

