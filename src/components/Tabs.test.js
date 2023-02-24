const tabClicked = {
  selectedTab() {
    return true;
  },
};


describe('Tabs.vue', () => {

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it('tab clicked', () => {
    const spy = jest.spyOn(tabClicked, 'selectedTab');
    const isSelected = tabClicked.selectedTab();

    expect(spy).toHaveBeenCalled();
    expect(isSelected).toBe(true);
  });

})

