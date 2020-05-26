import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

function PeopleList(props) {
  function renderInitialView() {
    if (props.detailView) {
      return <PeopleDetail />;
    } else {
      return (
        <FlatList
          data={props.people}
          renderItem={({item}) => <PeopleItem people={item} />}
        />
      );
    }
  }
  return <View style={styles.container}>{renderInitialView()}</View>;
}

PeopleList.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name={'user'} size={50} color={tintColor} />
  ),
};

const mapStateToProps = (state) => {
  return {
    people: state.people,
    detailView: state.detailView,
  };
};

export default connect(mapStateToProps)(PeopleList);
