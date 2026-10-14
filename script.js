const input=document.getElementById('temperature');
const from=document.getElementById('from-unit');
const to=document.getElementById('to-unit');
const message=document.getElementById('message');
const output=document.getElementById('result-value');

function toCelsius(value,unit){
  if(unit==='C') return value;
  if(unit==='F') return (value-32)*5/9;
  return value-273.15;
}
function fromCelsius(value,unit){
  if(unit==='C') return value;
  if(unit==='F') return value*9/5+32;
  return value+273.15;
}
function symbol(unit){return {C:'°C',F:'°F',K:'K'}[unit];}
function showError(text){message.textContent=text;message.classList.add('error');output.textContent='—';}
function convert(){
  const raw=input.value.trim();
  if(raw===''){showError('Please enter a temperature value.');return;}
  const value=Number(raw);
  if(!Number.isFinite(value)){showError('Enter a valid numeric temperature.');return;}
  let celsius=toCelsius(value,from.value);
  if(celsius < -1e-10){showError('This temperature is below absolute zero. Check the value and unit.');return;}
  if(Math.abs(celsius)<1e-10)celsius=0;
  let result=fromCelsius(celsius,to.value);
  if(Math.abs(result)<1e-10)result=0;
  output.textContent=`${Number(result.toFixed(4))} ${symbol(to.value)}`;
  message.textContent=`${value} ${symbol(from.value)} converted to ${symbol(to.value)}.`;
  message.classList.remove('error');
}
function reset(){
  input.value='';from.value='C';to.value='F';output.textContent='—';
  message.textContent='Enter a value to begin.';message.classList.remove('error');input.focus();
}
document.getElementById('convert-button').addEventListener('click',convert);
document.getElementById('reset-button').addEventListener('click',reset);
input.addEventListener('input',()=>input.value.trim()?convert():resetMessage());
from.addEventListener('change',()=>{if(input.value.trim())convert();});
to.addEventListener('change',()=>{if(input.value.trim())convert();});
input.addEventListener('keydown',e=>{if(e.key==='Enter')convert();});
function resetMessage(){message.textContent='Enter a value to begin.';message.classList.remove('error');output.textContent='—';}
