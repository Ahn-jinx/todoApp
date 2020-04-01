import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ToDo extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <View style={styles.todoCon}>
                <Text >
                    {this.props.content}
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
        todoCon: {
        }
    })