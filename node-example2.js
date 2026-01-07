const { PI } = Math;  // private to this file

area = (r) => PI * r ** 2;  // exported
exports.area = area;

circumference = (r) => 2 * PI * r;  // exported
exports.circumference = circumference;