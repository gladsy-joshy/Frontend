import React, { useState, useEffect, useRef } from "react";
import "./body.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categories = [
  {
    name: "Grocery",
    image:
      "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
    dropdown: false,
  },
  {
    name: "Mobile",
    image:
      "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
    dropdown: false,
  },
  {
    name: "Fashion",
    image: "https://audaces.com/wp-content/uploads/2020/08/fashion-styles.webp",
    items: ["Men", "Women", "Kids"],
    dropdown: true,
  },
  {
    name: "Electronics",
    image:
      "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720915200&semt=ais_user",
    dropdown: false,
  },
  {
    name: "Home & Furniture",
    image: "https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg",
    items: ["Living Room", "Bedroom", "Kitchen"],
    dropdown: true,
  },
  {
    name: "Appliances",
    image:
      "https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg",
    dropdown: false,
  },
  {
    name: "Travel",
    image:
      "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
    items: ["Flights", "Hotels", "Cabs"],
    dropdown: true,
  },
  {
    name: "Toys & Beauty",
    image:
      "https://t4.ftcdn.net/jpg/00/48/10/67/360_F_48106748_5uLqRWQ7bp328aOWJ5SxXaEQ7g4AcHQY.jpg",
    items: ["Toys", "Beauty Products"],
    dropdown: true,
  },
  {
    name: "Two Wheelers",
    image: "https://etimg.etb2bimg.com/photo/77295438.cms",
    items: ["Scooters", "Motorcycles"],
    dropdown: true,
  },
];

const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/814a3428ea819df3.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f6cb8b7cbeafbd38.jpg?q=20",
];

