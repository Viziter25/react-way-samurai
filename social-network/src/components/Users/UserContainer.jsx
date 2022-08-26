import Users from "./Users";
import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "./../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloadre";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <span>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </span>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// let withRedirect = withAuthRedirect(UserContainer); // не дает зайти в друзья если не авторизован

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
)(UserContainer);
