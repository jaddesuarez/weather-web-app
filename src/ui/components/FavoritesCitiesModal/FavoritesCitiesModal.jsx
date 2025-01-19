import { useEffect, useState } from "react";
import { useUser } from "@context/UserContext";
import { useTranslation } from "react-i18next";
import { nominatimService } from "@services/nominatim.service";
import PropTypes from "prop-types";

export const FavoritesCitiesModal = ({
  isOpen,
  onClose,
  setCurrCity,
  handleLocationSelect,
}) => {
  const { t, i18n } = useTranslation();
  const { user, removeFavorite } = useUser();
  const [favCities, setFavCities] = useState([]);

  useEffect(() => {
    if (user.favorite.length !== 0) {
      const fetchCities = async () => {
        const cities = await nominatimService.getCityById(
          user.favorite,
          i18n.language
        );
        setFavCities(
          cities.map((city) => {
            const nameArr = city.display_name.split(",");
            const displayName =
              nameArr[0] + " - " + nameArr[nameArr.length - 1];
            return {
              name: displayName,
              id: city.osm_type.split("")[0].toUpperCase() + city.osm_id,
              lat: parseFloat(city.lat),
              lng: parseFloat(city.lon),
            };
          })
        );
      };
      fetchCities();
    } else {
      setFavCities([]);
    }
  }, [user.favorite, i18n.language]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t("favoritesTitle")}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Cities List */}
        <div className="space-y-2">
          {favCities.length === 0 ? (
            <p className="text-gray-500 text-center">{t("favoritesEmpty")}</p>
          ) : (
            favCities.map((city) => (
              <div key={city.id} className="flex items-center gap-2">
                <div
                  className="flex-1 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setCurrCity(city);
                    handleLocationSelect({
                      lat: city.lat,
                      lng: city.lng,
                    });
                    onClose();
                  }}
                >
                  <span>{city.name}</span>
                </div>
                <button
                  onClick={() => removeFavorite(city.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

FavoritesCitiesModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setCurrCity: PropTypes.func.isRequired,
  handleLocationSelect: PropTypes.func.isRequired,
};
