import { getDistance } from 'geolib';

import Rakuten from '../lib/Rakuten';

const config = require('../../config/config');

// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: config.RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params).then(result => result.data.hotels.map((hotel) => {
    console.log(hotel);
    const basicInfo = hotel.hotel[0].hotelBasicInfo;
    const price = basicInfo.hotelMinCharge;
    const distance = getDistance(
      { latitude: location.lat, longitude: location.lng },
      { latitude: basicInfo.latitude, longitude: basicInfo.longitude },
    );
    console.log(distance);

    return {
      id: basicInfo.hotelNo,
      name: basicInfo.hotelName,
      url: basicInfo.hotelInformationUrl,
      thumbUrl: basicInfo.hotelThumbnailUrl,
      price: price ? `${price}円` : '空室なし',
      reviewAverage: basicInfo.reviewAverage,
      reviewCount: basicInfo.reviewCount,
      distance,
    };
  }));
};
