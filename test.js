import { equal } from 'assert';
import { typographer, sampleInput, sampleOutput } from './index';

it('Should beatify text', ()=> {
  const input  = sampleInput.split('\n').map(item => item.trim());
  const output = sampleOutput.split('\n').map(item => item.trim());

  input.forEach((item, i)=> {
    equal(typographer(input[i]), output[i]);
  })
});
