console.log("Content Script Loader")
let saveButton = null;
let selectedText = ""
let ignoreMouseUp = false;

document.addEventListener("mouseup",(event)=>{

    console.log(event.target);
console.log(window.getSelection().toString().trim());
    selectedText = window.getSelection().toString().trim();

    if(selectedText){
        console.log("Selected Text",selectedText)
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        console.log(rect)
        createSaveButton(rect);
    }
})

function createSaveButton(rect){
    if(saveButton){
        saveButton.remove()
    }
    const button = document.createElement('button');

    button.innerText = "Save High-light";
    button.style.position = 'fixed';
    button.style.left=rect.left + "px";
    button.style.top = rect.bottom + 5+"px";
    button.style.zIndex = "9999";
    button.style.background="blue";
    button.style.padding="8px";
    button.style.color="white";
    button.style.cursor="pointer"

    console.log(button);
    
    button.addEventListener("mousedown", () => {
    ignoreMouseUp = true;
});
  button.addEventListener("click", (e) => {
    console.log("Button Clicked");
   e.preventDefault();
   e.stopPropagation();
   saveHighlight(selectedText)
   button.remove()
});



    document.body.appendChild(button)
    saveButton = button
}

function saveHighlight(text) {
    chrome.storage.local.get(["highlights"], (result) => {
        const highlights = result.highlights || [];
        highlights.push(text);

        chrome.storage.local.set({
            highlights: highlights
        });
        console.log("Saved Successfully");
    });

}