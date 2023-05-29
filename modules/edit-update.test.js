import GenerateList from './edit-update';

describe('add item', () => {
  test('if its nt an empty string', () => {
    const additem = new GenerateList();
    additem.add('head');
    expect(additem).not.toStrictEqual([]);
  });
  test('return an object', () => {
    const additem = new GenerateList();
    expect(additem.add('head')).toEqual([{ description: 'head', completed: false, index: 0 }]);
  });
});
describe('add and edit an item',()=>{
    test('edit description',()=>{
        const additem = new GenerateList();
        additem.add('head')
        expect(additem.edittask('home')).toEqual([{ description: 'home', completed: false, index: 0 }]);
    })
})
describe('update complete status',()=>{
    test('check if completed changes',()=>{
        const additem = new GenerateList();
        additem.add('head')
        expect(additem.updateCompleteStatus(true)).toEqual([{ description: 'head', completed: true, index: 0 }]);
    })
})
describe('remove all completed todos',()=>{
    test('if you hv an empty array',()=>{
        const additem = new GenerateList();
        additem.add('head')
        additem.updateCompleteStatus(true)
        expect(additem.removeAllCompleted()).toStrictEqual([])
    })
})