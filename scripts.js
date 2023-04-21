function generateReport() {
  const formSections = document.querySelectorAll(".form-section");
  const report = document.getElementById("results");

  for (const formSection of formSections) {
    const inputs = formSection.querySelectorAll("input");
    const labels = formSection.querySelectorAll("label");

    for (const input of inputs) {
      if (input.value !== "") {
        const associatedLabel = Array.from(labels).find(
          (label) => label.htmlFor === input.id
        );

        if (input.type === "radio" || input.type === "checkbox") {
          if (input.checked) {
            report.textContent +=
              (associatedLabel ? associatedLabel.textContent : "") +
              " " +
              input.value +
              "\n";
          }
        } else {
          report.textContent +=
            (associatedLabel ? associatedLabel.textContent : "") +
            " " +
            input.value +
            "\n";
        }
      }
    }
  }
}

function generateReport() {
  const inputs = document.querySelectorAll("input");
  const report = document.getElementById("results");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value != "") {
      if (inputs[i].type == "radio") {
        parent = inputs[i].parentElement;
        label = parent.querySelector("label");
        if (inputs[i].checked) {
          report.textContent =
            report.textContent +
            label.textContent +
            " " +
            inputs[i].value +
            "\n";
        }
      } else if (inputs[i].type == "checkbox") {
        parent = inputs[i].parentElement;
        label = parent.querySelector("label");
        if (inputs[i].checked) {
          report.textContent =
            report.textContent +
            label.textContent +
            " " +
            inputs[i].value +
            "\n";
        }
      } else {
        report.textContent =
          report.textContent +
          inputs[i].previousElementSibling.textContent +
          " " +
          inputs[i].value +
          "\n";
      }
    }
  }
}
function open_menu(item) {
  const get_section = item.closest(".form-section");
  const label = get_section.querySelector("button");
  const get_form_content = get_section.querySelector(".form-content");
  get_form_content.classList.toggle("form-content_animation");
  document.body.style["overflow"] = "hidden";

  setTimeout(() => {
    label.scrollIntoViewIfNeeded();
    document.body.style["overflow"] = "visible";
  }, 0);
}

// add remove symptome

function addSymptom() {
  const symptomContainer = document.getElementById("symptom-container");
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
  symptomContainer.insertAdjacentHTML("beforeend", newSymptomBlock);
}

function removeSymptom(button) {
  const symptomBlock = button.closest(".symptom-block");
  symptomBlock.remove();
}
//add_block
function add_block() {
  const get_choice_part = document.querySelectorAll(
    ".choice_menu .choice_part"
  );
  get_choice_part.forEach((item) => {
    item.classList.toggle("choice_part_animation");
  });
}

const med_sections = document.getElementById("med-sections");

