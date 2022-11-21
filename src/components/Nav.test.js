import {render, screen, fireEvent } from '@testing-library/vue'
import Nav from './Nav'

const tabsInfo = [
  {title: 'User details', component: 'Details'},
  {title: 'User list', component: 'Users'},
]

describe('Tabs navigation', () => {

  beforeEach(() => {
    return render(Nav, {
      props:{
        selected: 0,
        tabs: tabsInfo
      }    
    })
  });
  
  it('render tabs navigation' , () => {

    expect(screen.getByText(tabsInfo[0].title)).toBeTruthy();
    expect(screen.getByText('User list')).toBeTruthy(); 

  })
  
  it('add active class after click in tab navigation button' , () => {

    const button = screen.getByText('User list')
  
    fireEvent.click(button)
  
    expect(button.getElementsByClassName('active').length).toBe(0);
  
  })
});

