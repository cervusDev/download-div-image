export const fakeObject = [
  { name: "George Washington", birthday: "1732-02-22" },
  { name: "John Adams", birthday: "1735-10-19" },
  // ... one row per President
]

export const fakeNestedObject = {
  features: [
    {
      geometry: {
        type: 'polygon',
        coordinates: [
          [-46.4462, -23.5565],
          [-46.4462, -23.5565],
          [-46.4459, -23.5566]
        ]
      },
      properties: {
        CLASSID: 4,
        COD_DIST: "47",
        COD_SUB: "27",
        DADO: 137402, // dado
        DATA_CRIAC: "2007/03/19", // dado
        FEATID: 8583485,
        NOME_DIST: "JOSE BONIFACIO", // dado
        REVISIONNU: 1,
        SIGLA_DIST: "JBO",
        USUARIO_ID: 0
      },
      type: 'Feature'
    },
    {
      geometry: {
        type: 'polygon_clone',
        coordinates: [
          [-46.4462, -23.5565],
          [-46.4462, -23.5565],
          [-46.4459, -23.5566]
        ]
      },
      properties: {
        CLASSID: 4,
        COD_DIST: "47",
        COD_SUB: "27",
        DADO: 137402,
        DATA_CRIAC: "2007/03/19",
        FEATID: 8583485,
        NOME_DIST: "JOSE BONIFACIO_clone",
        REVISIONNU: 1,
        SIGLA_DIST: "JBO_clone",
        USUARIO_ID: 0
      },
      type: 'Feature_clone'
    }
  ]
}