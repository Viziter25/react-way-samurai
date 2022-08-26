import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "./../../redux/profile-reducer.js";
import { useParams } from "react-router";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 21137;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  }

  return ComponentWithRouterProp;
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});


export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
