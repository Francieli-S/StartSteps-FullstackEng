const ButtonStyledJS: React.FC = () => (
  <>
    <button>Button styled with styled-js ... in line</button>
    <style jsx>{`
      button {
        background-color: red;
        color: aliceblue;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        cursor: pointer;
      }
      button:hover {
        background-color: rgb(132, 167, 233);
      }
    `}</style>
  </>
);

export default ButtonStyledJS;
