import React from "react";
import { connect } from "react-redux";

function Frame({ children, loading }) {
  return <>{children}</>;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
