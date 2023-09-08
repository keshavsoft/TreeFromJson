import { StartFunc as StartFuncForTree } from "../../ForTree/EntryFileForObject.js";
let StartFunc = () => {

    let jVarLocalHtmlId = 'ShowObjectButtonId';
    let jVarLocalButtonId = document.getElementById(jVarLocalHtmlId);

    jVarLocalButtonId.addEventListener("click", () => {
        StartFuncForTree();
    })

};

export { StartFunc };
