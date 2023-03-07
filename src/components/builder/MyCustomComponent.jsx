
//  This is an example of registering a custom component to be used in Builder.io.
//  You would typically do this in the file where the component is defined.

const MyCustomComponent = (props) => (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );

  export default MyCustomComponent;