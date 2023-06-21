// export default [
//   {
//     featureType: "all",
//     elementType: "all",
//     stylers: [
//       {
//         saturation: "32",
//       },
//       {
//         lightness: "-3",
//       },
//       {
//         visibility: "on",
//       },
//       {
//         weight: "1.18",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "landscape",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.man_made",
//     elementType: "all",
//     stylers: [
//       {
//         saturation: "-70",
//       },
//       {
//         lightness: "14",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "all",
//     stylers: [
//       {
//         saturation: "100",
//       },
//       {
//         lightness: "-14",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off",
//       },
//       {
//         lightness: "12",
//       },
//     ],
//   },
// ];

// Dark Map

export default [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 13,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#144b53",
      },
      {
        lightness: 14,
      },
      {
        weight: 1.4,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#08304b",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#0c4152",
      },
      {
        lightness: 5,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#0b434f",
      },
      {
        lightness: 25,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#0b3d51",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        color: "#146474",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#021019",
      },
    ],
  },
];
