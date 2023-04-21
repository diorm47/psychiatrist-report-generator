function generateReport() {
  const inputs = document.querySelectorAll('input');
  const report = document.getElementById('results');
  for (let i=0; i < inputs.length; i++){
      if (inputs[i].value!=''){
          if (inputs[i].type == "radio"){
              parent = inputs[i].parentElement;
              label = parent.querySelector('label');
              if (inputs[i].checked){
                  report.textContent =  report.textContent + label.textContent + ' ' + inputs[i].value + '\n';
              }
          } else if (inputs[i].type == "checkbox"){
              parent = inputs[i].parentElement;
              label = parent.querySelector('label');
              if (inputs[i].checked){
                  report.textContent =  report.textContent + label.textContent + ' ' + inputs[i].value + '\n';
              }
          }else{
              report.textContent =  report.textContent + inputs[i].previousElementSibling.textContent + ' ' + inputs[i].value + '\n';
          }
      }
  }
}
function open_menu(item) {
  if (item.parentElement.previousElementSibling.textContent == 'Einleitung der Therapie' || item.parentElement.previousElementSibling.textContent == 'Fortsetzung der bereits verordneter Therapie' || item.parentElement.previousElementSibling.textContent == 'Ergänzung der bereits verordneter Therapie' || item.parentElement.previousElementSibling.textContent == 'Erhöhung der Tagesdosis' || item.parentElement.previousElementSibling.textContent == 'Reduktion der Tagesdosis' || item.parentElement.previousElementSibling.textContent == 'Umstellung von Medikament' || item.parentElement.previousElementSibling.textContent == 'Absetzen der Therapie'){
      const get_form_content = item.parentElement.parentElement.querySelector('.form-content');
      get_form_content.classList.toggle("form-content_animation");  
      
  } else{
      const get_section = item.closest(".form-section");
      const label = get_section.querySelector('button');
      const get_form_content = get_section.querySelector(".form-content");
      get_form_content.classList.toggle("form-content_animation");  
      document.body.style["overflow"] = "hidden";
      setTimeout(()=>{
          label.scrollIntoViewIfNeeded();
          document.body.style["overflow"] = "visible";
      }, 0);
  }
  
}

// add remove symptome

function addSymptom() {
  const symptomContainer = document.getElementById('symptom-container');
  const newSymptomBlock = `
          <div class="symptom-block">
              <strong>Symptom:</strong> <input type="text" class="symptom-input"><br>
              Schweregrad:
              <input type="radio" name="severity" value="geringfügig"> geringfügig
              <input type="radio" name="severity" value="deutlich"> deutlich
              <input type="radio" name="severity" value="stark"> stark
              <input type="radio" name="severity" value="extrem"> extrem<br>
              Entwicklungsart:
              <input type="radio" name="development" value="schleichend"> schleichend
              <input type="radio" name="development" value="abrupt"> abrupt
              <input type="radio" name="development" value="episodisch"> episodisch<br>
              Dauer:
              <input type="radio" name="duration" value="akut"> akut
              <input type="radio" name="duration" value="chronisch"> chronisch<br>
              Zeitpunkt des Auftretens sowie eventueller Verschlechterung oder Verbesserung: <input type="text" class="timing-input"><br>
              <button onclick="removeSymptom(this)">Remove</button>
          </div>`;
  symptomContainer.insertAdjacentHTML('beforeend', newSymptomBlock);
}

function removeSymptom(button) {
  const symptomBlock = button.closest('.symptom-block');
  symptomBlock.remove();
}
//add_block
function add_block(){
  const get_choice_part = document.querySelectorAll(".choice_menu .choice_part");
  get_choice_part.forEach( (item) => {
      item.classList.toggle("choice_part_animation");

  });
}
const get_form_section_one = document.querySelector(".form-section-one");
let form_section_one_quantity = 0;
const get_form_section_two = document.querySelector(".form-section-two");
let form_section_two_quantity = 0;
const get_form_section_three = document.querySelector(".form-section-three");
let form_section_three_quantity = 0;
const get_form_section_four = document.querySelector(".form-section-four");
let form_section_four_quantity = 0;
const get_form_section_five = document.querySelector(".form-section-five");
let form_section_five_quantity = 0;
const get_form_section_six = document.querySelector(".form-section-six");
let form_section_six_quantity = 0;
const get_form_section_seven = document.querySelector(".form-section-seven");
let form_section_seven_quantity = 0;
function block_enter_one(){
  if (form_section_one_quantity == 0){
      get_form_section_one.classList.toggle("med-form-display");
  } else if (form_section_one_quantity < 5){
      get_form_section_one.insertAdjacentHTML('beforebegin', get_form_section_one.innerHTML);
  }
  form_section_one_quantity += 1;
}
function block_enter_two(){
  if (form_section_two_quantity == 0){
      get_form_section_two.classList.toggle("med-form-display");
  } else if (form_section_two_quantity < 5){
      get_form_section_two.insertAdjacentHTML('beforebegin', get_form_section_two.innerHTML);
  }
  form_section_two_quantity += 1;
}
function block_enter_three(){
  if (form_section_three_quantity == 0){
      get_form_section_three.classList.toggle("med-form-display");
  } else if (form_section_three_quantity < 5){
      get_form_section_three.insertAdjacentHTML('beforebegin', get_form_section_three.innerHTML);
  }
  form_section_three_quantity += 1;
}
function block_enter_four(){
  if (form_section_four_quantity == 0){
      get_form_section_four.classList.toggle("med-form-display");
  } else if (form_section_four_quantity < 5){
      get_form_section_four.insertAdjacentHTML('beforebegin', get_form_section_four.innerHTML);
  }
  form_section_four_quantity += 1;
}
function block_enter_five(){
  if (form_section_five_quantity == 0){
      get_form_section_five.classList.toggle("med-form-display");
  } else if (form_section_five_quantity < 5){
      get_form_section_five.insertAdjacentHTML('beforebegin', get_form_section_five.innerHTML);
  }
  form_section_five_quantity += 1;
}
function block_enter_six(){
  if (form_section_six_quantity == 0){
      get_form_section_six.classList.toggle("med-form-display");
  } else if (form_section_six_quantity < 5){
      get_form_section_six.insertAdjacentHTML('beforebegin', get_form_section_six.innerHTML);
  }
  form_section_six_quantity += 1;
}
function block_enter_seven(){
  if (form_section_seven_quantity == 0){
      get_form_section_seven.classList.toggle("med-form-display");
  } else if (form_section_seven_quantity < 5){
      get_form_section_seven.insertAdjacentHTML('beforebegin', get_form_section_seven.innerHTML);
  }
  form_section_seven_quantity += 1;
}