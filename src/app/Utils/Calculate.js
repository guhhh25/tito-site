export function HandleCalculate (length, width, height, units) {
  if (units === 'cm') {
    length /= 2.54
    width /= 2.54
    height /= 2.54
  }

  const volume = length * width * height

  if (units === 'lb') {
    const dimensionalWeight = volume / 139
    const roundedWeight = Math.ceil(dimensionalWeight)

    return roundedWeight.toString()
  } else {
    const dimensionalWeight = volume / 5000
    const roundedWeight = Math.ceil(dimensionalWeight)

    return roundedWeight.toString()
  }
}
