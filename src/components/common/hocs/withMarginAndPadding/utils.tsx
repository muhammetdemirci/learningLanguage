/**
 * top left bottom right
 */
const TRBLFactory =
  (key: string = 'padding') =>
  (value: number | Array<number>) => {
    if (typeof value === 'number') {
      return {
        [`${key}`]: value,
      }
    }
    if (typeof value === 'object') {
      const paddingSize = Object.keys(value).length
      switch (paddingSize) {
        case 1:
          return {
            [`${key}Top`]: value[0],
            [`${key}Left`]: value[0],
            [`${key}Bottom`]: value[0],
            [`${key}Right`]: value[0],
          }
        case 2:
          return {
            [`${key}Top`]: value[0],
            [`${key}Left`]: value[1],
            [`${key}Bottom`]: value[0],
            [`${key}Right`]: value[1],
          }
        case 3:
          return {
            [`${key}Top`]: value[0],
            [`${key}Left`]: value[1],
            [`${key}Bottom`]: value[2],
            [`${key}Right`]: value[1],
          }
        default:
          return {
            [`${key}Top`]: value[0],
            [`${key}Left`]: value[1],
            [`${key}Bottom`]: value[2],
            [`${key}Right`]: value[3],
          }
      }
    }
  }

export const handleMargins = TRBLFactory('margin')

export const handlePaddings = TRBLFactory('padding')
