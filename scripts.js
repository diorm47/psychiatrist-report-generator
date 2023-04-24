function generateReport() {
  const inputs = document.querySelectorAll("input");
  const report = document.getElementById("results");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text") {
      const label = inputs[i].previousElementSibling;
      if (inputs[i].value != "") {
        const fieldset = inputs[i].closest("fieldset");
        const legend = fieldset.querySelector("legend");
        if (inputs[i].placeholder == "Namen von Symptomen") {
          report.textContent =
            report.textContent +
            "Auswirkungen der durchgeführten Behandlung auf spezifische psychopathologische Symptome: " +
            inputs[i].value +
            ": ";
        } else if (inputs[i].id == "symptom-1") {
          if (!report.textContent.includes("GRUND FÜR DIE BEHANDLUNG")) {
            report.textContent =
              report.textContent +
              "\n" +
              "GRUND FÜR DIE BEHANDLUNG" +
              "\n" +
              "Vorhandene psychopathologische Symptome: " +
              inputs[i].value +
              "\n";
          }
        } else if (inputs[i].name == "termination-other-text") {
          report.textContent =
            report.textContent +
            "Umstände der Behandlungsbeendigung: " +
            inputs[i].value +
            "\n";
        } else {
          if (legend) {
            if (!report.textContent.includes(legend.textContent)) {
              report.textContent =
                report.textContent + legend.textContent + "\n";
            }
            report.textContent =
              report.textContent +
              label.textContent.replace(/\s+/g, " ").trim() +
              " " +
              inputs[i].value +
              "\n";
          } else {
            report.textContent =
              report.textContent +
              label.textContent.replace(/\s+/g, " ").trim() +
              " " +
              inputs[i].value +
              "\n";
          }
        }
      }
    } else if (inputs[i].type == "radio") {
      if (inputs[i].value != "") {
        const parent = inputs[i].parentElement;
        let label = parent.querySelector("label");
        if (parent.tagName == "LABEL") {
          label = parent.parentElement.querySelector("label");
        }
        if (inputs[i].checked) {
          const fieldset = inputs[i].closest("fieldset");
          const legend = fieldset.querySelector("legend");
          if (inputs[i].name == "no_med_treatment") {
            report.textContent =
              report.textContent +
              "Keine medikamentöse Behandlung" +
              ": " +
              inputs[i].nextSibling.textContent.replace(/\s+/g, " ").trim();
            continue;
          } else if (parent.parentElement.parentElement.querySelector("h3")) {
            if (
              !report.textContent.includes("FUNKTIONSFÄHIGKEIT (NACH MINI ICF)")
            ) {
              report.textContent =
                report.textContent +
                "\n" +
                "FUNKTIONSFÄHIGKEIT (NACH MINI ICF)" +
                "\n" +
                "Beeinträchtigungen der Fähigkeiten" +
                "\n";
            }
            if (
              !report.textContent.includes(
                parent.parentElement.querySelector("label").textContent
              )
            ) {
              report.textContent =
                report.textContent +
                parent.parentElement.querySelector("label").textContent +
                " " +
                inputs[i].value;
            } else {
              report.textContent = report.textContent + ", " + inputs[i].value;
            }
          } else if (
            inputs[i].parentElement.querySelector("label").innerText ==
            "Auswirkungen der durchgeführten Behandlung auf spezifische psychopathologische Symptome:"
          ) {
            report.textContent = report.textContent + inputs[i].value + "\n";
          }
          if (!(inputs[i].value == "Andere")) {
            if (!report.textContent.includes(legend.textContent)) {
              report.textContent =
                report.textContent + legend.textContent + "\n";
            } else {
              report.textContent =
                report.textContent +
                label.textContent.replace(/\s+/g, " ").trim() +
                " " +
                inputs[i].value +
                "\n";
            }
          }
        }
      }
    } else if (inputs[i].type == "checkbox") {
      const parent = inputs[i].parentElement;
      const label = parent.querySelector("label");
      const fieldset = inputs[i].closest("fieldset");
      const legend = fieldset.querySelector("legend");
      if (
        parent.parentElement.querySelector("label").textContent ==
        "Probleme im Zusammenhang mit Angst:"
      ) {
        if (inputs[i].checked) {
          if (
            !report.textContent.includes(
              parent.parentElement.querySelector("label").textContent
            )
          ) {
            if (legend) {
              if (!report.textContent.includes(legend.textContent)) {
                report.textContent =
                  report.textContent + legend.textContent + "\n";
              }
            }
            report.textContent =
              report.textContent +
              "\n" +
              parent.parentElement.querySelector("label").textContent +
              " " +
              inputs[i].value;
          } else {
            report.textContent = report.textContent + ", " + inputs[i].value;
          }
        }
      } else if (
        inputs[i].parentElement.parentElement.parentElement.querySelector("h3")
      ) {
        if (inputs[i].checked) {
          if (
            inputs[i].parentElement.parentElement.parentElement.querySelector(
              "h3"
            ).textContent == "Defizite" ||
            inputs[i].parentElement.parentElement.parentElement.querySelector(
              "h3"
            ).textContent == "Ressourcen"
          ) {
            if (!report.textContent.includes("DEFIZITE UND RESSOURCEN")) {
              report.textContent =
                report.textContent + "\n" + "DEFIZITE UND RESSOURCEN";
            }
            if (
              !report.textContent.includes(
                inputs[
                  i
                ].parentElement.parentElement.parentElement.querySelector("h3")
                  .textContent
              )
            ) {
              report.textContent =
                report.textContent +
                "\n" +
                inputs[
                  i
                ].parentElement.parentElement.parentElement.querySelector("h3")
                  .textContent +
                ": " +
                inputs[i].value;
            } else {
              report.textContent = report.textContent + ", " + inputs[i].value;
            }
          }
        }
      } else if (
        legend.textContent ==
        "Interventionen der kognitiv-behavioralen Therapie (CBT)"
      ) {
        if (inputs[i].checked) {
          if (
            !report.textContent.includes(
              "Interventionen der kognitiv-behavioralen Therapie (CBT)"
            )
          ) {
            report.textContent =
              report.textContent + "\n" + "Psychotherapeutische Interventionen";
            report.textContent =
              report.textContent +
              "\n" +
              "Interventionen der kognitiv-behavioralen Therapie (CBT): " +
              inputs[i].value;
          } else {
            report.textContent = report.textContent + ", " + inputs[i].value;
          }
        }
      } else if (
        parent.parentElement.querySelector("label").innerText ==
        "Probleme im Zusammenhang mit Emotionen, Stimmung und Emotionsregulation:"
      ) {
        if (inputs[i].checked) {
          if (
            !report.textContent.includes(
              "Probleme im Zusammenhang mit Emotionen, Stimmung und Emotionsregulation:"
            )
          ) {
            report.textContent =
              report.textContent +
              "\n" +
              "Probleme im Zusammenhang mit Emotionen, Stimmung und Emotionsregulation:" +
              inputs[i].value;
            if (legend) {
              if (!report.textContent.includes(legend.textContent)) {
                report.textContent =
                  report.textContent + legend.textContent + "\n";
              }
            }
          } else {
            report.textContent = report.textContent + ", " + inputs[i].value;
          }
        }
      } else if (
        parent.parentElement.querySelector("label").innerText ==
        "Probleme im Zusammenhang mit Impulskontrolle:"
      ) {
        if (inputs[i].checked) {
          if (
            !report.textContent.includes(
              "Probleme im Zusammenhang mit Impulskontrolle:"
            )
          ) {
            if (legend) {
              if (!report.textContent.includes(legend.textContent)) {
                report.textContent =
                  report.textContent + legend.textContent + "\n";
              }
            }
            report.textContent =
              report.textContent +
              "\n" +
              "Probleme im Zusammenhang mit Impulskontrolle:" +
              inputs[i].value;
          } else {
            report.textContent = report.textContent + ", " + inputs[i].value;
          }
        }
      } else if (
        parent.parentElement.querySelector("label").innerText ==
        "Probleme im Zusammenhang mit Kommunikation und Beziehungen:"
      ) {
        if (inputs[i].checked) {
          if (
            !report.textContent.includes(
              "Probleme im Zusammenhang mit Kommunikation und Beziehungen:"
            )
          ) {
            if (legend) {
              if (!report.textContent.includes(legend.textContent)) {
                report.textContent =
                  report.textContent + legend.textContent + "\n";
              }
            }
            report.textContent =
              report.textContent +
              "\n" +
              "Probleme im Zusammenhang mit Kommunikation und Beziehungen:" +
              inputs[i].value;
          } else {
            report.textContent = report.textContent + ", " + inputs[i].value;
          }
        }
      } else if (
        parent.parentElement.querySelector("label").innerText ==
          "Probleme im Zusammenhang mit den kognitiven Funktionen:" ||
        parent.parentElement.querySelector("label").innerText ==
          "Probleme im Zusammenhang mit eigenem Selbst:" ||
        parent.parentElement.querySelector("label").innerText ==
          "Probleme im Zusammenhang mit der psychischen Anpassung:" ||
        parent.parentElement.querySelector("label").innerText ==
          "Probleme im Zusammenhang mit der Erfahrung von Trauma und Missbrauch:" ||
        parent.parentElement.querySelector("label").innerText ==
          "Probleme im Zusammenhang mit körperlichen und psychosomatischen Faktoren:" ||
        parent.parentElement.querySelector("label").innerText ==
          "Sonstige Probleme:"
      ) {
        if (inputs[i].checked) {
          if (
            !report.textContent.includes(
              parent.parentElement.querySelector("label").textContent
            )
          ) {
            if (legend) {
              if (!report.textContent.includes(legend.textContent)) {
                report.textContent =
                  report.textContent + legend.textContent + "\n";
              }
            }
            report.textContent =
              report.textContent +
              "\n" +
              parent.parentElement.querySelector("label").textContent +
              inputs[i].value;
          } else {
            report.textContent = report.textContent + ", " + inputs[i].value;
          }
        }
      } else if (inputs[i].checked && label) {
        if (!report.textContent.includes(label.textContent)) {
          const fieldset = inputs[i].closest("fieldset");
          const legend = fieldset.querySelector("legend");
          if (!report.textContent.includes(legend.textContent)) {
            if (legend) {
              if (!report.textContent.includes(legend.textContent)) {
                report.textContent =
                  report.textContent + legend.textContent + "\n";
              }
            }
            report.textContent = report.textContent + "\n" + legend.textContent;
          }
          report.textContent =
            report.textContent +
            label.textContent.replace(/\s+/g, " ").trim() +
            ": " +
            inputs[i].value.split("\n");
        } else {
          const fieldset = inputs[i].closest("fieldset");
          const legend = fieldset.querySelector("legend");
          if (!report.textContent.includes(legend.textContent)) {
            if (legend) {
              if (!report.textContent.includes(legend.textContent)) {
                report.textContent =
                  report.textContent + legend.textContent + "\n";
              }
            }
            report.textContent = report.textContent + "\n" + legend.textContent;
          }
          report.textContent =
            report.textContent +
            ", " +
            inputs[i].value.replace(/\s+/g, " ").trim();
        }
      } else if (
        inputs[i].checked &&
        label == null &&
        parent.parentElement.querySelector("h3") != null
      ) {
        if (
          !report.textContent.includes(
            parent.parentElement.querySelector("h3").textContent
          )
        ) {
          const fieldset = inputs[i].closest("fieldset");
          const legend = fieldset.querySelector("legend");
          if (!report.textContent.includes(legend.textContent)) {
            report.textContent = report.textContent + "\n" + legend.textContent;
          }
          report.textContent += "\n";
          report.textContent =
            report.textContent +
            parent.parentElement
              .querySelector("h3")
              .textContent.replace(/\s+/g, " ")
              .trim() +
            ": " +
            inputs[i].value.split("\n");
        } else {
          const fieldset = inputs[i].closest("fieldset");
          const legend = fieldset.querySelector("legend");
          if (!report.textContent.includes(legend.textContent)) {
            report.textContent = report.textContent + "\n" + legend.textContent;
          }
          report.textContent =
            report.textContent + ", " + inputs[i].value.split("\n");
        }
      } else if (
        inputs[i].checked &&
        label == null &&
        parent.parentElement.parentElement.querySelector("legend") != null
      ) {
        if (
          !report.textContent.includes(
            parent.parentElement.parentElement.querySelector("legend")
              .textContent
          )
        ) {
          const fieldset = inputs[i].closest("fieldset");
          const legend = fieldset.querySelector("legend");
          if (!report.textContent.includes(legend.textContent)) {
            report.textContent = report.textContent + "\n" + legend.textContent;
          }
          report.textContent += "\n";
          report.textContent =
            report.textContent +
            parent.parentElement.parentElement
              .querySelector("legend")
              .textContent.replace(/\s+/g, " ")
              .trim() +
            ": " +
            inputs[i].value.split("\n");
        } else {
          const fieldset = inputs[i].closest("fieldset");
          const legend = fieldset.querySelector("legend");
          if (!report.textContent.includes(legend.textContent)) {
            report.textContent =
              report.textContent +
              "\n" +
              legend.textContent +
              ": " +
              inputs[i].value;
          } else {
            report.textContent =
              report.textContent + ", " + inputs[i].value.split("\n");
          }
        }
      }
    }
    report.textContent = report.textContent.replace(/,\s*$/, "");
  }
}

