import { StartFunc as StartFuncForTree } from "../../../ForTree/EntryFileForObject.js";

let ButtonClickFunc = async () => {
    let jvarLocalJSONData = {};
    let jVarLocalSelectFileId = document.getElementById("SelectFileId");
    let jVarLocalSelectedFile = jVarLocalSelectFileId.files[0];
    fileValidation(jVarLocalSelectedFile);
    let jVarLocalFromFile = await jVarLocalreadFileAsync(jVarLocalSelectedFile);
    jvarLocalJSONData = JSON.parse(jVarLocalFromFile);
    console.log("jvarLocalJSONData",jvarLocalJSONData);
    StartFuncForTree({data: jvarLocalJSONData})
};

let fileValidation = (file) => {
    console.log("file", file, file.type, file.type === "application/json");

    if ((file.type === "application/json") === false) {
        alert('Invalid file type');
        return false;
    }
};

let jVarLocalreadFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
};

export { ButtonClickFunc };