function add_medicaments_1() {
  const add_1 = `
  <div class="form-section form-section-one" data-type="einleitung">
  <fieldset>
      <legend>Einleitung der Therapie</legend>
      <div class="button">
          <button onclick="open_menu(this)">Open/Close</button>
      </div>

      <!-- 1 -->
      <div class="form-content" id="form-content7">
          <label for="einleitung-med">mit dem Medikament:</label>
          <input type="text" name="einleitung-med" id="einleitung-med">
          <label for="einleitung-dosis">in einer Tagesdosis von:</label>
          <input type="text" name="einleitung-dosis" id="einleitung-dosis">
          <legend>Ergebnis:</legend>
          <div>
              <input type="radio" name="einleitung-ergebnis" id="einleitung-verbesserung">
              <label for="einleitung-verbesserung">Verbesserung der Symptome:</label>
              <input type="text" name="einleitung-verbesserung-text">
          </div>
          <div>
              <input type="radio" name="einleitung-ergebnis"
                     id="einleitung-verschlechterung">
              <label for="einleitung-verschlechterung">Verschlechterung der
                  Symptome:</label>
              <input type="text" name="einleitung-verschlechterung-text">
          </div>
          <div>
              <input type="radio" name="einleitung-ergebnis" id="einleitung-ausbleiben">
              <label for="einleitung-ausbleiben">Ausbleiben der Wirkung auf die
                  Symptome:</label>
              <input type="text" name="einleitung-ausbleiben-text">
          </div>
          <div>
              <input type="radio" name="einleitung-ergebnis"
                     id="einleitung-nebenwirkungen">
              <label for="einleitung-nebenwirkungen">Nebenwirkungen oder allergische
                  Reaktionen:</label>
              <input type="text" name="einleitung-nebenwirkungen-text">
          </div>
      </div>
  </fieldset>
</div>`;
  med_sections.insertAdjacentHTML("beforeend", add_1);
}
function add_medicaments_2() {
  const insert_2 = `
    <div class="form-section form-section-two">
    <fieldset>
        <legend>Fortsetzung der bereits verordneter Therapie:</legend>
        <div class="button">
            <button onclick="open_menu(this)">Open/Close</button>
        </div>

        <div class="form-content" id="form-content8">
            <label for="pre_treatment">durch:</label>
            <input type="text" name="pre_treatment"
                   placeholder="Funktion und evtl. Name des Vorbehandlers">
            <label for="continuing_med_name">mit dem Medikament:</label>
            <input type="text" id="continuing_med_name" name="continuing_med_name">
            <label for="continuing_dose">in einer Tagesdosis von:</label>
            <input type="text" id="continuing_dose" name="continuing_dose">


            <legend>Ergebnis:</legend>
            <div>
                <input type="radio" name="fortsetzung-ergebnis"
                       id="fortsetzung-verbesserung">
                <label for="fortsetzung-verbesserung">Verbesserung der Symptome:</label>
                <input type="text" name="fortsetzung-verbesserung-text">
            </div>
            <div>
                <input type="radio" name="fortsetzung-ergebnis"
                       id="fortsetzung-verschlechterung">
                <label for="fortsetzung-verschlechterung">Verschlechterung der
                    Symptome:</label>
                <input type="text" name="fortsetzung-verschlechterung-text">
            </div>
            <div>
                <input type="radio" name="fortsetzung-ergebnis"
                       id="fortsetzung-aufrechterhaltung">
                <label for="fortsetzung-aufrechterhaltung">Aufrechterhaltung der Wirkung auf
                    die Symptome:</label>
                <input type="text" name="fortsetzung-aufrechterhaltung-text">
            </div>
            <div>
                <input type="radio" name="fortsetzung-ergebnis" id="fortsetzung-ausbleiben">
                <label for="fortsetzung-ausbleiben">Ausbleiben der Wirkung auf die
                    Symptome:</label>
                <input type="text" name="fortsetzung-ausbleiben-text">
            </div>
            <div>
                <input type="radio" name="fortsetzung-ergebnis"
                       id="fortsetzung-nebenwirkungen">
                <label for="fortsetzung-nebenwirkungen">Nebenwirkungen oder allergische
                    Reaktionen:</label>
                <input type="text" name="fortsetzung-nebenwirkungen-text">
            </div>
        </div>
    </fieldset>
</div>
    `;
  med_sections.insertAdjacentHTML("beforeend", insert_2);
}
function add_medicaments_3() {
  const insert = `
    <div class="form-section form-section-three">
    <fieldset>
        <legend>Ergänzung der bereits verordneter Therapie:</legend>
        <div class="button">
            <button onclick="open_menu(this)">Open/Close</button>
        </div>

        <div class="form-content" id="form-content9">
            <label for="pre_treatment_addition">durch:</label>
            <input type="text" name="pre_treatment_addition"
                   placeholder="Funktion und evtl. Name des Vorbehandlers">
            <label for="additional_med_name">mit dem Medikament:</label>
            <input type="text" id="additional_med_name" name="additional_med_name">
            <label for="additional_dose">in einer Tagesdosis von:</label>
            <input type="text" id="additional_dose" name="additional_dose">
            <legend>Ergebnis:</legend>
            <div>
                <input type="radio" name="einleitung-ergebnis" id="einleitung-verbesserung">
                <label for="einleitung-verbesserung">Verbesserung der Symptome:</label>
                <input type="text" name="einleitung-verbesserung-text">
            </div>
            <div>
                <input type="radio" name="einleitung-ergebnis"
                       id="einleitung-verschlechterung">
                <label for="einleitung-verschlechterung">Verschlechterung der
                    Symptome:</label>
                <input type="text" name="einleitung-verschlechterung-text">
            </div>
            <div>
                <input type="radio" name="einleitung-ergebnis" id="einleitung-ausbleiben">
                <label for="einleitung-ausbleiben">Ausbleiben der Wirkung auf die
                    Symptome:</label>
                <input type="text" name="einleitung-ausbleiben-text">
            </div>
            <div>
                <input type="radio" name="einleitung-ergebnis"
                       id="einleitung-nebenwirkungen">
                <label for="einleitung-nebenwirkungen">Nebenwirkungen oder allergische
                    Reaktionen:</label>
                <input type="text" name="einleitung-nebenwirkungen-text">
            </div>
        </div>
    </fieldset>
</div>
    `;
  med_sections.insertAdjacentHTML("beforeend", insert);
}
function add_medicaments_4() {
  const insert = `
  <div class="form-section form-section-four">
  <fieldset>
      <legend>Erhöhung der Tagesdosis</legend>
      <div class="button">
          <button onclick="open_menu(this)">Open/Close</button>
      </div>

      <div class="form-content" id="form-content10">

          <label for="medIncreaseName">Name des Medikaments:</label>
          <input type="text" id="medIncreaseName" name="medIncreaseName">

          <label for="initialDoseIncrease">Anfangsdosis (Zahl und Einheit):</label>
          <input type="text" id="initialDoseIncrease" name="initialDoseIncrease">

          <label for="newDoseIncrease">Neue Dosis (Zahl und Einheit):</label>
          <input type="text" id="newDoseIncrease" name="newDoseIncrease">

          <legend>Grund:</legend>
          <label for="reasonNoResponse">
              <input type="checkbox" id="reasonNoResponse" name="reasonIncrease"
                     value="noResponse"> Vollständiges Ausbleiben des Ansprechens
          </label>
          <label for="reasonInsufficientEffect">
              <input type="checkbox" id="reasonInsufficientEffect" name="reasonIncrease"
                     value="insufficientEffect"> Unzureichende Wirksamkeit
          </label>
          <label for="reasonStandardProcedure">
              <input type="checkbox" id="reasonStandardProcedure" name="reasonIncrease"
                     value="standardProcedure"> Im Rahmen des Standardverfahrens der
              Dosistitration
          </label>

          <legend>Ergebnis:</legend>
          <label for="resultImprovement">
              <input type="radio" id="resultImprovement" name="resultIncrease"
                     value="improvement"> Verbesserung der Symptome:
          </label>
          <input type="text" id="resultImprovementText" name="resultImprovementText">
          <label for="resultWorsening">
              <input type="radio" id="resultWorsening" name="resultIncrease"
                     value="worsening"> Verschlechterung der Symptome:
          </label>
          <input type="text" id="resultWorseningText" name="resultWorseningText">
          <label for="resultNoEffect">
              <input type="radio" id="resultNoEffect" name="resultIncrease"
                     value="noEffect"> Ausbleiben der Wirkung auf die Symptome:
          </label>
          <input type="text" id="resultNoEffectText" name="resultNoEffectText">
          <label for="resultSideEffects">
              <input type="radio" id="resultSideEffects" name="resultIncrease"
                     value="sideEffects"> Nebenwirkungen oder allergische Reaktionen:
          </label>
          <input type="text" id="resultSideEffectsText" name="resultSideEffectsText">
      </div>
  </fieldset>
</div>
    `;
  med_sections.insertAdjacentHTML("beforeend", insert);
}
function add_medicaments_5() {
  const insert = `
  <div class="form-section form-section-five">
  <fieldset>
      <legend>Reduktion der Tagesdosis</legend>
      <div class="button">
          <button onclick="open_menu(this)">Open/Close</button>
      </div>
      <div class="form-content" id="form-content11">
          <label for="medDecreaseName">Name des Medikaments:</label>
          <input type="text" id="medDecreaseName" name="medDecreaseName">

          <label for="initialDoseDecrease">Anfangsdosis (Zahl und Einheit):</label>
          <input type="text" id="initialDoseDecrease" name="initialDoseDecrease">

          <label for="newDoseDecrease">Neue Dosis (Zahl und Einheit):</label>
          <input type="text" id="newDoseDecrease" name="newDoseDecrease">

          <legend>Grund:</legend>
          <label for="reasonIntolerance">
              <input type="checkbox" id="reasonIntolerance" name="reasonDecrease"
                     value="intolerance"> Unverträglichkeit des Medikamentes in Form von:
          </label>
          <input type="text" id="reasonIntoleranceText" name="reasonIntoleranceText">
          <label for="reasonInteraction">
              <input type="checkbox" id="reasonInteraction" name="reasonDecrease"
                     value="interaction"> Pharmakokinetische Interaktionen mit
          </label>
          <input type="text" id="reasonInteractionText" name="reasonInteractionText">
          <label for="reasonIndicationChange">
              <input type="checkbox" id="reasonIndicationChange" name="reasonDecrease"
                     value="indicationChange"> Änderung der Indikation von
          </label>
          <input type="text" id="reasonIndicationChangeOld"
                 name="reasonIndicationChangeOld">
          <label for="reasonIndicationChangeNew"> auf </label>
          <input type="text" id="reasonIndicationChangeNew"
                 name="reasonIndicationChangeNew">
          <label for="reasonPatientRefusal">
              <input type="checkbox" id="reasonPatientRefusal" name="reasonDecrease"
                     value="patientRefusal"> Weigerung des Patienten, das Medikament in
              der ursprünglichen Dosis weiter einzunehmen:
          </label>
          <input type="text" id="reasonPatientRefusalText"
                 name="reasonPatientRefusalText">
          <label for="reasonPatientPreference">
              <input type="checkbox" id="reasonPatientPreference" name="reasonDecrease"
                     value="patientPreference"> Patientenpräferenz:
          </label>
          <input type="text" id="reasonPatientPreferenceText"
                 name="reasonPatientPreferenceText">

          <legend>Ergebnis:</legend>
          <label for="resultImprovedTolerance">
              <input type="radio" id="resultImprovedTolerance" name="resultDecrease"
                     value="improvedTolerance"> Verbesserung der Verträglichkeit:
          </label>
          <input type="text" id="resultImprovedToleranceText"
                 name="resultImprovedToleranceText">
          <label for="resultSymptomWorsening">
              <input type="radio" id="resultSymptomWorsening" name="resultDecrease"
                     value="symptomWorsening"> Verschlechterung der Symptome:
          </label>
          <input type="text" id="resultSymptomWorseningText"
                 name="resultSymptomWorseningText">
          <label for="resultNoEffectDecrease">
              <input type="radio" id="resultNoEffectDecrease" name="resultDecrease"
                     value="noEffect"> Ausbleiben der Wirkung auf die Symptome:
          </label>
          <input type="text" id="resultNoEffectDecreaseText"
                 name="resultNoEffectDecreaseText">
          <label for="resultSideEffectsDecrease">
              <input type="radio" id="resultSideEffectsDecrease" name="resultDecrease"
                     value="sideEffects"> Nebenwirkungen oder allergische Reaktionen:
          </label>
          <input type="text" id="resultSideEffectsDecreaseText"
      </div>
  </fieldset>
</div>
    `;
  med_sections.insertAdjacentHTML("beforeend", insert);
}
function add_medicaments_6() {
  const insert = `
  <div class="form-section form-section-six">
  <fieldset>
      <legend>Umstellung von Medikament</legend>
      <div class="button">
          <button onclick="open_menu(this)">Open/Close</button>
      </div>
      <div class="form-content" id="form-content13">
          <label for="previous_med_name">Name des vorherigen Medikaments:</label>
          <input type="text" id="previous_med_name" name="previous_med_name">
          <label for="new_med_name">Name des neuen Medikaments:</label>
          <input type="text" id="new_med_name" name="new_med_name">
          <label for="new_med_dose">Tagesdosis des neuen Medikaments:</label>
          <input type="text" id="new_med_dose" name="new_med_dose">


          <legend>Grund:</legend>
          <label><input type="checkbox" name="grund" value="ausbleiben_ansprechen">vollständiges
              Ausbleiben des Ansprechens</label><br>
          <label><input type="checkbox" name="grund" value="unzureichende_wirksamkeit">unzureichende
              Wirksamkeit</label><br>
          <label><input type="checkbox" name="grund" value="unverträglichkeit">Unverträglichkeit
              des ursprünglichen Medikamentes in Form von:</label>
          <input type="text" name="unverträglichkeit_text" placeholder="Beschreibung"><br>
          <label><input type="checkbox" name="grund" value="unzulässige_kombination">Umstellung
              aufgrund der Unzulässigkeit der Kombination von</label>
          <input type="text" name="ursprüngliches_medikament"
                 placeholder="ursprüngliches Medikament">
          <input type="text" name="anderes_medikament"
                 placeholder="anderes eingenommenes Medikament"><br>
          <label><input type="checkbox" name="grund" value="änderung_indikation">Änderung
              der Indikation von</label>
          <input type="text" name="ursprüngliche_indikation"
                 placeholder="ursprüngliche Indikation">
          <input type="text" name="neue_indikation" placeholder="neue Indikation"><br>
          <label><input type="checkbox" name="grund" value="toleranz_entwicklung">Entwicklung
              der Toleranz</label><br>
          <label><input type="checkbox" name="grund" value="umstellung_generikum">Umstellung
              auf ein Generikum auf Wunsch des Patienten</label><br>
          <label><input type="checkbox" name="grund" value="nichtverfügbarkeit">Nichtverfügbarkeit
              des Medikaments auf dem lokalen Arzneimittelmarkt</label><br>
          <label><input type="checkbox" name="grund" value="weigerung">Weigerung des
              Patienten, das Medikament weiter einzunehmen:</label>
          <input type="text" name="weigerung_grund" placeholder="Grund"><br>
          <label><input type="checkbox" name="grund"
                        value="patientenpräferenz">Patientenpräferenz:</label>
          <input type="text" name="patientenpräferenz_grund" placeholder="Grund">


          <!-- Verfahren der Umstellung -->
          <div class="form-section">

              <legend>Verfahren der Umstellung</legend>
              <label><input type="radio" name="verfahren"
                            value="kreuztitration_schrittweise_dosisreduktion">Kreuztitration
                  mit schrittweiser Dosisreduktion und vollständigem Absetzen von</label>
              <input type="text" name="ursprüngliches_medikament_1"
                     placeholder="ursprüngliches Medikament">
              <label>und gleichzeitiger Einführung von</label>
              <input type="text" name="neues_medikament_1" placeholder="neues Medikament">
              <label>in der Tagesdosis von</label>
              <input type="text" name="neues_medikament_dosis1"
                     placeholder="Dosis (mg/µg/g/mmol)"><br>
              <label><input type="radio" name="verfahren"
                            value="kreuztitration_schrittweise_dosissteigerung">Kreuztitration
                  mit schrittweiser Dosisreduktion und vollständigem Absetzen von</label>
              <input type="text" name="ursprüngliches_medikament_2"
                     placeholder="ursprüngliches Medikament">
              <label>und gleichzeitiger Einführung von</label>
              <input type="text" name="neues_medikament_2" placeholder="neues Medikament">
              <label>mit schrittweiser Tagesdosissteigerung von</label>
              <input type="text" name="neues_medikament_dosis_2_start"
                     placeholder="Startdosis (mg/µg/g/mmol)">
              <label>auf</label>
              <input type="text" name="neues_medikament_dosis_2_end"
                     placeholder="Enddosis (mg/µg/g/mmol)"><br>
              <label><input type="radio" name="verfahren" value="einschrittiges_absetzen">Einschrittiges
                  Absetzen von</label>
              <input type="text" name="ursprüngliches_medikament_3"
                     placeholder="ursprüngliches Medikament">
              <label>und Beginn der Therapie mit</label>
              <input type="text" name="neues_medikament_3" placeholder="neues Medikament">
              <label>in einer Tagesdosis</label>
              <input type="text" name="neues_medikament_dosis_3"
                     placeholder="Dosis (mg/µg/g/mmol)"><br>
              <label><input type="radio" name="verfahren"
                            value="einschrittiges_absetzen_schrittweise_dosissteigerung">Einschrittiges
                  Absetzen von</label>
              <input type="text" name="ursprüngliches_medikament_4"
                     placeholder="ursprüngliches Medikament">
              <label>und Beginn der Therapie mit</label>
              <input type="text" name="neues_medikament_4" placeholder="neues Medikament">
              <label>mit schrittweiser Tagesdosissteigerung von</label>
              <input type="text" name="neues_medikament_dosis_4_start"
                     placeholder="Startdosis (mg/µg/g/mmol)">
              <label>auf</label>
              <input type="text" name="neues_medikament_dosis_4_end"
                     placeholder="Enddosis (mg/µg/g/mmol)">

          </div>
          <!-- Ergebnis -->
          <div class="form-section">

              <legend>Ergebnis</legend>
              <label><input type="radio" name="ergebnis" value="verbesserung">Verbesserung
                  der Symptome:</label>
              <input type="text" name="verbesserung_text" placeholder="Beschreibung"><br>
              <label><input type="radio" name="ergebnis" value="verschlechterung">Verschlechterung
                  der Symptome:</label>
              <input type="text" name="verschlechterung_text"
                     placeholder="Beschreibung"><br>
              <label><input type="radio" name="ergebnis" value="ausbleiben">Ausbleiben der
                  Wirkung auf die Symptome:</label>
              <input type="text" name="verschlechterung_text"
                     placeholder="Beschreibung"><br>
              <input type="text" name="ausbleiben_text" placeholder="Beschreibung"><br>
              <input type="text" name="verschlechterung_text"
                     placeholder="Beschreibung"><br>
              <label><input type="radio" name="ergebnis" value="nebenwirkungen">Nebenwirkungen
                  oder allergische Reaktionen:</label>
              <input type="text" name="verschlechterung_text"
                     placeholder="Beschreibung"><br>
              <input type="text" name="nebenwirkungen_text" placeholder="Beschreibung">
              <input type="text" name="verschlechterung_text"
                     placeholder="Beschreibung"><br>
          </div>
      </div>
  </fieldset>
</div>
      `;
  med_sections.insertAdjacentHTML("beforeend", insert);
}
function add_medicaments_7() {
  const insert = `
  <div class="form-section form-section-seven">
  <fieldset>
      <legend>Absetzen der Therapie</legend>
      <div class="button">
          <button onclick="open_menu(this)">Open/Close</button>
      </div>

      <div class="form-content" id="form-content12">
          <label for="discontinued_med_name">Name des Medikaments:</label>
          <input type="text" id="discontinued_med_name" name="discontinued_med_name">


          <legend>Grund für das Absetzen:</legend>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="symptom_disappearance">
              Vollständiges Abklingen der Symptomatik und keine Indikation für eine
              fortgesetzte Anwendung als Erhaltungstherapie
          </label>
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason" value="no_response">
              Vollständiges Ausbleiben des Ansprechens
          </label>
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="insufficient_effectiveness">
              Unzureichende Wirksamkeit
          </label>
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason" value="intolerance">
              Unverträglichkeit des Medikamentes in Form von:
          </label>
          <input type="text" name="intolerance_description" placeholder="Beschreibung">
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="incompatibility">
              Absetzen aufgrund der Unzulässigkeit der Kombination von
          </label>
          <input type="text" name="discontinued_med"
                 placeholder="Name des abgesetzten Medikaments">
          <label>mit</label>
          <input type="text" name="other_med"
                 placeholder="Name des anderen eingenommenen Medikaments">
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="indication_change">
              Änderung der Indikation von
          </label>
          <input type="text" name="initial_indication"
                 placeholder="ursprüngliche Indikation">
          <label>auf</label>
          <input type="text" name="new_indication" placeholder="neue Indikation">
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="tolerance_development">
              Entwicklung der Toleranz
          </label>
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="drug_unavailability">
              Nichtverfügbarkeit des Medikaments auf dem lokalen Arzneimittelmarkt
          </label>
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="patient_refusal">
              Weigerung des Patienten, das Medikament weiter einzunehmen:
          </label>
          <input type="text" name="refusal_reason" placeholder="Grund (optional)">
          <br>
          <label>
              <input type="checkbox" name="discontinuation_reason"
                     value="patient_preference">
              Patientenpräferenz:
          </label>
          <input type="text" name="preference_reason" placeholder="Grund (optional)">


          <legend>Verfahren des Absetzens:</legend>
          <label>
              <input type="radio" name="discontinuation_method" value="gradual_reduction">
              Schrittweise Dosisreduktion mit anschließendem vollständigen Absetzen
          </label>
          <br>
          <label>
              <input type="radio" name="discontinuation_method"
                     value="one_step_discontinuation">
              Einschrittiges Absetzen
          </label>


          <legend>Ergebnis:</legend>
          <label>
              <input type="radio" name="discontinuation_outcome"
                     value="symptom_improvement">
              Verbesserung der Unverträglichkeitssymptome:
          </label>
          <input type="text" name="improvement_description" placeholder="Beschreibung">
          <br>
          <label>
              <input type="radio" name="discontinuation_outcome"
                     value="symptom_worsening">
              Verschlechterung der Symptomatik:
          </label>
          <input type="text" name="worsening_description" placeholder="Beschreibung">
          <br>
          <label>
              <input type="radio" name="discontinuation_outcome" value="no_changes">
              Keine Veränderungen des Zustandes
          </label>

      </div>
  </fieldset>
</div>
        `;
  med_sections.insertAdjacentHTML("beforeend", insert);
}
