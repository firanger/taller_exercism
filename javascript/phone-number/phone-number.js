export const clean = (phone) => {
  const numbers = '0123456789';
  const letters = 'abcdefghijklmnopqrstuvxywz';
  const ponctuation = '@:!?;';
  let ret = '';

  

  for(let i = 0; i< phone.length ; i++ ){
    if(numbers.indexOf(phone[i]) > -1)
      ret += phone[i];
    if(letters.indexOf(phone[i]) > -1)
      throw new Error('Letters not permitted');
    if(ponctuation.indexOf(phone[i]) > -1)
      throw new Error('Punctuations not permitted');
  }
  
  if(ret.length == 11 && ret[0] != 1) 
    throw new Error('11 digits must start with 1');
  if(ret.length < 10)
    throw new Error('Incorrect number of digits');
  if(ret.length > 11)
    throw new Error('More than 11 digits');
  if(ret.length == 10 && ret[0] == 1)
    throw new Error('Area code cannot start with one');
  
  if(ret[0] == '1')
    ret = ret.substring(1);
  if(ret.length == 10 && ret[0] == 0)
    throw new Error('Area code cannot start with zero');
  if(ret.length == 10 && ret[0] == 1)
    throw new Error('Area code cannot start with one');
  if(ret[3] == 0)
    throw new Error('Exchange code cannot start with zero');
  if(ret[3] == 1)
    throw new Error('Exchange code cannot start with one');
  return ret;
};