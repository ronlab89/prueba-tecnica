const Products = ({ width, height, styles }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      className={styles}
    >
      <path
        fill="currentColor"
        d="M24 25h-3v-3h3zm5-3h-3v3h3zm-5 5h-3v3h3zm5 0h-3v3h3zM20 8h-8v2h8zm-3 20H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v15h2V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v4H2v2h2v5H2v2h2v5H2v2h2v4c0 1.1.9 2 2 2h11zm3-13h-8v2h8z"
      />
    </svg>
  );
};

export default Products;
