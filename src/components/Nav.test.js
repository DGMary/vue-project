import {render, screen, fireEvent } from '@testing-library/vue'
import Nav from './Nav'

function renderNav() {
  return render(Nav, {
    props:{
      selected: 0,
      tabs: [
        {title: 'User details', component: 'Details'},
        {title: 'User list', component: 'Users'},
      ]
    }    
  })
}


describe('Tabs navigation', () => {
  
  it('render tabs navigation' , () => {
    renderNav()
  
    screen.getByText('User details');
    screen.getByText('User list');
  
  })
  
  it('add active class after click in tab navigation button' , async () => {
    renderNav()
  
    const button = screen.getByText('User list')
  
    await fireEvent.click(button)
  
    expect(button.getElementsByClassName('active').length).toBe(0);
  
  })
});

