// The function to create the tabular data to display
// fhirSearch results.
function renderJSON(queryData) {
  let i = 1;
  let text = "<div class='list-group'>";
  for (entry in queryData["entry"][0]["resource"]) {
    let target_id = "div_" + i.toString();
    let target = "#" + target_id;
    let source_json = target_id + "#";
    text +=
      "<button type='button' class='list-group-item list-group-item-action json_list_button' data-target=" +
      `${target} data-toggle='collapse' onclick = renderJSONviewer('${target_id}') ><div>`;

    for (let i in data[resource]["displayParam"]) {
      functionName = data[resource]["displayParam"][i];
      text += data[resource][functionName](
        queryData["entry"][0]["resource"][entry]
      );
    }
    text +=
      "<br></div></button>" +
      `<pre class='collapse json_collapse' id=${source_json}>` +
      JSON.stringify(queryData["entry"][0]["resource"][entry]) +
      "</pre>" +
      `<pre class='collapse json_collapse' id=${target_id}>` +
      "</pre>";
    i++;
  }
  text += "</div>";
  document.getElementById("resource-result").innerHTML = text;
}
