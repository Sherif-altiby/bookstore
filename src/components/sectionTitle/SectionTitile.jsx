import "./SectionTitle.scss";
// eslint-disable-next-line react/prop-types
const SectionTitile = ({ title }) => {
  return (
    <div className="section_title">
      <h1> {title} </h1>
    </div>
  );
};

export default SectionTitile;
