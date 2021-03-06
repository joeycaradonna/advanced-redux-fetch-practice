import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadComments, loadContacts, loadProducts, loadVehicles} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadComments(){
      dispatch(loadComments());
    },
    loadContacts(){
      dispatch(loadContacts());
    },
    loadProducts(){
      dispatch(loadProducts());
    },
    loadVehicles(){
      dispatch(loadVehicles());
    }

  };
}

export default connect(null,mapDispatchToProps)(App);
