const form = document.querySelector('form');

form.addEventListener('submit' ,function(e){
    e.preventDefault()

  const height =  parseInt(document.querySelector('#height').value);
  const weight =  parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results')

  if (height === '' || height  < 0 || isNaN(height)) {
    results.innerHTML =`please enter a valid number ${height}`;
  }
  else if (weight === '' || weight  < 0 || isNaN(weight)) {
    results.innerHTML =`please enter a valid number ${weight}`;}
        else{
      const bmi = (weight / (height * height)).toFixed(2);
      
  if (bmi < 18.6) {
        results.innerHTML = `Your BMI is ${bmi} - Underweight`;
    } else if (bmi <= 24.9) {
        results.innerHTML = `Your BMI is ${bmi} - Normal`;
    } else {
        results.innerHTML = `Your BMI is ${bmi} - Overweight`;
    }
        }
    
})