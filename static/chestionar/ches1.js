var config = {};
var adreseSpitale = {};
async function ajax(method, url, body, callback, rejectCallback) {
  return new Promise((resolve, reject)=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {

          if (typeof callback === "function") {
            callback(JSON.parse(this.responseText));
            resolve(JSON.parse(this.responseText))
          }
        } else {
          if (typeof rejectCallback === "function") {
            rejectCallback(new Error("serverul a dat eroare"));
            reject(JSON.parse(this.responseText))
          }
        }
      }
    };
    xhttp.open(method, url, true);
    xhttp.send(body);
  })

};

async function getQuestions() {
  await ajax("GET", "https://ca2019-backend.herokuapp.com/api/form/1", undefined, function(answer) {
    config = answer;
    draw();
  })
};


async function draw() {
  var str = '';
  for (var i = 0; i < config.length; i++) {
    if (config[i].type === "textarea") {
      str += `<div class="form-group">
                 <label>${config[i].label}
                 <textarea class="form-control" name="${config[i].name}" rows="${config[i].rows}"></textarea></label>
                 </div>`
    } else if (config[i].type === "radio" || config[i].type === "checkbox") {
      var radiobtn = ``;
      for (var j = 0; j < config[i].options.length; j++) {
        if (typeof config[i].options[j] === "string" || typeof config[i].options[j] === "number") {
          radiobtn += `<div class="form-check">
                <label class="form-check-label">
                  <input type="${config[i].type}" class="form-check-input" name="${config[i].name}" value="  ${config[i].options[j]}" >
                ${config[i].options[j]}
                  </label>
                </div>`
        } else {
          var sublist = "";
          for (var k = 0; k < config[i].options[j].options.length; k++) {
            sublist += `<div class="form-check">
                 <label class="form-check-label">
                   <input type="${config[i].options[j].type}" class="form-check-input" name="${config[i].name}" value=" ${config[i].options[j].label}" >
                 ${config[i].options[j].options[k]}
                   </label>
                 </div>`
          }
          radiobtn += `<div class="form-check">
                <label class="form-check-label">
                  <input type="${config[i].type}" class="form-check-input" name="${config[i].name}" value="  ${config[i].options[j]}" >
                   ${config[i].options[j].label}
                   ${sublist}
                  </label>
                </div>`
        }
      }
      str += `<fieldset class="form-group">
        <legend>${config[i].label}</legend>
        ${radiobtn}
        </fieldset>`
    } else if (config[i].type === "text") {
      str += `<div class="form-group">
               <label>${config[i].label}
               <input type="text" name="" value="">
               </div>`
    } else if (config[i].type === "number") {
      str += `<div class="form-group">
               <label>${config[i].label}
               <input type="number" name="" value="">
               </div>`
    } else if (config[i].type === "adresa") {
      var options = ``;
      await ajax("GET", "https://ca2019-backend.herokuapp.com/api/hospitallist", undefined, function(answer) {
        adreseSpitale = answer;
        for (let i in adreseSpitale) {
          options += `  <option value="${i}">${i}</option>`
        }
      });

      str += `<div class="form-group">
               <label>${config[i].label}<br />
               <select name="${config[i].name}_judet" onchange="changejudet(this)">
               <option value="">Alege</option>
               ${options}
                </select><br />
                <select name="${config[i].name}_localitate" onchange="changelocalitate(this)">

                 </select><br />
                 <select  name="${config[i].name}_spital" >

                  </select>
                 </div>`
    }



  }
  str+= `<div class="submit col-lg-7 col-sm-8 col-xs-12">
    <input type="submit" class="btn btn-dark " name="" value="Trimite">
  </div>`
  document.querySelector("#form").innerHTML = str;

}

function changejudet(obj) {
obj.value;
var options = '<option value="">Alege</option>' ;
for (let i in adreseSpitale[obj.value]) {
  options += `  <option value="${i}">${i}</option>`
}
obj.parentElement.querySelector(`[name='${obj.name.replace("judet","localitate")}']`).innerHTML = options;
}

function changelocalitate(obj) {
var localitate = obj.value;
var options = '<option value="">Alege</option>';
var spitale = adreseSpitale[obj.parentElement.querySelector(`[name='${obj.name.replace("localitate","judet")}']`).value][localitate];
for (var i = 0; i<spitale.length; i++) {
  options += `  <option value="${spitale[i]}">${spitale[i]}</option>`
}
obj.parentElement.querySelector(`[name='${obj.name.replace("localitate","spital")}']`).innerHTML = options;
}


async function sendinfo() {
  var guest = {};

  await ajax("POST", "https://parfumerie-99bd8.firebaseio.com/products/.json", JSON.stringify(guest))
  await getProducts();
  showProductsTable();
}
