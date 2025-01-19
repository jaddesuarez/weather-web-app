import { UserContext } from "./UserContext";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ favorite: [] });

  const addFavorite = (cityId) => {
    setUser((prev) => ({
      ...prev,
      favorite: [...prev.favorite, cityId],
    }));
  };

  const removeFavorite = (cityId) => {
    setUser((prev) => ({
      ...prev,
      favorite: prev.favorite.filter((id) => id !== cityId),
    }));
  };

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      setUser((prev) => ({ ...prev, favorite: JSON.parse(favorites) }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(user.favorite));
  }, [user.favorite]);

  return (
    <UserContext.Provider value={{ user, addFavorite, removeFavorite }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
