import { makeStyles } from "@material-ui/core/styles";

// call makeStyle as a function
// then, inside it'll call a callback function
// this callback function will return an object
// it also provides a theme object that we can use
export default makeStyles((theme) => ({
  // now to add the styles we can write as if they're css
  // but have them as properties of the object being returned:
  title: {
    color: "red",
  },
}));
