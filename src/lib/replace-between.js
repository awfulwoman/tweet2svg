function replaceBetween(origin, startIndex, endIndex, insertion) {
  return origin.substring(0, startIndex) + insertion + origin.substring(endIndex);
}

export default replaceBetween
