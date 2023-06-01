interface City {
  temperature: number[]
  wind: number[]
  windDirection: string[]
  rain: number[]
  
}

export type CityData = Record<string, City>

const data: CityData = {
  Chrsitchurch: {
    temperature: [8, 9, 11, 11, 13, 12],
    wind: [4, 5, 16, 20, 15, 15],
    windDirection: ['N', 'NE', 'NE', 'NW', 'NW', 'N'],
    rain: [0, 0, 0, 0, 3, 6]
  },
  Auckland: {
    temperature: [8, 10, 14, 18, 20, 18],
    wind: [14, 15, 10, 8, 6, 14],
    windDirection: ['S', 'SE', 'SE', 'SW', 'SW', 'S'],
    rain: [0, 0, 0, 5, 6, 1]
  },
  Wellington: {
    temperature: [7, 9, 11, 13, 14, 10],
    wind: [14, 15, 19, 23, 23, 20],
    windDirection: ['NE', 'NE', 'N', 'N', 'NW', 'NW'],
    rain: [0, 2, 0, 0, 0, 0]
  },
  Hamilton: {
    temperature: [10, 13, 15, 19, 23, 24],
    wind: [4, 10, 12, 24, 13, 8],
    windDirection: ['NE', 'NE', 'NE', 'E', 'E', 'E'],
    rain: [0, 0, 0, 0, 0, 0]
  },
  Dunedin: {
    temperature: [10, 10, 11, 11, 12, 11],
    wind: [3, 5, 10, 14, 15, 12],
    windDirection: ['E', 'NE', 'NE', 'E', 'SE', 'SE'],
    rain: [1, 0, 0, 0, 3, 0]
  }
}

export default data
