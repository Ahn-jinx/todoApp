import React,{Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, TextInput} from 'react-native';

export default class ToDo extends Component{
    constructor(props){
        super(props);

    };

    state = {
        isCompleted: false,
        isEditing: false,
        todoValue: this.props.content,
        pressDelete: false,
    };

    _toggle=()=>{
        this.setState((prevState) => {
            return {isCompleted: !prevState.isCompleted}
        })
    };

    _startEditing =()=>{
        const {content} = this.props;
        this.setState({isEditing: true, todoValue: content})
    }

    _endEditing = () => {
        const {content} = this.props;
        this.setState({isEditing: false})
    }

    _changeTodoValue = (text) => {
        this.setState({todoValue: text})
    }

    _deleteTodo = () => {
        this.setState({pressDelete: true})
    }

    render(){
        const {isEditing, todoValue, pressDelete} = this.state;
        return(
            <View style={pressDelete===false? styles.container : styles.bye}>
                <View style={styles.column}>
                    <TouchableOpacity style={[styles.touch, this.state.isCompleted===true? styles.touchCompleted : styles.touchUn]} onPress={this._toggle}></TouchableOpacity>
                    {isEditing===true?
                    <TextInput value={todoValue} onChangeText={this._changeTodoValue} style={[styles.inputMode, this.state.isCompleted===true? styles.textCompleted : styles.textUn]} multiline={true} ></TextInput> :   
                
                    <Text style={[styles.contentText, this.state.isCompleted===true? styles.textCompleted : styles.textUn]}>
                        {todoValue}
                    </Text>}
                </View>

                
                    {isEditing===true? 
                    <View style={styles.action}>
                        <TouchableOpacity onPressOut={this._endEditing} style={styles.editBtn}>
                            <View>
                                <Text style={styles.editText}>Done</Text>
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
                        <TouchableOpacity style={styles.editBtn}>
                           <View>
                                <Text style={styles.editText} onPressOut={this._deleteTodo}>Delete</Text>
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

        bye: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 30,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#bbb',
            padding: 5,
            display: 'none',
        },

        column: {
            flexDirection: 'row',
            alignItems: 'center',
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
            marginRight: 12,
        },

        touchUn: {
            borderColor: 'red',
            borderWidth: 5,
            borderRadius: 14,
            width: 28,
            height: 28,
            marginRight: 12,
        },

        touchCompleted: {
            borderColor: 'grey',
            borderWidth: 5,
            borderRadius: 14,
            width: 28,
            height: 28,
            marginRight: 12,
        },

        inputMode: {
            width: width/2,
        },
    })