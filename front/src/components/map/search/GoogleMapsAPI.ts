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
    const res = await axios.get(endpoint, {
      params: {
        key: googleGeoCodingKey,
        latlng: `${lat},${lng}`
      }
    });
    return res.data;
  }
}

export default GoogleMapsAPI;
