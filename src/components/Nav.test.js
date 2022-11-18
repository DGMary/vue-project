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

it('render tabs navigation' , () => {
  renderNav()

  const button1 = screen.getByText('User details');

  expect(button1.getElementsByClassName('active').length).toBe(0);
  
  screen.getByText(/User list/i);

})

it('add active class after click in tab navigation button' , async () => {
  renderNav()

  const button = screen.getByText('User list')

  await fireEvent.click(button)

  expect(button.getElementsByClassName('active').length).toBe(0);

})

