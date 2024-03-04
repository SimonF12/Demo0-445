
function drawTriangle(triangleSize) {
    for (let line = 1; line <= triangleSize; line++) {
        let stars = '';
        for (let star = 1; star <= line; star++) {
            stars += '*';
        }
        console.log(stars);
    }
}