import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

export default class ToDo extends Component{
    constructor(props){
        super(props);

    }

    state = {
        isCompleted: false,
        isEditing: false,
    };

    _toggle=()=>{
        this.setState((prevState) => {
            return {isCompleted: !prevState.isCompleted}
        })
    };

    _startEditing =()=>{
        this.setState({isEditing: true})
    }

    _endEditing = () => {
        this.setState({isEditing: false})
    }

    render(){
        const {isEditing} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity style={[styles.touch, this.state.isCompleted===true? styles.touchCompleted : styles.touchUn]} onPress={this._toggle}></TouchableOpacity>
                    <Text style={[styles.contentText, this.state.isCompleted===true? styles.textCompleted : styles.textUn]}>
                        {this.props.content}
                    </Text>
                </View>

                
                    {isEditing===false? 
                    <View style={styles.action}>
                        <TouchableOpacity onPressOut={this._startEditing} style={styles.editBtn}>
                            <View>
                                <Text style={styles.editText}>★</Text>
                         </View>
                        </TouchableOpacity>
                    </View> 

                    :

                    <View style={styles.action}>
                        <TouchableOpacity onPressOut={this._startEditing} style={styles.editBtn}>
                            <View>
                                <Text style={styles.editText}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPressOut={this._endEditing} style={styles.editBtn}>
                           <View>
                                <Text style={styles.editText}>X</Text>
                           </View>
                        </TouchableOpacity>
                    </View>
                    }
                
            </View>
        )
    }

}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 30,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#bbb',
            padding: 5,
        },

        column: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: width/2,
        },

        contentText: {
            fontSize: 16,
        },

        textCompleted: {
            fontSize: 15,
            color: 'grey',
            textDecorationLine: 'line-through',
        },
            
        textUn: {
            fontSize: 16,
        },

        action: {
            flexDirection: 'row',
        },

        editBtn: {
            marginHorizontal: 10,
        },

        editText: {
            fontSize: 20
        },

        touch: {
            borderColor: 'red',
            borderWidth: 5,
            borderRadius: 14,
            width: 28,
            height: 28,
        },

        touchUn: {
            borderColor: 'red',
            borderWidth: 5,
            borderRadius: 14,
            width: 28,
            height: 28,
        },

        touchCompleted: {
            borderColor: 'grey',
            borderWidth: 5,
            borderRadius: 14,
            width: 28,
            height: 28,
        },

    })