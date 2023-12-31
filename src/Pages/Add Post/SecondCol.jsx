import React, { useEffect, useRef, useState } from "react";
const Thumbnail = [
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
          fill="#FFC10E"
        />
        <path
          d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
          fill="#FFC10E"
        />
        <path
          d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
          fill="#FFC10E"
        />
        <path
          d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
          fill="#FFC10E"
        />
        <path
          d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
          fill="#FFC10E"
        />
        <path
          d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
          fill="#FFC10E"
        />
        <path
          d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
          fill="#FFC10E"
        />
        <path
          d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
          fill="#FFC10E"
        />
        <path
          d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
          fill="#FFC10E"
        />
        <path
          d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
          fill="#FFC10E"
        />
        <path
          d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
          fill="#FFC10E"
        />
        <path
          d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
          fill="#FFC10E"
        />
        <path
          d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
          fill="#FFC10E"
        />
        <path
          d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
          fill="#FFC10E"
        />
        <path
          d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
  {
    svg: (
      <svg
        class="w-full h-full"
        viewBox="0 0 194 194"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="194" height="194" rx="8" fill="#FFC10E" />
        <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
        <path
          d="M101.505 62H92.5032V75.5032H79V84.5053H92.5032V98.0085H101.505V84.5053H115.009V75.5032H101.505V62Z"
          fill="#FFC10E"
        />
        <path
          d="M37.0753 130L44.6353 113.2H47.7073L55.2913 130H52.0273L45.5233 114.856H46.7713L40.2913 130H37.0753ZM40.5553 126.112L41.3953 123.664H50.4673L51.3073 126.112H40.5553ZM62.4467 130.168C61.2147 130.168 60.1027 129.896 59.1107 129.352C58.1347 128.792 57.3667 128.024 56.8067 127.048C56.2467 126.072 55.9667 124.92 55.9667 123.592C55.9667 122.264 56.2467 121.112 56.8067 120.136C57.3667 119.16 58.1347 118.4 59.1107 117.856C60.1027 117.312 61.2147 117.04 62.4467 117.04C63.5187 117.04 64.4787 117.28 65.3267 117.76C66.1747 118.224 66.8467 118.936 67.3427 119.896C67.8387 120.856 68.0867 122.088 68.0867 123.592C68.0867 125.08 67.8467 126.312 67.3667 127.288C66.8867 128.248 66.2227 128.968 65.3747 129.448C64.5267 129.928 63.5507 130.168 62.4467 130.168ZM62.8067 127.6C63.5267 127.6 64.1667 127.44 64.7267 127.12C65.3027 126.8 65.7587 126.336 66.0947 125.728C66.4467 125.12 66.6227 124.408 66.6227 123.592C66.6227 122.76 66.4467 122.048 66.0947 121.456C65.7587 120.848 65.3027 120.384 64.7267 120.064C64.1667 119.744 63.5267 119.584 62.8067 119.584C62.0867 119.584 61.4387 119.744 60.8627 120.064C60.3027 120.384 59.8467 120.848 59.4947 121.456C59.1587 122.048 58.9907 122.76 58.9907 123.592C58.9907 124.408 59.1587 125.12 59.4947 125.728C59.8467 126.336 60.3027 126.8 60.8627 127.12C61.4387 127.44 62.0867 127.6 62.8067 127.6ZM66.6947 130V126.976L66.8147 123.568L66.5747 120.16V112.192H69.5507V130H66.6947ZM78.9233 130.168C77.6913 130.168 76.5793 129.896 75.5873 129.352C74.6113 128.792 73.8433 128.024 73.2833 127.048C72.7233 126.072 72.4433 124.92 72.4433 123.592C72.4433 122.264 72.7233 121.112 73.2833 120.136C73.8433 119.16 74.6113 118.4 75.5873 117.856C76.5793 117.312 77.6913 117.04 78.9233 117.04C79.9953 117.04 80.9553 117.28 81.8033 117.76C82.6513 118.224 83.3233 118.936 83.8193 119.896C84.3153 120.856 84.5633 122.088 84.5633 123.592C84.5633 125.08 84.3233 126.312 83.8433 127.288C83.3633 128.248 82.6993 128.968 81.8513 129.448C81.0033 129.928 80.0273 130.168 78.9233 130.168ZM79.2833 127.6C80.0033 127.6 80.6433 127.44 81.2033 127.12C81.7793 126.8 82.2353 126.336 82.5713 125.728C82.9233 125.12 83.0993 124.408 83.0993 123.592C83.0993 122.76 82.9233 122.048 82.5713 121.456C82.2353 120.848 81.7793 120.384 81.2033 120.064C80.6433 119.744 80.0033 119.584 79.2833 119.584C78.5633 119.584 77.9153 119.744 77.3393 120.064C76.7793 120.384 76.3233 120.848 75.9713 121.456C75.6353 122.048 75.4673 122.76 75.4673 123.592C75.4673 124.408 75.6353 125.12 75.9713 125.728C76.3233 126.336 76.7793 126.8 77.3393 127.12C77.9153 127.44 78.5633 127.6 79.2833 127.6ZM83.1713 130V126.976L83.2913 123.568L83.0513 120.16V112.192H86.0273V130H83.1713ZM96.8966 130V113.2H99.4646L106.809 125.464H105.465L112.689 113.2H115.257L115.281 130H112.329L112.305 117.832H112.929L106.785 128.08H105.393L99.1526 117.832H99.8726V130H96.8966ZM125.291 130.168C123.979 130.168 122.811 129.888 121.787 129.328C120.763 128.752 119.955 127.968 119.363 126.976C118.771 125.984 118.475 124.856 118.475 123.592C118.475 122.312 118.771 121.184 119.363 120.208C119.955 119.216 120.763 118.44 121.787 117.88C122.811 117.32 123.979 117.04 125.291 117.04C126.619 117.04 127.795 117.32 128.819 117.88C129.859 118.44 130.667 119.208 131.243 120.184C131.835 121.16 132.131 122.296 132.131 123.592C132.131 124.856 131.835 125.984 131.243 126.976C130.667 127.968 129.859 128.752 128.819 129.328C127.795 129.888 126.619 130.168 125.291 130.168ZM125.291 127.6C126.027 127.6 126.683 127.44 127.259 127.12C127.835 126.8 128.283 126.336 128.603 125.728C128.939 125.12 129.107 124.408 129.107 123.592C129.107 122.76 128.939 122.048 128.603 121.456C128.283 120.848 127.835 120.384 127.259 120.064C126.683 119.744 126.035 119.584 125.315 119.584C124.579 119.584 123.923 119.744 123.347 120.064C122.787 120.384 122.339 120.848 122.003 121.456C121.667 122.048 121.499 122.76 121.499 123.592C121.499 124.408 121.667 125.12 122.003 125.728C122.339 126.336 122.787 126.8 123.347 127.12C123.923 127.44 124.571 127.6 125.291 127.6ZM134.999 130V117.184H137.855V120.712L137.519 119.68C137.903 118.816 138.503 118.16 139.319 117.712C140.151 117.264 141.183 117.04 142.415 117.04V119.896C142.287 119.864 142.167 119.848 142.055 119.848C141.943 119.832 141.831 119.824 141.719 119.824C140.583 119.824 139.679 120.16 139.007 120.832C138.335 121.488 137.999 122.472 137.999 123.784V130H134.999ZM150.867 130.168C149.443 130.168 148.195 129.888 147.123 129.328C146.067 128.752 145.243 127.968 144.651 126.976C144.075 125.984 143.787 124.856 143.787 123.592C143.787 122.312 144.067 121.184 144.627 120.208C145.203 119.216 145.987 118.44 146.979 117.88C147.987 117.32 149.131 117.04 150.411 117.04C151.659 117.04 152.771 117.312 153.747 117.856C154.723 118.4 155.491 119.168 156.051 120.16C156.611 121.152 156.891 122.32 156.891 123.664C156.891 123.792 156.883 123.936 156.867 124.096C156.867 124.256 156.859 124.408 156.843 124.552H146.163V122.56H155.259L154.083 123.184C154.099 122.448 153.947 121.8 153.627 121.24C153.307 120.68 152.867 120.24 152.307 119.92C151.763 119.6 151.131 119.44 150.411 119.44C149.675 119.44 149.027 119.6 148.467 119.92C147.923 120.24 147.491 120.688 147.171 121.264C146.867 121.824 146.715 122.488 146.715 123.256V123.736C146.715 124.504 146.891 125.184 147.243 125.776C147.595 126.368 148.091 126.824 148.731 127.144C149.371 127.464 150.107 127.624 150.939 127.624C151.659 127.624 152.307 127.512 152.883 127.288C153.459 127.064 153.971 126.712 154.419 126.232L156.027 128.08C155.451 128.752 154.723 129.272 153.843 129.64C152.979 129.992 151.987 130.168 150.867 130.168Z"
          fill="#FFC10E"
        />
      </svg>
    ),
  },
];
//This function returns svg funntion to the array
function generateNewSvg() {
  return (
    <svg
      class="w-full h-full"
      viewBox="0 0 194 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="194" height="194" rx="8" fill="#FFC10E" />
      <rect x="22" y="22" width="150" height="150" rx="8" fill="white" />
      <path
        d="M60.3434 63.0426H117.533V93.3382H126.332V63.0426C126.332 58.2689 122.386 54.3867 117.533 54.3867H60.3434C55.491 54.3867 51.5449 58.2689 51.5449 63.0426V114.978C51.5449 119.752 55.491 123.634 60.3434 123.634H95.5372V114.978H60.3434V63.0426Z"
        fill="#FFC10E"
      />
      <path
        d="M78.2367 88.5494L65.3945 107.015H112.483L95.3597 79.3164L82.5175 97.7823L78.2367 88.5494Z"
        fill="#FFC10E"
      />
      <path
        d="M126.677 101.477H117.675V114.98H104.172V123.982H117.675V137.485H126.677V123.982H140.18V114.98H126.677V101.477Z"
        fill="#FFC10E"
      />
    </svg>
  );
}
const SecondCol = ({ formik }) => {
  const [check, setCheck] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [thumbnails, setThumbnails] = useState(Thumbnail); // Use state to manage thumbnails
  const fileInputRef = useRef(null);

  //Thui function is used to add New same svg before last Svg its other parts are in last
  const addNewSvg = () => {
    const newSvg = generateNewSvg();
    setThumbnails([
      ...thumbnails.slice(0, thumbnails.length - 1),
      { svg: newSvg },
      thumbnails[thumbnails.length - 1],
    ]);
  };
  // this is used for clean the
  useEffect(() => {
    return () => {
      // Clean up temporary URLs
      thumbnails.forEach((item) => {
        if (item.imageUrl) {
          URL.revokeObjectURL(item.imageUrl);
        }
      });
    };
  }, [thumbnails]);

  // this function is used to get imagesurl from input on onchange condition
  const handleImageUpload = (file, index) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedThumbnails = [...thumbnails];
      updatedThumbnails[selectedThumbnail] = {
        ...updatedThumbnails[selectedThumbnail],
        imageUrl: imageUrl,
      };
      setThumbnails(updatedThumbnails);
      // to upload images in formik ..................
      const currentImages = formik.values.Product_images.images;

      const updatedImages = [...currentImages, file];

      formik.setFieldValue("Product_images.images", updatedImages);
    }
    setSelectedThumbnail(null);
  };
  // this function is used to upload images if index is not last if index is last it call new svg creater function
  const handleThumbnailClick = (index) => {
    if (index !== thumbnails.length - 1) {
      setSelectedThumbnail(index);
      fileInputRef.current.click();
    } else {
      //this is our scg creater function
      addNewSvg();
    }
  };
  return (
    <div>
      <div className="">
        <div className="py-4 ">
          <h1 className="2xl:text-2xl text-xl font-Mont font-medium">
            Pictures
          </h1>
        </div>
       {/*  <div className="flex items-center gap-2">
          <div>
            {check ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setCheck(!check);
                }}
              >
                <circle cx="8" cy="8" r="7.5" stroke="#FFC10E" />
                <circle cx="8" cy="8" r="5" fill="#FFC10E" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setCheck(!check);
                }}
              >
                <circle cx="8" cy="8" r="7.5" stroke="black" />
              </svg>
            )}
          </div>
          <div>
            <h1 className="text-sm 2xl:text-lg font-Mont font-medium">
              Thumbnail
            </h1>
          </div>
        </div> */}
        <div
          className={`flex flex-wrap  justify-center md:gap-6 gap-3 py-5 
          `}
        >
          {thumbnails.map((item, index) => (
            <div
              key={index}
              className="w-1/5 xl:w-[21.8%] 2xl:w-[22%] cursor-pointer"
              onClick={() => handleThumbnailClick(index)}
            >
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={`Thumbnail ${index}`}
                  className="w-full md:h-32 h-[68px]"
                />
              ) : (
                item.svg
              )}
            </div>
          ))}
        </div>
        <input
          name="images"
          multiple
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) =>
            handleImageUpload(e.target.files[0], selectedThumbnail)
          }
        />
      </div>
    </div>
  );
};

export default SecondCol;
