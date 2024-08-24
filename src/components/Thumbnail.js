export const Thumbnails = (props) => {
  if (props.images.length < 2) {
    return null;
  }

  const handleImageClick = (src) => {
    props.onThumnbailClick(src);
  };

  return (
    <div>
      <p>Thumbnails:</p>
      <section>
        {props.images.map((imageSrc) => (
          <img key={imageSrc} src={imageSrc} width="100" height="100" onClick={() => handleImageClick(imageSrc)} />
        ))}
      </section>
    </div>
  );
};
