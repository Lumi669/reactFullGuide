import "./Card.css";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;

/*
props.children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.


In this case, Card(usually Card is a container component), only has some styles, it wrapp some elements, and all these elements are childrend of Card, all the children' style will be affected. 
*/
