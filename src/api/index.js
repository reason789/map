import axios from "axios";

// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// export const getPlacesData = async (sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(URL, {
//       params: {
//         bl_latitude: sw.lat,
//         tr_latitude: ne.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//       },
//       headers: {
//         "X-RapidAPI-Key": "216fc69d09msh8ad021b93c6a322p133fb5jsn947115415dd3",
//         "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// uporer tar 500 limit shesh hoye gese tay niche gmail change kre abr same
// eta amar sky blue / halka blue chrome diye kra

// abr jsi data fetch na hoy tahole abr notun rapid api id banaw
// const URL =
//   "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "3d4b8d5392msh3a14e5ad18c9ef9p142d0fjsn5d6f034d2c10",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
