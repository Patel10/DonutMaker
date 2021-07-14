
import DonutMaker from "./DonutMaker";


describe('The creation of DonutMaker', ()=>{
    test('Does it add a donut?', ()=>{
        const underTest = new DonutMaker(0, 0);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1);
    });
});