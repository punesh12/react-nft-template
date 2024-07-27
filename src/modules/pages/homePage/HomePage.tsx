import Avatar from "shared/avatar/Avatar";
import { H1SpaceMono } from "styles/typography";

const HomePage = () => {
  const abc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1jcdPIigf_kfARk5VZ3HbL3K2x3kFgOcEA&s";

  return (
    <div>
      <H1SpaceMono>Home</H1SpaceMono>
      <Avatar src={abc} alt="Large Avatar" size="large" />
      <Avatar src={abc} alt="Medium Avatar" size="medium" />
      <Avatar src={abc} alt="Small Avatar" size="small" />
    </div>
  );
};

export default HomePage;
