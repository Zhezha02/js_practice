function isAdult(age) {
  return age >= 18 ? true : false;
}

function checkMultiplicity(num1, num2) {
  return num1 % num2 === 0 ? true : false;
}

function isTriangle(sideA, sideB, sideC) {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    return false;
  }
  const sumOfOppositeA = sideB + sideC;
  const sumOfOppositeB = sideA + sideC;
  const sumOfOppositeC = sideA + sideB;
  if (sideA >= sideB && sideA >= sideC) {
    if (sideA < sumOfOppositeA) {
      return true;
    }
    return false;
  }
  if (sideB >= sideA && sideB >= sideC) {
    if (sideB < sumOfOppositeB) {
      return true;
    }
    return false;
  }
  if (sideC >= sideA && sideC >= sideB) {
    if (sideC < sumOfOppositeC) {
      return true;
    }
    return false;
  }
}

function getRhombusArea1(side, heignt) {
  if (side <= 0 || heignt <= 0) {
    return null;
  }
  const result = side * heignt;
  return result;
}
function getRhombusArea2(diagonal1, diagonal2) {
  if (diagonal1 <= 0 || diagonal2 <= 0) {
    return null;
  }
  const result = (1 / 2) * diagonal1 * diagonal2;
  return result;
}

function getCylinderArea(radius, height) {
  if (radius <= 0 || heignt <= 0) {
    return null;
  }
  const sideArea = 2 * Math.PI * radius * height;
  const baseArea = Math.PI * radius ** 2;
  const result = sideArea + 2 * baseArea;
  return result;
}

function getTriangleArea(sideA, sideB, sideC) {
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    return null;
  }
  const semiperimeter = (sideA + sideB + sideC) / 2;
  const result =
    (semiperimeter *
      (semiperimeter - sideA) *
      (semiperimeter - sideB) *
      (semiperimeter - sideC)) **
    (1 / 2);
  return result;
}

function getRectangleArea(side1, side2) {
  if (side1 <= 0 || side2 <= 0) {
    return null;
  }
  result = side1 * side2;
  return result;
}
