import { connect } from 'react-redux';
import CarComponent from '../../components/car-component/car-component';
import { getCarSelector } from '../../reducers/car-reducer';
import { fetchData } from '../../actions/fetch-data/fetch-data';

const mapStateToProps = (state) => getCarSelector(state);

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarComponent);
