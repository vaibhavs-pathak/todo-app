import { useState } from "react";

import { Menu } from "semantic-ui-react";

export const Header = (props) => {
  const [activeItem, setActiveItem] = useState("home");
  
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={handleItemClick}
      />
    </Menu>
  );
};