function open_menu(item) {
  if (
    item.parentElement.previousElementSibling.textContent ==
      "Einleitung der Therapie" ||
    item.parentElement.previousElementSibling.textContent ==
      "Fortsetzung der bereits verordneter Therapie" ||
    item.parentElement.previousElementSibling.textContent ==
      "Ergänzung der bereits verordneter Therapie" ||
    item.parentElement.previousElementSibling.textContent ==
      "Erhöhung der Tagesdosis" ||
    item.parentElement.previousElementSibling.textContent ==
      "Reduktion der Tagesdosis" ||
    item.parentElement.previousElementSibling.textContent ==
      "Umstellung von Medikament" ||
    item.parentElement.previousElementSibling.textContent ==
      "Absetzen der Therapie"
  ) {
    const get_form_content =
      item.parentElement.parentElement.querySelector(".form-content");
    get_form_content.classList.toggle("form-content_animation");
  } else {
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
}

// add remove symptome
let symptomNumber = 0;
function addSymptom() {
  const symptomContainer = document.getElementById("symptom-container");
  symptomNumber += 1;
  const newSymptomBlock = `
            <div class="symptom-block">
                <strong>Symptom:</strong> <input type="text" class="symptom-input"><br>
                <label>Schweregrad: </label>
                <input type="radio" name="severity${symptomNumber}" value="geringfügig"> geringfügig
                <input type="radio" name="severity${symptomNumber}" value="deutlich"> deutlich
                <input type="radio" name="severity${symptomNumber}" value="stark"> stark
                <input type="radio" name="severity${symptomNumber}" value="extrem"> extrem<br>
                <label>Entwicklungsart: </label>
                <input type="radio" name="development${symptomNumber}" value="schleichend"> schleichend
                <input type="radio" name="development${symptomNumber}" value="abrupt"> abrupt
                <input type="radio" name="development${symptomNumber}" value="episodisch"> episodisch<br>
                <label>Dauer: </label>
                <input type="radio" name="duration${symptomNumber}" value="akut"> akut
                <input type="radio" name="duration${symptomNumber}" value="chronisch"> chronisch<br>
                <label>Zeitpunkt des Auftretens sowie eventueller Verschlechterung oder Verbesserung: </label> <input type="text" class="timing-input"><br>
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
function block_enter_one() {
  if (form_section_one_quantity == 0) {
    get_form_section_one.classList.toggle("med-form-display");
    const radios = get_form_section_one.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_one_quantity;
      }
    });
  } else if (form_section_one_quantity < 5) {
    get_form_section_one.insertAdjacentHTML(
      "beforebegin",
      get_form_section_one.innerHTML
    );
    const radios = get_form_section_one.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_one_quantity;
      }
    });
  }
  form_section_one_quantity += 1;
}
function block_enter_two() {
  if (form_section_two_quantity == 0) {
    get_form_section_two.classList.toggle("med-form-display");
  } else if (form_section_two_quantity < 5) {
    get_form_section_two.insertAdjacentHTML(
      "beforebegin",
      get_form_section_two.innerHTML
    );
    const radios = get_form_section_two.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_two_quantity;
      }
    });
  }
  form_section_two_quantity += 1;
}
function block_enter_three() {
  if (form_section_three_quantity == 0) {
    get_form_section_three.classList.toggle("med-form-display");
  } else if (form_section_three_quantity < 5) {
    get_form_section_three.insertAdjacentHTML(
      "beforebegin",
      get_form_section_three.innerHTML
    );
    const radios = get_form_section_three.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_three_quantity;
      }
    });
  }
  form_section_three_quantity += 1;
}
function block_enter_four() {
  if (form_section_four_quantity == 0) {
    get_form_section_four.classList.toggle("med-form-display");
  } else if (form_section_four_quantity < 5) {
    get_form_section_four.insertAdjacentHTML(
      "beforebegin",
      get_form_section_four.innerHTML
    );
    const radios = get_form_section_four.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_four_quantity;
      }
    });
  }
  form_section_four_quantity += 1;
}
function block_enter_five() {
  if (form_section_five_quantity == 0) {
    get_form_section_five.classList.toggle("med-form-display");
  } else if (form_section_five_quantity < 5) {
    get_form_section_five.insertAdjacentHTML(
      "beforebegin",
      get_form_section_five.innerHTML
    );
    const radios = get_form_section_five.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_five_quantity;
      }
    });
  }
  form_section_five_quantity += 1;
}
function block_enter_six() {
  if (form_section_six_quantity == 0) {
    get_form_section_six.classList.toggle("med-form-display");
  } else if (form_section_six_quantity < 5) {
    get_form_section_six.insertAdjacentHTML(
      "beforebegin",
      get_form_section_six.innerHTML
    );
    const radios = get_form_section_six.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_six_quantity;
      }
    });
  }
  form_section_six_quantity += 1;
}
function block_enter_seven() {
  if (form_section_seven_quantity == 0) {
    get_form_section_seven.classList.toggle("med-form-display");
  } else if (form_section_seven_quantity < 5) {
    get_form_section_seven.insertAdjacentHTML(
      "beforebegin",
      get_form_section_seven.innerHTML
    );
    const radios = get_form_section_seven.querySelectorAll("input");
    radios.forEach((item) => {
      if (item.type == "radio") {
        item.name += form_section_seven_quantity;
      }
    });
  }
  form_section_seven_quantity += 1;
}
