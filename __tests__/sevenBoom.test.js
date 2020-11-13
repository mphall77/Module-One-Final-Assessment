const sevenBoom = require("../problems/sevenBoom")

describe("sevenBoom", () => {
  test("Returns the correct sequence", () => {
    expect(sevenBoom(20)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      "BOOM",
      8,
      9,
      10,
      11,
      12,
      13,
      "BOOM",
      15,
      16,
      "BOOM",
      18,
      19,
      20,
    ])
    expect(sevenBoom(59)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      "BOOM",
      8,
      9,
      10,
      11,
      12,
      13,
      "BOOM",
      15,
      16,
      "BOOM",
      18,
      19,
      20,
      "BOOM",
      22,
      23,
      24,
      25,
      26,
      "BOOM",
      "BOOM",
      29,
      30,
      31,
      32,
      33,
      34,
      "BOOM",
      36,
      "BOOM",
      38,
      39,
      40,
      41,
      "BOOM",
      43,
      44,
      45,
      46,
      "BOOM",
      48,
      "BOOM",
      50,
      51,
      52,
      53,
      54,
      55,
      "BOOM",
      "BOOM",
      58,
      59,
    ])
  })
})