const electronicsItems = [
  {
    image:
      "https://w7.pngwing.com/pngs/575/495/png-transparent-laptop-android-electronics-touchscreen-automotive-products-in-kind-laptop-gadget-automotive-computer.png",
    name: "Laptop",
    price: "$100",
    stock: "In Stock",
  },
  {
    image:
      "https://www.electronicproducts.com/wp-content/uploads/wearables-fashion-bip2.png",
    name: "Watch",
    price: "$150",
    stock: "Out of Stock",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/05/91/84/29/360_F_591842937_ptXTrDjkCdG21JhOmaEzyZ7ZJyAhVuQP.jpg",
    name: "PC set",
    price: "$200",
    stock: "In Stock",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg",
    name: "Systems",
    price: "$250",
    stock: "In Stock",
  },
  {
    image: "https://m.media-amazon.com/images/I/41qOS0ZMOML._AC_.jpg",
    name: "Airpods",
    price: "$300",
    stock: "Out of Stock",
  },
  {
    image:
      "https://i.pinimg.com/736x/44/9c/71/449c71d8f06a9b5daba236cfd4a37a7e.jpg",
    name: "Electronic Item 6",
    price: "$350",
    stock: "In Stock",
  },
  {
    image:
      "https://i.pinimg.com/736x/e3/1d/34/e31d34299c5542d1dfe8b95aeee12795.jpg",
    name: "Electronic Item 7",
    price: "$400",
    stock: "Out of Stock",
  },
  {
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635268157-27-1635268152.jpg?crop=1xw:1xh;center,top&resize=980:*",
    name: "Electronic Item 8",
    price: "$450",
    stock: "In Stock",
  },
  {
    image: "https://i.ytimg.com/vi/wNHvGW3bnpI/maxresdefault.jpg",
    name: "Electronic Item 9",
    price: "$500",
    stock: "In Stock",
  },
  {
    image:
      "https://static.toiimg.com/thumb/resizemode-4,msid-45793419,width-800,height-450,imgv-75/45793419.jpg",
    name: "Electronic Item 10",
    price: "$550",
    stock: "Out of Stock",
  },
  {
    image:
      "https://i0.wp.com/geekygadgets.in/wp-content/uploads/2017/08/Irusu-MONSTERVR-VR-headset-with-free-remote-controller-Smart-Glasses.jpeg?resize=384%2C332&ssl=1",
    name: "Electronic Item 11",
    price: "$600",
    stock: "In Stock",
  },
  {
    image:
      "https://static.toiimg.com/thumb/resizemode-4,msid-45793235,width-800,height-450,imgv-75/45793235.jpg",
    name: "Electronic Item 12",
    price: "$650",
    stock: "Out of Stock",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/H81a27548741e4091a75bd32a9026a97fG.jpg_300x300.jpg",
    name: "Electronic Item 13",
    price: "$700",
    stock: "In Stock",
  },
  {
    image:
      "https://www.electronicproducts.com/wp-content/uploads/power-products-batteries-and-fuel-cells-powersphere-hub.png",
    name: "Electronic Item 14",
    price: "$750",
    stock: "Out of Stock",
  },
  {
    image:
      "https://c02.purpledshub.com/uploads/sites/41/2022/06/9421412f8e83278b37b538744a0913b0ultra-01e0e5e-e1655112987410.jpeg",
    name: "Electronic Item 15",
    price: "$800",
    stock: "In Stock",
  },
  {
    image:
      "https://c02.purpledshub.com/uploads/sites/41/2023/12/SF-images.jpg?resize=800%2C534&webp=1&w=1200",
    name: "Electronic Item 16",
    price: "$850",
    stock: "Out of Stock",
  },
  {
    image:
      "https://s.alicdn.com/@sc04/kf/H58b91a42219c4f73a7fcca049c91204dc.jpg_300x300.jpg",
    name: "Electronic Item 17",
    price: "$900",
    stock: "In Stock",
  },
  {
    image:
      "https://images.uncommongoods.com/images/items/55300/55324_1_360px.jpg",
    name: "Electronic Item 18",
    price: "$950",
    stock: "Out of Stock",
  },
  {
    image: "https://www.meteorelectrical.com/media/wysiwyg/dev.jpeg",
    name: "Electronic Item 19",
    price: "$1000",
    stock: "In Stock",
  },
  {
    image:
      "https://i.pinimg.com/736x/44/9c/71/449c71d8f06a9b5daba236cfd4a37a7e.jpg",
    name: "Electronic Item 20",
    price: "$1050",
    stock: "Out of Stock",
  },
];
const beautyfoodItems = [
  {
    image:
      "https://m.media-amazon.com/images/I/71airM48HGL._AC_UF350,350_QL80_.jpg",
    name: "Story book for kids",
    price: "$50",
    stock: "In Stock",
  },
  {
    image:
      "https://www.thoughtco.com/thmb/Hb55efckc6j-43cq-PjiUUkN-WE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-826471232-9ae66e91a4b54c2f8ffc3530a5bae5de.jpg",
    name: "College texts",
    price: "$350",
    stock: "In Stock",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71airM48HGL._AC_UF350,350_QL80_.jpg",
    name: "Story book for kids",
    price: "$50",
    stock: "In Stock",
  },
  {
    image:
      "https://png.pngtree.com/png-vector/20201127/ourmid/pngtree-office-stationery-creative-photography-png-image_2453762.jpg",
    name: "Pencil sets",
    price: "$20",
    stock: "In Stock",
  },
  {
    image:
      "https://www.pngfind.com/pngs/m/76-769316_school-stationery-png-happy-teachers-day-in-hindi.png",
    name: "School Stationary",
    price: "$50",
    stock: "In Stock",
  },
  {
    image:
      "https://www.mishry.com/wp-content/uploads/2019/06/packaged-food-brands.png",
    name: "Snacks",
    price: "$50",
    stock: "In Stock",
  },
  {
    image:
      "https://www.cnet.com/a/img/resize/af7a1129318b00fa6386dc1731cd14b09dc21eb8/hub/2023/10/02/a2702f0c-5206-4306-8fd2-ee703fe93259/pyxel.jpg?auto=webp&fit=crop&height=1200&width=1200",
    name: "Kids Toys",
    price: "$1500",
    stock: "In Stock",
  },
  {
    image:
      "https://ik.imagekit.io/cycles/electric-bike/WhatsApp%20Image%202024-05-19%20at%2016.59.48_6828ee2c%20(Large)%20(1)_zkY24gahX.jpg?updatedAt=1716118323083",
    name: "Electric Cycle",
    price: "$3500",
    stock: "Out of Stock",
  },
];
const Body = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elecIndex, setElecIndex] = useState(0);
  const electronicsTrackRef = useRef(null);
  const dropdownRefs = useRef([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [beautyIndex, setBeautyIndex] = useState(0);
  const beautyfoodItemsTrackRef = useRef(null);

  const handleBeautyPrevClick = () => {
    if (beautyIndex > 0) {
      setBeautyIndex(beautyIndex - 1);
    } else {
      setBeautyIndex(beautyfoodItems.length - 1);
    }
  };

  const handleBeautyNextClick = () => {
    if (beautyIndex < beautyfoodItems.length - 1) {
      setBeautyIndex(beautyIndex + 1);
    } else {
      setBeautyIndex(0);
    }
  };

  const handleMouseEnter = (item) => {
    setCurrentItem(item);
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
    setCurrentItem(null);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleElecPrevClick = () => {
    setElecIndex((prevIndex) =>
      prevIndex === 0 ? electronicsItems.length - 1 : prevIndex - 1
    );
  };

  const handleElecNextClick = () => {
    setElecIndex((prevIndex) =>
      prevIndex === electronicsItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        electronicsTrackRef.current &&
        !electronicsTrackRef.current.contains(event.target)
      ) {
        setShowDetails(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="body-container">
      {categories.map((category, index) => (
        <div
          key={category.name}
          className="category"
          onMouseEnter={() => handleDropdownToggle(index)}
          onMouseLeave={() => handleDropdownToggle(index)}
        >
          <button className="category-button">
            <img src={category.image} alt={category.name} />
            <div className="category-name-container">
              <span className="category-name">{category.name}</span>
              {category.dropdown && (
                <ArrowDropDownIcon
                  className={`dropdown-icon ${
                    activeDropdown === index ? "rotate" : ""
                  }`}
                />
              )}
            </div>
          </button>
          {category.dropdown && activeDropdown === index && (
            <div
              className="dropdown-menu"
              ref={(ref) => (dropdownRefs.current[index] = ref)}
            >
              {category.items.map((item) => (
                <a key={item} href="#" className="dropdown-item">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="carousel-section">
        <button
          className="carousel-button prev"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          <ArrowBackIosIcon />
        </button>
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            ))}
          </div>
        </div>
        <button
          className="carousel-button next"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          <ArrowForwardIosIcon />
        </button>
      </div>

      <div className="best-of-electronics">
        <h2>Best Of Electronics</h2>
        <div className="electronics-row">
          <button
            className="electronics-button prev"
            onClick={handleElecPrevClick}
          >
            <ArrowBackIosIcon />
          </button>
          <div className="electronics-container">
            <div
              className="electronics-track"
              style={{
                transform: `translateX(-${
                  elecIndex * (100 / electronicsItems.length)
                }%)`,
                transition: "transform 0.2s ease-in-out",
              }}
              ref={electronicsTrackRef}
            >
              {electronicsItems.map((item, index) => (
                <div
                  key={index}
                  className="electronics-item"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={item.image} alt={item.name} />
                  {showDetails && currentItem === item && (
                    <div className="item-details">
                      <p>{item.name}</p>
                      <p className="price">{item.price}</p>
                      <p className="stock">{item.stock}</p>
                    </div>
                  )}
                </div>
              ))}
              {/* Duplicate first item to ensure seamless loop */}
              {electronicsItems.length > 0 && (
                <div className="electronics-item">
                  <img
                    src={electronicsItems[0].image}
                    alt={electronicsItems[0].name}
                  />
                </div>
              )}
            </div>
          </div>
          <button
            className="electronics-button next"
            onClick={handleElecNextClick}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>

      <div className="beauty-food-toys-more">
        <h2>Beauty, Food, Toys & more</h2>
        <div className="beautyfood-row">
          <button
            className="beautyfood-button prev"
            onClick={handleBeautyPrevClick}
          >
            <ArrowBackIosIcon />
          </button>
          <div className="beautyfood-container">
            <div
              className="beautyfood-track"
              style={{
                transform: `translateX(-${
                  beautyIndex * (100 / beautyfoodItems.length)
                }%)`,
              }}
              ref={beautyfoodItemsTrackRef}
            >
              {beautyfoodItems.map((item, index) => (
                <div
                  key={index}
                  className="beautyfood-item"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={item.image} alt={item.name} />
                  {showDetails && currentItem === item && (
                    <div className="item-details">
                      <p>{item.name}</p>
                      <p className="price">{item.price}</p>
                      <p className="stock">{item.stock}</p>
                    </div>
                  )}
                </div>
              ))}
              {/* Duplicate first item to ensure seamless loop */}
              {beautyfoodItems.length > 0 && (
                <div className="beautyfood-item">
                  <img
                    src={beautyfoodItems[0].image}
                    alt={beautyfoodItems[0].name}
                  />
                </div>
              )}
            </div>
          </div>
          <button
            className="beautyfood-button next"
            onClick={handleBeautyNextClick}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
