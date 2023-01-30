
export function ChildP() {
    let childArea = document.getElementById("child");

    window.addEventListener("scroll", function() {
        let value = window.scrollY;

        childArea.style.top = value * 1.5 + "px";
        
    });
}
