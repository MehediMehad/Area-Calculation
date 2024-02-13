function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-b')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    
    const triangleHeightInput = document.getElementById('triangle-h')
    const triangleHeightText =triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);
    // calculate triangle area
    const area = 0.5 * base * height;
    console.log(area);
    const triangleAreaSpan = document.getElementById('triangele-area');
    triangleAreaSpan.innerText = area ;
}
