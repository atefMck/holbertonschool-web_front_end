function roomDimensions() {
    let width = 50;
    let length = 100;
    function getArea() {
        return width * length;
    }
}
console.log(roomDimensions.getArea());
// let boundGetArea = roomDimensions.getArea.bind(roomDimensions);