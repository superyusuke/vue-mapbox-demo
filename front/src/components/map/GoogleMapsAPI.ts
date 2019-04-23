import axios from "axios";

class GoogleMapsAPI {
  // address to latLng
  static async geoCoding(address: string) {
    const googleGeoCodingKey = process.env.VUE_APP_GOOGLEMAP_API_KEY;
    const endpoint = "https://maps.googleapis.com/maps/api/geocode/json";
    const res = await axios.get(endpoint, {
      params: {
        key: googleGeoCodingKey,
        address
      }
    });
    return res.data;
  }

  // latLng to Address
  static async reverseGeoCoding({ lng, lat }: { lng: number; lat: number }) {
    const googleGeoCodingKey = process.env.VUE_APP_GOOGLEMAP_API_KEY;
    const endpoint = "https://maps.googleapis.com/maps/api/geocode/json";
    try {
      const res: any = await axios.get(endpoint, {
        params: {
          key: googleGeoCodingKey,
          latlng: `${lat},${lng}`,
          language: "ja"
        }
      });
      const { data } = res;
      const { results } = data;
      const [topResult] = results;
      const { formatted_address } = topResult;
      return formatted_address;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default GoogleMapsAPI;
