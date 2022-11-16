import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((c) => (
        <CategoryItem key={c.id} category={c} />
      ))}
    </div>
  );
};

export default Categories;
