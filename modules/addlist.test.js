import GenerateList from "./addlist.js";
describe('add item',()=>{
    test('if its nt an empty string',()=>{
        let additem = new GenerateList()
    additem.add('head')
    expect(additem).not.toStrictEqual([])
    })
    test('return an object',()=>{
        let additem = new GenerateList()
    expect(additem.add('head')).toEqual([{description:'head',completed:false,index:0}])
    })
})
describe('subtraction function test unit', () => {
    test('should remove appropriate task upon user actions', () => {
      expect(
        new GenerateList().removeTaskById(0),
      ).toStrictEqual([]);
    });
  });