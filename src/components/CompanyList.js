import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

function CompanyList(props) {
  return (
    <View>
      <Text>Company screen</Text>
    </View>
  );
}

CompanyList.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name={'archive'} size={50} color={tintColor} />
  ),
};

export default connect(null, actions)(CompanyList);
