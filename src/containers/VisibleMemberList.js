import { connect } from 'react-redux';
import { showDetail } from '../actions';
import MemberList from '../components/MemberList';

const mapStateToProps = (state) => ({
  members: state.members
});

const mapDispatchToProps = {
  onMemberClick: showDetail
};

const VisibleMemberList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberList);

export default VisibleMemberList;
