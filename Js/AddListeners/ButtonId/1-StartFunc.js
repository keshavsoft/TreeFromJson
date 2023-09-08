import { StartFunc as StartFuncForTree } from "../../ForTree/EntryFile.js";
let StartFunc = () => {

    let jVarLocalHtmlId = 'ButtonId';
    let jVarLocalButtonId = document.getElementById(jVarLocalHtmlId);

    jVarLocalButtonId.addEventListener("click", () => {
        StartFuncForTree();
    })

};

export { StartFunc };
